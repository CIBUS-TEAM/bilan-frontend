import { fetchFromStrapi } from "@/fetch/fetch";
import StrapiImage from "../StrapiImage/StrapiImage";
import Link from "next/link";

function Socials({
  socials,
  className,
}: {
  socials: {
    id: number;
    image: { alt: string; image: { url: string } };
    link: { href: string };
  }[];
  className: string;
}) {
  return (
    <div className={className}>
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.link.href}
          className="text-text-secondary text-base font-medium leading-[26px]"
        >
          <StrapiImage image={social.image} className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
}
const populateFooter = {
  logo: { populate: { image: true } },
  socials: { populate: { image: { populate: { image: true } }, link: true } },
  links: true,
  contactsItems: true,
};

export async function StrapiFooter() {
  const { data: footer } = await fetchFromStrapi("/footer", {
    populate: populateFooter,
  });

  const {
    logo,
    description,
    socials,
    linksTitle,
    links,
    contactsTitle,
    contactsItems,
    copyRight,
  } = footer;

  return (
    <footer>
      <div className="md:flex gap-[9%] md:py-12 md:border-b md:border-border md:px-30">
        <div className="pt-12 px-4 pb-8 flex flex-col gap-4  border-b border-border md:flex-1 md:p-0 md:border-0">
          <StrapiImage image={logo} />
          <p className="text-text-secondary text-base font-medium leading-[26px] md:text-[18px] md:leading-7">
            {description}
          </p>
          <Socials
            className="mt-4 md:flex gap-6 hidden xl:mt-auto"
            socials={socials}
          />
        </div>
        <div className="pt-8 px-4 pb-7 flex flex-col gap-4 border-b border-border md:flex-1 md:p-0 md:border-0">
          <span className="text-base font-bold leading-[26px] md:text-[18px] md:leading-7">
            {linksTitle}
          </span>
          {links.map((link: { id: number; href: string; label: string }) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-text-secondary text-base font-medium leading-[26px] md:text-[18px] md:leading-7"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="py-8 px-4 flex flex-col gap-4 border-b border-border md:flex-1 md:p-0 md:border-0">
          <span className="text-base font-bold leading-[26px] md:text-[18px] md:leading-[22px]">
            {contactsTitle}
          </span>
          {contactsItems.map((item: { text: string; id: number }) => (
            <span
              className="text-text-secondary text-base font-medium leading-[26px] md:text-[18px] md:leading-7"
              key={item.id}
            >
              {item.text}
            </span>
          ))}
          <Socials className="mt-4 flex gap-8 md:hidden" socials={socials} />
        </div>
      </div>
      <div className="pt-8 pb-12 flex justify-center">
        <span className="text-text-secondary text-sm font-medium leading-6 md:text-[18px] md:leading-7">
          {copyRight}
        </span>
      </div>
    </footer>
  );
}

export default StrapiFooter;
