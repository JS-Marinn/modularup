import { categories } from "@/data/categories";
import CategoryClient from "./CategoryClient";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

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
        <CategoryClient categorySlug={slug} initialCategory={JSON.parse(JSON.stringify(category))} />
    );
}
