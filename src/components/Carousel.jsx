import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function DestaqueCarousel() {
    const imagens = [
        "https://images.unsplash.com/photo-1601599967100-f16100982063?q=80&w=1364&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1364&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522205408450-add114ad53fe?q=80&w=1364&auto=format&fit=crop",
    ]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagens.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
                {imagens.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Imagem ${i + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "!opacity-100" : "!opacity-0"
                            }`}
                    />
                ))}
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <p className="text-sm">A melhor escolha para o seu evento.</p>
            </div>
        </div>
    )
}