interface ImageData {
  id: number;
  image: { url: string; formats?: { small?: { url: string } } };
  alt: string;
}

interface HeadersData {
  id: number;
  isCentered: boolean;
  badge?: string;
  title?: string;
  description?: string;
}

interface LinkData {
  id: number;
  label: string;
  href: string;
  newTab: string;
}

export interface CardsSectionData {
  id: number;
  __component: "sections.cards";
  cards: {
    headers?: HeadersData;
    items?: { text: string }[];
  }[];
}

export interface CTABannerSectionData {
  id: number;
  __component: "sections.cta-banner";
  title: string;
  description: string;
  button: LinkData;
  desktopImage: ImageData;
  mobileImage: ImageData;
}

export interface HeroSectionData {
  id: number;
  __component: "sections.hero";
  headers: HeadersData;
  primaryButton?: LinkData;
  secondaryButton?: LinkData;
  images: ImageData[];
  items?: { title: string; description: string }[];
  isImageBackground: boolean;
}

export interface OurProjectsSectionData {
  id: number;
  __component: "sections.our-projects";
  headers: HeadersData;
  cards: {
    title: string;
    description: string;
    year: number;
    image: ImageData;
    link: LinkData;
  };
  button?: LinkData;
}

export interface PricingSectionData {
  id: number;
  __component: "sections.pricing";
  headers: HeadersData;
  typeColumnTitle: string;
  priceColumnTitle: string;
  termColumnTitle: string;
  items?: { type: string; price: string; term: string }[];
  button?: LinkData;
}

export interface StagesSectionData {
  id: number;
  __component: "sections.stages";
  headers: HeadersData;
  image: ImageData;
  items: { title: string; description: string }[];
}

export interface TextCardsSectionData {
  id: number;
  __component: "sections.text-cards";
  headers: HeadersData;
  cards?: {
    title: string;
    description: string;
    badges?: { text: string }[];
    button: LinkData;
    image?: ImageData;
  }[];
  isCardsGridColumn: boolean;
}

export interface TextItemsSectionData {
  id: number;
  __component: "sections.text-items";
  headers: HeadersData;
  items?: { title: string; description: string }[];
  cards?: {
    icon: ImageData;
    title: string;
    description: string;
  }[];
  isBackgroundGrid: boolean;
}
