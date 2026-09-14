"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type CollageItem = {
    id: string | number;
    type: "video" | "image";
    src: string;
    /** Poster frame shown while a video loads */
    poster?: string;
    alt?: string;
    href?: string;
    /** Small watermark logo shown in the top-right corner */
    logo?: string;
    /** Optional label revealed on hover */
    caption?: string;
};

export type VideoCollageProps = {
    items: CollageItem[];
    className?: string;
    /** Gap between tiles (default "gap-1") */
    gapClassName?: string;
};

const DESKTOP_COLS: Record<number, string> = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
};

export function VideoCollage({
    items,
    className,
    gapClassName = "gap-0",
}: VideoCollageProps) {
    if (items.length === 0) return null;

    const desktopColsClass =
        DESKTOP_COLS[Math.min(items.length, 6)] ?? DESKTOP_COLS[4];

    return (
        <section className={cn("w-full", className)}>
            <div
                className={cn(
                    "grid grid-cols-2",
                    desktopColsClass,
                    gapClassName
                )}
            >
                {items.map((item) => (
                    <div key={item.id} className="group relative aspect-[3/4] w-full overflow-hidden bg-muted sm:aspect-[3/5] md:aspect-[9/16]">

                        <video
                            className="absolute inset-0 size-full object-cover transition-transform duration-700"
                            src={item.src}
                            poster={item.poster}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
