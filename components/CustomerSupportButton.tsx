"use client";

export default function CustomerSupportButton() {
    return (
        <a
            href="https://wa.me/573210000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-accent p-4 rounded-full shadow-[0_10px_30px_rgba(251,191,72,0.4)] hover:scale-110 active:scale-95 transition-all group overflow-hidden"
            aria-label="Atención al cliente WhatsApp"
        >
            <div className="relative z-10 text-primary">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.808 1.59 5.391l-.999 3.647 3.9-.94z" />
                </svg>
            </div>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </a>
    );
}
