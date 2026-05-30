import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Manipal Physiotherapy & Fitness Centre Jamshedpur" },
      { name: "description", content: "Take a look inside our modern physiotherapy clinic in Baridih, Jamshedpur — treatment rooms, equipment and patient care." },
      { property: "og:title", content: "Gallery — Manipal Physiotherapy Jamshedpur" },
      { property: "og:description", content: "Modern clinic, premium equipment, personalised care." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl container-px py-10 text-center">
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Inside the clinic</div>
          <h1 className="mt-4 text-4xl font-semibold text-primary-deep sm:text-5xl">A space designed for healing</h1>
          <p className="mt-4 text-muted-foreground">Modern equipment, calm interiors, and care that feels personal.</p>
        </div>
        <div className="mx-auto max-w-7xl container-px pb-16">
          <GalleryGrid />
        </div>
      </section>
      <CTABand />
    </>
  );
}
