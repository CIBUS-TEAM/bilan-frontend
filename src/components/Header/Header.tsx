import { fetchFromStrapi } from "@/fetch/fetch";
import StrapiButton from "../Button/Button";
import StrapiImage from "../StrapiImage/StrapiImage";
import Link from "next/link";

export async function StrapiHeader() {
  const headerData = await fetchFromStrapi("/header", {
    populate: {
      logo: { populate: { image: true } },
      links: true,
      button: true,
    },
  });
  const { logo, links, button } = headerData.data;
  console.log(headerData, "headerData");
  return (
    <header className="relative text-text-main border-b border-border px-4 py-2 flex items-center justify-between md:px-30">
      <StrapiImage image={logo} />
      <div className="relative">
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
            fixed top-14 right-0 h-screen w-full bg-white
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
                <Link
                  className="text-[16px] font-bold leading-[26px]"
                  key={link.id}
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
            )}
            <StrapiButton
              className="mt-auto"
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
