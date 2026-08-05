import React, { useEffect, useMemo, useRef, useState } from "react";

const TRANSITION_DURATION = 700;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function truncate(text, max = 150) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
}

function Stars({ rating }) {
  const full = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return <span className="text-yellow-400">{full}{empty}</span>;
}

function ReviewCard({ review, cardHeight, setCardRef }) {
  const text = truncate(review.text || "", 150);

  return (
    <div
      ref={setCardRef}
      className="shrink-0 h-full"
      style={{ minHeight: cardHeight ? `${cardHeight}px` : "auto" }}
    >
      <div className="flex h-full min-h-[280px] w-72 flex-col rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-xl sm:w-80">

        <div className="flex items-center mb-4">
          <div className="m-4 w-12 h-12 rounded-full overflow-hidden mr-4 shrink-0" style={{ margin: "10px" }}>
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              className="m-4 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-semibold">{review.author_name}</h4>
            <p className="text-sm text-gray-500">{review.relative_time_description}</p>
          </div>
        </div>

        <div className="flex mb-3">
          <Stars rating={review.rating} />
        </div>

        <p className="flex-1 text-gray-600 leading-relaxed line-clamp-3">"{text}"</p>
      </div>
    </div>
  );
}

export default function Avaliacoes() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const [cardHeight, setCardHeight] = useState(0);
  const cardRefs = useRef([]);

  const setCardRef = (index) => (el) => {
    cardRefs.current[index] = el;
  };

  // Carrega avaliações
  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setError(false);

        const res = await fetch("data/avaliacoes.json");
        // console.log(`Aqui está o JSON -----> ${JSON.stringify(res)}`)
        if (!res.ok) throw new Error("Falha no fetch do JSON");

        const data = await res.json();
        const list = (data?.result?.reviews || [])
          .filter((r) => (r?.rating || 0) >= 4)
          .reverse();

        if (!list.length) throw new Error("Nenhuma avaliação encontrada.");

        if (isMounted) {
          setReviews(list);
          setCurrentIndex(0);
        }
      } catch (e) {
        // console.error("Erro ao carregar as avaliações:", e);
        if (isMounted) setError(true);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  // Move para um card (replica moveToCard)
  const moveToCard = (index, animate = true) => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const children = track.children;
    const target = children[index];
    if (!target) return;

    const style = window.getComputedStyle(track);
    const paddingLeft = parseFloat(style.paddingLeft) || 0;

    let finalTransform = target.offsetLeft - paddingLeft;

    const maxScroll = track.scrollWidth - wrapper.offsetWidth;
    finalTransform = clamp(finalTransform, 0, Math.max(0, maxScroll));

    if (!animate) {
      track.style.transition = "none";
    }

    track.style.transform = `translateX(-${finalTransform}px)`;

    if (!animate) {
      // força reflow
      void track.offsetWidth;
      track.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
    }
  };

  // Atualiza visibilidade dos botões baseado na posição atual (replica updateButtonState + checkButtonsVisibility)
  const updateButtons = () => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const maxScroll = track.scrollWidth - wrapper.offsetWidth;

    // Se não tem scroll, esconde ambos
    if (maxScroll <= 0) {
      setShowPrev(false);
      setShowNext(false);
      return;
    }

    // Pega translateX atual do transform matrix
    const transform = window.getComputedStyle(track).transform;
    let currentTransform = 0;

    if (transform && transform !== "none") {
      // matrix(a,b,c,d,tx,ty)
      const match = transform.match(/matrix\((.+)\)/);
      if (match) {
        const parts = match[1].split(",").map((p) => parseFloat(p.trim()));
        const tx = parts[4] || 0;
        currentTransform = Math.abs(tx);
      } else {
        // matrix3d(..., tx, ty, tz) -> tx é o 13º índice (12)
        const match3d = transform.match(/matrix3d\((.+)\)/);
        if (match3d) {
          const parts = match3d[1].split(",").map((p) => parseFloat(p.trim()));
          const tx = parts[12] || 0;
          currentTransform = Math.abs(tx);
        }
      }
    }

    setShowPrev(currentTransform >= 1);
    setShowNext((maxScroll - currentTransform) >= 1);
  };

  // Inicializa transição padrão do track (equivalente ao seu style.transition)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
  }, []);

  // Quando reviews chegam, posiciona no card 0 e ajusta botões
  useEffect(() => {
    if (!reviews.length) return;
    // pequeno delay pra garantir layout calculado
    const t = setTimeout(() => {
      moveToCard(0, false);
      updateButtons();
    }, 100);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews.length]);

  // Resize debounce (equivalente ao listener do seu código)
  useEffect(() => {
    if (!reviews.length) return;

    let timer = null;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        moveToCard(currentIndex, false);
        updateButtons();
      }, 250);
    };

    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews.length, currentIndex]);

  const showNextCard = () => {
    if (isTransitioning) return;
    if (currentIndex >= reviews.length - 1) return;

    setIsTransitioning(true);
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    moveToCard(nextIndex, true);

    window.setTimeout(() => {
      setIsTransitioning(false);
      updateButtons();
    }, TRANSITION_DURATION);
  };

  const showPrevCard = () => {
    if (isTransitioning) return;
    if (currentIndex <= 0) return;

    setIsTransitioning(true);
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    moveToCard(prevIndex, true);

    window.setTimeout(() => {
      setIsTransitioning(false);
      updateButtons();
    }, TRANSITION_DURATION);
  };

  // Se quiser, você pode “travar” botões pelo index também (extra robustez)
  const canPrev = useMemo(() => currentIndex > 0 && showPrev, [currentIndex, showPrev]);
  const canNext = useMemo(
    () => currentIndex < reviews.length - 1 && showNext,
    [currentIndex, reviews.length, showNext]
  );

  useEffect(() => {
    const heights = cardRefs.current
      .filter(Boolean)
      .map((el) => el.getBoundingClientRect().height);

    if (heights.length) {
      setCardHeight(Math.max(...heights));
    }
  }, [reviews]);

  return (
    <section id="depoimentos" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Avaliações de quem já alugou conosco
        </h2>
        {error ? (
          <p className="text-center">Não foi possível carregar as avaliações.</p>
        ) : (
          <div className="relative">
            {/* Botão Prev */}
            <button
              type="button"
              onClick={showPrevCard}
              disabled={!canPrev || isTransitioning}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center
                          w-10 h-10 rounded-full bg-white shadow ${canPrev ? "flex" : "hidden"}`}
              aria-label="Anterior"
            >
              ◀
            </button>

            {/* Wrapper visível */}
            <div ref={wrapperRef} className="overflow-hidden">
              {/* Track */}
              <div
                id="cards-depoimento"
                ref={trackRef}
                className="flex justify-between gap-6 px-4 py-6 sm:gap-8 sm:px-8"
                style={{ transform: "translateX(0px)" }}
              >
                {reviews.map((r, idx) => (
                  <ReviewCard
                    key={`${r.author_name}-${idx}`}
                    review={r}
                    cardHeight={cardHeight}
                    setCardRef={setCardRef(idx)}
                  />
                ))}
              </div>
            </div>

            {/* Botão Next */}
            <button
              type="button"
              onClick={showNextCard}
              disabled={!canNext || isTransitioning}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center
                          w-10 h-10 rounded-full bg-white shadow ${canNext ? "flex" : "hidden"}`}
              aria-label="Próximo"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
