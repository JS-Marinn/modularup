"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CartDrawer from "./CartDrawer";

export default function Header() {
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    // Close mobile menu and search when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const handleMouseEnter = (slug: string) => {
        if (submenuTimeout) clearTimeout(submenuTimeout);
        setActiveSubmenu(slug);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveSubmenu(null);
        }, 100);
        setSubmenuTimeout(timeout);
    };

    return (
        <>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                <div
                    className={`absolute inset-0 bg-primary/95 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                />
                <div className={`absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-primary border-r border-white/10 shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col h-full p-8">
                        <div className="flex items-center justify-between mb-12">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logos/LOGO-MODULAR-UP-(VERSION-1).png"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-accent p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex-grow">
                            <ul className="space-y-8">
                                {categories.map((cat) => (
                                    <li key={cat.id} className="space-y-4">
                                        <Link
                                            href={`/category/${cat.slug}`}
                                            className="text-2xl font-black text-white hover:text-accent transition-colors uppercase tracking-widest"
                                        >
                                            {cat.name}
                                        </Link>
                                        <ul className="pl-4 space-y-3 border-l border-white/10">
                                            {cat.subcategories.map((sub) => (
                                                <li key={sub.slug}>
                                                    <Link
                                                        href={`/category/${cat.slug}?sub=${sub.slug}`}
                                                        className="text-white/60 hover:text-white uppercase text-[10px] tracking-[0.2em] font-bold"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                                <li className="pt-4 mt-4 border-t border-white/10">
                                    <Link
                                        href="/#catalog"
                                        className="text-2xl font-black text-accent hover:text-white transition-colors uppercase tracking-widest flex items-center gap-4"
                                    >
                                        OFERTAS
                                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="mt-auto pt-10 grid grid-cols-2 gap-4">
                            <Link href="/account" className="bg-white/5 border border-white/10 p-4 flex flex-col items-center gap-2 rounded-sm group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-[8px] text-white uppercase font-black tracking-widest">Cuenta</span>
                            </Link>
                            <Link href="/orders" className="bg-white/5 border border-white/10 p-4 flex flex-col items-center gap-2 rounded-sm group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span className="text-[8px] text-white uppercase font-black tracking-widest">Pedidos</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-accent text-primary py-2 px-4 text-center text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
                Envíos gratuitos a todo el país por compras superiores a $1.000.000
            </div>

            <header className="bg-primary text-white sticky top-0 z-[100] shadow-2xl">
                <div className="container py-3 lg:py-4 flex items-center justify-between gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <Link href="/" className="flex items-center gap-2 lg:gap-3 shrink-0 group">
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                            <Image
                                src="/logos/LOGO-MODULAR-UP-(VERSION-1).png"
                                alt="Modular UP Logo"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="hidden sm:block overflow-hidden">
                            <h1 className="text-accent font-display text-lg lg:text-xl leading-none uppercase font-extrabold tracking-wider">MODULAR UP</h1>
                            <p className="text-white/60 text-[8px] lg:text-[9px] leading-tight font-sans tracking-[0.2em] uppercase font-bold">Muebles & Diseños</p>
                        </div>
                    </Link>

                    {/* Desktop Search Bar */}
                    <div className="hidden lg:block flex-grow max-w-[700px]">
                        <SearchBar />
                    </div>

                    <div className="flex items-center gap-2 lg:gap-10 shrink-0">
                        {/* Search Toggle for Mobile */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        <Link href="/account" className="hidden lg:flex flex-col items-center justify-center group text-white hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-[8px] uppercase font-black tracking-[0.2em] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">Mi Cuenta</span>
                        </Link>

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative group p-2 flex flex-col items-center justify-center text-white hover:text-accent transition-all duration-300 transform lg:hover:-translate-y-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute top-0.5 right-0.5 lg:-top-1.5 lg:-right-1.5 bg-accent text-primary text-[8px] lg:text-[9px] font-black w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full flex items-center justify-center border-2 border-primary transition-transform group-hover:scale-125 shadow-lg">{cartCount}</span>
                            <span className="hidden lg:block text-[8px] uppercase font-black tracking-[0.2em] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">Carrito</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Search Input Transition */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-black/10 ${isSearchOpen ? 'max-h-20 border-t border-white/5' : 'max-h-0'}`}>
                    <div className="p-4">
                        <SearchBar />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block border-t border-white/10 bg-black/5">
                    <div className="container">
                        <ul className="flex items-center justify-center gap-8 md:gap-16 py-4">
                            {categories.map((cat) => (
                                <li
                                    key={cat.id}
                                    className="relative py-2 group cursor-pointer"
                                    onMouseEnter={() => handleMouseEnter(cat.slug)}
                                    onMouseLeave={handleMouseLeave}
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
