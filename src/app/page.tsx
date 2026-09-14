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

const slides = [
  // {
  //   id: 2,
  //   type: "video",
  //   src: "/assets/images/banner-video.mp4",
  //   poster: "/assets/images/product-1.jpg",
  //   heading: ""
  // },
  {
    id: 1,
    type: "image",
    src: "/assets/images/product-1.jpg",
    heading: "Find Bangladesh's Top Voice Artists in One Click",
    subheading: "100+ Verified Artists | TVC/OVC | Audiobooks | IVR | Animation",
    ctas: [
      { label: "BECOME A VAAB MEMBER", href: "/join", variant: "solid" },
      { label: "SEE UPCOMING EVENTS", href: "/events", variant: "outline" },
    ],
  },
] satisfies BannerSlide[];

const categories = [
  { id: 1, name: "Skin Care", image: "/assets/images/category-1.png" },
  { id: 2, name: "Hair", image: "/assets/images/category-2.png" },
  { id: 3, name: "Jewellery", image: "/assets/images/category-3.png", href: "/category/jewellery" },
  { id: 4, name: "Bags", image: "/assets/images/category-4.png" },
  // { id: 5, name: "Belts", image: "/assets/images/category-5.png" },
  // { id: 6, name: "Kids", image: "/assets/images/category-6.png" },
  // { id: 7, name: "Kids", image: "/assets/images/category-7.png" },
  // { id: 8, name: "Kids", image: "/assets/images/category-8.png" },
]


export default function Home() {
  return (
    <div className="flex flex-1 flex-col">

      <Banner slides={slides} />
      <CategoryCarousel categories={categories} />
      <div className=" grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <ProductCard id={1}
          name="Beautiful Oil Painted Multicolor Women Satin Silk Scarf"
          image="/assets/images/product-1.jpg"
          hoverImage="/assets/images/product-2.jpg"
          price={690}
          compareAtPrice={790}
          badge="Sale"
          href="/products/scarf"
          onAddToCart={(id) => console.log("add to cart", id)}
          onBuyNow={(id) => console.log("buy now", id)} />
      </div>

      <VideoCollage
        items={[
          { id: 1, type: "video", src: "/assets/images/1.mp4" },
          { id: 2, type: "video", src: "/assets/images/2.mp4" },
          { id: 3, type: "video", src: "/assets/images/3.mp4" },
          { id: 4, type: "video", src: "/assets/images/4.mp4" },
        ]}
      />


      <div className=" grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <ProductCard id={1}
          name="Beautiful Oil Painted Multicolor Women Satin Silk Scarf"
          image="/assets/images/product-1.jpg"
          hoverImage="/assets/images/product-2.jpg"
          price={690}
          compareAtPrice={790}
          badge="Sale"
          href="/products/scarf"
          onAddToCart={(id) => console.log("add to cart", id)}
          onBuyNow={(id) => console.log("buy now", id)} />
      </div>

      <OfferBanner
        eyebrow="Limited Time"
        heading="Get 25% Off Your First Order"
        description="Sign up today and unlock exclusive discounts on new arrivals."
        cta={{ label: "Shop the Offer", href: "/shop" }}
        image="/assets/images/product-1.jpg"
        imageOpacity={0.6}
        backgroundEffect
      />

      <Footer
        phone="+8801320380755"
        address="House #35, Road #7, Block G, Dhaka-1213, Bangladesh"
        onSubscribe={(email) => console.log("subscribed:", email)}
      />
    </div>
  );
}
