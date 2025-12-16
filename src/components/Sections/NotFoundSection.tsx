import Image from "next/image";
import Button from "@/components/Button/Button";
import { Page404Data } from "@/types/types";
import Section from "../ui/Section/Section";

function NotFoundContent({ data }: { data: Page404Data }) {
  const { title, description, button } = data;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-text-main md:text-white">{title}</h1>
        <h4 className="text-text-secondary md:text-white">{description}</h4>
      </div>

      <Button
        href={button.href}
        variant="secondary"
        className="border border-primary w-fit"
      >
        {button.label}
      </Button>
    </div>
  );
}

export function NotFoundSection({ data }: { data: Page404Data }) {
  const { mobileImage, desktopImage } = data;
  return (
    <>
      <Section className="relative min-h-[730px] hidden md:flex overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-404">
          <Image
            src={desktopImage.image.url}
            alt={desktopImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-end">
          <div className="max-w-[591px] flex flex-col gap-12">
            <NotFoundContent data={data} />
          </div>
        </div>
      </Section>
      <Section className="md:hidden py-8">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8 bg-gradient-404">
          <Image
            src={mobileImage.image.url}
            alt={mobileImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <NotFoundContent data={data} />
      </Section>
    </>
  );
}

export default NotFoundSection;
