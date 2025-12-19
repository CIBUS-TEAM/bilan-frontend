import { SectionHeadersData } from "@/types/types";
import Badge from "../Badge/Badge";
import { cn } from "@/utilities/styles";

interface SectionHeadersProps extends SectionHeadersData {
  isHero?: boolean;
  isDesktopSecondary?: boolean;
  hasItems?: boolean;
  className?: string;
}

export function SectionHeaders({
  isCentered,
  badge,
  title,
  description,
  isDesktopSecondary,
  hasItems,
  className,
}: SectionHeadersProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        { "items-center max-w-[514px]": isCentered },
        className
      )}
    >
      {badge ? (
        isDesktopSecondary ? (
          <>
            <Badge
              containerClassName="mb-6 flex lg:hidden"
              withIcon
              text={badge}
            />
            <Badge
              containerClassName="mb-6 hidden lg:flex border-white"
              iconClassName="stroke-white"
              textClassName="text-white"
              withIcon
              text={badge}
            />
          </>
        ) : (
          <Badge containerClassName="mb-6" withIcon text={badge} />
        )
      ) : null}
      {isDesktopSecondary ? (
        <h1
          className={cn(
            "mb-4 ",
            {
              "lg:text-white ": isDesktopSecondary,
            },
            { "text-center": isCentered }
          )}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={cn("mb-4 lg:mb-6", {
            "text-center": isCentered,
          })}
        >
          {title}
        </h2>
      )}
      <p
        className={cn(
          "text-text-secondary",
          `${
            hasItems
              ? "text-base font-medium leading-6.5 lg:text-lg lg:leading-7"
              : "text-lg font-semibold leading-7 lg:text-[1.375rem] lg:leading-7.5"
          }`,
          { "lg:text-white": isDesktopSecondary },
          { "text-center": isCentered }
        )}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeaders;
