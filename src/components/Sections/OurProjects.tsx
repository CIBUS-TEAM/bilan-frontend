import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import Button from "../Button/Button";
import { cn } from "@/utilities/styles";
import Link from "next/link";
import Image from "next/image";

export interface OurProjectsProps {
  __component: string;
  id: number;
  headers: {
    id: number;
    isCentered: boolean;
    badge: string;
    title: string;
    description: string;
  };
  button: {
    id: number;
    label: string;
    href: string;
    newTab: boolean;
  };
  cards: {
    description: string;
    id: number;
    title: string;
    year: number;
    link: { id: number; href: string; label: string; newTab: boolean };
    image: { alt: string; image: { url: string } };
  }[];
}

export function OurProjects({ data }: { data: OurProjectsProps }) {
  const { headers, button, cards } = data;

  return (
    <Section className="flex flex-col gap-8 lg:gap-12">
      <SectionHeaders {...headers} className="mx-auto" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.id}
            className="rounded-2xl border border-border bg-background-base"
            href={card.link.href}
          >
            <div className="w-full rounded-t-2xl aspect-3/2 relative">
              <Image
                className="rounded-t-2xl"
                src={card.image.image.url}
                alt={card.image.alt}
                title={card.image.alt}
                fill
              />
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
      <Button
        className="sm:w-fit sm:mx-auto"
        variant="primary"
        withCTAIcon
        href={button.href}
      >
        {button.label}
      </Button>
    </Section>
  );
}

export default OurProjects;
