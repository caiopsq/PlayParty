import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Produtos",
      links: [
        { name: "Refrigeração", href: "#products" },
        { name: "Mesas e Cadeiras", href: "#products" },
        { name: "Forração de Mesas", href: "#products" },
      ]
    },
    {
      title: "A Empresa",
      links: [
        { name: "Sobre nós", href: "#about" },
        { name: "Entre em contato", href: "#contact" },
        { name: "Localização", href: "#contact" }
      ]
    },
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
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@techcorp.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-4">PlayParty</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Fornecendo produtos para que você tenha o melhor no seu evento.
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