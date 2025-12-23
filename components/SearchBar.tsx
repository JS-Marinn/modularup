"use client";

import { useState, useEffect, useRef } from "react";
import { products, Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Product[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (query.length > 1) {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 5);
            setResults(filtered);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={searchRef}>
            <div className="flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length > 1 && setIsOpen(true)}
                    placeholder="¿Qué producto buscas?"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-l-sm py-3 px-6 focus:outline-none focus:ring-1 focus:ring-accent transition-all text-sm font-sans"
                />
                <button className="bg-accent text-primary p-3.5 rounded-r-sm hover:bg-accent/90 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            {/* Results Dropdown */}
            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white shadow-2xl rounded-sm z-[200] overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-4 bg-gray-50 border-b border-gray-100">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sugerencias Modular UP</span>
                    </div>
                    <ul className="divide-y divide-gray-50">
                        {results.map((product) => (
                            <li key={product.id}>
                                <Link
                                    href={`/product/${product.slug}`}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setQuery("");
                                    }}
                                    className="flex items-center gap-4 p-4 hover:bg-accent/5 transition-colors group"
                                >
                                    <div className="relative w-12 h-12 flex-shrink-0 bg-gray-50 overflow-hidden">
                                        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-xs font-black text-primary uppercase tracking-tight group-hover:text-accent transition-colors">{product.name}</h4>
                                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{product.category}</p>
                                    </div>
                                    <span className="text-xs font-black text-primary">
                                        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(product.price)}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/catalog"
                        onClick={() => setIsOpen(false)}
                        className="block p-4 text-center text-[10px] font-black text-accent uppercase tracking-widest hover:bg-accent hover:text-primary transition-all"
                    >
                        Ver todos los resultados
                    </Link>
                </div>
            )}
        </div>
    );
}
