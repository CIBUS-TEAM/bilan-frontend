import { fetchFromStrapi } from "@/fetch/fetch";
import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";
import { Locale } from "next-intl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const promises = routing.locales.map((locale) =>
    generateLocalizedSitemap(locale)
  );

  const results = await Promise.allSettled(promises);

  return results
    .filter((result) => result.status === "fulfilled")
    .reduce((acc, curr) => {
      acc.push(...curr.value);
      return acc;
    }, [] as MetadataRoute.Sitemap);
}

async function generateLocalizedSitemap(
  locale: Locale
): Promise<MetadataRoute.Sitemap> {
  const data = await fetchFromStrapi("/pages", { locale });

  return data.data.map((page: { slug: string; updatedAt: string }) => ({
    url: `${process.env.APP_PUBLIC_URL}${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: "weekly",
    // TODO: add alternative pages when we have more than one Locale
  }));
}
