import SectionHeaders from "../ui/Headers/SectionHeaders";

export function Hero({
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
      <SectionHeaders {...data.headers} isHero isDesktopSecondary />
    </section>
  );
}

export default Hero;
