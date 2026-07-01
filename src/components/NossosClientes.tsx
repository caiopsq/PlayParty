import "./NossosClientes.css";

type Cliente = {
  nome: string;
  logo: string;
};

const clientes: Cliente[] = [
  { nome: "Qualifoco", logo: "https://via.placeholder.com/180x90?text=Qualifoco" },
  { nome: "FGV", logo: "https://via.placeholder.com/180x90?text=FGV" },
  { nome: "FNDS", logo: "https://via.placeholder.com/180x90?text=FNDS" },
  { nome: "World Gym", logo: "https://via.placeholder.com/180x90?text=World+Gym" },
  {
    nome: "VIAÇÃO PIRACICABANA",
    logo: "https://via.placeholder.com/180x90?text=VIA%C3%87%C3%83O+PIRACICABANA",
  },
  { nome: "AGEPOL", logo: "https://via.placeholder.com/180x90?text=AGEPOL" },
  { nome: "ASSEFAZ", logo: "https://via.placeholder.com/180x90?text=ASSEFAZ" },
  {
    nome: "Condomínio Lake Side",
    logo: "https://via.placeholder.com/180x90?text=Condom%C3%ADnio+Lake+Side",
  },
  {
    nome: "Hospital DF Care",
    logo: "https://via.placeholder.com/180x90?text=Hospital+DF+Care",
  },
  { nome: "Outros", logo: "https://via.placeholder.com/180x90?text=Outros" },
];

export function NossosClientes() {
  return (
    <section className="nossos-clientes" aria-labelledby="nossos-clientes-titulo">
      <div className="nossos-clientes__container">
        <h2 id="nossos-clientes-titulo" className="nossos-clientes__titulo">
          Nossos clientes
        </h2>

        <div className="nossos-clientes__grid">
          {clientes.map((cliente) => (
            <div key={cliente.nome} className="nossos-clientes__item">
              <img
                src={cliente.logo}
                alt={cliente.nome}
                className="nossos-clientes__logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
