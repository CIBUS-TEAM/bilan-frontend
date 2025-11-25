import Badge from "../Badge/Badge";
import { cn } from "@/utilities/styles";

export function SectionHeaders({
  isCentered,
  badge,
  title,
  description,
  isHero,
  isDesktopSecondary,
  className,
}: {
  isCentered: boolean;
  badge?: string;
  title: string;
  description: string;
  isHero?: boolean;
  isDesktopSecondary?: boolean;
  className?: string;
}) {
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
              className="mb-6 flex lg:hidden"
              withIcon={true}
              text={badge}
              variant={"primary"}
            />
            <Badge
              className="mb-6 hidden lg:flex"
              withIcon={true}
              text={badge}
              variant={"secondary"}
            />
          </>
        ) : (
          <Badge
            className="mb-6"
            withIcon={true}
            text={badge}
            variant={"primary"}
          />
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
              ? "text-[18px] font-semibold leading-7 lg:text-[22px] lg:leading-[30px]"
              : "text-[16px] font-medium leading-[26px] lg:text-[18px] lg:leading-7"
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
