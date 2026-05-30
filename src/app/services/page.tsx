import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Physiotherapy Services in Jamshedpur | Back, Knee, Sports & Rehab",
  description:
    "Back pain, knee pain, sports injury, paralysis rehab, post-surgery physio, home visits and fitness — comprehensive physiotherapy in Jamshedpur.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — Manipal Physiotherapy Jamshedpur",
    description: "10+ specialized physiotherapy services in Jamshedpur. Personalized care plans.",
    url: "/services",
  },
};

export default function ServicesPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "MedicalTherapy", name: s.title, description: s.description },
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <section className="pt-28 text-center md:pt-32">
        <div className="mx-auto max-w-3xl container-px py-10">
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Our services
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-primary-deep sm:text-5xl">
            Comprehensive physiotherapy, designed for you
          </h1>
          <p className="mt-4 text-muted-foreground">
            From everyday aches to complex rehabilitation — explore the conditions we treat at our
            Jamshedpur clinic.
          </p>
        </div>
      </section>
      <ServicesGrid showAll={false} />
      <CTABand />
    </>
  );
}
