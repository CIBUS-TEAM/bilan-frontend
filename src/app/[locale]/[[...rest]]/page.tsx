import StrapiContactForm from "@/components/Form/Form";
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
import { PageProps } from "@/types/types";
import { Metadata } from "next";
import {
  CardsSectionData,
  HeroSectionData,
  TextItemsSectionData,
  TextCardsSectionData,
  StagesSectionData,
  PricingSectionData,
  OurProjectsSectionData,
  CTABannerSectionData,
} from "@/types/dynamicComponents";

type PageSection =
  | HeroSectionData
  | TextItemsSectionData
  | TextCardsSectionData
  | StagesSectionData
  | PricingSectionData
  | OurProjectsSectionData
  | CTABannerSectionData
  | CardsSectionData;

function renderSection(item: PageSection) {
  const componentKey = item.__component;

  switch (componentKey) {
    case "sections.hero":
      return <Hero key={item.id} data={item} />;
    case "sections.cta-banner":
      return <CTABanner key={item.id} data={item} />;
    case "sections.text-items":
      return <TextItems key={item.id} data={item} />;
    case "sections.text-cards":
      return <TextCards key={item.id} data={item} />;
    case "sections.stages":
      return <Stages key={item.id} data={item} />;
    case "sections.pricing":
      return <Pricing key={item.id} data={item} />;
    case "sections.our-projects":
      return <OurProjects key={item.id} data={item} />;
    case "sections.cards":
      return <Cards key={item.id} data={item} />;
    default:
      return null;
  }
}

type Props = PageProps<{
  rest: string[];
}>;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const resolvedParams = await props.params;
  const slug = "/" + (resolvedParams.rest ?? []).join("/");
  const data = await fetchFromStrapi("/pages", {
    locale: resolvedParams.locale,
    filters: { slug: { $eq: slug } },
    populate: {
      seo: { populate: { metaImage: true } },
    },
  });
  if (!data?.data.length) {
    return {
      title: "Page not found",
    };
  }

  const seo = data?.data?.[0]?.seo || {};
  const { metaTitle, metaDescription, metaImage } = seo;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: metaImage?.url ? [metaImage.url] : undefined,
    },
  };
}

export default async function Home(props: Props) {
  const resolvedParams = await props.params;
  const slug = "/" + (resolvedParams.rest ?? []).join("/");

  const data = await fetchFromStrapi("/pages", {
    locale: resolvedParams.locale,
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
                  image: {
                    populate: {
                      image: true,
                    },
                  },
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
              mobileImage: { populate: { image: true } },
              desktopImage: { populate: { image: true } },
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

  return (
    <div>
      <main>
        {data.data[0].content.map((item: PageSection) => renderSection(item))}
        <StrapiContactForm />
      </main>
    </div>
  );
}
