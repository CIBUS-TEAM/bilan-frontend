import { cn } from "@/utilities/styles";
import RhombusIcon from "@/components/Icons/RhombusIcon";

const badgeVariants = {
  primary: "#0060DE",
  secondary: "#FFFFFF",
};

export function Badge({
  withIcon,
  text,
  variant = "primary",
  className,
}: {
  withIcon?: boolean;
  text: string;
  variant: "secondary" | "primary";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-1 px-2 py-0.5 rounded-sm border items-center w-fit",
        className
      )}
      style={{ borderColor: badgeVariants[variant] }}
    >
      {withIcon && (
        <RhombusIcon size="16" strokeColor={badgeVariants[variant]} />
      )}
      <span
        className={cn(
          "text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]"
        )}
        style={{ color: badgeVariants[variant] }}
      >
        {text}
      </span>
    </div>
  );
}

export default Badge;
