import { fetchFromStrapi } from "@/fetch/fetch";
import { getLocale } from "next-intl/server";
import SectionHeaders from "@/components/ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";

export async function StrapiContactForm() {
  const locale = await getLocale();
  const contactFormData: {
    data: {
      headers: {
        isCentered: boolean;
        badge?: string;
        title: string;
        description: string;
      };
    };
  } = await fetchFromStrapi("/contact-form", {
    locale,
    populate: {
      nameField: true,
      phoneField: true,
      mailField: true,
      messageField: true,
      submitButton: true,
      contactItems: {
        populate: { icon: { populate: { image: true } } },
      },
      headers: true,
    },
  });

  return (
    <Section>
      <form>
        <SectionHeaders {...contactFormData.data.headers} />
      </form>
    </Section>
  );
}

export default StrapiContactForm;
