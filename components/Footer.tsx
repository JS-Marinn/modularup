import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/5 text-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Col 1: About */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logos/LOGO-MODULAR-UP2.png"
                                    alt="Modular UP Isotipo"
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="text-accent font-display text-xl leading-none uppercase font-extrabold tracking-wider">MODULAR UP</h4>
                                <p className="text-white/40 text-[9px] leading-tight font-sans tracking-[0.2em] uppercase font-bold">Muebles & Diseños</p>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-body">
                            Modular UP es la marca líder en soluciones de mobiliario moderno. Redefinimos el concepto de modularidad para brindarte espacios que hablan de ti.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <a href="https://web.facebook.com/profile.php?id=61581668862918" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group">
                                <svg className="w-5 h-5 text-white/60 group-hover:text-primary fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/modular_up/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group">
                                <svg className="w-5 h-5 text-white/60 group-hover:text-primary fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@modular_up" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group">
                                <svg className="w-5 h-5 text-white/60 group-hover:text-primary fill-current" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.032 2.61.182 3.82.636l.244.1c1.38.618 2.053 1.956 2.053 1.956.12.324.516.48 1.08.484.444.02 1.056.02 2.22.02v4.44s-1.896-.06-3.336-.612c-1.44-.552-2.22-1.932-2.22-1.932l-.024 10.14c0 4.14-3.36 7.5-7.5 7.5S1.365 19.4 1.365 15.26s3.36-7.5 7.5-7.5c.348 0 .684.024 1.02.072v4.716c-.324-.132-.672-.204-1.032-.204-1.5 0-2.724 1.224-2.724 2.736S7.365 18 8.865 18s2.724-1.224 2.724-2.736v-15c.312-.132.612-.192.936-.244z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Info */}
                    <div className="space-y-6">
                        <h4 className="font-display text-lg tracking-widest uppercase font-bold text-accent">Empresa</h4>
                        <ul className="text-white/60 text-sm space-y-4">
                            <li><Link href="#" className="hover:text-accent transition-all">Sobre Nosotros</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-all">Nuestra Filosofía</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-all">Sostenibilidad</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-all">Trabaja con nosotros</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Servicio */}
                    <div className="space-y-6">
                        <h4 className="font-display text-lg tracking-widest uppercase font-bold text-accent">Atención</h4>
                        <ul className="text-white/60 text-sm space-y-4">
                            <li><Link href="#" className="hover:text-accent transition-all">PQRS y Garantías</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-all">Política de Envíos</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-all">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-all">Preguntas Frecuentes</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div className="space-y-6">
                        <h4 className="font-display text-lg tracking-widest uppercase font-bold text-accent">Contacto</h4>
                        <ul className="text-white/60 text-sm space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Calle 16 #10-57 Barrio Santa Librada, Neiva, Huila</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>+57 318 721 2151</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>ventas@modularup.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">© 2025 Modular UP - Todos los derechos reservados</p>
                    <div className="flex gap-8 text-white/40 text-[10px] uppercase tracking-[0.3em]">
                        <Link href="#" className="hover:text-white transition-all">Aviso Legal</Link>
                        <Link href="#" className="hover:text-white transition-all">Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
