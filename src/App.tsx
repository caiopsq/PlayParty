import React from "react"; 
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Destaques from "./components/Destaques";


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
        <Destaques />
        <WhatsappButton numero="5561992149916"/>
      </main>
      <Footer />
    </div>
  );
}