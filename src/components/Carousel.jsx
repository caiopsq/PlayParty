import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function DestaqueCarousel() {
    const slides = [
        {
            src: "/carousel/cadeiras.jpeg",
            texto: "Jogos de Mesa",
        },
        {
            src: "/carousel/freezer.jpeg",
            texto: "Freezer Horizontal",
        },
        {
            src: "/carousel/frigobar.jpeg",
            texto: "Frigobar",
        },
        {
            src: "/carousel/geladeiraFrost.jpeg",
            texto: "Geladeira Consul Frost Free 342 Litros",
        },
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative w-full h-full">
                {slides.map((slide, i) => (
                    <img
                        key={i}
                        src={slide.src}
                        alt={`Imagem ${i + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    />
                ))}
            </div>

            <div className="absolute z-20 -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl transition-opacity duration-700 ease-in-out">
                <p className="text-sm">{slides[index].texto}</p>
            </div>
        </div>
    )
}