"use client";

import { useRef } from "react";
import { toast } from "react-toastify";
import Input from "../ui/Input/Input";
import SubmitButton from "./SubmitButton";
import { cn } from "@/utilities/styles";
import { useTranslations } from "next-intl";

interface ContactFormClientProps {
  nameField: { label: string; placeholder: string };
  phoneField: { label: string; placeholder: string };
  mailField: { label: string; placeholder: string };
  messageField: { label: string; placeholder: string };
  submitButton: { label: string };
  handleSubmit: (
    formData: FormData
  ) => Promise<{ success: boolean; error?: string }>;
}

export function ContactFormClient({
  nameField,
  phoneField,
  mailField,
  messageField,
  submitButton,
  handleSubmit,
}: ContactFormClientProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const t = useTranslations("ContactForm");

  async function onSubmit(formData: FormData) {
    const result = await handleSubmit(formData);

    if (result.success) {
      toast.success(t("successMessage"));
      formRef.current?.reset();
    } else {
      toast.error(t("errorMessage"));
    }
  }

  return (
    <form
      ref={formRef}
      action={onSubmit}
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
  );
}
