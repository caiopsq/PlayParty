import React from "react"; 
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"
import WhatsappButton from "./components/WhatsappButton";
import Destaques from "./components/Destaques";
import Avaliacoes from "./components/Avaliacoes";


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Avaliacoes />
        <Contact />
        <Destaques />
        <WhatsappButton numero="5561992149916"/>
        <SpeedInsights/>
      </main>
      <Footer />
    </div>
  );
}