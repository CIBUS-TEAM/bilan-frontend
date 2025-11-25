import SectionHeaders from "../ui/Headers/SectionHeaders";

export function TextCards({
  data,
}: {
  data: {
    headers: {
      isCentered: boolean;
      badge?: string;
      title: string;
      description: string;
    };
  };
}) {
  return (
    <section>
      <SectionHeaders {...data.headers} />
    </section>
  );
}

export default TextCards;
