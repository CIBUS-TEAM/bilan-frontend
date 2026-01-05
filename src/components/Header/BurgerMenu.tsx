"use client";

import { cn } from "@/utilities/styles";
import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import Button from "../Button/Button";
import { useTranslations } from "next-intl";

interface BurgerMenuProps {
  links: { id: number; label: string; href: string; newTab: boolean }[];
  button: { id: number; label: string; href: string; newTab: boolean };
}

export default function BurgerMenu({ links, button }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("BurgerMenu");
  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t("close") : t("open")}
        className="cursor-pointer w-8 h-6 flex flex-col justify-between items-center"
      >
        <span
          className={cn(
            "h-1 w-full bg-primary rounded transition-all duration-300",
            { "translate-y-2.5 rotate-45": isOpen }
          )}
        ></span>
        <span
          className={cn(
            "h-1 w-full bg-primary rounded transition-all duration-300",
            { "opacity-0": isOpen }
          )}
        ></span>
        <span
          className={cn(
            "h-1 w-full bg-primary rounded transition-all duration-300",
            { "-translate-y-2.5 -rotate-45": isOpen }
          )}
        ></span>
      </button>

      <nav
        className={cn(
          "fixed top-14.5 lg:top-18.5 right-0 h-screen w-full bg-white",
          "transform transition-transform duration-300",
          "pt-10 px-4 pb-28 flex flex-col gap-6",
          { "translate-x-0": isOpen },
          { "translate-x-full": !isOpen }
        )}
      >
        {links.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            className="text-base font-bold leading-[26px]"
            onClick={handleClose}
          >
            {link.label}
          </NavLink>
        ))}

        <Button
          className="mt-auto sm:w-fit sm:mx-auto"
          variant="primary"
          withCTAIcon
          href={button.href}
          onClick={handleClose}
        >
          {button.label}
        </Button>
      </nav>
    </div>
  );
}
