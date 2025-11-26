import Section from "../ui/Section/Section";

export function CTABanner({ data }: { data: { __component: string } }) {
  return <Section>{data.__component}</Section>;
}

export default CTABanner;
