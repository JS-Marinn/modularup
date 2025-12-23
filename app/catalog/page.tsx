"use client";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useState } from "react";

export default function CatalogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="bg-[#fcfcfc] min-h-screen">
            <section className="bg-primary py-24 text-white">
                <div className="container text-center">
                    <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4">Catálogo Completo</h1>
                    <p className="text-secondary/60 text-lg max-w-2xl mx-auto">Explora todas nuestras líneas de diseño modular y encuentra la pieza perfecta para transformar tu espacio.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    {/* Filtros rápidos de categoría */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest border-2 transition-all ${selectedCategory === "all" ? 'bg-accent border-accent text-primary' : 'border-gray-100 text-gray-400 hover:border-accent hover:text-primary'}`}
                        >
                            Todos
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.slug}
                                onClick={() => setSelectedCategory(cat.slug)}
                                className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest border-2 transition-all ${selectedCategory === cat.slug ? 'bg-accent border-accent text-primary' : 'border-gray-100 text-gray-400 hover:border-accent hover:text-primary'}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
