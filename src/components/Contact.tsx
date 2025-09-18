import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "playparty@contato.com",
      description: "Nos envie um email a qualquer momento"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (61) 99999-9999",
      description: "Seg-Sex de 8:00 às 18:00"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Asa Norte",
      description: "Brasília, DF, Brasil"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender as necessidades do seu evento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-primary mb-6">Informações de contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground">{info.title}</h4>
                      <p className="text-primary">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-primary mb-2">Por que escoher a PLayParty?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 5+ anos de experiência no mercado</li>
                <li>• 1000+ clientes satisfeitos</li>
                <li>• Orçamentos 24h</li>
                <li>• Frota de entrega própria</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Entre em contato conosco</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="João" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Silva" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Nos conte o que precisa para o seu evento..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full">Enviar Mensagem</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}