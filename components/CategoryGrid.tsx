import { categories } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";

export default function CategoryGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, idx) => (
                <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="group relative overflow-hidden h-[500px] cursor-pointer block fade-up-anim"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                >
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 transition-all duration-700 z-10"></div>
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-all duration-[30s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-x-10 bottom-16 z-20">
                        <div className="overflow-hidden mb-4">
                            <h3 className="text-4xl font-display font-black text-white leading-[0.85] uppercase tracking-tighter transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700">
                                {category.name}
                            </h3>
                        </div>
                        <p className="text-secondary/90 text-sm mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out font-sans leading-relaxed line-clamp-2">
                            {category.description}
                        </p>
                        <div className="inline-flex items-center gap-6 text-accent overflow-hidden group/btn relative">
                            <div className="h-0.5 w-10 bg-accent transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:w-20"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] transform group-hover:translate-x-2 transition-transform duration-700">Explorar Línea</span>
                        </div>
                    </div>
                    {/* Decorative overlay border */}
                    <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 transition-all duration-1000 z-30 pointer-events-none"></div>
                </Link>
            ))}
        </div>
    );
}
