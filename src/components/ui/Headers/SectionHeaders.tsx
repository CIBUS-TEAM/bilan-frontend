import { SectionHeadersData } from "@/types/types";
import Badge from "../Badge/Badge";
import { cn } from "@/utilities/styles";

interface SectionHeadersProps extends SectionHeadersData {
  isHero?: boolean;
  isDesktopSecondary?: boolean;
  hasItems?: boolean;
  className?: string;
}

const badgePresets = {
  default: {
    containerClassName: "mb-6",
    withIcon: true,
  },
  secondaryMobile: {
    containerClassName: "mb-6 flex lg:hidden",
    withIcon: true,
  },
  secondaryDesktop: {
    containerClassName: "mb-6 hidden lg:flex border-white",
    iconClassName: "stroke-white",
    textClassName: "text-white",
    withIcon: true,
  },
};
const titlePresets = {
  h1: (isCentered: boolean, isDesktopSecondary: boolean) =>
    cn("mb-4", {
      "lg:text-white": isDesktopSecondary,
      "text-center": isCentered,
    }),
  h2Default: (isCentered: boolean) =>
    cn("mb-4 lg:mb-6", {
      "text-center": isCentered,
    }),
  h2WithStyles: (isCentered: boolean) =>
    cn(
      "mb-4 lg:mb-6",
      "text-[2rem]! font-bold! leading-10.5!",
      "lg:font-semibold! lg:text-[2.5rem]! lg:leading-13!",
      {
        "text-center": isCentered,
      }
    ),
};

const descriptionPresets = {
  hero: (isDesktopSecondary: boolean, isCentered: boolean) =>
    cn(
      "text-text-secondary",
      "text-lg font-semibold leading-7",
      "lg:text-[1.375rem] lg:leading-7.5",
      {
        "lg:text-white": isDesktopSecondary,
        "text-center": isCentered,
      }
    ),
  default: (isDesktopSecondary: boolean, isCentered: boolean) =>
    cn(
      "text-text-secondary",
      "text-base font-medium leading-6.5",
      "lg:text-lg lg:leading-7",
      {
        "lg:text-white": isDesktopSecondary,
        "text-center": isCentered,
      }
    ),
  withItems: (isDesktopSecondary: boolean, isCentered: boolean) =>
    cn("text-text-secondary", "text-[1rem] lg:text-lg", {
      "lg:text-white": isDesktopSecondary,
      "text-center": isCentered,
    }),
};

export function SectionHeaders({
  isCentered = false,
  badge,
  title,
  description,
  isDesktopSecondary = false,
  hasItems = false,
  isHero = false,
  className,
}: SectionHeadersProps) {
  const getTitleClassName = () => {
    if (isHero && isDesktopSecondary) {
      return titlePresets.h1(isCentered, isDesktopSecondary);
    }
    if (hasItems || !isDesktopSecondary) {
      return titlePresets.h2WithStyles(isCentered);
    }
    return titlePresets.h2Default(isCentered);
  };

  const getDescriptionClassName = () => {
    if (hasItems) {
      return descriptionPresets.withItems(isDesktopSecondary, isCentered);
    }
    if (isHero) {
      return descriptionPresets.hero(isDesktopSecondary, isCentered);
    }
    return descriptionPresets.default(isDesktopSecondary, isCentered);
  };

  const renderBadge = () => {
    if (!badge) return null;

    if (isDesktopSecondary) {
      return (
        <>
          <Badge {...badgePresets.secondaryMobile} text={badge} />
          <Badge {...badgePresets.secondaryDesktop} text={badge} />
        </>
      );
    }

    return <Badge {...badgePresets.default} text={badge} />;
  };

  const renderTitle = () => {
    const className = getTitleClassName();

    if (isHero && isDesktopSecondary) {
      return <h1 className={className}>{title}</h1>;
    }

    return <h2 className={className}>{title}</h2>;
  };

  return (
    <div
      className={cn(
        "flex flex-col",
        { "items-center max-w-[514px]": isCentered },
        className
      )}
    >
      {renderBadge()}
      {renderTitle()}
      <p className={getDescriptionClassName()}>{description}</p>
    </div>
  );
}

export default SectionHeaders;
