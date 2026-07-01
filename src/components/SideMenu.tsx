import React, { useState, useMemo, useEffect } from "react";
import productsData from "../data/products.json";
import Product from "./Product";
import { useNavigate, useSearchParams } from "react-router-dom";


type GroupedProducts = {
    [key: string]: typeof Product[];
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
    const [searchParams] = useSearchParams();
    const selectedId = Number(searchParams.get("id"));    

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

    const selectedCategory = useMemo(() => {
        if (!selectedId) return null;

        const found = productsData.find((p: any) => p.id === selectedId);
        return found?.category ?? null;
    }, [selectedId, productsData]);

    useEffect(() => {
        if (selectedCategory) {
            setOpenCategory(selectedCategory);
        }
    }, [selectedCategory]);

    return (
        // Container Principal do Menu
        <nav className="w-80 sm:w-64 h-screen pt-20 sm:ml-5 pr-2 overflow-y-auto">
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
                            className={`w-4 h-4 transform transition-transform duration-300 ${openCategory === category ? "rotate-180" : "rotate-0"
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
                        <ul className="mt-2 ml-4 border-l-0 pl-3 space-y-1">
                            {GroupedProducts[category].map((product) => (
                                <li key={product.id}>

                                    <button
                                        type="button"
                                        onClick={() => onSeeDetailsClick(product.id, product.name)}
                                        className={[
                                            "w-full text-left rounded-lg px-3 py-2 text-sm",
                                            "transition-all duration-200",
                                            "hover:bg-white-200 hover:-translate-y-[1px]",
                                            "focus:outline-none focus:ring-2",
                                            selectedId === product.id
                                                ? "bg-gray-200 text-gray-900 font-semibold border-l-4 border-gray-700"
                                                : "bg-gray-100 text-gray-700"
                                        ].join(" ")}
                                    >
                                        {product.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}


                </div>
            ))}
        </nav>
    );
};

export default SideMenu;