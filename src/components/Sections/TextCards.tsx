import { SectionHeadersData } from "@/types/types";
import SectionHeaders from "../ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";

export function TextCards({ data }: { data: { headers: SectionHeadersData } }) {
  return (
    <Section>
      <SectionHeaders {...data.headers} />
    </Section>
  );
}

export default TextCards;
