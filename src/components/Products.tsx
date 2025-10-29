import React from "react";
import { ProductCard } from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import produtos from "../data/products.json";

export function Products() {
  const products = produtos;

  const produtosRefrigeracao = products.filter(p => p.type === "refrigeracao");
  const produtosMesa = products.filter(p => p.type === "mesas");
  const produtosForros = products.filter(p => p.type === "forros");
  const prrodutosCadeiras = products.filter(p => p.type === "cadeiras");

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
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-16">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="refrigeracao">Refrigeração</TabsTrigger>
            <TabsTrigger value="mesas">Mesas</TabsTrigger>
            <TabsTrigger value="cadeiras">Cadeiras</TabsTrigger>
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
          
          <TabsContent value="cadeiras">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {prrodutosCadeiras.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}