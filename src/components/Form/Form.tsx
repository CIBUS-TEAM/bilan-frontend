import { fetchFromStrapi } from "@/fetch/fetch";
import { getLocale } from "next-intl/server";
import SectionHeaders from "@/components/ui/Headers/SectionHeaders";

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
    <section>
      <form>
        <SectionHeaders {...contactFormData.data.headers} />
      </form>
    </section>
  );
}

export default StrapiContactForm;
