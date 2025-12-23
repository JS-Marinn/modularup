export default function OrdersPage() {
    return (
        <div className="py-24 bg-primary text-white min-h-[90vh] flex items-center relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(251,191,72,0.05)_0%,transparent_70%)] z-0"></div>

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h1 className="text-6xl md:text-7xl font-display font-extrabold mb-8 uppercase leading-none tracking-tighter">
                                Tu proyecto, <br /> <span className="text-accent underline decoration-white/20">a medida</span>
                            </h1>
                            <p className="text-secondary/80 font-body text-xl mb-12 leading-relaxed">
                                En Modular UP convertimos tus ideas en realidad. Ya sea una cocina completa o un estudio personal, estamos listos para fabricar tu visión.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <span className="w-12 h-12 bg-accent text-primary flex items-center justify-center rounded-full font-display font-extrabold text-xl shrink-0">1</span>
                                    <div>
                                        <h3 className="font-display font-extrabold uppercase tracking-widest text-lg mb-2">Asesoría de Diseño</h3>
                                        <p className="text-sm text-white/60">Agendamos una consultoría virtual o presencial para definir materiales y medidas.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="w-12 h-12 bg-accent text-primary flex items-center justify-center rounded-full font-display font-extrabold text-xl shrink-0">2</span>
                                    <div>
                                        <h3 className="font-display font-extrabold uppercase tracking-widest text-lg mb-2">Presupuesto Detallado</h3>
                                        <p className="text-sm text-white/60">Recibes una propuesta económica ajustada a tus requerimientos específicos.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <span className="w-12 h-12 bg-accent text-primary flex items-center justify-center rounded-full font-display font-extrabold text-xl shrink-0">3</span>
                                    <div>
                                        <h3 className="font-display font-extrabold uppercase tracking-widest text-lg mb-2">Fabricación y Montaje</h3>
                                        <p className="text-sm text-white/60">Llevamos tu mobiliario hasta tu puerta y nos encargamos de una instalación perfecta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-14 shadow-2xl relative">
                            <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
                            <h2 className="text-3xl font-display font-extrabold text-primary mb-10 uppercase tracking-tight">Formulario de Pedido</h2>

                            <form className="space-y-8 text-primary">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Nombre Completo</label>
                                        <input type="text" className="w-full border-b-2 border-gray-100 focus:border-accent py-3 outline-none transition-all font-body bg-transparent" placeholder="Sebastian Gomez" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Celular / WhatsApp</label>
                                        <input type="tel" className="w-full border-b-2 border-gray-100 focus:border-accent py-3 outline-none transition-all font-body bg-transparent" placeholder="+57 300 000 0000" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Correo Electrónico</label>
                                    <input type="email" className="w-full border-b-2 border-gray-100 focus:border-accent py-3 outline-none transition-all font-body bg-transparent" placeholder="hola@ejemplo.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">¿Qué proyecto tienes en mente?</label>
                                    <textarea rows={4} className="w-full border-b-2 border-gray-100 focus:border-accent py-3 outline-none transition-all font-body bg-transparent resize-none" placeholder="Cuéntanos un poco sobre el espacio que quieres transformar..."></textarea>
                                </div>
                                <div className="bg-secondary/30 p-4">
                                    <p className="text-[10px] text-primary/60 font-medium leading-relaxed italic">
                                        * No solicitamos pagos en línea en esta etapa. Tras enviar el formulario, coordinaremos la facturación y medios de pago de forma personalizada.
                                    </p>
                                </div>
                                <button className="w-full bg-primary text-white font-bold py-5 uppercase tracking-[0.2em] hover:bg-accent hover:text-primary transition-all text-xs shadow-xl active:scale-95">
                                    Enviar solicitud de proyecto
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
