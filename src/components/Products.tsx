import { ProductCard } from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Products() {
  const products = [
    {
      name: "Freezer Horizontal",
      description: "Mantenha suas bebidas sempre geladas enquanto realiza o seu evento.",
      image: "src/img/freezerHorizontal.png",
      category: "Freezers",
      features: [
        "Mantém produtos refrigerados",
        "Manutenção em dia",
        "Garantia de qualidade"
      ],
      price: "",
      type: "refrigeracao"
    },
    {
      name: "Frigobar",
      description: "Ideal para eventos pequenos e com a necessidade de manter itens refrigerados.",
      image: "src/img/frigobar.png",
      category: "Refrigeração",
      features: [
        "Mantém produtos refrigerados",
        "Manutenção em dia",
        "Garantia de qualidade"
      ],
      price: "",
      type: "refrigeracao"
    },
    {
      name: "Geladeira",
      description: "Ideal para eventos médios em que será necessário refrigerar.",
      image: "src/img/geladeira.png",
      category: "Refrigeração",
      features: [
        "Mantém produtos refrigerados",
        "Manutenção em dia",
        "Garantia de qualidade"
      ],
      price: "",
      type: "refrigeracao"
    },
    {
      name: "Toalhas de mesa",
      description: "Toalhas de diversas cores para combinar com sua decoração e ambiente.",
      image: "src/img/toalhasMesa.png",
      category: "Forros de Mesa",
      features: [
        "Cores variadas",
        "1,50 x 1,50 metros"
      ],
      price: "",
      type: "forros"
    },
    {
      name: "Mesas e Cadeiras",
      description: "",
      image: "src/img/cadeiras.png",
      category: "Mesas e Cadeiras",
      features: [
        "Duráveis e resistentes",
        "Fáceis de transportar",
        "Design moderno"
      ],
      price: "",
      type: "mesas"
    },
    // {
    //   name: "AI Assistant API",
    //   description: "Powerful AI assistant API that can be integrated into any application to provide intelligent automation and support.",
    //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFzc2lzdGFudHxlbnwxfHx8fDE3NTc4Nzg2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   category: "AI/ML",
    //   features: [
    //     "Natural language processing",
    //     "Multi-language support",
    //     "Custom model training",
    //     "99.9% API uptime"
    //   ],
    //   price: "",
    //   type: "service"
    // }
  ];

  const produtosRefrigeracao = products.filter(p => p.type === "refrigeracao");
  const produtosMesa = products.filter(p => p.type === "mesas");
  const produtosForros = products.filter(p => p.type === "forros");

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-6">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja nossa lista de produtos e entre em contato para solicitar um orçamento agora.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="refrigeracao">Refrigeração</TabsTrigger>
            <TabsTrigger value="mesas">Mesas</TabsTrigger>
            <TabsTrigger value="forros">Toalhas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="refrigeracao">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtosRefrigeracao.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mesas">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtosMesa.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="forros">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtosForros.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}