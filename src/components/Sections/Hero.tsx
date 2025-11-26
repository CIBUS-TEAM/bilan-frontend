import { SectionHeadersData } from "@/types/types";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";

export function Hero({ data }: { data: { headers: SectionHeadersData } }) {
  return (
    <div className="bg-black">
      <Section>
        <SectionHeaders {...data.headers} isHero isDesktopSecondary />
      </Section>
    </div>
  );
}

export default Hero;
