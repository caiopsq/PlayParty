import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import DestaqueCarousel from "./Carousel";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl text-primary leading-tight">
                Aluguel de Freezers, Frigobares, Geladeiras, Mesas e Cadeiras, Toalhas de Mesa em Brasília
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                A Play Party é referência em locação e aluguel de materiais para festas e eventos corporativos em Brasília, DF e Entorno.
                Oferecemos freezers, mesas, cadeiras, frigobares, geladeiras e toalhas de mesa com qualidade, higiene e pontualidade na entrega.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#products">
                <Button size="lg" className="group">
                  Nossos Produtos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/#about">
                <Button variant="outline" size="lg">
                  Saiba mais
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <h3 className="text-2xl text-primary">50+</h3>
                <p className="text-sm text-muted-foreground">Produtos disponíveis para locação</p>
              </div>
              <div>
                <h3 className="text-2xl text-primary">1000+</h3>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
              <div>
                <h3 className="text-2xl text-primary">5+</h3>
                <p className="text-sm text-muted-foreground">Anos de experiência no mercado de eventos</p>
              </div>
            </div>
          </div>

          <DestaqueCarousel />

        </div>
      </div>
    </section>
  );
}