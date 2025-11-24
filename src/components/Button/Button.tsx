import { cn } from "@/utilities/styles";
import CTAIcon from "../Icons/CTAIcon";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  withCTAIcon?: boolean;
  disabled?: boolean;
  href?: string;
};

export function StrapiButton({
  variant = "primary",
  children,
  className,
  withCTAIcon = false,
  disabled = false,
  href,
}: ButtonProps) {
  const buttonClass = cn(
    "px-5 py-3 rounded-lg flex gap-2 justify-center items-center cursor-pointer text-base font-semibold",
    {
      "bg-primary text-white hover:bg-primary-dark": variant === "primary",
      "bg-white border border-text-main hover:bg-primary hover:text-white":
        variant === "secondary",
      "opacity-50 cursor-not-allowed hover:none": disabled,
    },
    className
  );

  return href ? (
    <Link className={buttonClass} href={href}>
      {children} {withCTAIcon && <CTAIcon />}
    </Link>
  ) : (
    <button className={buttonClass} disabled={disabled}>
      {children} {withCTAIcon && <CTAIcon />}
    </button>
  );
}

export default StrapiButton;
