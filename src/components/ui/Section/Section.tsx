import { cn } from "@/utilities/styles";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-12 lg:px-30 lg:py-20", className)}>
      {children}
    </section>
  );
}

export default Section;
