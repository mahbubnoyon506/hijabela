"use client";

import * as React from "react";
import Link from "next/link";
import Slider from "react-slick";

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
    /** Max items visible at once on large screens (default 6) */
    maxVisible?: number;
};

/** Below this item count, the carousel is skipped in favor of a centered row */
const COMPACT_THRESHOLD = 5;

export function CategoryCarousel({
    title = "Categories",
    categories,
    className,
    maxVisible = 6,
}: CategoryCarouselProps) {
    if (categories.length === 0) return null;

    const isCompact = categories.length < COMPACT_THRESHOLD;

    const baseShow = Math.min(maxVisible, categories.length);
    const responsive = [
        { breakpoint: 1280, show: Math.min(5, categories.length) },
        { breakpoint: 1024, show: Math.min(4, categories.length) },
        { breakpoint: 768, show: Math.min(3, categories.length) },
        { breakpoint: 480, show: Math.min(2, categories.length) },
    ].map(({ breakpoint, show }) => ({
        breakpoint,
        settings: { slidesToShow: show, slidesToScroll: show },
    }));

    return (
        <section className={cn("w-full px-4 py-10 sm:px-6 lg:px-8", className)}>
            {title && (
                <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">
                    {title}
                </h2>
            )}

            {isCompact ? (
                <div className="flex w-full flex-wrap items-start justify-center gap-x-10 gap-y-8 lg:justify-items-center">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            ) : (
                <Slider
                    dots
                    arrows={false}
                    infinite={categories.length > baseShow}
                    speed={500}
                    slidesToShow={baseShow}
                    slidesToScroll={baseShow}
                    responsive={responsive}
                    appendDots={(dots) => (
                        <ul className="mt-8 flex list-none items-center justify-center gap-2">
                            {dots}
                        </ul>
                    )}
                    customPaging={() => (
                        <button
                            type="button"
                            aria-label="Go to slide"
                            className="block size-2 rounded-full border border-foreground/30 bg-transparent transition-colors [.slick-active_&]:border-foreground [.slick-active_&]:bg-foreground"
                        />
                    )}
                >
                    {categories.map((category) => (
                        <div key={category.id} className="px-3">
                            <CategoryCard category={category} />
                        </div>
                    ))}
                </Slider>
            )}
        </section>
    );
}

function CategoryCard({ category }: { category: CategoryItem }) {
    const content = (
        <div className="flex flex-col items-center gap-3">
            <div className="size-32 overflow-hidden rounded-full bg-muted sm:size-36 md:size-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={category.image}
                    alt={category.name}
                    className="size-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                />
            </div>
            <span className="text-sm font-medium text-foreground">
                {category.name}
            </span>
        </div>
    );

    if (category.href) {
        return (
            <Link href={category.href} className="block">
                {content}
            </Link>
        );
    }

    return content;
}