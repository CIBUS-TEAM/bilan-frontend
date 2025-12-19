import Image from "next/image";
import Button from "../Button/Button";
import Section from "../ui/Section/Section";
import { CTABannerSectionData } from "@/types/dynamicComponents";

export function CTABanner({ data }: { data: CTABannerSectionData }) {
  const { title, description, button, mobileImage, desktopImage } = data;
  return (
    <Section className="bg-[linear-gradient(180deg,#0060DE_0%,#7EACDD_100%)] rounded-xl relative">
      <div className="max-w-[545px] z-1 relative">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px]! font-bold! leading-[42px]! text-white lg:text-[56px]! lg:leading-16!">
            {title}
          </h2>
          <p className="text-lg font-semibold leading-7 text-white lg:text-[22px] lg:leading-[30px]">
            {description}
          </p>
        </div>
        <Button
          className="mt-8 mb-6 lg:mt-12 sm:w-fit lg:mb-0"
          variant="secondary"
          href={button.href}
        >
          {button.label}
        </Button>
      </div>
      <div className="relative w-[calc(100%+32px)] max-h-[334px] -ml-4 -mb-12 rounded-b-xl overflow-hidden lg:hidden">
        <Image
          className="object-cover static!"
          src={mobileImage.image.url}
          title={mobileImage.alt}
          alt={mobileImage.alt}
          fill
        />
      </div>
      <Image
        className="right-0! bottom-0! max-h-[600px] max-w-[1075px] inset-auto! rounded-br-xl hidden lg:block object-cover"
        src={desktopImage.image.url}
        title={desktopImage.alt}
        alt={desktopImage.alt}
        fill
      />
    </Section>
  );
}

export default CTABanner;
