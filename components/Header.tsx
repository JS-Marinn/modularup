"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Header() {
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    return (
        <>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <div className="bg-accent text-primary py-2 px-4 text-center text-[10px] font-black tracking-[0.3em] uppercase">
                Envíos gratuitos a todo el país por compras superiores a $1.000.000
            </div>

            <header className="bg-primary text-white sticky top-0 z-[100] shadow-2xl">
                <div className="container py-4 flex items-center justify-between gap-8 md:gap-12">
                    <Link href="/" className="flex items-center gap-3 shrink-0 group">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/logos/LOGO-MODULAR-UP-(VERSION-1).png"
                                alt="Modular UP Logo"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="hidden lg:block overflow-hidden">
                            <h1 className="text-accent font-display text-xl leading-none uppercase font-extrabold tracking-wider">MODULAR UP</h1>
                            <p className="text-white/60 text-[9px] leading-tight font-sans tracking-[0.2em] uppercase font-bold">Muebles & Diseños</p>
                        </div>
                    </Link>

                    <div className="flex-grow max-w-[700px]">
                        <SearchBar />
                    </div>

                    <div className="flex items-center gap-10 shrink-0">
                        {/* Mi Cuenta y Carrito Centrados verticalmente con etiquetas visibles */}
                        <Link href="/orders" className="flex flex-col items-center justify-center group text-white hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-[8px] uppercase font-black tracking-[0.2em] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">Mi Cuenta</span>
                        </Link>

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative group flex flex-col items-center justify-center text-white hover:text-accent transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-1.5 -right-1.5 bg-accent text-primary text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-primary transition-transform group-hover:scale-125 shadow-lg">{cartCount}</span>
                            <span className="text-[8px] uppercase font-black tracking-[0.2em] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">Carrito</span>
                        </button>
                    </div>
                </div>

                <nav className="border-t border-white/10 bg-black/5">
                    <div className="container">
                        <ul className="flex items-center justify-center gap-8 md:gap-16 py-4">
                            {categories.map((cat) => (
                                <li
                                    key={cat.id}
                                    className="relative py-2 group cursor-pointer"
                                    onMouseEnter={() => setActiveSubmenu(cat.slug)}
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                >
                                    <Link
                                        href={`/category/${cat.slug}`}
                                        className={`text-[12px] font-black uppercase tracking-[0.3em] transition-all duration-300 flex items-center gap-2 ${activeSubmenu === cat.slug ? 'text-accent' : 'text-white/80 hover:text-white'}`}
                                    >
                                        {cat.name}
                                        <svg
                                            className={`w-3.5 h-3.5 transition-transform duration-500 ${activeSubmenu === cat.slug ? 'rotate-180' : 'opacity-40'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Link>

                                    <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${activeSubmenu === cat.slug ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></div>

                                    {/* Dropdown Menu - Subcategories with descriptions */}
                                    <div
                                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px] z-[200] transition-all duration-500 transform ${activeSubmenu === cat.slug ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
                                    >
                                        <div className="bg-white text-primary shadow-[0_30px_100px_rgba(0,0,0,0.2)] border-t-4 border-accent">
                                            <div className="p-8">
                                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                                                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Explorar {cat.name}</h4>
                                                    <span className="text-[9px] font-bold text-accent italic">Nueva Colección</span>
                                                </div>
                                                <ul className="space-y-6">
                                                    {cat.subcategories.map((sub) => (
                                                        <li key={sub.slug} className="group/item">
                                                            <Link
                                                                href={`/category/${cat.slug}?sub=${sub.slug}`}
                                                                className="flex flex-col gap-1 transition-all duration-300"
                                                            >
                                                                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-primary group-hover/item:text-accent transition-colors">
                                                                    {sub.name}
                                                                </span>
                                                                <span className="text-[9px] text-gray-400 font-medium italic opacity-0 group-hover/item:opacity-100 transition-opacity -translate-x-2 group-hover/item:translate-x-0">Diseño exclusivo modular</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-10 pt-6">
                                                    <Link
                                                        href={`/category/${cat.slug}`}
                                                        className="group/btn relative overflow-hidden bg-primary text-white block text-center py-5 text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-2xl"
                                                    >
                                                        <span className="relative z-10 group-hover/btn:tracking-[0.5em] transition-all duration-500">Ver Catálogo Completo</span>
                                                        <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}

                            <li className="ml-8 pl-8 border-l border-white/20">
                                <Link
                                    href="/#catalog"
                                    className="text-[12px] font-black uppercase tracking-[0.3em] text-accent hover:text-white transition-all duration-300 flex items-center gap-2"
                                >
                                    OFERTAS
                                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
