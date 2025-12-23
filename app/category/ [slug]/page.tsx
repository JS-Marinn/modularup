"use client";

import { use } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
    const params = use(paramsPromise);
    const searchParams = useSearchParams();
    const router = useRouter();

    const category = categories.find(c => c.slug === params.slug);
    const subFilter = searchParams.get('sub');

    if (!category) {
        return (
            <div className="container py-32 text-center">
                <h1 className="text-4xl font-display font-black text-primary uppercase mb-4">Categoría no encontrada</h1>
                <Link href="/" className="text-accent underline font-bold uppercase tracking-widest text-xs">Volver al inicio</Link>
            </div>
        );
    }

    const categoryProducts = products.filter(p => p.category === category.slug);
    // In a real app we would filter by subcategory here if subFilter is present

    return (
        <div className="bg-[#fcfcfc] min-h-screen">
            {/* Header de Categoría */}
            <section className="relative h-[40vh] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>

                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <nav className="flex gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                            <span>/</span>
                            <span className="text-accent">{category.name}</span>
                        </nav>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none mb-4">
                            {category.name}
                        </h1>
                        <p className="text-secondary/70 font-sans text-lg max-w-xl">
                            {category.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Sidebar Filtros */}
                        <aside className="space-y-12">
                            <div>
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-accent pb-4 mb-8">Subcategorías</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <button
                                            onClick={() => router.push(`/category/${category.slug}`)}
                                            className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${!subFilter ? 'text-accent' : 'text-gray-400 hover:text-primary'}`}
                                        >
                                            Todas las piezas
                                        </button>
                                    </li>
                                    {category.subcategories.map(sub => (
                                        <li key={sub.slug}>
                                            <button
                                                onClick={() => router.push(`/category/${category.slug}?sub=${sub.slug}`)}
                                                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${subFilter === sub.slug ? 'text-accent' : 'text-gray-400 hover:text-primary'}`}
                                            >
                                                {sub.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-accent pb-4 mb-8">Filtrar por Precio</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <span>$0</span>
                                        <span>$10M+</span>
                                    </div>
                                    <input type="range" className="w-full accent-accent" />
                                    <button className="w-full border-2 border-primary text-primary font-bold py-3 text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                        Aplicar Filtro
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Grid de Productos */}
                        <div className="lg:col-span-3">
                            <div className="flex justify-between items-center mb-12 pb-6 border-b border-gray-100">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Mostrando {categoryProducts.length} resultados</p>
                                <select className="bg-transparent border-none text-[10px] font-bold uppercase tracking-widest text-primary focus:ring-0 cursor-pointer">
                                    <option>Ordenar por: Relevancia</option>
                                    <option>Precio: Menor a Mayor</option>
                                    <option>Precio: Mayor a Menor</option>
                                    <option>Nuevos productos</option>
                                </select>
                            </div>

                            {categoryProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {categoryProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 text-center">
                                    <p className="text-gray-400 font-sans italic text-sm">No se encontraron productos en esta categoría.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
