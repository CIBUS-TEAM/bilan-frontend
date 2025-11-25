import SectionHeaders from "../ui/Headers/SectionHeaders";

export function Pricing({
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

export default Pricing;
