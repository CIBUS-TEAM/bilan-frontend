import { cn } from "@/utilities/styles";
import RhombusIcon from "@/components/Icons/RhombusIcon";

export function Badge({
  withIcon,
  text,
  containerClassName,
  iconClassName,
  textClassName,
}: {
  withIcon?: boolean;
  text: string;
  containerClassName?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-1 px-2 py-0.5 rounded-sm border items-center w-fit border-primary",
        containerClassName
      )}
    >
      {withIcon && (
        <RhombusIcon
          size="16"
          className={cn("stroke-primary", iconClassName)}
        />
      )}
      <span
        className={cn(
          "text-xs font-medium leading-5 lg:text-sm lg:leading-[22px] text-primary",
          textClassName
        )}
      >
        {text}
      </span>
    </div>
  );
}

export default Badge;
