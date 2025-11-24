/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards from "@/components/Sections/Cards";
import CTABanner from "@/components/Sections/CTABanner";
import Hero from "@/components/Sections/Hero";
import OurProjects from "@/components/Sections/OurProjects";
import Pricing from "@/components/Sections/Pricing";
import Stages from "@/components/Sections/Stages";
import TextCards from "@/components/Sections/TextCards";
import TextItems from "@/components/Sections/TextItems";
import { fetchFromStrapi } from "@/fetch/fetch";
import { notFound } from "next/navigation";

const components = {
  "sections.text-items": TextItems,
  "sections.text-cards": TextCards,
  "sections.stages": Stages,
  "sections.pricing": Pricing,
  "sections.our-projects": OurProjects,
  "sections.hero": Hero,
  "sections.cta-banner": CTABanner,
  "sections.cards": Cards,
};

export default async function Home(props: any) {
  const resolvedParams = await props.params;
  const slug = "/" + (resolvedParams.rest ?? []).join("/");

  const data = await fetchFromStrapi("/pages", {
    filters: { slug: { $eq: slug } },
    populate: {
      seo: { populate: { openGraph: true } },
      content: {
        on: {
          "sections.hero": {
            populate: {
              headers: true,
              primaryButton: true,
              secondaryButton: true,
              images: { populate: { image: true } },
              items: true,
            },
          },
          "sections.text-items": {
            populate: {
              headers: true,
              items: true,
              cards: {
                populate: { icon: { populate: { image: true } } },
              },
            },
          },
          "sections.text-cards": {
            populate: {
              headers: true,
              cards: {
                populate: {
                  badges: true,
                  button: true,
                  populate: { image: { populate: { image: true } } },
                },
              },
            },
          },
          "sections.stages": {
            populate: {
              headers: true,
              items: true,
              image: { populate: { image: true } },
            },
          },
          "sections.pricing": {
            populate: {
              headers: true,
              items: true,
              button: true,
            },
          },
          "sections.our-projects": {
            populate: {
              headers: true,
              button: true,
              cards: {
                populate: {
                  link: true,
                  image: {
                    populate: { image: true },
                  },
                },
              },
            },
          },
          "sections.cta-banner": {
            populate: {
              button: true,
              image: { populate: { image: true } },
            },
          },
          "sections.cards": {
            populate: { cards: { populate: { headers: true, items: true } } },
          },
        },
      },
    },
  });

  if (!data?.data.length) {
    notFound();
  }
  console.log(data, "pageData");
  return (
    <div>
      <main>
        {/* <h1>Header-1</h1>
        <h2>Header-2</h2>
        <h3>Header-3</h3>
        <h4>Header-4</h4>
        <h5>Header-5</h5>
        <p className="text-lg">Paragraph-18</p>
        <p className="text-base font-medium">Paragraph-16-medium</p>
        <p className="text-sm">Paragraph-14</p>
        <p className="text-xs">Paragraph-12</p>
        <p className="text-base font-semibold">Paragraph-16-semibold</p> */}
        {data.data[0].content.map((item: any) => {
          const key = item.__component as keyof typeof components;
          const Component = components[key];
          if (!Component) return null;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return <Component key={item.id + item.__component} data={item} />;
        })}
      </main>
    </div>
  );
}
