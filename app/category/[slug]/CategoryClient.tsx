"use client";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo, Suspense } from "react";

function CategoryContent({ categorySlug, initialCategory }: { categorySlug: string, initialCategory: any }) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const category = initialCategory || categories.find(c => c.slug === categorySlug);
    const subFilter = searchParams.get('sub');

    // Filtros de UI
    const [priceRange, setPriceRange] = useState(10000000);
    const [sortOption, setSortOption] = useState("Relevancia");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredAndSortedProducts = useMemo(() => {
        if (!category) return [];

        let result = products.filter(p => p.category === category.slug);

        // Filtro por subcategoría
        if (subFilter) {
            result = result.filter(p => p.subcategory === subFilter);
        }

        // Filtro por precio
        result = result.filter(p => p.price <= priceRange);

        // Sorting
        if (sortOption === "Precio: Menor a Mayor") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortOption === "Precio: Mayor a Menor") {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sortOption === "Nuevos productos") {
            result = [...result].sort((a, b) => parseInt(b.id.replace(/\D/g, '')) - parseInt(a.id.replace(/\D/g, '')));
        }

        return result;
    }, [category, subFilter, priceRange, sortOption]);

    if (!category) {
        return (
            <div className="container py-32 text-center fade-in-anim">
                <h1 className="text-4xl font-display font-black text-primary uppercase mb-4">Categoría no encontrada</h1>
                <Link href="/" className="text-accent underline font-bold uppercase tracking-widest text-xs">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="bg-[#fcfcfc] min-h-screen transition-opacity duration-700">
            {/* Header de Categoría */}
            <section className="relative h-[30vh] lg:h-[45vh] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-40 scale-110 active-hero transition-transform duration-1000">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>

                <div className="container relative z-10 p-4 lg:p-0">
                    <div className="max-w-3xl">
                        <nav className="flex flex-wrap gap-2 text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-white/40 mb-4 lg:mb-8 fade-in-anim">
                            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                            <span>/</span>
                            <span className="text-accent">{category.name}</span>
                            {subFilter && (
                                <>
                                    <span>/</span>
                                    <span className="text-white">{category.subcategories.find((s: any) => s.slug === subFilter)?.name || subFilter}</span>
                                </>
                            )}
                        </nav>
                        <h1 className="text-4xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none mb-4 lg:mb-6 fade-up-anim stagger-1">
                            {category.name}
                        </h1>
                        <p className="text-secondary/70 font-sans text-sm lg:text-xl max-w-xl leading-relaxed fade-up-anim stagger-2 line-clamp-2 lg:line-clamp-none">
                            {category.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-24">
                <div className="container px-4 lg:px-0">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-8 flex gap-4">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex-grow bg-primary text-white py-4 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                            {isFilterOpen ? 'Cerrar Filtros' : 'Filtrar & Refinar'}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">
                        {/* Sidebar Filtros */}
                        <aside className={`space-y-12 lg:space-y-16 fade-up-anim ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                            <div className="lg:sticky lg:top-32 bg-white lg:bg-transparent p-6 lg:p-0 border border-gray-100 lg:border-none shadow-xl lg:shadow-none rounded-sm">
                                <div className="mb-10 lg:mb-12">
                                    <h3 className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-primary border-b-2 border-accent pb-4 mb-6">Navegar Líneas</h3>
                                    <ul className="space-y-4 lg:space-y-6">
                                        <li>
                                            <button
                                                onClick={() => {
                                                    router.push(`/category/${category.slug}`);
                                                    setIsFilterOpen(false);
                                                }}
                                                className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 transform ${!subFilter ? 'text-accent translate-x-3' : 'text-gray-400 hover:text-primary hover:translate-x-2'}`}
                                            >
                                                Todas las piezas
                                            </button>
                                        </li>
                                        {category.subcategories.map((sub: any, idx: number) => (
                                            <li key={sub.slug}>
                                                <button
                                                    onClick={() => {
                                                        router.push(`/category/${category.slug}?sub=${sub.slug}`);
                                                        setIsFilterOpen(false);
                                                    }}
                                                    className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 transform ${subFilter === sub.slug ? 'text-accent translate-x-3' : 'text-gray-400 hover:text-primary hover:translate-x-2'}`}
                                                >
                                                    {sub.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-primary border-b-2 border-accent pb-4 mb-6">Inversión Máxima</h3>
                                    <div className="space-y-8 px-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="10000000"
                                            step="100000"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <div className="text-xl lg:text-2xl font-display font-black text-primary">
                                                {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(priceRange)}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setPriceRange(10000000)}
                                            className="w-full border-2 border-primary text-primary font-black py-4 text-[9px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-500"
                                        >
                                            Restablecer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Grid de Productos */}
                        <div className="lg:col-span-3">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 lg:mb-16 pb-6 lg:pb-8 border-b border-gray-100 gap-6 fade-in-anim">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">Mostrando resultados</p>
                                    <p className="text-xs lg:text-sm font-display font-black text-primary uppercase">{filteredAndSortedProducts.length} Piezas Encontradas</p>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 px-4 lg:px-6 py-2.5 lg:py-3 rounded-sm border border-gray-100 w-full md:w-auto overflow-hidden">
                                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">Prioridad:</span>
                                    <select
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                        className="bg-transparent border-none text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-primary focus:ring-0 cursor-pointer outline-none w-full"
                                    >
                                        <option value="Relevancia">Relevancia</option>
                                        <option value="Precio: Menor a Mayor">Inversión: Menor a Mayor</option>
                                        <option value="Precio: Mayor a Menor">Inversión: Mayor a Menor</option>
                                        <option value="Nuevos productos">Recién Fabricados</option>
                                    </select>
                                </div>
                            </div>

                            {filteredAndSortedProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                                    {filteredAndSortedProducts.map((product, idx) => (
                                        <div key={product.id} className="fade-up-anim" style={{ animationDelay: `${(idx % 3) * 0.1}s` }}>
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 lg:py-32 text-center fade-in-anim">
                                    <div className="mb-8 lg:mb-10 inline-block p-8 lg:p-10 bg-secondary/10 rounded-full scale-110">
                                        <svg className="w-12 h-12 lg:w-16 lg:h-16 text-accent opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                    </div>
                                    <h4 className="text-xl lg:text-2xl font-display font-black text-primary uppercase mb-4 tracking-tight">Sin coincidencias</h4>
                                    <p className="text-gray-400 font-sans italic text-sm lg:text-base max-w-xs lg:max-w-sm mx-auto mb-10">No encontramos piezas que coincidan con tu selección.</p>
                                    <button
                                        onClick={() => {
                                            router.push(`/category/${category.slug}`);
                                            setPriceRange(10000000);
                                        }}
                                        className="bg-primary text-white font-black py-4 px-10 text-[10px] uppercase tracking-[0.3em] hover:bg-accent hover:text-primary transition-all duration-500 shadow-xl"
                                    >
                                        Limpiar Filtros
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function CategoryClient({ categorySlug, initialCategory }: { categorySlug: string, initialCategory: any }) {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        }>
            <CategoryContent categorySlug={categorySlug} initialCategory={initialCategory} />
        </Suspense>
    );
}
