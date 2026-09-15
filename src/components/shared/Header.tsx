"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Bell,
    Feather,
    Headphones,
    Heart,
    LineChart,
    Menu,
    Search,
    ShoppingBag,
    User,
    X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const NAV_ICON_BUTTON =
    "inline-flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-accent hover:text-foreground";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(false);
    const [language, setLanguage] = React.useState("US EN");

    const isNavActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

    React.useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY > 8;
            setIsScrolled(scrolled);
            if (!scrolled) setDesktopMenuOpen(false);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300 font-secondary py-2",
                    isScrolled
                        ? "border-b border-border/60 bg-card/70 backdrop-blur-md supports-[backdrop-filter]:bg-card/60"
                        : "border-b border-transparent bg-card"
                )}
            >
                <div>
                    <div className="mx-auto flex h-16 max-w-[1920px] items-center gap-4 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() => setDesktopMenuOpen((v) => !v)}
                                className={cn(
                                    NAV_ICON_BUTTON,
                                    "hidden overflow-hidden transition-all duration-300 lg:inline-flex",
                                    isScrolled
                                        ? "mr-1 w-9 opacity-100"
                                        : "mr-0 w-0 opacity-0"
                                )}
                                aria-label="Open primary menu"
                                aria-expanded={desktopMenuOpen}
                                aria-hidden={!isScrolled}
                                tabIndex={isScrolled ? 0 : -1}
                            >
                                {desktopMenuOpen ? (
                                    <X className="size-[18px] shrink-0" />
                                ) : (
                                    <Menu className="size-[18px] shrink-0" />
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen((v) => !v)}
                                className={cn(NAV_ICON_BUTTON, "lg:hidden")}
                                aria-label="Menu"
                                aria-expanded={mobileMenuOpen}
                            >
                                {mobileMenuOpen ? (
                                    <X className="size-[18px]" />
                                ) : (
                                    <Menu className="size-[18px]" />
                                )}
                            </button>
                            {/* Logo */}
                            <Link
                                href="/"
                                className="flex shrink-0 items-center gap-1.5 text-2xl font-semibold italic tracking-tight text-blue-950 dark:text-blue-200"
                            >
                                <Image
                                    src="/assets/images/Hijabela-Logo.png"
                                    alt="Hijabela"
                                    width={120}
                                    height={120}
                                />
                            </Link>
                        </div>


                        {/* Search - desktop */}
                        <div className="hidden flex-1 justify-center md:flex">
                            <div className="relative w-full max-w-md">
                                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="h-10 w-full rounded-full border border-input bg-muted/50 pl-10 pr-16 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
                                />
                                <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 items-center rounded-md border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
                                    Ctrl+K
                                </kbd>
                            </div>
                        </div>

                        {/* Right side actions */}
                        <div className="ml-auto flex items-center gap-1 sm:gap-2">
                            {/* Search - mobile trigger */}
                            <button
                                type="button"
                                onClick={() => setMobileSearchOpen((v) => !v)}
                                className={cn(NAV_ICON_BUTTON, "md:hidden")}
                                aria-label="Search"
                            >
                                <Search className="size-[18px]" />
                            </button>

                            <button
                                type="button"
                                className={cn(NAV_ICON_BUTTON, "hidden lg:inline-flex")}
                                aria-label="Wishlist"
                            >
                                <Heart className="size-[18px]" />
                            </button>

                            <button
                                type="button"
                                className={cn(NAV_ICON_BUTTON, "hidden lg:inline-flex")}
                                aria-label="Compare"
                            >
                                <LineChart className="size-[18px]" />
                            </button>

                            <button
                                type="button"
                                className={cn(NAV_ICON_BUTTON, "hidden lg:inline-flex")}
                                aria-label="Notifications"
                            >
                                <Bell className="size-[18px]" />
                            </button>

                            <button
                                type="button"
                                className={cn(NAV_ICON_BUTTON, "hidden lg:inline-flex")}
                                aria-label="Support"
                            >
                                <Headphones className="size-[18px]" />
                            </button>

                            <button
                                type="button"
                                className={cn(NAV_ICON_BUTTON, "relative")}
                                aria-label="Cart"
                            >
                                <ShoppingBag className="size-[18px]" />
                                <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                                    1
                                </span>
                            </button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        type="button"
                                        className="hidden h-9 items-center gap-1 rounded-full border border-input px-3 text-xs font-medium text-foreground/80 transition-colors hover:bg-accent sm:inline-flex"
                                    >
                                        {language}
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setLanguage("US EN")}>
                                        US EN
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLanguage("UK EN")}>
                                        UK EN
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLanguage("FR")}>
                                        FR
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLanguage("AR")}>
                                        AR
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <ThemeToggle />

                            <button
                                type="button"
                                className="ml-1 hidden size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted ring-1 ring-border sm:inline-flex"
                                aria-label="Account"
                            >
                                <User className="size-[18px] text-muted-foreground" />
                            </button>
                        </div>
                    </div>

                    <nav
                        className={cn(
                            "hidden items-center justify-center gap-8 overflow-hidden lg:flex",
                            "transition-[max-height,opacity,transform,padding] duration-300 ease-in-out",
                            desktopMenuOpen
                                ? "max-h-16 translate-y-0 py-3 opacity-100"
                                : "pointer-events-none max-h-0 -translate-y-2 py-0 opacity-0"
                        )}
                        aria-label="Main navigation"
                        aria-hidden={!desktopMenuOpen}
                    >
                        {NAV_ITEMS.map((item) => {
                            const active = isNavActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    tabIndex={desktopMenuOpen ? 0 : -1}
                                    aria-current={active ? "page" : undefined}
                                    className={cn(
                                        "border-t-2 border-transparent pt-2 font-secondary text-base text-foreground/70 transition-all duration-200 ease-out",
                                        "hover:border-primary hover:text-foreground",
                                        active && "border-primary text-foreground"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Search - mobile expanded row */}
                {mobileSearchOpen && (
                    <div className="border-t border-border/60 px-4 py-3 md:hidden">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search products..."
                                className="h-10 w-full rounded-full border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                            />
                        </div>
                    </div>
                )}

                {/* Navigation and extra actions - mobile expanded menu */}
                {mobileMenuOpen && (
                    <>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 top-16 z-40 bg-foreground/20 lg:hidden"
                            aria-label="Close menu"
                        />
                        <div className="fixed left-0 top-16 z-50 flex h-screen w-[min(20rem,88vw)] flex-col overflow-y-auto border-r border-t border-border/60 bg-card px-5 py-5 shadow-xl lg:hidden">
                            <div className="mt-0 grid grid-cols-4 gap-2 border-b border-border/60 pb-4">
                                <button
                                    type="button"
                                    className="flex flex-col items-center gap-1 px-3 py-1 text-xs text-foreground/70"
                                >
                                    <Heart className="size-[18px]" />
                                    Wishlist
                                </button>
                                <button
                                    type="button"
                                    className="flex flex-col items-center gap-1 px-3 py-1 text-xs text-foreground/70"
                                >
                                    <LineChart className="size-[18px]" />
                                    Compare
                                </button>
                                <button
                                    type="button"
                                    className="flex flex-col items-center gap-1 px-3 py-1 text-xs text-foreground/70"
                                >
                                    <Bell className="size-[18px]" />
                                    Alerts
                                </button>
                                <button
                                    type="button"
                                    className="flex flex-col items-center gap-1 px-3 py-1 text-xs text-foreground/70"
                                >
                                    <Headphones className="size-[18px]" />
                                    Support
                                </button>
                            </div>
                            <nav className="flex flex-col gap-1" aria-label="Main navigation">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>

                        </div>
                    </>
                )}
            </header>
            <nav
                className="hidden items-center justify-center gap-8 border-b border-border/60 bg-card py-3 lg:flex"
                aria-label="Main navigation"
            >
                {NAV_ITEMS.map((item) => {
                    const active = isNavActive(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                                "border-t-2 border-transparent pt-2 font-secondary text-base text-foreground/70 transition-all duration-200 ease-out",
                                "hover:border-primary hover:text-foreground",
                                active && "border-primary text-foreground"
                            )}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}