
"use client";

import * as React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import "slick-carousel/slick/slick.css";

export type BannerCta = {
    label: string;
    href: string;
    variant?: "solid" | "outline";
    /** Show the diagonal arrow icon (defaults to true for "outline") */
    icon?: boolean;
};

export type BannerSlide = {
    id: string | number;
    /** "image" renders an <img>, "video" renders an autoplaying <video> */
    type: "image" | "video";
    /** Image URL, or one/more video source URLs */
    src: string | { src: string; type?: string }[];
    /** Poster frame shown while a video loads */
    poster?: string;
    alt?: string;
    eyebrow?: string;
    heading: React.ReactNode;
    subheading?: React.ReactNode;
    ctas?: BannerCta[];
};

export type BannerProps = {
    slides: BannerSlide[];
    autoplay?: boolean;
    autoplaySpeed?: number;
    className?: string;
    /** Tailwind height classes for the slide viewport */
    heightClassName?: string;
};

export function Banner({
    slides,
    autoplay = true,
    autoplaySpeed = 6000,
    className,
    heightClassName = "h-[420px] sm:h-[480px] md:h-[802px]",
}: BannerProps) {
    const sliderRef = React.useRef<Slider | null>(null);
    const videoRefs = React.useRef<Array<HTMLVideoElement | null>>([]);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const playVideoAt = React.useCallback((index: number) => {
        videoRefs.current.forEach((video, i) => {
            if (!video) return;
            if (i === index) {
                video.currentTime = 0;
                void video.play().catch(() => { });
            } else {
                video.pause();
            }
        });
    }, []);

    if (slides.length === 0) return null;

    return (
        <div className={cn("group/banner relative w-full overflow-hidden", className)}>
            <Slider
                ref={sliderRef}
                dots={false}
                arrows={false}
                infinite={slides.length > 1}
                autoplay={autoplay && slides.length > 1}
                autoplaySpeed={autoplaySpeed}
                speed={700}
                fade
                cssEase="ease-in-out"
                pauseOnHover
                slidesToShow={1}
                slidesToScroll={1}
                beforeChange={(_, next) => setActiveIndex(next)}
                afterChange={(index) => playVideoAt(index)}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id}>
                        <div className={cn("relative w-full", heightClassName)}>
                            {slide.type === "video" ? (
                                <video
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                    }}
                                    className="absolute inset-0 size-full object-cover"
                                    poster={slide.poster}
                                    autoPlay={index === 0}
                                    muted
                                    loop
                                    playsInline
                                    preload={index === 0 ? "auto" : "metadata"}
                                >
                                    {typeof slide.src === "string" ? (
                                        <source src={slide.src} />
                                    ) : (
                                        slide.src.map((source) => (
                                            <source
                                                key={source.src}
                                                src={source.src}
                                                type={source.type}
                                            />
                                        ))
                                    )}
                                </video>
                            ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={slide.src as string}
                                    alt={slide.alt ?? ""}
                                    className="absolute inset-0 size-full object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            )}

                            {/* Legibility gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-end gap-4 px-6 pb-14 sm:px-10 sm:pb-16 md:px-14">
                                {slide.eyebrow && (
                                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-300/90">
                                        {slide.eyebrow}
                                    </span>
                                )}

                                <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-amber-300 drop-shadow-sm sm:text-4xl md:text-[2.75rem]">
                                    {slide.heading}
                                </h2>

                                {slide.subheading && (
                                    <p className="max-w-2xl text-sm font-medium text-white/90 sm:text-base">
                                        {slide.subheading}
                                    </p>
                                )}

                                {slide.ctas && slide.ctas.length > 0 && (
                                    <div className="mt-2 flex flex-wrap items-center gap-3">
                                        {slide.ctas.map((cta) => {
                                            const showIcon = cta.icon ?? cta.variant === "outline";
                                            const isSolid = cta.variant !== "outline";

                                            return (
                                                <Link
                                                    key={cta.label}
                                                    href={cta.href}
                                                    className={cn(
                                                        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]",
                                                        isSolid
                                                            ? "bg-gradient-to-r from-amber-300 to-yellow-500 text-blue-950 shadow-sm hover:from-amber-200 hover:to-yellow-400"
                                                            : "border border-amber-200/60 text-white hover:bg-white/10"
                                                    )}
                                                >
                                                    {cta.label}
                                                    {showIcon && (
                                                        <span
                                                            className={cn(
                                                                "inline-flex size-6 items-center justify-center rounded-full",
                                                                isSolid ? "bg-blue-950/10" : "bg-amber-300/90"
                                                            )}
                                                        >
                                                            <ArrowUpRight
                                                                className={cn(
                                                                    "size-3.5",
                                                                    isSolid ? "text-blue-950" : "text-blue-950"
                                                                )}
                                                            />
                                                        </span>
                                                    )}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom pagination dots */}
            {slides.length > 1 && (
                <div className="pointer-events-none absolute bottom-6 right-6 z-10 flex items-center gap-2 sm:bottom-8 sm:right-10">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => sliderRef.current?.slickGoTo(index)}
                            className={cn(
                                "pointer-events-auto size-2.5 rounded-full transition-all",
                                index === activeIndex
                                    ? "w-5 bg-emerald-500"
                                    : "bg-amber-200/50 hover:bg-amber-200/80"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}