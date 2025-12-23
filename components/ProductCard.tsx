"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(product.price);

    const oldPriceFormatted = product.oldPrice ? new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(product.oldPrice) : null;

    const handleAddToCart = () => {
        addToCart(product, 1);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="group flex flex-col h-full bg-white border border-gray-100 transition-all duration-700 ease-out hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
                {product.isOffer && (
                    <span className="bg-accent text-primary px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">Oferta</span>
                )}
                {product.stock < 5 && (
                    <span className="bg-red-600 text-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-75">Stock Bajo</span>
                )}
            </div>

            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 group/img">
                <Link href={`/product/${product.slug}`} className="block w-full h-full relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-[30s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </Link>

                {/* Overlay Action Button */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) z-20">
                    <button
                        onClick={handleAddToCart}
                        className={`w-full font-bold py-4 text-[10px] uppercase tracking-[0.3em] shadow-2xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 ${isAdded ? 'bg-green-600 text-white' : 'bg-primary text-white hover:bg-accent hover:text-primary'}`}
                    >
                        {isAdded ? (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                ¡Añadido!
                            </>
                        ) : (
                            'Añadir al Carrito'
                        )}
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-8 flex flex-col flex-grow relative bg-white">
                <div className="mb-6">
                    <span className="text-[9px] font-bold text-accent uppercase tracking-[0.3em] block mb-2 opacity-60">{product.subcategory}</span>
                    <h3 className="text-base font-display font-black text-primary uppercase tracking-tight group-hover:text-accent transition-colors duration-500 leading-tight">
                        {product.name}
                    </h3>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-col">
                        {oldPriceFormatted && (
                            <span className="text-[10px] text-gray-300 line-through mb-1 font-bold">{oldPriceFormatted}</span>
                        )}
                        <span className="text-xl font-display font-black text-primary tracking-tighter">
                            {formattedPrice}
                        </span>
                    </div>

                    <div className="flex text-accent gap-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-3 h-3 fill-current ${i < product.rating ? '' : 'text-gray-200'}`} viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
