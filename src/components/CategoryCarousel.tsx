"use client";

import { cn } from "@/lib/utils";

import "slick-carousel/slick/slick.css";

export type CategoryItem = {
    id: string | number;
    name: string;
    image: string;
    href?: string;
};

export type CategoryCarouselProps = {
    title?: string;
    categories: CategoryItem[];
    className?: string;
    maxVisible?: number;
};



export function CategoryCarousel({
    title = "Categories",
    subTitle = "Find Products by Category",
    categories,
    className,
    maxVisible = 6,
}: CategoryCarouselProps) {
    if (categories.length === 0) return null;



    return (
        <section className={cn("w-full px-4 py-8 md:py-12 lg:py-24 sm:px-6 lg:px-8", className)}>
            {title && (
                <h2 className="mb-4 text-center text-primary text-xl md:text-2xl lg:text-4xl font-light tracking-[2.9px] text-foreground">
                    {title}
                </h2>
            )}
            {subTitle && (
                <p className="mb-4 md:mb-8 text-center font-secondary text-base tracking-[2px] text-foreground">
                    {subTitle}
                </p>
            )}

            <div className="flex w-full flex-wrap items-start justify-center gap-x-10 gap-y-8 lg:justify-items-center">
                {categories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center gap-3">
                        <div className="size-36 overflow-hidden rounded-full bg-muted sm:size-40 md:size-64">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="size-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <span className="font-secondary text-base tracking-[2px] text-foreground">
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
