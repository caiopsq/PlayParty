import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl text-primary leading-tight">
                Proporcionamos itens de qualidade para o seu evento
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Nós inovamos a forma de alugar produtos para eventos, simplificando tudo para que você tenha mais tempo para aproveitar.
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

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601599967100-f16100982063?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern office team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
              <p className="text-sm">A melhor escolha para o seu evento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}