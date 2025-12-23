"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";

export default function ProductClient({ product }: { product: any }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    if (!product) return null;

    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(product.price);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="py-20 bg-white min-h-screen">
            <div className="container">
                {/* Breadcrumbs */}
                <nav className="text-[10px] text-gray-400 mb-8 uppercase tracking-[0.3em] flex gap-2 font-black fade-in-anim">
                    <Link href="/" className="hover:text-accent transition-colors">Modular UP</Link>
                    <span className="opacity-30">/</span>
                    <Link href={`/category/${product.category}`} className="hover:text-accent transition-colors">{product.category}</Link>
                    <span className="opacity-30">/</span>
                    <span className="text-primary">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-12">
                    {/* Left: Gallery */}
                    <div className="space-y-8 fade-up-anim">
                        <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative group shadow-2xl">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-[8s] group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        {product.gallery.length > 0 && (
                            <div className="grid grid-cols-4 gap-6">
                                {product.gallery.map((img: string, idx: number) => (
                                    <div key={idx} className="aspect-square bg-gray-50 cursor-pointer overflow-hidden border border-gray-100 group relative">
                                        <Image src={img} fill className="object-cover transition-transform group-hover:scale-110" alt={`${product.name} ${idx}`} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col fade-up-anim stagger-1">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-accent/10 text-accent text-[9px] font-black uppercase tracking-[0.3em]">Premium Edition</span>
                            <div className="h-0.5 w-12 bg-gray-100"></div>
                            <span className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.3em]">Stock: {product.stock} unidades</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-black text-primary mb-6 leading-none uppercase tracking-tighter">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-6 mb-10 pb-10 border-b border-gray-100">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">Inversión Sugerida</span>
                                <span className="text-5xl font-display font-black text-accent tracking-tighter">{formattedPrice}</span>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                                <div className="flex text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-3.5 h-3.5 fill-current ${i < product.rating ? '' : 'opacity-20'}`} viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{product.reviewsCount} Reseñas</span>
                            </div>
                        </div>

                        <div className="space-y-10 group">
                            <div>
                                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-6">Concepto del Diseñador</h4>
                                <p className="text-gray-400 font-sans text-lg leading-relaxed italic">
                                    "{product.description} Esta pieza ha sido concebida bajo los más altos estándares de ergonomía y estética modular, permitiendo una integración orgánica en cualquier entorno arquitectónico moderno."
                                </p>
                            </div>

                            <div className="space-y-8 border-t border-gray-50 pt-10">
                                <div className="flex flex-col sm:flex-row gap-8 items-end">
                                    <div className="w-full sm:w-48">
                                        <span className="block text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-gray-400">Cantidad</span>
                                        <div className="flex items-center border-2 border-primary/5 bg-gray-50/50">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="w-14 h-14 flex items-center justify-center hover:bg-white transition-all text-xl font-light"
                                            >-</button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                                className="w-full text-center bg-transparent focus:outline-none h-14 font-black text-sm"
                                            />
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-14 h-14 flex items-center justify-center hover:bg-white transition-all text-xl font-light"
                                            >+</button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleAddToCart}
                                        className={`flex-grow font-black py-6 px-12 uppercase tracking-[0.3em] text-[11px] transition-all duration-500 shadow-2xl transform active:scale-95 flex items-center justify-center gap-3 ${isAdded ? 'bg-green-600 text-white' : 'bg-primary text-white hover:bg-accent hover:text-primary'}`}
                                    >
                                        {isAdded ? (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                                ¡Pieza Añadida!
                                            </>
                                        ) : (
                                            'Añadir al Carrito'
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Trust signals */}
                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-50">
                                <div className="flex items-center gap-4 group/box">
                                    <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent group-hover/box:bg-accent group-hover/box:text-primary transition-all duration-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Garantía Vitalicia <br /> en Estructura</span>
                                </div>
                                <div className="flex items-center gap-4 group/box">
                                    <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent group-hover/box:bg-accent group-hover/box:text-primary transition-all duration-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Armado Técnico <br /> Especializado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Specs */}
                <div className="mt-32 border-t border-gray-100 pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-2">
                            <h3 className="text-3xl font-display font-black text-primary mb-12 uppercase tracking-tight">Especificaciones Técnicas</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                {product.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="group/fact">
                                        <div className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 group-hover/fact:scale-150 transition-transform"></div>
                                            <p className="text-gray-500 font-sans text-sm leading-relaxed">{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary p-12 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-xl font-display font-black uppercase tracking-wider mb-6">Asesoría a Medida</h4>
                                <p className="text-white/60 text-sm font-sans leading-relaxed mb-10">
                                    Nuestros arquitectos pueden ayudarte a personalizar las dimensiones y acabados de esta pieza para que se ajuste perfectamente a tu proyecto.
                                </p>
                                <Link href="/orders" className="inline-block w-full text-center bg-white text-primary font-black py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-2xl">
                                    Solicitar Personalización
                                </Link>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
