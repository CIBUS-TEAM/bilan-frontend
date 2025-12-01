"use client";

import { ButtonProps } from "@/types/types";
import Button from "../Button/Button";
import { useFormStatus } from "react-dom";

export function SubmitButton({ className, children }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button className={className} withCTAIcon type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}

export default SubmitButton;
