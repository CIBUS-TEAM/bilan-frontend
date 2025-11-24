import { fetchFromStrapi } from "@/fetch/fetch";
import { getLocale } from "next-intl/server";

export async function StrapiContactForm() {
  const locale = await getLocale();
  const contactFormData = await fetchFromStrapi("/contact-form", {
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

  return <form>form-1</form>;
}

export default StrapiContactForm;
