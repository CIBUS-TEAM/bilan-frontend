import { fetchFromStrapi } from "@/fetch/fetch";
import { getLocale } from "next-intl/server";
import SectionHeaders from "@/components/ui/Headers/SectionHeaders";
import Section from "../ui/Section/Section";
import { SectionHeadersData, StrapiImage } from "@/types/types";
import { cn } from "@/utilities/styles";
import Input from "../ui/Input/Input";
import Image from "next/image";
import SubmitButton from "./SubmitButton";

interface InputField {
  label: string;
  placeholder: string;
}

interface ContactItem {
  id: number;
  title: string;
  description: string;
  icon: StrapiImage;
}

interface ContactFormData {
  data: {
    headers: SectionHeadersData;
    nameField: InputField;
    phoneField: InputField;
    mailField: InputField;
    messageField: InputField;
    contactItems: ContactItem[];
    submitButton: { label: string };
  };
}

export async function StrapiContactForm() {
  const locale = await getLocale();
  const contactFormData: ContactFormData = await fetchFromStrapi(
    "/contact-form",
    {
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
    },
    "Contact Form request"
  );

  const {
    headers,
    nameField,
    phoneField,
    mailField,
    messageField,
    contactItems,
    submitButton,
  } = contactFormData.data;

  async function handleSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    const text = `
<b>Нове звернення:</b>

<b>Ім'я:</b> ${name}
<b>Телефон:</b> ${phone}
<b>Email:</b> ${email}
<b>Сообщение:</b> ${message}
`;

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );
  }

  return (
    <Section
      className={cn(
        "flex flex-col items-center",
        "bg-cover bg-[url('/images/form-background-mobile.webp')] lg:bg-[url('/images/form-background-desktop.webp')] bg-background-base"
      )}
      id="contact-us"
    >
      <SectionHeaders {...headers} />
      <div className="w-full flex flex-col gap-6 lg:flex-row mt-8">
        <form
          action={handleSubmit}
          className={cn(
            "bg-white border border-border shadow-card rounded-2xl p-4",
            "flex flex-col gap-6 lg:gap-12 lg:flex-1 xl:flex-2"
          )}
        >
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row">
              <Input
                required
                id="name"
                label={nameField.label}
                placeholder={nameField.placeholder}
                className="flex-1"
              />
              <Input
                required
                id="phone"
                label={phoneField.label}
                placeholder={phoneField.placeholder}
                type="tel"
                className="flex-1"
              />
            </div>
            <Input
              required
              id="email"
              label={mailField.label}
              placeholder={mailField.placeholder}
              type="email"
            />
            <Input
              required
              id="message"
              label={messageField.label}
              placeholder={messageField.placeholder}
              as="textarea"
            />
          </div>
          <SubmitButton className="sm:w-fit">{submitButton.label}</SubmitButton>
        </form>
        <div className="lg:flex-1 flex flex-col gap-4">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "border border-border shadow-card rounded-2xl bg-white",
                "flex gap-4 items-center p-4 lg:p-8"
              )}
            >
              <Image
                src={item.icon.image.url}
                title={item.icon.alt}
                alt={item.icon.alt}
                height={56}
                width={56}
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium leading-6 text-text-secondary lg:text-base lg:leading-[26px]">
                  {item.title}
                </span>
                <span className="text-base font-semibold leading-[26px]">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default StrapiContactForm;
