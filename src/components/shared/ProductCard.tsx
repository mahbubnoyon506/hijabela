"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeftRight, Eye, Heart, ShoppingCart, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

export type ProductCardProps = {
    id: string | number;
    name: string;
    href?: string;
    image: string;
    /** Shown on hover in place of `image`, crossfaded in */
    hoverImage?: string;
    price: number;
    /** Original price; shown struck-through with an auto-computed discount badge */
    compareAtPrice?: number;
    currency?: string;
    /** e.g. "Sale" — shown as a badge in the top-left corner */
    badge?: string;
    className?: string;
    onAddToCart?: (id: ProductCardProps["id"]) => void;
    onBuyNow?: (id: ProductCardProps["id"]) => void;
    onAddToWishlist?: (id: ProductCardProps["id"]) => void;
    onCompare?: (id: ProductCardProps["id"]) => void;
    onQuickView?: (id: ProductCardProps["id"]) => void;
};

const ICON_BUTTON =
    "cursor-pointer flex size-9 items-center justify-center rounded-full bg-background/95 text-foreground shadow-sm transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground hover:ring-primary";

const HIDDEN_UNTIL_HOVER =
    "translate-x-0 opacity-100 lg:translate-x-6 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-x-0 lg:group-focus-within:opacity-100";

export function ProductCard({
    id,
    name,
    href,
    image,
    hoverImage,
    price,
    compareAtPrice,
    currency = "Tk",
    badge,
    className,
    onAddToCart,
    onBuyNow,
    onAddToWishlist,
    onCompare,
    onQuickView,
}: ProductCardProps) {
    const hasDiscount = !!compareAtPrice && compareAtPrice > price;
    const discountPercent = hasDiscount
        ? Math.round(((compareAtPrice! - price) / compareAtPrice!) * 100)
        : null;

    return (
        <div
            className={cn(
                "group relative flex flex-col overflow-hidden bg-card font-secondary",
                className
            )}
        >
            {/* Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                {badge && (
                    <span className="absolute left-3 top-3 z-20 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        {badge}
                    </span>
                )}

                <img
                    src={image}
                    alt={name}
                    className={cn(
                        "absolute inset-0 size-full object-cover transition-opacity duration-500 ease-out",
                        hoverImage && "group-hover:opacity-0"
                    )}
                    loading="lazy"
                />
                {hoverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={hoverImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                        loading="lazy"
                    />
                )}

                {/* Hover action icons: Compare, Wishlist, Quick View */}
                <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
                    <button
                        type="button"
                        title="Compare"
                        onClick={() => onCompare?.(id)}
                        className={cn(ICON_BUTTON, HIDDEN_UNTIL_HOVER)}
                    >
                        <ArrowLeftRight className="size-4" />
                        <span className="sr-only">Compare</span>
                    </button>
                    <button
                        type="button"
                        title="Add to Wishlist"
                        onClick={() => onAddToWishlist?.(id)}
                        className={cn(ICON_BUTTON, HIDDEN_UNTIL_HOVER, "delay-75")}
                    >
                        <Heart className="size-4" />
                        <span className="sr-only">Add to Wishlist</span>
                    </button>
                    <button
                        type="button"
                        title="Quick View"
                        onClick={() => onQuickView?.(id)}
                        className={cn(ICON_BUTTON, HIDDEN_UNTIL_HOVER, "delay-150")}
                    >
                        <Eye className="size-4" />
                        <span className="sr-only">Quick View</span>
                    </button>
                </div>

                {/* Bottom action buttons — overlaid on the image, so the card never grows */}
                <div
                    className={cn(
                        "absolute inset-x-0 bottom-0 z-20 flex translate-y-0 gap-2 p-3 opacity-100",
                        "transition-all duration-300 ease-out",
                        "lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100",
                        "lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
                    )}
                >
                    <button
                        type="button"
                        onClick={() => onAddToCart?.(id)}
                        className="cursor-pointer inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-background/95 px-3 py-3 font-secondary text-xs tracking-[2px] font-semibold text-foreground shadow-sm ring-1 ring-border transition-colors hover:bg-secondary"
                    >
                        <ShoppingCart className="size-3.5" />
                        Add to Cart
                    </button>
                    <button
                        type="button"
                        onClick={() => onBuyNow?.(id)}
                        className="cursor-pointer inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-3 font-secondary text-xs tracking-[2px] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                    >
                        <Zap className="size-3.5" />
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 p-4">
                {href ? (
                    <Link
                        href={href}
                        className="mb-2 text-base font-medium tracking-[2px] line-clamp-2 text-foreground hover:underline"
                    >
                        {name}
                    </Link>
                ) : (
                    <p className="text-base tracking-[2px] line-clamp-2 text-foreground">
                        {name}
                    </p>
                )}

                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold tracking-[2px] text-primary">
                        {currency} {price.toFixed(2)}
                    </span>
                    {hasDiscount && (
                        <span className="text-xs tracking-[2px] text-muted-foreground line-through">
                            {currency} {compareAtPrice!.toFixed(2)}
                        </span>
                    )}
                    {discountPercent !== null && (
                        <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.5px] text-red-600 dark:bg-red-500/10 dark:text-red-400">
                            {discountPercent}% off
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}