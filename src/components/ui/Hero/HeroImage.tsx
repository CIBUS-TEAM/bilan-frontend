import Image from "next/image";

export type HeroImages = {
  alt: string;
  id: number;
  image: {
    url: string;
    width?: number;
    height?: number;
  };
};

export default function HeroImage({
  images,
  className,
}: {
  images: HeroImages;
  className?: string;
}) {
  return (
    <Image
      src={images.image.url}
      alt={images.alt}
      width={images.image.width}
      height={images.image.height}
      className={`object-cover w-full h-full ${className}`}
    />
  );
}
