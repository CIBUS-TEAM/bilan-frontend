import { StagesSectionData } from "@/types/dynamicComponents";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import { cn } from "@/utilities/styles";

export function Stages({ data }: { data: StagesSectionData }) {
  const { headers, items, image } = data;

  return (
    <Section className="flex flex-col gap-8 lg:gap-12">
      <SectionHeaders {...headers} className="mx-auto" />
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        {image.image?.formats?.small?.url ? (
          <div
            className="w-full rounded-2xl aspect-343/218 bg-cover sm:hidden"
            style={{
              backgroundImage: `url(${image.image.formats.small.url}), linear-gradient(180deg,#0060DE 0%,#7EACDD 100%)`,
            }}
          />
        ) : (
          <div
            className="w-full rounded-2xl aspect-343/218 bg-cover sm:hidden"
            style={{
              backgroundImage: `url(${image.image.url}), linear-gradient(180deg,#0060DE 0%,#7EACDD 100%)`,
            }}
          />
        )}
        <div
          className="w-full rounded-2xl aspect-343/218 bg-cover hidden sm:block lg:max-w-[487px] lg:aspect-487/586"
          style={{
            backgroundImage: `url(${image.image.url}), linear-gradient(180deg,#0060DE 0%,#7EACDD 100%)`,
          }}
        />
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-full">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "p-4 bg-background-base flex flex-col gap-6 lg:flex-row lg:items-center",
                "ring ring-border shadow-card rounded-2xl"
              )}
            >
              <span className="text-[32px] font-bold leading-[42px] text-primary lg:text-[56px] lg:leading-16">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg! font-semibold! leading-7! lg:text-[22px]! lg:leading-[30px]!">
                  {item.title}
                </h3>
                <span className="text-base font-medium leading-[26px] text-text-secondary lg:text-lg  lg:leading-7">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Stages;
