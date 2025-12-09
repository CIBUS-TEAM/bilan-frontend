import Image from "next/image";
import Button from "@/components/Button/Button";
import { Page404Data } from "@/types/types";
import Section from "../ui/Section/Section";

function NotFoundContent({ data }: { data: Page404Data }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-text-main md:text-white">{data.title}</h1>
        <h4 className="text-text-secondary md:text-white">
          {data.description}
        </h4>
      </div>

      <Button
        href="/"
        variant="secondary"
        className="border border-primary w-fit"
      >
        {data.buttonText}
      </Button>
    </div>
  );
}

export function NotFoundSection({ data }: { data: Page404Data }) {
  return (
    <>
      <Section className="relative min-h-[730px] hidden md:flex overflow-hidden md:mt-14 lg:mt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-404">
          <Image
            src="/images/404-desktop.webp"
            alt=""
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
      <Section className="md:hidden mt-14 py-8">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8 bg-gradient-404">
          <Image
            src="/images/404-mobile.webp"
            alt=""
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
