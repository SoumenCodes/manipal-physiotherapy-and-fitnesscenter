import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="Patient Stories"
          title="Real results from real people"
          description="Patients across Jamshedpur trust us with their recovery. Here's what they say."
        />
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => embla?.scrollPrev()}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => embla?.scrollNext()}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
