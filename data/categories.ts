export interface Subcategory {
    name: string;
    slug: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    subcategories: Subcategory[];
}

export const categories: Category[] = [
    {
        id: "cat-1",
        name: "Cocinas",
        slug: "cocinas",
        description: "Sistemas de cocina modulares con herrajes de alta gama y superficies ultra-resistentes.",
        image: "https://images.unsplash.com/photo-1556911223-e152041b6357?auto=format&fit=crop&q=80&w=1600",
        subcategories: [
            { name: "Línea Profesional", slug: "profesional" },
            { name: "Islas Modulares", slug: "islas" },
            { name: "Gabinetes Aéreos", slug: "gabinetes" },
            { name: "Alacenas Inteligentes", slug: "alacenas" }
        ]
    },
    {
        id: "cat-2",
        name: "Closets",
        slug: "closets",
        description: "Soluciones de almacenamiento inteligente para walk-in closets y armarios empotrados.",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600",
        subcategories: [
            { name: "Walk-in Closets", slug: "walk-in" },
            { name: "Armarios Integrados", slug: "armarios" },
            { name: "Organizadores Luxury", slug: "organizadores" },
            { name: "Vestidores Modulares", slug: "vestidores" }
        ]
    },
    {
        id: "cat-3",
        name: "Baños",
        slug: "banos",
        description: "Mobiliario resistente a la humedad con diseños minimalistas y almacenamiento optimizado.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1600",
        subcategories: [
            { name: "Vanities Modernos", slug: "vanities" },
            { name: "Columnas de Baño", slug: "columnas" },
            { name: "Espejos Inteligentes", slug: "espejos" },
            { name: "Accesorios Premium", slug: "accesorios" }
        ]
    },
    {
        id: "cat-4",
        name: "Coworking",
        slug: "coworking",
        description: "Estaciones de trabajo ergonómicas y sistemas de oficina para alta productividad.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
        subcategories: [
            { name: "Escritorios Pro", slug: "escritorios" },
            { name: "Módulos de Reunión", slug: "reunion" },
            { name: "Archivadores Técnicos", slug: "archivadores" },
            { name: "Sillas Ergonómicas", slug: "sillas" }
        ]
    }
];
