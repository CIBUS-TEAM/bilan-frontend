import { cn } from "@/utilities/styles";
import CTAIcon from "../Icons/CTAIcon";
import Link from "next/link";
import LoadingIcon from "../Icons/LoadingIcon";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  withCTAIcon?: boolean;
  disabled?: boolean;
  href?: string;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button";
};

export function Button({
  variant = "primary",
  children,
  className,
  withCTAIcon = false,
  disabled = false,
  href,
  isLoading,
  type,
}: ButtonProps) {
  const buttonClassName = cn(
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
    <Link className={buttonClassName} href={href}>
      {children} {withCTAIcon && <CTAIcon />}
    </Link>
  ) : (
    <button
      className={buttonClassName}
      disabled={disabled || isLoading}
      type={type}
    >
      {children}
      {withCTAIcon ? isLoading ? <LoadingIcon /> : <CTAIcon /> : null}
    </button>
  );
}

export default Button;
