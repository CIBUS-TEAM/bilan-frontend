import Badge from "../ui/Badge/Badge";
import Section from "../ui/Section/Section";

interface CardsSectionProps {
  __component: string;
  id: number;
  cards: {
    id: number;
    headers: {
      id: number;
      isCentered: boolean;
      badge: string;
      title: string;
      description: string;
    };
    items: { id: number; text: string }[];
  }[];
}

export function Cards({ data }: { data: CardsSectionProps }) {
  return (
    <Section className="flex flex-col gap-4 lg:gap-6">
      {data.cards.map((card) => (
        <div
          className="p-4 lg:p-6 border border-border rounded-2xl shadow-card flex flex-col gap-6"
          key={card.id}
        >
          <Badge text={card.headers.badge} withIcon />
          <div className="flex flex-col gap-2 lg:gap-4">
            <h3 className="text-xl! font-semibold! leading-7! lg:text-[28px]! lg:leading-[38px]!">
              {card.headers.title}
            </h3>
            {card.headers.description && (
              <p className="text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7">
                {card.headers.description}
              </p>
            )}
            {!!card.items.length && (
              <ul className="list-disc pl-7 text-base font-medium leading-[26px] text-text-secondary lg:text-lg lg:leading-7">
                {card.items.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}

export default Cards;
