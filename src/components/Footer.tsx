import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import React from "react";

export function Footer() {
  const footerSections = [
    {
      title: "Produtos",
      links: [
        { name: "Freezer Horizontal", href: "#products" },
        { name: "Frigobar", href: "#products" },
        { name: "Geladeira", href: "#products" },
        { name: "Toalhas de mesa", href: "#products" },
        { name: "Mesas", href: "#products" },
        { name: "Cadeiras", href: "#products" }
      ]
    },
    {
      title: "A Empresa",
      links: [
        { name: "Sobre nós", href: "#about" },
        { name: "Entre em contato", href: "#contact" },
        { name: "Localização", href: "#contact" },
        { name: "Produtos", href: "#products" },
        { name: "Contato", href: "#contact" },
      ]
    },
    {
      title: "Áreas de Atendimento",
      links: [
        { name: "Asa Norte", href: "#about" },
        { name: "Asa Sul", href: "#about" },
        { name: "Sudoeste", href: "#about" },
        { name: "Lago Norte", href: "#about" },
        { name: "Noroeste", href: "#about" }
      ]
    }
    // {
    //   title: "Support",
    //   links: [
    //     { name: "Documentation", href: "#" },
    //     { name: "Help Center", href: "#" },
    //     { name: "Contact", href: "#contact" },
    //     { name: "Status", href: "#" },
    //   ]
    // },
    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Privacy Policy", href: "#" },
    //     { name: "Terms of Service", href: "#" },
    //     { name: "Cookie Policy", href: "#" },
    //     { name: "GDPR", href: "#" },
    //   ]
    // }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/playpartylocacoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: Mail, href: "mailto:playpartylocacoesdf@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-4">PlayParty</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              O seu <strong>parceiro e fornecedor de confiança</strong>, garantindo os <strong>melhores produtos</strong> para o sucesso do seu evento. 📞 <strong>Fale com a gente</strong>: (61) 99214-9916
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 PlayParty. Todos os direitos Reservados.
          </p>
          <p className="text-primary-foreground/80 text-sm mt-4 md:mt-0">
            Feita no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}