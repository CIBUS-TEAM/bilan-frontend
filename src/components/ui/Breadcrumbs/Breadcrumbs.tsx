"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ChevronRightIcon from "@/components/Icons/ChevronRightIcon";

interface BreadcrumbsProps {
  links: Array<{ href: string; label: string }>;
  locale: string;
}

const LINK_CLASSES =
  "text-sm font-medium leading-[22px] text-text-secondary hover:text-primary transition-colors";
export function Breadcrumbs({ links, locale }: BreadcrumbsProps) {
  const pathname = usePathname();
  const linkMap = new Map(links.map((link) => [link.href, link.label]));
  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const segments = pathWithoutLocale.split("/").filter(Boolean);

  if (!segments.length) {
    return null;
  }
  const getLabel = (href: string, segment: string): string => {
    return (
      linkMap.get(href) ||
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
    );
  };

  const homeLabel = locale === "uk" ? "Головна" : "Home";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 px-4 py-3 lg:px-30 lg:py-4">
        <li>
          <Link href={`/${locale}`} className={LINK_CLASSES}>
            {homeLabel}
          </Link>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const segmentPath = "/" + segments.slice(0, index + 1).join("/");
          const fullPath = `/${locale}${segmentPath}`;

          return (
            <li key={`${segment}-${index}`} className="flex items-center gap-2">
              <ChevronRightIcon size="24" />
              {isLast ? (
                <span
                  className="text-sm font-medium leading-[22px] text-text-secondary"
                  aria-current="page"
                >
                  {getLabel(segmentPath, segment)}
                </span>
              ) : (
                <Link href={fullPath} className={LINK_CLASSES}>
                  {getLabel(segmentPath, segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
