import { fetchFromStrapi } from "@/fetch/fetch";
import StrapiButton from "../Button/Button";
import StrapiImage from "../StrapiImage/StrapiImage";
import { getLocale } from "next-intl/server";
import { cn } from "@/utilities/styles";
import NavLink from "../NavLink/NavLink";

export async function StrapiHeader() {
  const locale = await getLocale();
  const headerData = await fetchFromStrapi("/header", {
    locale,
    populate: {
      logo: { populate: { image: true } },
      links: true,
      button: true,
    },
  });
  const { logo, links, button } = headerData.data;

  return (
    <header
      className={cn(
        "text-text-main border-b border-border px-4 py-2 flex items-center justify-between lg:px-30 lg:py-4",
        "fixed top-0 left-0 w-full z-2 bg-white"
      )}
    >
      <StrapiImage image={logo} />
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
      <StrapiButton
        className="hidden xl:flex"
        variant="primary"
        withCTAIcon
        href={button.href}
      >
        {button.label}
      </StrapiButton>
      <div className="relative xl:hidden">
        <label
          htmlFor="burger"
          className="cursor-pointer w-8 h-6 flex flex-col justify-between items-center relative"
        >
          <input type="checkbox" id="burger" className="peer hidden" />
          <span className="z-2 block h-1 w-full bg-primary rounded transition-all duration-300 peer-checked:translate-y-2.5 peer-checked:rotate-45"></span>
          <span className="z-2 block h-1 w-full bg-primary rounded transition-all duration-300 peer-checked:opacity-0"></span>
          <span className="z-2 block h-1 w-full bg-primary rounded transition-all duration-300 peer-checked:-translate-y-2.5 peer-checked:-rotate-45"></span>

          <nav
            className="
            fixed top-14.5 lg:top-18.5 right-0 h-screen w-full bg-white
            translate-x-full transition-transform duration-300
            peer-checked:translate-x-0
            pt-10 px-4 pb-28 flex flex-col gap-6
            z-1 border-t border-border
          "
          >
            {links.map(
              (link: {
                id: number;
                label: string;
                href: string;
                newTab: boolean;
              }) => (
                <NavLink
                  className="text-base font-bold leading-[26px]"
                  key={link.id}
                  href={link.href}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <StrapiButton
              className="mt-auto sm:w-fit sm:mx-auto"
              variant="primary"
              withCTAIcon
              href={button.href}
            >
              {button.label}
            </StrapiButton>
          </nav>
        </label>
      </div>
    </header>
  );
}

export default StrapiHeader;
