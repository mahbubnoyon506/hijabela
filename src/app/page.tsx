"use client";
import { Moon, Sparkles, SunMedium } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Banner, type BannerSlide } from "@/components/Banner";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { ProductCard } from "@/components/shared/ProductCard";
import { OfferBanner } from "@/components/OfferBanner";
import { Footer } from "@/components/shared/Footer";
import { VideoCollage } from "@/components/VideoCollage";
import NewArrivals from "@/components/NewArrivals";
import PopularProducts from "@/components/PopularProducts";

const slides = [
  // {
  //   id: 2,
  //   type: "video",
  //   src: "/assets/images/banner-video.mp4",
  //   poster: "/assets/images/photo.png",
  //   heading: ""
  // },
  {
    id: 1,
    type: "image",
    src: "/assets/images/download.jpeg",
    heading: "We are more than just a clothing brand",
    subheading: "We prioritize natural and responsibly sourced fabrics across our collections.",
    ctas: [
      { label: "Explore Products", href: "/shop", variant: "outline" },
    ],
  },
] satisfies BannerSlide[];

const categories = [
  { id: 1, name: "Skin Care", image: "/assets/images/category-1.png" },
  { id: 2, name: "Hair", image: "/assets/images/category-2.png" },
  { id: 3, name: "Jewellery", image: "/assets/images/category-1.png", href: "/category/jewellery" },
  { id: 4, name: "Bags", image: "/assets/images/category-2.png" },
  // { id: 5, name: "Belts", image: "/assets/images/category-1.png" },
  // { id: 6, name: "Kids", image: "/assets/images/category-2.png" },
  // { id: 7, name: "Kids", image: "/assets/images/category-1.png" },
  // { id: 8, name: "Kids", image: "/assets/images/category-2.png" },
]


export default function Home() {
  return (
    <div className="flex flex-1 flex-col">

      <Banner slides={slides} />
      <CategoryCarousel categories={categories} />
      <NewArrivals />

      <VideoCollage
        items={[
          { id: 1, type: "video", src: "/assets/images/1.mp4" },
          { id: 2, type: "video", src: "/assets/images/2.mp4" },
          { id: 3, type: "video", src: "/assets/images/3.mp4" },
          { id: 4, type: "video", src: "/assets/images/4.mp4" },
        ]}
      />


      <PopularProducts />

      {/* <OfferBanner
        eyebrow="Limited Time"
        heading="Get 25% Off Your First Order"
        description="Sign up today and unlock exclusive discounts on new arrivals."
        cta={{ label: "Shop the Offer", href: "/shop" }}
        image="/assets/images/photo.png"
        imageOpacity={0.6}
        backgroundEffect
      /> */}

    </div>
  );
}
