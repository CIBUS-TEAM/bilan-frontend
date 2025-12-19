import Image from "next/image";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import { cn } from "@/utilities/styles";
import Button from "../Button/Button";
import Badge from "../ui/Badge/Badge";
import { TextCardsSectionData } from "@/types/dynamicComponents";

export function TextCards({ data }: { data: TextCardsSectionData }) {
  const { headers, isCardsGridColumn, cards } = data;

  return (
    <Section
      className={cn(
        "flex flex-col gap-8 lg:gap-12",
        "bg-cover bg-[url('/images/grid-background-mobile.webp')] md:bg-[url('/images/grid-background-desktop.webp')]"
      )}
    >
      <SectionHeaders {...headers} className="mx-auto" />
      {isCardsGridColumn ? (
        <div className="flex flex-col gap-6">
          {cards?.map((card) => (
            <article
              key={card.id}
              className="flex flex-col gap-4 md:flex-row-reverse"
            >
              {card.image && (
                <div className="relative w-full rounded-2xl aspect-3/2 md:max-w-[388px] md:min-w-[388px]">
                  <Image
                    className="rounded-2xl"
                    src={card.image.image.url}
                    alt={card.image.alt}
                    title={card.image.alt}
                    fill
                  />
                </div>
              )}
              <div className="flex flex-col p-4 bg-white rounded-2xl gap-8 shadow-card lg:p-6">
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h3 className="text-xl! font-semibold! leading-7! lg:text-[28px]! lg:leading-[38px]!">
                    {card.title}
                  </h3>
                  <p className="text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7">
                    {card.description}
                  </p>
                </div>
                <Button
                  className="mt-auto md:w-fit"
                  variant="primary"
                  withCTAIcon
                  href={card.button.href}
                >
                  {card.button.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards?.map((card) => (
            <article className="flex flex-col gap-4 lg:gap-0" key={card.id}>
              {card.image && (
                <div className="relative w-full rounded-2xl aspect-3/2 lg:rounded-b-none">
                  <Image
                    className="rounded-2xl lg:rounded-b-none"
                    src={card.image.image.url}
                    alt={card.image.alt}
                    title={card.image.alt}
                    fill
                  />
                </div>
              )}
              <div className="p-4 bg-white rounded-2xl flex flex-col gap-8 shadow-card flex-1 lg:lg:rounded-t-none">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <h3 className="text-xl! font-semibold! leading-7! lg:text-[28px]! lg:leading-[38px]!">
                      {card.title}
                    </h3>
                    <p className="text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7">
                      {card.description}
                    </p>
                  </div>
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:hidden">
                    {card?.badges?.map((badge) => (
                      <Badge
                        key={badge.id}
                        text={badge.text}
                        containerClassName="w-full justify-center text-center"
                      />
                    ))}
                  </div>
                  <ul className="hidden md:block list-disc pl-5">
                    {card?.badges?.map((badge) => (
                      <li
                        key={badge.id}
                        className="text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7"
                      >
                        {badge.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="mt-auto"
                  variant="primary"
                  withCTAIcon
                  href={card.button.href}
                >
                  {card.button.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}

export default TextCards;
