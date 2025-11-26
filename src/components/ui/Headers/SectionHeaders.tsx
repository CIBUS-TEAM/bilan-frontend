import { SectionHeadersData } from "@/types/types";
import Badge from "../Badge/Badge";
import { cn } from "@/utilities/styles";

interface SectionHeadersProps extends SectionHeadersData {
  isHero?: boolean;
  isDesktopSecondary?: boolean;
  className?: string;
}

export function SectionHeaders({
  isCentered,
  badge,
  title,
  description,
  isHero,
  isDesktopSecondary,
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
              withIcon={true}
              text={badge}
            />
            <Badge
              containerClassName="mb-6 hidden lg:flex border-white"
              iconClassName="stroke-white"
              textClassName="text-white"
              withIcon={true}
              text={badge}
            />
          </>
        ) : (
          <Badge containerClassName="mb-6" withIcon={true} text={badge} />
        )
      ) : null}
      {isHero ? (
        <h1
          className={cn(
            "mb-4",
            { "lg:text-white": isDesktopSecondary },
            { "text-center": isCentered }
          )}
        >
          {title}
        </h1>
      ) : (
        <h2 className={cn("mb-4 lg:mb-6", { "text-center": isCentered })}>
          {title}
        </h2>
      )}
      <p
        className={cn(
          "text-text-secondary",
          `${
            isHero
              ? "text-lg font-semibold leading-7 lg:text-[22px] lg:leading-[30px]"
              : "text-base font-medium leading-[26px] lg:text-lg lg:leading-7"
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
