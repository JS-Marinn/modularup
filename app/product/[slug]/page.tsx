import { products } from "@/data/products";
import ProductClient from "./ProductClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find(p => p.slug === slug);

    if (!product) {
        return {
            title: "Producto No Encontrado | Modular UP",
        };
    }

    return {
        title: `${product.name} | Modular UP`,
        description: product.description,
        openGraph: {
            title: `${product.name} | Modular UP`,
            description: product.description,
            images: [product.image, ...product.gallery],
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = products.find(p => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <ProductClient product={JSON.parse(JSON.stringify(product))} />
    );
}
