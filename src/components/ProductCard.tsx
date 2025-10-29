import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number,
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  price?: string;
}

export function ProductCard({ id, name, description, image, category, features, price }: ProductCardProps) {
  const navigate = useNavigate();
  // const imageUrl = new URL(`./assets/${image}`, import.meta.url).href;


  function onSeeDetailsClick(id) {
    const queryParams = new URLSearchParams({
      id: id,
      produto: name
    }).toString();
    navigate(`/produtos?${queryParams}`);
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{category}</Badge>
          {price && <span className="text-sm font-medium text-primary">{price}</span>}
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm text-muted-foreground">Principais detalhes:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button onClick={() => onSeeDetailsClick(id)} className="w-full group">
          Saiba Mais
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}