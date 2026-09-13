import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type OfferBannerProps = {
    eyebrow?: string;
    heading: React.ReactNode;
    description?: React.ReactNode;
    cta?: {
        label: string;
        href: string;
    };
    image: string;
    imageAlt?: string;
    /** Opacity applied to the background image, 0–1 (default 0.6) */
    imageOpacity?: number;
    /** Soft blurred color shapes layered over the image (default true) */
    backgroundEffect?: boolean;
    className?: string;
};

export function OfferBanner({
    eyebrow,
    heading,
    description,
    cta,
    image,
    imageAlt = "",
    imageOpacity = 0.6,
    backgroundEffect = true,
    className,
}: OfferBannerProps) {
    return (
        <section
            className={cn(
                "relative w-full overflow-hidden bg-secondary/40",
                className
            )}
        >
            {/* Background image — full bleed, anchored to the right */}
            <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={image}
                    alt={imageAlt}
                    className="absolute inset-0 size-full object-cover object-right"
                    style={{ opacity: imageOpacity }}
                    loading="lazy"
                />
                {/* Fades the image out toward the left so the content stays readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
            </div>

            {/* Decorative background effect */}
            {backgroundEffect && (
                <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
                    <div className="absolute -left-16 -top-16 size-72 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -bottom-20 left-1/3 size-80 rounded-full bg-primary/10 blur-3xl" />
                </div>
            )}

            {/* Content — left side, vertically centered */}
            <div className="relative z-10 mx-auto flex min-h-[380px] max-w-[1920px] items-center px-6 py-16 sm:min-h-[650px] sm:px-10 md:py-20 lg:px-16">
                <div className="flex max-w-md flex-col gap-4 text-left">
                    {eyebrow && (
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                            {eyebrow}
                        </span>
                    )}

                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                        {heading}
                    </h2>

                    {description && (
                        <p className="text-base text-muted-foreground">{description}</p>
                    )}

                    {cta && (
                        <Link
                            href={cta.href}
                            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:bg-primary/90"
                        >
                            {cta.label}
                            <ArrowRight className="size-4" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}