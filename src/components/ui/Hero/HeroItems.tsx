export type HeroItem = {
  id: number;
  title: string;
  description: string;
};

export default function HeroItems({ items }: { items: HeroItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 pt-8 lg:pt-0 lg:gap-y-13 lg:gap-x-6 w-full max-w-full lg:max-w-[385px]">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-lg border border-border py-2 px-3 lg:border-none min-w-40"
        >
          <p className="text-[0.875rem] lg:text-base text-text-secondary font-medium pb-2 lg:pb-3">
            {item.title}
          </p>
          <h3 className="text-[1.125rem]! font-semibold! leading-7! lg:text-[1.375rem]! lg:leading-7.5!">
            {item.description}
          </h3>
        </li>
      ))}
    </ul>
  );
}
