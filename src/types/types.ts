import { routing } from "@/i18n/routing";

export type AppLocale = (typeof routing.locales)[number];

export interface PageProps<TParams = object> {
  params: Promise<{ locale: AppLocale } & TParams>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface SectionHeadersData {
  isCentered: boolean;
  badge?: string;
  title: string;
  description: string;
}

export interface StrapiButton {
  label: string;
  href: string;
  newTab: boolean;
}

export interface StrapiImageData {
  url: string;
}

export interface StrapiImage {
  id: number;
  alt: string;
  image: StrapiImageData;
}
export interface Page404Data {
  title: string;
  description: string;
  buttonText: string;
}
