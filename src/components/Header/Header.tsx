import { fetchFromStrapi } from "@/fetch/fetch";
import Button from "../Button/Button";
import StrapiImage from "../StrapiImage/StrapiImage";
import { getLocale } from "next-intl/server";
import { cn } from "@/utilities/styles";
import NavLink from "../NavLink/NavLink";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

export async function StrapiHeader() {
  const locale = await getLocale();
  const headerData = await fetchFromStrapi(
    "/header",
    {
      locale,
      populate: {
        logo: { populate: { image: true } },
        links: true,
        button: true,
      },
    },
    "Header request"
  );
  const { logo, links, button } = headerData.data;

  return (
    <header
      className={cn(
        "text-text-main border-b border-border px-4 py-2 flex items-center justify-between lg:px-30 lg:py-4",
        "sticky top-0 left-0 w-full z-2 bg-white"
      )}
    >
      <Link href="/">
        <StrapiImage
          image={logo}
          width={100}
          height={40}
          className="w-[100] h-10"
        />
      </Link>
      <div className="gap-8 hidden xl:flex">
        {links.map(
          (link: {
            id: number;
            label: string;
            href: string;
            newTab: boolean;
          }) => (
            <NavLink
              className="text-base font-semibold leading-[26px] lg:text-base"
              key={link.id}
              href={link.href}
            >
              {link.label}
            </NavLink>
          )
        )}
      </div>
      <Button
        className="hidden xl:flex"
        variant="primary"
        withCTAIcon
        href={button.href}
      >
        {button.label}
      </Button>
      <BurgerMenu links={links} button={button} />
    </header>
  );
}

export default StrapiHeader;
