import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Patient Testimonials | Manipal Physiotherapy Jamshedpur",
  description:
    "Real recovery stories from patients in Jamshedpur — back pain, knee replacement, stroke rehab, sports injury and more.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Testimonials — Manipal Physiotherapy Jamshedpur",
    description: "What our patients say about their recovery.",
    url: "/testimonials",
  },
};

export default function TestimonialsPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: clinic.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.review,
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl container-px py-10 text-center">
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Patient stories
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-primary-deep sm:text-5xl">
            Trusted by patients across Jamshedpur
          </h1>
          <p className="mt-4 text-muted-foreground">
            Real reviews from real people — every name, every story matters.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 container-px pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
