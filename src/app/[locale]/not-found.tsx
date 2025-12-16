import NotFoundSection from "@/components/Sections/NotFoundSection";
import { fetchFromStrapi } from "@/fetch/fetch";
import { getLocale } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();

  const data = await fetchFromStrapi("/not-found", {
    locale,
    populate: {
      button: true,
      desktopImage: { populate: { image: true } },
      mobileImage: { populate: { image: true } },
    },
  });

  return <NotFoundSection data={data.data} />;
}
