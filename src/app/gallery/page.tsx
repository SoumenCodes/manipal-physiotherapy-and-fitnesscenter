import type { Metadata } from "next";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Gallery | Manipal Physiotherapy & Fitness Centre Jamshedpur",
  description:
    "Take a look inside our modern physiotherapy clinic in Baridih, Jamshedpur — treatment rooms, equipment and patient care.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery — Manipal Physiotherapy Jamshedpur",
    description: "Modern clinic, premium equipment, personalised care.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl container-px py-10 text-center">
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Inside the clinic
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-primary-deep sm:text-5xl">
            A space designed for healing
          </h1>
          <p className="mt-4 text-muted-foreground">
            Modern equipment, calm interiors, and care that feels personal.
          </p>
        </div>
        <div className="mx-auto max-w-7xl container-px pb-16">
          <GalleryGrid />
        </div>
      </section>
      <CTABand />
    </>
  );
}
