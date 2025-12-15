"use client";
import { useState } from "react";
import Image from "next/image";
import { HeroImages } from "./HeroImage";

interface ImageGalleryProps {
  images: HeroImages[];
  className?: string;
}

export default function ImageGallery({
  images,
  className = "",
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;
  const thumbnailImages = images.slice(1);
  const currentImage = thumbnailImages[selectedIndex];
  const allImages = images.slice(1, 5);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full rounded-2xl overflow-hidden mb-4 lg:mb-6">
        <Image
          src={currentImage.image.url}
          alt={currentImage.alt}
          width={1200}
          height={600}
          className="object-cover aspect-3/2 lg:aspect-4/2"
          priority
        />
      </div>

      {allImages.length > 1 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 ">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden  ${
                selectedIndex === index && "ring-2 ring-primary"
              }`}
              style={{ aspectRatio: "282/180" }}
              aria-label={`Переглянути ${image.alt}`}
            >
              <Image
                src={image.image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
