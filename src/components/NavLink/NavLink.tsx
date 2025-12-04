"use client";

import { usePathname } from "@/i18n/navigation";
import { cn } from "@/utilities/styles";
import Link from "next/link";

interface NavLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

export function NavLink({ className, href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(
        "text-text-secondary text-base font-medium leading-[26px] md:text-lg md:leading-7 hover:text-primary-dark",
        { "text-primary": isActive },
        className
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
