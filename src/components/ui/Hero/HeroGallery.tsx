"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";

import { HeroImages } from "./HeroImage";

interface ImageGalleryProps {
  images: HeroImages[];
  className?: string;
  maxImage?: number;
}

export default function HeroGallery({
  images,
  className = "",
  maxImage = 4,
}: ImageGalleryProps) {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length <= 1) return null;

  const galleryImages = images.slice(1, maxImage + 1);

  return (
    <div
      className={`w-full mx-auto [--side-gap:16px] lg:[--side-gap:120px] ${className}`}
      style={{ maxWidth: "min(100vw, calc(100vw - (var(--side-gap) * 2)))" }}
    >
      <Swiper
        modules={[Thumbs, EffectFade, Autoplay]}
        onSwiper={setMainSwiper}
        spaceBetween={24}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="rounded-2xl overflow-hidden mb-4 lg:mb-6"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={image.id || index}>
            <div className="relative mx-auto aspect-343/248 md:aspect-2/1">
              <Image
                src={image.image.url}
                alt={image.alt}
                fill
                sizes="100%"
                priority={index === 0}
                className="object-cover rounded-2xl md:aspect-2/1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={image.id || index}
              onClick={() => mainSwiper?.slideToLoop(index)}
              className={`relative w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out aspect-164/104 ${
                activeIndex === index ? "border-2 border-primary" : ""
              }`}
              aria-label={image.alt}
            >
              <Image
                src={image.image.url}
                alt={image.alt}
                fill
                sizes="100%"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
