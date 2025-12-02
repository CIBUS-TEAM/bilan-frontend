import { cn } from "@/utilities/styles";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  id: string;
  as?: "input" | "textarea";
  rows?: number;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  minLength?: number;
  className?: string;
};

export default function Input({
  label,
  placeholder,
  id,
  as = "input",
  rows = 5,
  type,
  required,
  minLength,
  className,
}: InputProps) {
  const labelId = `${id}-label`;

  const baseClasses = cn(
    "border border-border rounded-lg bg-background-base p-3 text-base font-medium leading-[26px] outline-none resize-none",
    "user-valid:border-success",
    "placeholder:text-text-secondary",
    "focus:border-primary focus:text-primary",
    "user-invalid:border-error user-invalid:text-error"
  );

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        id={labelId}
        htmlFor={id}
        className="text-base font-semibold leading-[26px]"
      >
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          required={required}
          id={id}
          name={id}
          aria-labelledby={labelId}
          placeholder={placeholder}
          rows={rows}
          className={baseClasses}
          minLength={minLength}
        />
      ) : (
        <input
          name={id}
          required={required}
          type={type}
          id={id}
          aria-labelledby={labelId}
          placeholder={placeholder}
          className={baseClasses}
          minLength={minLength}
        />
      )}
    </div>
  );
}
