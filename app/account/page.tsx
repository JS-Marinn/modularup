"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function AccountPage() {
    const { cartCount } = useCart();

    // Placeholder data
    const user = {
        name: "Sebastian Modular",
        email: "sebastian@modularup.com",
        memberSince: "Diciembre 2023",
        level: "Cliente Priority"
    };

    const recentOrders = [
        { id: "#MU-8924", date: "15 Dic, 2024", total: "$4.500.000", status: "En Fabricación" },
        { id: "#MU-8712", date: "02 Oct, 2024", total: "$12.800.000", status: "Entregado" }
    ];

    return (
        <div className="bg-[#fcfcfc] min-h-screen py-20 lg:py-32">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    {/* Left: Profile Summary */}
                    <aside className="w-full lg:w-80 shrink-0 space-y-10 fade-up-anim">
                        <div className="bg-primary p-10 text-white shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary font-display font-black text-3xl mb-6 shadow-xl">
                                    {user.name.charAt(0)}
                                </div>
                                <h2 className="text-2xl font-display font-black uppercase tracking-tighter mb-1">{user.name}</h2>
                                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest">{user.level}</p>

                                <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-1">Email</span>
                                        <span className="text-sm font-medium">{user.email}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-1">Miembro desde</span>
                                        <span className="text-sm font-medium">{user.memberSince}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {["Mi Perfil", "Mis Pedidos", "Direcciones", "Garantías", "Cerrar Sesión"].map((item, idx) => (
                                <button key={idx} className={`text-left py-4 px-6 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 border-l-2 ${idx === 0 ? 'border-accent bg-white text-primary shadow-sm' : 'border-transparent text-gray-400 hover:text-primary hover:border-gray-200'}`}>
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Right: Content */}
                    <div className="flex-grow space-y-20 fade-up-anim stagger-1 w-full">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-display font-black text-primary uppercase tracking-tighter leading-none mb-8">
                                Estado del <br /> <span className="text-accent italic">Portafolio</span>
                            </h1>
                            <p className="text-gray-400 font-sans text-lg uppercase tracking-[0.2em] font-black opacity-60">Seguimiento de Fabricación y Logística</p>
                        </div>

                        <div className="space-y-10">
                            <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] border-b border-gray-100 pb-4">Pedidos Recientes</h3>

                            <div className="space-y-6">
                                {recentOrders.map((order) => (
                                    <div key={order.id} className="bg-white border border-gray-50 p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:shadow-xl transition-all duration-500 group">
                                        <div className="flex items-center gap-8 w-full md:w-auto">
                                            <div className="w-16 h-16 bg-gray-50 flex items-center justify-center text-primary/20 group-hover:text-accent transition-colors">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                            </div>
                                            <div>
                                                <span className="text-xs font-black text-primary uppercase tracking-widest">{order.id}</span>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{order.date}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end flex-grow">
                                            <div className="text-right">
                                                <span className="block text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">Inversión</span>
                                                <span className="text-lg font-display font-black text-primary">{order.total}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">Estado</span>
                                                <span className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-full ${order.status === 'En Fabricación' ? 'bg-accent/10 text-accent' : 'bg-green-50 text-green-600'}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <button className="p-3 border border-gray-100 hover:bg-primary hover:text-white transition-all duration-500">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-accent/5 p-10 border border-accent/10 space-y-6">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Asesoría Prioritaria</h4>
                                <p className="text-gray-400 text-sm leading-relaxed italic">Como cliente Priority, tienes acceso directo a nuestro equipo de arquitectura para cualquier ajuste técnico.</p>
                                <button className="text-[9px] font-black uppercase tracking-[0.3em] text-accent border-b border-accent/30 pb-1 hover:border-accent transition-all">Hablar con un Experto</button>
                            </div>
                            <div className="bg-primary p-10 text-white space-y-6">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Garantía Extendida</h4>
                                <p className="text-white/50 text-sm leading-relaxed">Todas tus piezas cuentan con respaldo estructural por 10 años bajo el Standard Modular UP.</p>
                                <button className="text-[9px] font-black uppercase tracking-[0.3em] text-white border-b border-white/30 pb-1 hover:border-white transition-all">Ver Certificados</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
