import { cn } from "@/utilities/styles";
import RhombusIcon from "@/components/Icons/RhombusIcon";

const badgeVariants = {
  primary: {
    border: "border-primary",
    text: "text-primary",
    icon: "stroke-primary",
  },
  secondary: {
    border: "border-white",
    text: "text-white",
    icon: "stroke-white",
  },
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
        badgeVariants[variant].border,
        className
      )}
    >
      {withIcon && (
        <RhombusIcon size="16" className={badgeVariants[variant].icon} />
      )}
      <span
        className={cn(
          "text-xs font-medium leading-5 lg:text-sm lg:leading-[22px]",
          badgeVariants[variant].text
        )}
      >
        {text}
      </span>
    </div>
  );
}

export default Badge;
