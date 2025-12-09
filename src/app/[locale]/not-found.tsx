import NotFoundSection from "@/components/Sections/NotFoundSection";

export default async function NotFound() {
  const data = {
    title: "Цю сторінку ще не змонтували.",
    description:
      "Ми вже працюємо над тим, щоб усе було на своєму місці. Поверніться на головну або оберіть розділ із меню.",
    buttonText: "Повернутися на головну",
  };
  return <NotFoundSection data={data} />;
}
