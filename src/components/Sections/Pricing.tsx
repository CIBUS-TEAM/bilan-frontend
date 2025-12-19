import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import { cn } from "@/utilities/styles";
import Button from "../Button/Button";
import { PricingSectionData } from "@/types/dynamicComponents";

export function Pricing({ data }: { data: PricingSectionData }) {
  const {
    typeColumnTitle,
    priceColumnTitle,
    termColumnTitle,
    headers,
    items,
    button,
  } = data;

  return (
    <Section
      className={cn(
        "flex flex-col gap-8 md:gap-12",
        "bg-cover bg-[url('/images/grid-background-mobile.webp')] md:bg-[url('/images/grid-background-desktop.webp')]"
      )}
    >
      <SectionHeaders {...headers} className="mx-auto" />
      {/* Mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        {items?.map((item) => (
          <div
            className={cn(
              "p-4 flex flex-col gap-6",
              "bg-white border-border border shadow-card rounded-2xl"
            )}
            key={item.id}
          >
            <span className="text-base font-bold leading-[26px]">
              {item.type}
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium leading-6 text-text-secondary">
                  {priceColumnTitle}
                </span>
                <span className="text-sm font-medium leading-6">
                  {item.price}
                </span>
              </div>
              <div className="h-px bg-border w-full" />
              <div className="flex justify-between">
                <span className="text-sm font-medium leading-6 text-text-secondary">
                  {termColumnTitle}
                </span>
                <span className="text-sm font-medium leading-6">
                  {item.term}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-4">
        <div className="flex bg-primary rounded-2xl lg:gap-20 text-lg font-bold leading-[22px] text-white px-4 py-2">
          <span className="flex-1">{typeColumnTitle}</span>
          <span className="flex-1">{priceColumnTitle}</span>
          <span className="flex-1">{termColumnTitle}</span>
        </div>
        <div className="flex flex-col gap-2 text-base font-medium leading-[26px]">
          {items?.map((item) => (
            <div
              key={item.id}
              className="flex bg-white rounded-2xl lg:gap-20 border border-border shadow-card p-4"
            >
              <span className="flex-1">{item.type}</span>
              <span className="flex-1">{item.price}</span>
              <span className="flex-1">{item.term}</span>
            </div>
          ))}
        </div>
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

export default Pricing;
