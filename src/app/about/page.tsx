import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Headphones, ShieldCheck, Truck } from "lucide-react";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

export const metadata: Metadata = {
    title: "About Us — Hijabela",
    description:
        "The story behind Hijabela: reviving Bangladesh's handloom and cotton saree heritage with a modern touch.",
};

const missionValues = [
    {
        title: "100% Authentic Cotton",
        description:
            "We use only handpicked, premium-quality cotton yarn, giving you unmatched comfort even in the heat.",
    },
    {
        title: "Artisan Craftsmanship",
        description:
            "Every saree carries the skilled touch and artistic detailing of Bangladesh's finest weavers.",
    },
    {
        title: "Original Designs",
        description:
            "Every Hijabela design is one-of-a-kind, created to stay in step with contemporary trends.",
    },
    {
        title: "Durability & Elegance",
        description:
            "We place special emphasis on colorfastness and sustainable weaving quality that lasts.",
    },
];

const trustBadges = [
    {
        icon: ShieldCheck,
        title: "Shop with Confidence",
        description:
            "Shop safely with curated products, all the way through to doorstep delivery.",
    },
    {
        icon: Headphones,
        title: "24/7 Customer Support",
        description:
            "For a hassle-free shopping experience, our support team is here around the clock.",
    },
    {
        icon: Truck,
        title: "Nationwide Delivery",
        description:
            "We deliver our authenticated products swiftly, anywhere in the country.",
    },
];

export default function AboutPage() {
    return (

        <main className="bg-background font-secondary text-foreground">
            <section className="mx-auto max-w-[1920px] text-center px-4 pt-8 sm:px-6 md:pt-12 lg:px-8 lg:pt-24">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Our Journey
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-balance text-muted-foreground">
                    Born from a dream to blend Bangladesh&apos;s heritage with modern
                    elegance, Hijabela&apos;s journey began with a simple belief — a
                    saree isn&apos;t just clothing, it&apos;s a reflection of a
                    woman&apos;s personality, elegance, and Bengali culture. We&apos;re
                    especially devoted to reviving the timeless comfort and softness
                    of our native cotton sarees in a fresh new light.
                </p>
            </section>

            {/* Our Mission — image left, text right */}
            <ValueSplit
                image="https://picsum.photos/seed/hijabela-craft-1/900/700"
                imageAlt="Handwoven saree detail"
                heading="Our Mission"
                className="mx-auto max-w-[1920px] px-6"
            >
                Our core mission is to revive Bangladesh&apos;s fading handloom and
                cotton textile heritage. Every saree — handwoven by the skilled
                hands of weavers from Tangail to the farthest corners of the
                country — comes straight to you. That&apos;s Hijabela&apos;s
                promise. We want every woman to feel the timeless elegance,
                tradition, and highest-quality craftsmanship of a genuine desi
                saree.
            </ValueSplit>

            {/* Why Hijabela */}
            <section className="mx-auto max-w-[1920px] px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-24">
                <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
                    Why Hijabela is right for you?
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {missionValues.map((value) => (
                        <div
                            key={value.title}
                            className="rounded-xl border bg-secondary/20 p-6 text-center"
                        >
                            <h3 className="font-semibold text-foreground">
                                {value.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Crafted by skilled hands — text left, image right */}
            <ValueSplit
                image="https://picsum.photos/seed/hijabela-craft-2/900/700"
                imageAlt="Woven saree pattern detail"
                heading="Touched by Skilled Hands"
                reverse
                className="mx-auto max-w-[1920px] px-6"
            >
                Behind every Hijabela saree lies the dedication and love of
                hundreds of looms and artisans. We&apos;re committed to improving
                the lives of these talented craftspeople, scattered across rural
                Bangladesh, and bringing their artistry to the world stage. When
                you buy a saree from Hijabela, you&apos;re not just making a
                purchase — you&apos;re supporting an age-old craft, and the
                artisan behind it.
            </ValueSplit>

            {/* Lifestyle banner */}
            <section className="mx-auto max-w-[1920px] px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-24">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                        Dress in Heritage Colors, Every Day
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-balance text-muted-foreground">
                        Discover modern elegance rooted in traditional style. We
                        don&apos;t just sell sarees — we tell the story of being
                        Bengali.
                    </p>
                </div>

                <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted sm:aspect-[16/8]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://picsum.photos/seed/hijabela-lifestyle/1600/900"
                        alt="Models wearing Hijabela sarees"
                        className="absolute inset-0 size-full object-cover"
                        loading="lazy"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-background/85 px-4 py-1.5 text-sm font-semibold italic text-blue-950 backdrop-blur-sm sm:right-6 sm:top-6">
                        Hijabela
                    </span>
                </div>
            </section>

            {/* Trust badges */}
            <section className="mx-auto max-w-[1920px] px-4 pb-8 sm:px-6 md:pb-12 lg:px-8 lg:pb-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {trustBadges.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="rounded-xl border bg-secondary/20 p-8 text-center"
                        >
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full border bg-background">
                                <Icon className="size-5 text-foreground/70" />
                            </div>
                            <h3 className="mt-4 font-semibold text-foreground">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>

    );
}

function ValueSplit({
    image,
    imageAlt,
    heading,
    children,
    reverse = false,
    className,
}: {
    image: string;
    imageAlt: string;
    heading: string;
    children: ReactNode;
    reverse?: boolean;
    className?: string;
}) {
    return (
        <section className={className}>
            <div className="grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:gap-16">
                <div
                    className={
                        reverse ? "order-2 md:order-2" : "order-2 md:order-1"
                    }
                >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={image}
                            alt={imageAlt}
                            className="absolute inset-0 size-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div
                    className={
                        reverse ? "order-1 md:order-1" : "order-1 md:order-2"
                    }
                >
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                        {heading}
                    </h2>
                    <p className="mt-4 text-muted-foreground">{children}</p>
                </div>
            </div>
        </section>
    );
}