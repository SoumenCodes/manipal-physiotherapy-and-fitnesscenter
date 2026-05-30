import { useReveal } from "@/hooks/use-reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"} ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold text-primary-deep sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}
