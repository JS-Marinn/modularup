"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    return (
        <div className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-700 ${isOpen ? 'visible' : 'invisible'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-primary/40 backdrop-blur-md transition-opacity duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Panel */}
            <div className={`absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-[0_0_100px_rgba(0,0,0,0.2)] flex flex-col transform transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Header */}
                <div className="p-10 border-b border-gray-50 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-display font-black text-primary uppercase tracking-tighter mb-1">Tu Selección</h2>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Total de {cartCount} artículos</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-gray-50 rounded-full hover:bg-accent hover:text-primary transition-all duration-500 group"
                    >
                        <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Items */}
                <div className="flex-grow overflow-y-auto p-10 no-scrollbar">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-8 fade-in-anim">
                            <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center text-accent relative">
                                <span className="absolute inset-0 bg-accent/10 rounded-full animate-ping"></span>
                                <svg className="w-12 h-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-display font-black text-primary uppercase tracking-tight">Carrito Vacío</h3>
                                <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-[200px] mx-auto italic">Explora nuestras colecciones y añade piezas exclusivas a tu espacio.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="inline-block border-2 border-primary text-primary font-black py-4 px-10 text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500"
                            >
                                Volver al Catálogo
                            </button>
                        </div>
                    ) : (
                        <ul className="space-y-12">
                            {cart.map((item, idx) => (
                                <li key={item.id} className="flex gap-8 items-center group fade-up-anim" style={{ animationDelay: `${idx * 0.1}s` }}>
                                    <div className="relative w-28 h-28 bg-gray-50 flex-shrink-0 overflow-hidden rounded-sm group-hover:shadow-xl transition-all duration-500">
                                        <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xs font-black text-primary uppercase tracking-[0.1em] group-hover:text-accent transition-colors duration-500">{item.name}</h4>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-200 hover:text-red-500 transition-colors duration-300"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex items-center border border-gray-100 rounded-sm">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-3 py-1 hover:bg-gray-50 text-gray-400 hover:text-primary transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="text-[10px] font-black w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 hover:bg-gray-50 text-gray-400 hover:text-primary transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-lg font-display font-black text-primary group-hover:text-accent transition-colors duration-500">
                                            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.price)}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-10 bg-gray-50 border-t border-gray-100 space-y-10 fade-up-anim">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Inversión Total</span>
                                <span className="text-sm font-sans text-gray-400 italic font-medium">* IVA incluido</span>
                            </div>
                            <span className="text-4xl font-display font-black text-primary tracking-tighter">
                                {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cartTotal)}
                            </span>
                        </div>
                        <div className="space-y-4">
                            <Link
                                href="/checkout"
                                onClick={onClose}
                                className="w-full bg-primary text-white py-6 font-black uppercase tracking-[0.3em] text-[11px] hover:bg-accent hover:text-primary transition-all duration-700 shadow-[0_20px_40px_-10px_rgba(23,46,63,0.3)] flex items-center justify-center"
                            >
                                Finalizar Pedido
                            </Link>
                            <p className="text-[9px] text-gray-400 text-center uppercase tracking-[0.3em] leading-relaxed opacity-60">
                                Transacción Segura & Asesoría Personalizada <br /> en el Siguiente Paso
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
