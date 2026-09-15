"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";

import { ProductCard } from "@/components/shared/ProductCard";
import { useState } from "react";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "Digital Printed Soft Silk Saree",
        price: 690.00,
        compareAtPrice: 1000.00,
        image: "/assets/images/product-1.jpg",
        hoverImage: "/assets/images/product-2.jpg",
        category: "saree",
        subCategory: "soft-silk",
        badge: "Sale",
        inStock: true,
    },
    {
        id: 2,
        name: "Premium Digital Printed Soft Silk Saree",
        price: 690.00,
        compareAtPrice: 800.00,
        image: "/assets/images/photo-1.jpeg",
        hoverImage: "/assets/images/photo.png",
        category: "saree",
        subCategory: "lama-silk",
        badge: "Hot",
        inStock: true,
    },
    {
        id: 3,
        name: "Hand Block Print Soft Silk Saree",
        price: 850.00,
        compareAtPrice: 1200.00,
        image: "/assets/images/product-2.jpg",
        hoverImage: "/assets/images/product-1.jpg",
        category: "saree",
        subCategory: "hand-block",
        inStock: true,
    },
    {
        id: 4,
        name: "Jamdani Traditional Festive Saree",
        price: 2450.00,
        compareAtPrice: 3000.00,
        image: "/assets/images/photo.png",
        hoverImage: "/assets/images/photo-1.jpeg",
        category: "saree",
        subCategory: "jamdani",
        badge: "New",
        inStock: true,
    },
    {
        id: 5,
        name: "Elegant Chiffon Hijab & Scarf Set",
        price: 350.00,
        image: "/assets/images/product-1.jpg",
        hoverImage: "/assets/images/product-2.jpg",
        category: "hijab-scarf",
        subCategory: "chiffon",
        inStock: true,
    },
    {
        id: 6,
        name: "Aarong Boutique Embroidered Saree",
        price: 1800.00,
        compareAtPrice: 2200.00,
        image: "/assets/images/photo-1.jpeg",
        hoverImage: "/assets/images/photo.png",
        category: "saree",
        subCategory: "aarong",
        inStock: false,
    },
];

export function ShopPage() {
    const [selectedAvailability, setSelectedAvailability] = React.useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>(["saree"]);
    const [selectedSubCategories, setSelectedSubCategories] = React.useState<string[]>([]);
    const [priceRange, setPriceRange] = React.useState<number>(5000);
    const [sortBy, setSortBy] = React.useState<string>("latest");
    const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState<boolean>(false);
    const [visibleCount, setVisibleCount] = React.useState<number>(6);

    // Collapsible section toggles
    const [isAvailabilityOpen, setIsAvailabilityOpen] = useState<boolean>(true);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);
    const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true);

    // Handlers for toggling checkboxes
    const toggleCheckbox = (id: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (list.includes(id)) {
            setList(list.filter((item) => item !== id));
        } else {
            setList([...list, id]);
        }
    };

    return (
        <div className="min-h-screen bg-background font-secondary text-foreground">

            {/* Main Wrapper */}
            <div className="mx-auto max-w-[1920px] px-4 py-6 sm:px-6 lg:px-8">

                {/* Header & Breadcrumb / Controls Top Bar */}
                <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between border-b border-border/60 pb-6 gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[1px] text-foreground font-sans">
                            Shop
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground tracking-[0.5px]">
                            Showing {Math.min(visibleCount, DUMMY_PRODUCTS.length)} of {DUMMY_PRODUCTS.length} products
                        </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4">
                        {/* Mobile Filter Button */}
                        <button
                            onClick={() => setIsMobileFilterOpen(true)}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm lg:hidden hover:bg-secondary transition-colors"
                        >
                            <SlidersHorizontal className="size-4" />
                            Filters
                        </button>

                        {/* Sorting Dropdown */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground uppercase tracking-wider hidden sm:inline">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold tracking-wide text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            >
                                <option value="latest">Latest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="popular">Most Popular</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Content Grid: Sidebar + Product Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* DESKTOP SIDEBAR FILTERS */}
                    <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-card rounded-2xl border border-border/60 p-6">
                        <div className="flex items-center justify-between pb-4 border-b border-border">
                            <h2 className="text-base font-semibold tracking-wider text-foreground uppercase">Filters</h2>
                            {(selectedAvailability.length > 0 || selectedCategories.length > 0 || selectedSubCategories.length > 0) && (
                                <button
                                    onClick={() => {
                                        setSelectedAvailability([]);
                                        setSelectedCategories([]);
                                        setSelectedSubCategories([]);
                                    }}
                                    className="text-xs text-primary hover:underline font-medium"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>

                        {/* Availability Filter */}
                        <div className="space-y-3 pb-6 border-b border-border/60">
                            <button
                                onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
                                className="flex w-full items-center justify-between text-sm font-semibold tracking-wider uppercase text-foreground"
                            >
                                <span>Availability</span>
                                {isAvailabilityOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                            </button>

                            {isAvailabilityOpen && (
                                <div className="space-y-2.5 pt-2">
                                    {[
                                        { id: "in-stock", label: "In Stock" },
                                        { id: "out-of-stock", label: "Out of Stock" },
                                        { id: "pre-order", label: "Pre-Order Items" },
                                    ].map((item) => (
                                        <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedAvailability.includes(item.id)}
                                                onChange={() => toggleCheckbox(item.id, selectedAvailability, setSelectedAvailability)}
                                                className="size-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                                            />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                                {item.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Categories with Nested Subcategories */}
                        <div className="space-y-3 pb-6 border-b border-border/60">
                            <button
                                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                                className="flex w-full items-center justify-between text-sm font-semibold tracking-wider uppercase text-foreground"
                            >
                                <span>Categories</span>
                                {isCategoriesOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                            </button>

                            {isCategoriesOpen && (
                                <div className="space-y-3 pt-2">
                                    {/* Main Category 1: Saree */}
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes("saree")}
                                                onChange={() => toggleCheckbox("saree", selectedCategories, setSelectedCategories)}
                                                className="size-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                                            />
                                            <span className="text-sm font-medium text-foreground">
                                                Saree (27)
                                            </span>
                                        </label>

                                        {/* Subcategories list */}
                                        <div className="pl-6 space-y-2 border-l border-border ml-2">
                                            {[
                                                { id: "lama-silk", name: "Lama Silk (1)" },
                                                { id: "pooja", name: "Pooja Collections" },
                                                { id: "soft-silk", name: "Soft Silk (3)" },
                                                { id: "aarong", name: "আারং বুটিক | Aarong Boutique" },
                                                { id: "jamdani", name: "জামদানি | Jamdani" },
                                                { id: "hand-block", name: "হ্যান্ড ব্লক প্রিন্ট | Hand Block Print (5)" },
                                                { id: "tangail", name: "টাঙ্গাইল তাঁত | Tangail Tat" },
                                            ].map((sub) => (
                                                <label key={sub.id} className="flex items-center gap-2.5 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedSubCategories.includes(sub.id)}
                                                        onChange={() => toggleCheckbox(sub.id, selectedSubCategories, setSelectedSubCategories)}
                                                        className="size-3.5 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                                                    />
                                                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                                        {sub.name}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Main Category 2: Hijab & Scarf */}
                                    <div className="pt-2">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes("hijab-scarf")}
                                                onChange={() => toggleCheckbox("hijab-scarf", selectedCategories, setSelectedCategories)}
                                                className="size-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                                            />
                                            <span className="text-sm font-medium text-foreground">
                                                Hijab & Scarf
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Price Range Filter */}
                        <div className="space-y-3">
                            <button
                                onClick={() => setIsPriceOpen(!isPriceOpen)}
                                className="flex w-full items-center justify-between text-sm font-semibold tracking-wider uppercase text-foreground"
                            >
                                <span>Price Range</span>
                                {isPriceOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                            </button>

                            {isPriceOpen && (
                                <div className="space-y-4 pt-2">
                                    <input
                                        type="range"
                                        min="200"
                                        max="10000"
                                        step="100"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(Number(e.target.value))}
                                        className="w-full accent-primary cursor-pointer"
                                    />
                                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                                        <span>৳ 200</span>
                                        <span className="text-primary font-bold">৳ {priceRange.toLocaleString()}</span>
                                        <span>৳ 10,000</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* MAIN PRODUCTS GRID AREA */}
                    <main className="lg:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {DUMMY_PRODUCTS.slice(0, visibleCount).map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    compareAtPrice={product.compareAtPrice}
                                    image={product.image}
                                    hoverImage={product.hoverImage}
                                    badge={product.badge}
                                    onAddToCart={(id) => alert(`Added product ${id} to cart!`)}
                                    onBuyNow={(id) => alert(`Proceeding to checkout for product ${id}`)}
                                    onAddToWishlist={(id) => alert(`Added product ${id} to wishlist!`)}
                                    onQuickView={(id) => alert(`Quick view for product ${id}`)}
                                    onCompare={(id) => alert(`Added product ${id} to compare`)}
                                />
                            ))}
                        </div>

                        {visibleCount < DUMMY_PRODUCTS.length && (
                            <div className="mt-12 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setVisibleCount((count) => Math.min(count + 6, DUMMY_PRODUCTS.length))}
                                    className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold tracking-[1.5px] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                                >
                                    Load more
                                </button>
                            </div>
                        )}
                    </main>

                </div>

            </div>

            {/* MOBILE FILTER DRAWER */}
            {isMobileFilterOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden bg-black/50 backdrop-blur-sm">
                    <div className="ml-auto w-full max-w-xs bg-background h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                                <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">Filters</h3>
                                <button
                                    onClick={() => setIsMobileFilterOpen(false)}
                                    className="p-1 rounded-lg text-muted-foreground hover:text-foreground"
                                >
                                    <X className="size-5" />
                                </button>
                            </div>

                            {/* Mobile Filters Content (Same as desktop) */}
                            <div className="space-y-6">
                                <div className="space-y-3 pb-6 border-b border-border/60">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Availability</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="size-4 rounded border-border text-primary accent-primary" />
                                            <span className="text-sm text-muted-foreground">In Stock</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="size-4 rounded border-border text-primary accent-primary" />
                                            <span className="text-sm text-muted-foreground">Out of Stock</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="space-y-3 pb-6 border-b border-border/60">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Categories</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" defaultChecked className="size-4 rounded border-border text-primary accent-primary" />
                                            <span className="text-sm font-medium text-foreground">Saree (27)</span>
                                        </label>
                                        <div className="pl-6 space-y-2">
                                            <span className="text-xs text-muted-foreground block">Soft Silk (3)</span>
                                            <span className="text-xs text-muted-foreground block">Jamdani</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                            <button
                                onClick={() => setIsMobileFilterOpen(false)}
                                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg text-xs tracking-wider uppercase shadow-sm"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ShopPage;