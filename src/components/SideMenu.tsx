import React, { useState, useMemo } from "react";
import productsData from "../data/products.json";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

type GroupedProducts = {
    [key: string]: Product[];
};

interface ProductCardProps {
    id: number,
    name: string;
    description: string;
    image: string;
    category: string;
    features: string[];
    price?: string;
}

const SideMenu: React.FC = ({ id, name }: ProductCardProps) => {
    const navigate = useNavigate();
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const GroupedProducts = useMemo(() => {
        return productsData.reduce((acc, product) => {
            const { category } = product;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {} as GroupedProducts);
    }, []);
    const handleCategoryClick = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };
    console.log("Categoria aberta no momento: ", openCategory)

    function onSeeDetailsClick(id, name) {
        const queryParams = new URLSearchParams({
            id: id,
            produto: name
        }).toString();
        navigate(`/produtos?${queryParams}`);
    }


    return (
        // Container Principal do Menu
        <nav className="cursor-pointer w-64 h-screen bg-none border-none pt-20 ml-5 ">
            <h2 className="cursor-pointer text-xl font-bold text-gray-800 mb-4">Produtos</h2>

            {Object.keys(GroupedProducts).map((category) => (
                <div key={category} className="mb-2">
                    {/* Título da Categoria (Botão) */}
                    <button
                        onClick={() => handleCategoryClick(category)}
                        className="cursor-pointer w-full flex justify-between items-center p-2 text-left font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors duration-200"
                    >
                        {category}
                        {/* Ícone de seta que rotaciona (opcional, mas melhora a UX) */}
                        <svg
                            className={`w-4 h-4 transform transition-transform duration-500 ${openCategory === category ? 'rotate-0' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    {openCategory === category && (
                        <ul className="pl-4 mt-2">
                            {GroupedProducts[category].map((product) => (
                                <button onClick={() => onSeeDetailsClick(product.id, product.name)} key={product.id} className="cursor-pointer text-gray-600">
                                    {product.name}
                                </button>
                            ))}
                        </ul>
                    )}


                </div>
            ))}
        </nav>
    );
};

export default SideMenu;