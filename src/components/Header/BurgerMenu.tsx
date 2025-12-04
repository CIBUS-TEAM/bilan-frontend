"use client";

import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import StrapiButton from "../Button/Button";

interface BurgerMenuProps {
  links: { id: number; label: string; href: string; newTab: boolean }[];
  button: { id: number; label: string; href: string; newTab: boolean };
}

export default function BurgerMenu({ links, button }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-8 h-6 flex flex-col justify-between items-center"
      >
        <span
          className={`h-1 w-full bg-primary rounded transition-all duration-300 ${
            isOpen ? "translate-y-2.5 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-primary rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-primary rounded transition-all duration-300 ${
            isOpen ? "-translate-y-2.5 -rotate-45" : ""
          }`}
        ></span>
      </button>

      <nav
        className={`
          fixed top-14.5 lg:top-18.5 right-0 h-screen w-full bg-white
          transform transition-transform duration-300
          pt-10 px-4 pb-28 flex flex-col gap-6 border-t border-border
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
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

        <StrapiButton
          className="mt-auto sm:w-fit sm:mx-auto"
          variant="primary"
          withCTAIcon
          href={button.href}
          onClick={handleClose}
        >
          {button.label}
        </StrapiButton>
      </nav>
    </div>
  );
}
