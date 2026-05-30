import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DoctorCard } from "@/components/sections/DoctorCard";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy in Jamshedpur | Manipal Physiotherapy & Fitness Centre" },
      { name: "description", content: "Expert physiotherapy, rehabilitation and fitness care in Jamshedpur. Back pain, knee pain, sports injury, paralysis rehab and home visits. Book today." },
      { property: "og:title", content: "Manipal Physiotherapy & Fitness Centre — Jamshedpur" },
      { property: "og:description", content: "Move better. Live pain free. Premium physiotherapy care in Baridih, Jamshedpur." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <JsonLd data={faqLd} />
      <Hero />
      <ServicesGrid limit={8} />
      <WhyChooseUs />
      <DoctorCard />
      <TestimonialsSlider />
      <FAQ />
      <CTABand />
    </>
  );
}
