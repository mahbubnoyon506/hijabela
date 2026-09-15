"use client";

import * as React from "react";
import Link from "next/link";
import { Feather, Mail, MapPin, Phone, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

type FooterLink = {
    label: string;
    href: string;
};

type FooterColumn = {
    title: string;
    links: FooterLink[];
};

const DEFAULT_COLUMNS: FooterColumn[] = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Blog", href: "/blog" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help Center", href: "/help" },
            { label: "Contact Us", href: "/contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Refund Policy", href: "/refund" },
        ],
    },
    {
        title: "Shop",
        links: [
            { label: "All Products", href: "/products" },
            { label: "Flash Sales", href: "/flash-sales" },
        ],
    },
];

export function Footer() {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email.trim()) return;
        console.log("subscribed:", email.trim());
        setEmail("");
    };

    return (
        <footer className={cn("font-secondary w-full border-t bg-card")}>
            <div className="mx-auto max-w-[1920px] px-4 py-5 sm:px-6 md:py-8 lg:px-8 lg:py-12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_repeat(4,1fr)] lg:gap-8">
                    {/* Brand + contact */}
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/"
                            className="flex w-fit items-center gap-1.5 text-2xl font-semibold italic text-blue-950 dark:text-blue-200"
                        >
                            <Image
                                src="/assets/images/Hijabela-Logo.png"
                                alt="Hijabela"
                                width={120}
                                height={120}
                            />
                        </Link>

                        <a
                            href="tel:+8801320380755"
                            className="flex items-center gap-2 text-xs text-foreground/80 transition-colors hover:text-foreground"
                        >
                            <Phone className="size-4 shrink-0" />
                            +8801320380755
                        </a>

                        <div className="flex items-start gap-2 text-xs text-foreground/80">
                            <MapPin className="size-4 shrink-0 translate-y-0.5" />
                            <span>House #35, Road #7, Block G, Dhaka-1213, Bangladesh</span>
                        </div>
                    </div>

                    {/* Link columns */}
                    {DEFAULT_COLUMNS.map((column) => (
                        <div key={column.title} className="flex flex-col gap-3">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.7px] text-foreground">
                                {column.title}
                            </h3>
                            <ul className="flex flex-col gap-2.5">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs text-foreground/70 transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter + copyright */}
                <div className="mt-10 flex flex-col items-start gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full max-w-md items-center gap-2 rounded-full border bg-background p-1.5 pl-4 shadow-sm sm:w-auto"
                    >
                        <Mail className="size-4 shrink-0 text-muted-foreground" />
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email for product updates"
                            className="w-full min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground sm:w-56"
                        />
                        <button
                            type="submit"
                            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#013966] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#013966]"
                        >
                            <Send className="size-3.5" />
                            Subscribe
                        </button>
                    </form>

                    <p className="text-xs text-muted-foreground">
                        {`© ${new Date().getFullYear()} Hijabela. All rights reserved.`}
                    </p>
                </div>
            </div>
        </footer>
    );
}