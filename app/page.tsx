"use client";

import Link from "next/link";
import Image from "next/image";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("Populares");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const offerProducts = products.filter(p => p.isOffer);
  const regularProducts = products.filter(p => !p.isOffer);

  const filteredProducts = regularProducts.filter(p => {
    if (filter === "Nuevos") return p.stock > 10;
    if (filter === "Más vendidos") return p.rating === 5;
    return true;
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-primary px-4 md:px-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent z-10 transition-opacity duration-1000"></div>
          <div
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2600')] bg-cover bg-center opacity-70 scale-105 animate-pulse-slow active-hero"
            style={{ animationDuration: '30s' }}
          ></div>
        </div>

        <div className="container relative z-20">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent text-primary px-4 lg:px-5 py-1.5 text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.4em] mb-6 lg:mb-8 fade-in-anim">
              Colección Vanguardia 2025
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-6 lg:mb-8 leading-[0.85] tracking-tighter uppercase fade-up-anim">
              Diseño que <br /> <span className="text-accent italic reveal-anim stagger-2">Transforma</span>
            </h1>
            <p className="text-secondary/80 font-sans text-lg md:text-xl lg:text-2xl mb-10 lg:mb-14 leading-relaxed opacity-90 max-w-2xl fade-up-anim stagger-3">
              Mobiliario modular de alta ingeniería pensado para elevar la arquitectura de tu hogar u oficina.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 fade-up-anim stagger-4">
              <Link
                href="#catalog"
                className="bg-accent hover:bg-white text-primary font-bold py-5 lg:py-6 px-10 lg:px-14 rounded-sm transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(251,191,72,0.3)] uppercase tracking-[0.25em] text-[10px] lg:text-xs text-center"
              >
                Explorar Catálogo
              </Link>
              <Link
                href="/orders"
                className="group border-2 border-white/30 text-white hover:border-white font-bold py-5 lg:py-6 px-10 lg:px-14 rounded-sm transition-all duration-500 uppercase tracking-[0.25em] text-[10px] lg:text-xs text-center backdrop-blur-md overflow-hidden relative"
              >
                <span className="relative z-10">Proyecto a Medida</span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="absolute inset-0 flex items-center justify-center text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">Contactar un Experto</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-hero: USP features */}
      <div className="bg-primary/98 border-t border-white/5 py-12 lg:py-16">
        <div className="container px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7', label: 'Ingeniería Modular' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Calidad Certificada' },
              { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', label: 'Logística Premium' },
              { icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-1.152 0-2.032.931-1.928 2.074l.432 4.75a2 2 0 01-1.789 2.176L7 12.115V20m0 0l-5.924-1.185A2 2 0 010 16.852V10.198a2 2 0 011.215-1.844l5.352-2.316', label: 'Fabricación Nacional' }
            ].map((usp, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 lg:space-y-4 fade-up-anim" style={{ animationDelay: `${0.2 * i}s` }}>
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-accent/20 flex items-center justify-center text-accent transition-all duration-500 lg:hover:bg-accent lg:hover:text-primary lg:hover:border-accent group">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={usp.icon} /></svg>
                </div>
                <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-white/70">{usp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorías Principales */}
      <section id="categories" className="py-20 lg:py-32 bg-white px-4 md:px-0">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-8 fade-up-anim">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-7xl font-display font-black text-primary mb-4 lg:mb-6 uppercase tracking-tighter leading-none">Inspiración por <br /> <span className="text-secondary-foreground">Ambientes</span></h2>
              <div className="h-1.5 lg:h-2 w-24 lg:w-32 bg-accent reveal-anim"></div>
            </div>
            <Link href="/catalog" className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-accent border-b-2 border-accent/20 pb-2 transition-all duration-500 hover:border-accent hover:pr-6 relative group">
              Catálogo de Conceptos
              <svg className="w-4 h-4 absolute top-0 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Ofertas Imperdibles */}
      <section className="py-20 lg:py-32 bg-secondary/20 px-4 md:px-0 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="container">
          <div className="text-center mb-12 lg:mb-20 fade-up-anim">
            <h2 className="text-4xl lg:text-6xl font-display font-black text-primary mb-4 lg:mb-6 uppercase tracking-tighter">Oportunidades UP</h2>
            <p className="text-gray-400 text-[10px] lg:text-sm font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] opacity-80">Diseño de autor con beneficios exclusivos</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {offerProducts.slice(0, 4).map((product, idx) => (
              <div key={product.id} className="fade-up-anim" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo Completo / Trending */}
      <section id="catalog" className="py-20 lg:py-32 bg-white px-4 md:px-0">
        <div className="container">
          <div className="flex justify-center mb-16 lg:mb-24">
            <div className="flex flex-wrap gap-6 md:gap-12 border-b border-gray-100 w-full justify-center pb-2">
              {["Populares", "Nuevos", "Más vendidos"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`pb-4 border-b-4 font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] lg:text-[11px] transition-all duration-500 relative ${filter === t ? 'border-accent text-primary scale-110' : 'border-transparent text-gray-300 hover:text-primary'}`}
                >
                  {t}
                  {filter === t && <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-16 lg:gap-y-20">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} className="fade-up-anim" style={{ animationDelay: `${(idx % 4) * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="mt-20 lg:mt-32 text-center">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-6 bg-primary text-white hover:bg-accent hover:text-primary font-bold py-6 lg:py-7 px-10 lg:px-20 transition-all duration-700 uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-[11px] shadow-[0_30px_60px_-15px_rgba(23,46,63,0.4)] relative overflow-hidden"
            >
              <span className="relative z-10">Explorar Todo el Arquivo</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Proyectos a Medida */}
      <section className="py-24 lg:py-40 bg-primary relative overflow-hidden px-4 md:px-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 transition-transform duration-[2000ms] hover:translate-x-1/3"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="fade-up-anim">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-white mb-6 lg:mb-10 uppercase leading-[0.9] tracking-tighter">
                Diseño que <br /> <span className="text-accent">Evoluciona</span> tu Espacio
              </h2>
              <p className="text-secondary/70 text-lg md:text-xl lg:text-2xl font-sans mb-10 lg:mb-14 leading-relaxed max-w-xl">
                Desde oficinas corporativas hasta refugios personales. Creamos mobiliario que respira con tu arquitectura.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <Link href="/orders" className="w-full sm:w-auto text-center bg-accent text-primary font-black py-5 lg:py-6 px-10 lg:px-16 uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] lg:text-xs hover:bg-white transition-all duration-500 shadow-2xl transform hover:-translate-y-2">Planear Proyecto</Link>
                <div className="flex flex-col justify-center border-l border-white/10 pl-10">
                  <span className="text-white text-2xl lg:text-3xl font-display font-black tracking-tighter transition-all duration-1000 group-hover:text-accent">+200</span>
                  <span className="text-white/40 text-[8px] lg:text-[9px] uppercase font-black tracking-[0.2em] lg:tracking-[0.3em]">Espacios Transformados</span>
                </div>
              </div>
            </div>
            <div className="relative group perspective-1000 fade-in-anim">
              <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Corporate Project"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:rotate-y-6 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 border-[2px] lg:border-[3px] border-accent/30 -m-4 lg:-m-6 rounded-sm pointer-events-none group-hover:m-4 transition-all duration-1000"></div>
              <div className="absolute -bottom-6 lg:-bottom-10 -left-6 lg:-left-10 bg-accent p-6 lg:p-8 shadow-2xl transition-transform duration-700 group-hover:translate-x-5 group-hover:-translate-y-5 max-w-[200px] lg:max-w-none">
                <span className="block text-primary font-black text-xl lg:text-2xl uppercase tracking-tighter">Estándar Modular UP</span>
                <span className="block text-primary/60 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest mt-1">Calidad de Importación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Premium */}
      <section className="py-16 lg:py-24 bg-white px-4 md:px-0 relative">
        <div className="container">
          <div className="bg-primary p-10 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 rounded-sm shadow-[0_60px_120px_-20px_rgba(23,46,63,0.3)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="max-w-xl relative z-10 fade-up-anim text-center lg:text-left">
              <h3 className="text-white text-3xl lg:text-5xl font-display font-black uppercase tracking-tight mb-4">La Vanguardia en tu Mail</h3>
              <p className="text-white/60 text-base lg:text-lg font-sans leading-relaxed">Suscríbete para recibir tendencias globales de diseño modular y acceso prioritario a nuevas colecciones.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 lg:gap-6 relative z-10 fade-up-anim stagger-2">
              <input
                type="email"
                placeholder="Dirección de correo"
                className="flex-grow lg:w-96 bg-white/5 border-2 border-white/10 text-white px-6 lg:px-8 py-4 lg:py-6 outline-none focus:border-accent transition-all duration-500 text-sm placeholder:text-white/20"
              />
              <button
                onClick={handleSubscribe}
                className={`font-black px-10 lg:px-14 py-4 lg:py-6 uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] lg:text-[11px] transition-all duration-500 shadow-xl whitespace-nowrap flex items-center justify-center gap-2 ${isSubscribed ? 'bg-green-600 text-white' : 'bg-accent text-primary hover:bg-white'}`}
              >
                {isSubscribed ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    Suscrito con éxito
                  </>
                ) : (
                  'Suscribirme'
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
