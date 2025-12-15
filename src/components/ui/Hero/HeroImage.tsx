import Image from "next/image";

export type HeroImages = {
  alt: string;
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
      width={images.image.width || 1440}
      height={images.image.height || 800}
      className={className}
    />
  );
}
