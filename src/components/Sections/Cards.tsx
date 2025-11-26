import Section from "../ui/Section/Section";

export function Cards({ data }: { data: { __component: string } }) {
  return <Section>{data.__component}</Section>;
}

export default Cards;
