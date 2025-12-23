import Image from "next/image";

type StrapiImageProps = {
  image: { alt: string; image: { url: string } };
  width?: number;
  height?: number;
  className?: string;
};

export function StrapiImage({
  image,
  height,
  width,
  className,
}: StrapiImageProps) {
  return (
    <Image
      alt={image.alt}
      title={image.alt}
      src={image.image.url}
      height={height || 100}
      width={width || 100}
      className={className}
    />
  );
}

export default StrapiImage;
