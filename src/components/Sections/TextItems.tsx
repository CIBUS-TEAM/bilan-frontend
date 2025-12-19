import { TextItemsSectionData } from "@/types/dynamicComponents";
import CountUp from "../ui/CountUp/CountUpWrapper";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import { cn } from "@/utilities/styles";
import Image from "next/image";

export function TextItems({ data }: { data: TextItemsSectionData }) {
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
      {!!items?.length && (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item) => {
            const numericValue = item.title.match(/\d+/)?.[0] || "0";
            return (
              <div key={item.id} className="flex flex-col gap-2">
                <CountUp end={Number(numericValue)} />
                <span className="text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      )}
      {!!cards?.length && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 ">
          {cards.map((card) => (
            <div
              className={cn(
                "bg-white border border-border rounded-2xl shadow-card p-4 transition-all duration-300 transform hover:-translate-y-2.5",
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
