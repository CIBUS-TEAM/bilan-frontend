import { HeroSectionData } from "@/types/dynamicComponents";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import Button from "../Button/Button";
import { cn } from "@/utilities/styles";
import HeroItems from "../ui/Hero/HeroItems";
import HeroGallery from "../ui/Hero/HeroGallery";
import HeroImage from "../ui/Hero/HeroImage";

export function Hero({ data }: { data: HeroSectionData }) {
  const {
    headers,
    primaryButton,
    secondaryButton,
    isImageBackground,
    images,
    items,
  } = data;

  const hasItems = !!items?.length && items.length > 0;
  const hasButtons = primaryButton || secondaryButton;
  const showDesktopRow = hasItems || (!isImageBackground && hasButtons);

  return (
    <div className="relative overflow-hidden lg:min-h-[800px] flex items-center justify-center">
      <Section className={showDesktopRow ? "lg:pt-0" : ""}>
        <div
          className={cn({
            "lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-x-14":
              showDesktopRow,
          })}
        >
          <SectionHeaders
            {...headers}
            isHero
            hasItems={hasItems}
            isDesktopSecondary={isImageBackground}
            className={cn({
              "max-w-full lg:max-w-[588px]": showDesktopRow,
            })}
          />
          {hasButtons && (
            <div
              className={cn(
                "flex flex-col gap-3 mt-8",
                "sm:flex-row",
                {
                  "lg:gap-4 lg:mt-12": isImageBackground,
                },
                {
                  "lg:flex-col lg:min-w-65 lg:mt-0":
                    !isImageBackground && !hasItems,
                }
              )}
            >
              {primaryButton && (
                <Button
                  href={primaryButton.href}
                  withCTAIcon
                  className="border border-primary"
                >
                  {primaryButton.label}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  href={secondaryButton.href}
                  variant="secondary"
                  className={cn("border border-primary text-primary ", {
                    "lg:text-black": isImageBackground,
                  })}
                >
                  {secondaryButton.label}
                </Button>
              )}
            </div>
          )}
          {hasItems && <HeroItems items={items} />}
        </div>
        {isImageBackground && (
          <div className="pt-8 lg:pt-0">
            <HeroImage
              images={images[0]}
              className="rounded-2xl lg:absolute lg:inset-0 lg:-z-10 lg:h-full lg:rounded-none object-cover w-screen aspect-343/218 md:aspect-2/1"
            />
          </div>
        )}
        {!isImageBackground && images.length === 1 && (
          <div className="pt-8 lg:pt-12">
            <HeroImage
              images={images[0]}
              className="rounded-2xl   w-screen aspect-343/218 md:aspect-2/1 "
            />
          </div>
        )}
        {images.length > 1 && (
          <div className="pt-8 lg:pt-12">
            <HeroGallery images={images} className="rounded-2xl" />
          </div>
        )}
      </Section>
    </div>
  );
}

export default Hero;
