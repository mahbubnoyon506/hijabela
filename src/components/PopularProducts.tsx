"use client";

import { ProductCard, type ProductCardProps } from "./shared/ProductCard";

const products: ProductCardProps[] = [
    {
        id: 1,
        name: "Beautiful Oil Painted Multicolor Women Satin Silk Scarf",
        image: "/assets/images/product-1.jpg",
        hoverImage: "/assets/images/product-2.jpg",
        price: 690,
        compareAtPrice: 790,
        badge: "Sale",
        href: "/products/scarf",
    },
    {
        id: 2,
        name: "Classic Printed Satin Silk Scarf",
        image: "/assets/images/photo-1.jpeg",
        hoverImage: "/assets/images/photo.png",
        price: 720,
        href: "/products/classic-scarf",
    },
    {
        id: 3,
        name: "Elegant Multicolor Printed Hijab",
        image: "/assets/images/product-2.jpg",
        hoverImage: "/assets/images/product-1.jpg",
        price: 590,
        href: "/products/printed-hijab",
    },
    {
        id: 4,
        name: "Soft Everyday Modal Hijab",
        image: "/assets/images/photo.png",
        hoverImage: "/assets/images/photo-1.jpeg",
        price: 490,
        compareAtPrice: 550,
        badge: "Sale",
        href: "/products/modal-hijab",
    },
    {
        id: 5,
        name: "Premium Floral Silk Scarf",
        image: "/assets/images/product-1.jpg",
        hoverImage: "/assets/images/product-2.jpg",
        price: 850,
        href: "/products/floral-silk-scarf",
    },
    {
        id: 6,
        name: "Textured Georgette Everyday Hijab",
        image: "/assets/images/photo-1.jpeg",
        hoverImage: "/assets/images/photo.png",
        price: 530,
        href: "/products/georgette-hijab",
    },
    {
        id: 7,
        name: "Signature Satin Square Scarf",
        image: "/assets/images/product-2.jpg",
        hoverImage: "/assets/images/product-1.jpg",
        price: 780,
        compareAtPrice: 900,
        badge: "Sale",
        href: "/products/satin-square-scarf",
    },
    {
        id: 8,
        name: "Lightweight Premium Chiffon Hijab",
        image: "/assets/images/photo.png",
        hoverImage: "/assets/images/photo-1.jpeg",
        price: 620,
        href: "/products/chiffon-hijab",
    },
    {
        id: 9,
        name: "Hand-Finished Printed Silk Wrap",
        image: "/assets/images/product-1.jpg",
        hoverImage: "/assets/images/product-2.jpg",
        price: 890,
        href: "/products/silk-wrap",
    },
    {
        id: 10,
        name: "Soft Cotton Blend Daily Scarf",
        image: "/assets/images/photo-1.jpeg",
        hoverImage: "/assets/images/photo.png",
        price: 450,
        compareAtPrice: 520,
        badge: "Sale",
        href: "/products/cotton-blend-scarf",
    },
];

export default function PopularProducts() {
    return (
        <section className="px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-24">
            <h2 className="mb-4 text-center text-xl font-light tracking-[2.9px] text-primary md:text-2xl lg:text-4xl">
                Popular Products
            </h2>
            <p className="mb-4 md:mb-8 text-center font-secondary text-base tracking-[2px] text-foreground">
                Explore our most sought-after products, exceptional quality, elegant style.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        onAddToCart={(id) => console.log("add to cart", id)}
                        onBuyNow={(id) => console.log("buy now", id)}
                    />
                ))}
            </div>
        </section>
    );
}