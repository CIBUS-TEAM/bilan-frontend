import { fetchFromStrapi } from "@/fetch/fetch";

export async function StrapiContactForm() {
  const contactFormData = await fetchFromStrapi("/contact-form", {
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
  // console.log(contactFormData, "contactFormData");
  return <form>form-1</form>;
}

export default StrapiContactForm;
