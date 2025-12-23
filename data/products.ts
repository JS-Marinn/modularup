export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    oldPrice?: number;
    image: string;
    category: string;
    subcategory: string;
    slug: string;
    rating: number;
    reviewsCount: number;
    isOffer: boolean;
    stock: number;
    gallery: string[];
    colors: string[];
    features: string[];
}

export const products: Product[] = [
    // COCINAS
    {
        id: "p1",
        name: "Cocina Integral Pro-Chef v1",
        description: "Sistema de cocina modular con acabados en poliuretano brillante y herrajes de cierre lento alemanes.",
        price: 8500000,
        oldPrice: 10500000,
        image: "https://images.unsplash.com/photo-1556911223-e152041b6357?auto=format&fit=crop&q=80&w=1600",
        category: "cocinas",
        subcategory: "profesional",
        slug: "cocina-pro-chef-v1",
        rating: 5,
        reviewsCount: 12,
        isOffer: true,
        stock: 4,
        gallery: [
            "https://images.unsplash.com/photo-1556911223-e152041b6357?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1556912177-3ef9885f3961?auto=format&fit=crop&q=80&w=1600"
        ],
        colors: ["#FFFFFF", "#000000", "#172E3F"],
        features: ["Cierre lento", "Superficie anti-rayones", "Resistente al calor", "Personalizable"]
    },
    {
        id: "p2",
        name: "Isla Modular Avant-Garde",
        description: "Isla de cocina independiente con superficie en cuarzo negro y almacenamiento periférico.",
        price: 4200000,
        image: "https://images.unsplash.com/photo-1565182999561-18d7dc63c393?auto=format&fit=crop&q=80&w=1600",
        category: "cocinas",
        subcategory: "islas",
        slug: "isla-avant-garde",
        rating: 4,
        reviewsCount: 8,
        isOffer: false,
        stock: 12,
        gallery: ["https://images.unsplash.com/photo-1565182999561-18d7dc63c393?auto=format&fit=crop&q=80&w=1600"],
        colors: ["#172E3F", "#ABB1A5"],
        features: ["Puntos eléctricos integrados", "Cuarzo italiano", "Módulos intercambiables"]
    },
    // CLOSETS
    {
        id: "p3",
        name: "Walk-in Closet Master Suite",
        description: "Vestidor de gran formato con iluminación LED integrada y módulos especializados para calzado.",
        price: 12000000,
        oldPrice: 15400000,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600",
        category: "closets",
        subcategory: "walk-in",
        slug: "walk-in-master-suite",
        rating: 5,
        reviewsCount: 5,
        isOffer: true,
        stock: 2,
        gallery: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600"],
        colors: ["#E5E7EB", "#FBBF24"],
        features: ["Sensores de luz", "Cajoneras con terciopelo", "Herrajes invisibles"]
    },
    {
        id: "p4",
        name: "Organizador Luxury Zen",
        description: "Módulo de almacenamiento de pared para accesorios de lujo con acabados en madera texturizada.",
        price: 1850000,
        image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1600",
        category: "closets",
        subcategory: "organizadores",
        slug: "organizador-luxury-zen",
        rating: 5,
        reviewsCount: 15,
        isOffer: false,
        stock: 20,
        gallery: ["https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1600"],
        colors: ["#172E3F", "#FFFFFF"],
        features: ["Diseño ultra-slim", "Instalación oculta", "Madera certificada"]
    },
    // BAÑOS
    {
        id: "p5",
        name: "Vanity Floating Minimalist",
        description: "Mueble de baño flotante con lavabo integrado y acabado hidrófugo de alta duración.",
        price: 1250000,
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1600",
        category: "banos",
        subcategory: "vanities",
        slug: "vanity-floating-minimalist",
        rating: 4,
        reviewsCount: 22,
        isOffer: false,
        stock: 3,
        gallery: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1600"],
        colors: ["#FFFFFF", "#E5E7EB"],
        features: ["Resistente al agua", "Ahorro de espacio", "Fácil limpieza"]
    },
    // COWORKING
    {
        id: "p6",
        name: "Escritorio Pro-Work Modular",
        description: "Estación de trabajo ajustable con gestión de cables y superficie anti-huellas.",
        price: 2450000,
        oldPrice: 3200000,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
        category: "coworking",
        subcategory: "escritorios",
        slug: "escritorio-pro-work",
        rating: 5,
        reviewsCount: 30,
        isOffer: true,
        stock: 15,
        gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"],
        colors: ["#000000", "#172E3F"],
        features: ["Gestión de cables", "Superficie ergonómica", "Estructura de acero"]
    }
];
