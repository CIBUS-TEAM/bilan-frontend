import { cn } from "@/utilities/styles";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-4 py-12 lg:px-30 lg:py-20", className)}>
      {children}
    </section>
  );
}

export default Section;
