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

                        {/* 
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
                        */}

                        <div className="mt-auto pt-10 border-t border-white/10">
                            <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-6">Síguenos</h4>
                            <div className="flex gap-6">
                                <a href="https://web.facebook.com/profile.php?id=61581668862918" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/modular_up/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a href="https://www.tiktok.com/@modular_up" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.032 2.61.182 3.82.636l.244.1c1.38.618 2.053 1.956 2.053 1.956.12.324.516.48 1.08.484.444.02 1.056.02 2.22.02v4.44s-1.896-.06-3.336-.612c-1.44-.552-2.22-1.932-2.22-1.932l-.024 10.14c0 4.14-3.36 7.5-7.5 7.5S1.365 19.4 1.365 15.26s3.36-7.5 7.5-7.5c.348 0 .684.024 1.02.072v4.716c-.324-.132-.672-.204-1.032-.204-1.5 0-2.724 1.224-2.724 2.736S7.365 18 8.865 18s2.724-1.224 2.724-2.736v-15c.312-.132.612-.192.936-.244z" />
                                    </svg>
                                </a>
                            </div>
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
                                src="/logos/LOGO-MODULAR-UP2.png"
                                alt="Modular UP Isotipo"
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

                        {/* 
                        <Link href="/account" className="hidden lg:flex flex-col items-center justify-center group text-white hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-[10px] uppercase font-semibold tracking-[0.2em] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">Mi Cuenta</span>
                        </Link>
                        */}

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative group p-2 flex flex-col items-center justify-center text-white hover:text-accent transition-all duration-300 transform lg:hover:-translate-y-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute top-0.5 right-0.5 lg:-top-1.5 lg:-right-1.5 bg-accent text-primary text-[8px] lg:text-[9px] font-black w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full flex items-center justify-center border-2 border-primary transition-transform group-hover:scale-125 shadow-lg">{cartCount}</span>
                            <span className="hidden lg:block text-[10px] uppercase font-semibold tracking-[0.2em] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">Carrito</span>
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
