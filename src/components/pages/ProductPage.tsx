import { useSearchParams } from "react-router-dom";
import React from "react";
import { Header } from "../Header";
import ProductDetails from "../Product";
import SideMenu from "../SideMenu";

function ProductPage() {
    const [searchParams] = useSearchParams();
    // const title = searchParams.get("title");
    const id = searchParams.get("id");
    // const description = searchParams.get("description");
    // const category = searchParams.get("category");
    return (
        <div className="min-h-screen">
            <Header />
            <main style={{justifyContent: "space-evenly"}} className="flex row pt-20">
                <SideMenu className="" />
                <ProductDetails className="" id={id} />
            </main>
        </div>
    )
}

export default ProductPage;