import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: [
    "uk",
    // TODO: uncomment this when we add English translation
    // , "en"
  ],
  defaultLocale: "uk",
});
