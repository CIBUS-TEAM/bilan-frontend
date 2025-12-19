import { HeroSectionData } from "@/types/dynamicComponents";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import Button from "../Button/Button";

export function Hero({ data }: { data: HeroSectionData }) {
  const { headers, primaryButton, secondaryButton } = data;

  return (
    <div className="bg-black">
      <Section>
        <SectionHeaders {...headers} isHero isDesktopSecondary />
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col gap-3 mt-8 sm:flex-row lg:gap-4 lg:mt-12">
            {primaryButton && (
              <Button href={primaryButton.href} withCTAIcon>
                {primaryButton.label}
              </Button>
            )}
            {secondaryButton && (
              <Button href={secondaryButton.href} variant="secondary">
                {secondaryButton.label}
              </Button>
            )}
          </div>
        )}
      </Section>
    </div>
  );
}

export default Hero;
