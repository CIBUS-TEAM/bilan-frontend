import SectionHeaders from "../ui/Headers/SectionHeaders";

export function TextItems({
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

export default TextItems;
