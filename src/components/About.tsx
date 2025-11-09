import { Shield, Users, Zap } from "lucide-react";
import React from "react";

export function About() {
  const features = [
    {
      icon: Zap,
      title: "Serviço Rápido",
      description: "Focamos em entregar um serviço de qualidade no menor tempo possível.",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Todos os nossos serviços são focados na satisfação dos clientes.",
    },
    {
      icon: Shield,
      title: "Segurança e Qualidade",
      description: "Nossos serviços são prestados com qualidade e a realização do transporte dos itens é feita com a maior seguraça possível.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-6">
            Sobre nós
          </h2>
          <p className="text-lg text-muted-foreground">
            Fundada em 2019, PlayParty já atendeu mais de 500 clientes em todo o território de Brasília e entorno, oferecendo serviços de alta qualidade e soluções personalizadas para cada necessidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon color="black" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}