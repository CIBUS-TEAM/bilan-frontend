import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import { cn } from "@/utilities/styles";
import Image from "next/image";

export interface TextItemsProps {
  __component: "sections.text-items";
  id: number;
  isBackgroundGrid: boolean;
  headers: {
    id: number;
    isCentered: boolean;
    badge: string;
    title: string;
    description: string;
  };
  items: {
    id: number;
    title: string;
    description: string;
  }[];
  cards: {
    id: number;
    icon: { alt: string; image: { url: string } };
    title: string;
    description: string;
  }[];
}

export function TextItems({ data }: { data: TextItemsProps }) {
  const { headers, isBackgroundGrid, cards, items } = data;

  return (
    <Section
      className={cn("flex flex-col gap-8 lg:gap-16", {
        "bg-cover bg-[url('/images/grid-background-mobile.webp')] md:bg-[url('/images/grid-background-desktop.webp')]":
          isBackgroundGrid,
      })}
    >
      <SectionHeaders
        {...headers}
        className={cn({ "mx-auto": headers.isCentered })}
      />
      {!!items.length && (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <span className="text-[32px] font-bold leading-[42px] text-primary lg:text-[56px] lg:leading-16">
                {item.title}
              </span>
              <span className="text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      )}
      {!!cards.length && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              className={cn(
                "bg-white border border-border rounded-2xl shadow-card p-4",
                "flex flex-col gap-6"
              )}
              key={card.id}
            >
              <Image
                height={48}
                width={48}
                src={card.icon.image.url}
                alt={card.icon.alt}
                title={card.icon.alt}
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg! font-semibold! leading-7! lg:text-[22px]! lg:leading-[30px]!">
                  {card.title}
                </h3>
                <p className="text-base font-medium leading-[26px] lg:text-lg lg:leading-7 text-text-secondary">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

export default TextItems;
