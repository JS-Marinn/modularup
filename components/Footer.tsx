import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/5 text-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Col 1: About */}
                    <div className="space-y-6">
                        <div className="relative h-16 w-48">
                            <Image
                                src="/logos/LOGO-MODULAR-UP-(VERSION-1).png"
                                alt="Modular UP Footer Logo"
                                fill
                                className="object-contain brightness-0 invert opacity-90"
                            />
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-body">
                            Modular UP es la marca líder en soluciones de mobiliario moderno. Redefinimos el concepto de modularidad para brindarte espacios que hablan de ti.
                        </p>
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
                                <span>Calle 123 # 45-67, Zona Industrial, Bogotá</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>+57 (601) 123 4567</span>
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
