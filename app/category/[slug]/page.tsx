import { categories } from "@/data/categories";
import CategoryClient from "./CategoryClient";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find(c => c.slug === slug);

    if (!category) {
        return {
            title: "Categoría No Encontrada | Modular UP",
        };
    }

    return {
        title: `${category.name} | Colección Modular UP`,
        description: category.description,
        openGraph: {
            title: `${category.name} | Colección Modular UP`,
            description: category.description,
            images: [category.image],
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = categories.find(c => c.slug === slug);

    return (
        <Suspense fallback={
            <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        }>
            <CategoryClient categorySlug={slug} initialCategory={category ? JSON.parse(JSON.stringify(category)) : null} />
        </Suspense>
    );
}
