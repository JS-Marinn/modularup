"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const invoiceRef = useRef<HTMLDivElement>(null);

    // Store order summary locally before clearing cart
    const [orderSummary, setOrderSummary] = useState<{
        items: any[],
        total: number,
        orderId: string,
        date: string
    } | null>(null);

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        address: "",
        city: "Bogotá",
        phone: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateWhatsAppLink = () => {
        if (!orderSummary) return "#";

        // Formato de moneda para WhatsApp
        const formatMoney = (val: number) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

        let message = `🛒 *ÓRDEN DE COMPRA - MODULAR UP*\n`;
        message += `*Pedido:* #${orderSummary.orderId}\n`;
        message += `*Fecha:* ${orderSummary.date}\n`;
        message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `👤 *CLIENTE*\n`;
        message += `*Nombre:* ${formData.name}\n`;
        message += `*Teléfono:* ${formData.phone}\n`;
        message += `*Ciudad:* ${formData.city}\n`;
        message += `*Dirección:* ${formData.address}\n`;
        message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `📦 *PROYECTO*\n`;

        orderSummary.items.forEach(item => {
            message += `▪️ *${item.quantity}x* ${item.name.toUpperCase()}\n`;
            message += `   Subtotal: ${formatMoney(item.price * item.quantity)}\n`;
        });

        message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `💰 *INVERSIÓN TOTAL: ${formatMoney(orderSummary.total)}*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `🚀 *Solicito asesoría técnica para iniciar la fabricación del mobiliario.*`;

        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/573143455483?text=${encodedMessage}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        const summary = {
            items: [...cart],
            total: cartTotal,
            orderId: Math.random().toString(36).substring(2, 9).toUpperCase(),
            date: new Date().toLocaleDateString('es-CO')
        };

        setTimeout(() => {
            const currentSummary = summary;
            setOrderSummary(currentSummary);
            setIsProcessing(false);
            setIsSuccess(true);
            clearCart();

            // Formato de moneda para WhatsApp
            const formatMoney = (val: number) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

            // Generar el link y redirigir
            let message = `🛒 *ÓRDEN DE COMPRA - MODULAR UP*\n`;
            message += `*Pedido:* #${currentSummary.orderId}\n`;
            message += `*Fecha:* ${currentSummary.date}\n`;
            message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
            message += `👤 *CLIENTE*\n`;
            message += `*Nombre:* ${formData.name}\n`;
            message += `*Teléfono:* ${formData.phone}\n`;
            message += `*Ciudad:* ${formData.city}\n`;
            message += `*Dirección:* ${formData.address}\n`;
            message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
            message += `📦 *PROYECTO*\n`;

            currentSummary.items.forEach(item => {
                message += `▪️ *${item.quantity}x* ${item.name.toUpperCase()}\n`;
                message += `   Subtotal: ${formatMoney(item.price * item.quantity)}\n`;
            });

            message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
            message += `💰 *INVERSIÓN TOTAL: ${formatMoney(currentSummary.total)}*\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
            message += `🚀 *Solicito asesoría técnica para iniciar la fabricación del mobiliario.*`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/573187212151?text=${encodedMessage}`;

            // Redirección automática
            window.location.href = whatsappUrl;
        }, 3000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] py-20 px-4">
                <div className="max-w-2xl w-full text-center space-y-12 fade-in-anim">
                    <div className="space-y-8">
                        <div className="relative inline-block">
                            <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0_20px_50px_rgba(22,163,74,0.3)] relative z-10">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-20"></div>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-display font-black text-primary uppercase tracking-tighter leading-none">
                                Pedido <br /> <span className="text-accent italic">Procesado</span>
                            </h1>
                            <p className="text-gray-400 font-sans text-sm uppercase tracking-[0.2em] font-black opacity-60">Redirigiendo a WhatsApp para finalizar...</p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <Link href="/" className="text-[10px] font-black text-primary/40 hover:text-primary uppercase tracking-[0.4em] transition-colors border-b-2 border-transparent hover:border-accent pb-2">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (cart.length === 0 && !isSuccess) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-white">
                <div className="text-center space-y-8 fade-in-anim">
                    <h2 className="text-3xl font-display font-black text-primary uppercase tracking-tighter">Tu carrito está vacío</h2>
                    <p className="text-gray-400 italic">No hay piezas seleccionadas para procesar.</p>
                    <Link href="/" className="inline-block bg-accent text-primary font-black py-5 px-12 uppercase tracking-[0.3em] text-[10px] hover:bg-primary hover:text-white transition-all duration-500">
                        Explorar Colecciones
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#fcfcfc] min-h-screen py-20 lg:py-32">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    <div className="flex-grow w-full space-y-16 fade-up-anim">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-display font-black text-primary uppercase tracking-tighter leading-none mb-4">
                                Finalizar <br /> <span className="text-accent italic">Inversión</span>
                            </h1>
                            <p className="text-gray-400 font-sans text-lg uppercase tracking-[0.2em] font-black opacity-60">Datos de Entrega y Asesoría Técnica</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10 group">
                            <div className="space-y-6">
                                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] border-b border-gray-100 pb-4">01. Información de Contacto</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest pl-4">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border-2 border-gray-50 px-6 py-5 outline-none focus:border-accent transition-all font-bold text-sm"
                                            placeholder="Ej: Alejandro Modular"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest pl-4">Correo Electrónico</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border-2 border-gray-50 px-6 py-5 outline-none focus:border-accent transition-all font-bold text-sm"
                                            placeholder="tu@arquitectura.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] border-b border-gray-100 pb-4">02. Ubicación del Proyecto</h3>
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest pl-4">Dirección de Obra / Domicilio</label>
                                        <input
                                            required
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border-2 border-gray-50 px-6 py-5 outline-none focus:border-accent transition-all font-bold text-sm"
                                            placeholder="Carrera 15 # 100-01, Edificio Modular"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest pl-4">Ciudad</label>
                                            <select
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border-2 border-gray-50 px-6 py-5 outline-none focus:border-accent transition-all font-bold text-sm appearance-none cursor-pointer"
                                            >
                                                <option>Bogotá</option>
                                                <option>Medellín</option>
                                                <option>Cali</option>
                                                <option>Barranquilla</option>
                                                <option>Bucaramanga</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest pl-4">Teléfono Móvil</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border-2 border-gray-50 px-6 py-5 outline-none focus:border-accent transition-all font-bold text-sm"
                                                placeholder="+57 300 000 0000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10">
                                <button
                                    disabled={isProcessing}
                                    type="submit"
                                    className={`w-full relative overflow-hidden py-8 font-black uppercase tracking-[0.4em] text-xs transition-all duration-700 shadow-2xl active:scale-95 flex items-center justify-center gap-4 ${isProcessing ? 'bg-gray-100 text-gray-400' : 'bg-primary text-white hover:bg-accent hover:text-primary'}`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Validando Arquitectura de Pedido...
                                        </>
                                    ) : (
                                        'Confirmar Pedido y Solicitar Asesoría'
                                    )}
                                </button>
                                <p className="text-center text-[9px] text-gray-400 uppercase tracking-[0.3em] mt-6 opacity-60">
                                    Al confirmar, aceptas nuestros términos de fabricación y políticas de envío premium.
                                </p>
                            </div>
                        </form>
                    </div>

                    <aside className="w-full lg:w-[450px] shrink-0 sticky top-32 fade-up-anim stagger-2">
                        <div className="bg-white p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-50">
                            <h2 className="text-2xl font-display font-black text-primary uppercase tracking-tighter mb-10 border-b border-gray-50 pb-6">Resumen del Proyecto</h2>

                            <ul className="space-y-8 mb-10 max-h-[400px] overflow-y-auto pr-4 no-scrollbar">
                                {cart.map((item) => (
                                    <li key={item.id} className="flex gap-6 items-center">
                                        <div className="w-20 h-20 bg-gray-50 overflow-hidden shrink-0 relative">
                                            <Image src={item.image} fill className="object-cover" alt={item.name} />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-[10px] font-black text-primary uppercase tracking-widest leading-tight mb-2">{item.name}</h4>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Cant: {item.quantity}</span>
                                                <span className="text-sm font-display font-black text-primary">
                                                    {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.price * item.quantity)}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-4 border-t border-gray-100 pt-8 opacity-60">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    <span>Subtotal del Mobiliario</span>
                                    <span className="text-primary">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cartTotal * 0.81)}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    <span>IVA Estimado (19%)</span>
                                    <span className="text-primary">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cartTotal * 0.19)}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    <span>Envío Asegurado</span>
                                    <span className="text-green-600">Gratis</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mt-12 pt-8 border-t-2 border-primary">
                                <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Inversión Total</span>
                                <span className="text-4xl font-display font-black text-accent tracking-tighter">
                                    {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cartTotal)}
                                </span>
                            </div>

                            <div className="mt-12 p-6 bg-accent/5 flex items-start gap-4">
                                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <p className="text-[9px] text-gray-400 italic font-medium leading-relaxed uppercase tracking-widest">
                                    Un arquitecto experto verificará las dimensiones de tus muebles antes de iniciar la fabricación para asegurar un ajuste perfecto.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
