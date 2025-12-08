import * as React from "react";
import { useState, useEffect } from "react"
import { ProductData } from "../types/Product";
import productsData from "../data/products.json";
import WhatsappButton from "./WhatsappButton";

interface ProductDetailProps {
    id: number;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ id }) => {
    const [product, setProduct] = useState<ProductData | null>(null);

    useEffect(() => {
        const foundProduct = productsData.find(p => p.id === parseInt(id, 10));

        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            setProduct(null);
        }
    }, [id]);



    if (!product) {
        return <div className="px-4 pt-20 itens-center">Carregando...</div>;
    }

    return (
        <section id="product" className="w-[900px] max-w-100">
            <div className="px-4 pt-20">
                <div className="max-x-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-primary mb-6">
                        {product.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {product.description}
                    </p>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted my-8 mx-auto max-w-3xl">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="text-left max-w-3xl mx-auto pt-20">
                    {product.questions.map((question, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-primary">{question.question}</h3>
                            <p className="text-muted-foreground">{question.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            <WhatsappButton numero="5561992149916" item={product.name}/>
        </section>
    );  
}

export default ProductDetails;