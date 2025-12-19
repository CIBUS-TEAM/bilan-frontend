import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import Button from "../Button/Button";
import { cn } from "@/utilities/styles";
import Link from "next/link";
import Image from "next/image";
import CTAIcon from "../Icons/CTAIcon";
import { OurProjectsSectionData } from "@/types/dynamicComponents";

export function OurProjects({ data }: { data: OurProjectsSectionData }) {
  const { headers, button, cards } = data;

  return (
    <Section className="flex flex-col gap-8 lg:gap-12">
      <SectionHeaders {...headers} className="mx-auto" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.id}
            className="rounded-2xl ring ring-border bg-background-base"
            href={card.link.href}
          >
            <div className="relative aspect-343/298  md:aspect-384/298 w-full rounded-t-2xl overflow-hidden group">
              <Image
                className="rounded-t-2xl object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-60"
                src={card.image.image.url}
                alt={card.image.alt}
                fill
              />
              <div className="absolute inset-0 rounded-t-2xl border border-transparent transition-all duration-300 group-hover:border-primary" />
              <div className="absolute top-3 right-3 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <CTAIcon size="32px" />
              </div>
            </div>

            <div className="flex gap-3 flex-col p-4 lg:gap-4">
              <span className="text-lg font-semibold leading-7 lg:text-[22px] lg:leading-[30px]">
                {card.title}
              </span>
              <div
                className={cn(
                  "flex justify-between",
                  "text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7"
                )}
              >
                <span>{card.description}</span>
                <span>{card.year}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {button && (
        <Button
          className="sm:w-fit sm:mx-auto"
          variant="primary"
          withCTAIcon
          href={button.href}
        >
          {button.label}
        </Button>
      )}
    </Section>
  );
}

export default OurProjects;
