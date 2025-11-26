import { SectionHeadersData } from "@/types/types";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";

export function Pricing({ data }: { data: { headers: SectionHeadersData } }) {
  return (
    <Section>
      <SectionHeaders {...data.headers} />
    </Section>
  );
}

export default Pricing;
