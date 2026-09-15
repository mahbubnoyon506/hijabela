"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

import { ProductCard, type ProductCardProps } from "./shared/ProductCard";

import "slick-carousel/slick/slick.css";

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
        image: "/assets/images/product-1.jpg",
        hoverImage: "/assets/images/product-2.jpg",
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
        name: "Premium Floral Silk Scarf",
        image: "/assets/images/photo-1.jpeg",
        hoverImage: "/assets/images/photo.png",
        price: 850,
        href: "/products/floral-silk-scarf",
    },
];

const arrowButtonClassName =
    "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-md ring-1 ring-border transition-colors hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-40";

export default function NewArrivals() {
    const sliderRef = React.useRef<Slider | null>(null);
    const [slidesToShow, setSlidesToShow] = React.useState(1);

    React.useEffect(() => {
        const updateSlides = () => {
            const width = window.innerWidth;

            if (width >= 1280) setSlidesToShow(4);
            else if (width >= 1024) setSlidesToShow(3);
            else if (width >= 768) setSlidesToShow(2);
            else setSlidesToShow(1);
        };

        updateSlides();
        window.addEventListener("resize", updateSlides);

        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    if (products.length === 0) return null;

    return (
        <section className="px-4 pb-8 sm:px-6 md:pb-12 lg:px-8 lg:pb-24">
            <h2 className="mb-4 text-center text-xl font-light tracking-[2.9px] text-primary md:text-2xl lg:text-4xl">
                New Arrivals
            </h2>
            <p className="mb-4 md:mb-8 text-center font-secondary text-base tracking-[2px] text-foreground">
                Discover the latest additions to our collection, featuring fresh styles and innovative designs.
            </p>

            <div className="relative mx-auto max-w-[1920px] px-8 sm:px-10">
                <button
                    type="button"
                    aria-label="Previous products"
                    title="Previous products"
                    className={`${arrowButtonClassName} left-0`}
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <ChevronLeft className="size-5" />
                </button>

                <Slider
                    ref={sliderRef}
                    arrows={false}
                    autoplay={products.length > 1}
                    autoplaySpeed={3500}
                    cssEase="ease-in-out"
                    infinite={products.length > slidesToShow}
                    pauseOnHover
                    slidesToScroll={1}
                    slidesToShow={slidesToShow}
                    speed={500}
                >
                    {products.map((product) => (
                        <div key={product.id} className="px-2">
                            <ProductCard
                                {...product}
                                onAddToCart={(id) => console.log("add to cart", id)}
                                onBuyNow={(id) => console.log("buy now", id)}
                            />
                        </div>
                    ))}
                </Slider>

                <button
                    type="button"
                    aria-label="Next products"
                    title="Next products"
                    className={`${arrowButtonClassName} right-0`}
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <ChevronRight className="size-5" />
                </button>
            </div>
        </section>
    );
}