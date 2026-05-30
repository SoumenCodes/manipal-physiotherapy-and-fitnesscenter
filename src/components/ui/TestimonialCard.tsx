import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
      <Quote className="h-7 w-7 text-primary/30" />
      <div className="mt-2 flex gap-0.5 text-amber-400">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
        "{t.review}"
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
          {t.name
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-primary-deep">{t.name}</div>
          <div className="text-xs text-muted-foreground">
            Age {t.age} · {t.condition}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
