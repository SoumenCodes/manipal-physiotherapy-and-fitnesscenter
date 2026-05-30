import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, BookOpen, Sparkles, Users } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DoctorCard } from "@/components/sections/DoctorCard";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About Us | Manipal Physiotherapy & Fitness Centre Jamshedpur",
  description:
    "Patient-centric, evidence-based physiotherapy in Jamshedpur. Learn about our mission, vision and approach to rehabilitation and wellness.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Manipal Physiotherapy & Fitness Centre",
    description: "Personalized physiotherapy and rehabilitation care in Baridih, Jamshedpur.",
    url: "/about",
  },
};

const values = [
  {
    icon: HeartHandshake,
    title: "Patient-Centric Care",
    desc: "Every plan is built around you — your goals, lifestyle and recovery pace.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Practice",
    desc: "Treatment grounded in current clinical research and proven protocols.",
  },
  {
    icon: Sparkles,
    title: "Modern Techniques",
    desc: "From manual therapy to electrotherapy, we use what genuinely works.",
  },
  {
    icon: Users,
    title: "Personalized Plans",
    desc: "No two bodies are alike. Your program is designed for you, not a template.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-soft-gradient" />
        <div className="mx-auto max-w-7xl container-px py-12 text-center">
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            About us
          </div>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold text-primary-deep sm:text-5xl">
            Care that listens. Recovery that lasts.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Manipal Physiotherapy & Fitness Centre is a modern rehabilitation clinic in Baridih,
            Jamshedpur — built on the belief that great physiotherapy is personal, scientific and
            kind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-12">
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <img
            src={clinicInterior.src}
            alt="Modern physiotherapy clinic interior in Jamshedpur"
            loading="lazy"
            className="h-[280px] w-full object-cover sm:h-[420px]"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 container-px py-12 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <Target className="h-7 w-7 text-primary" />
          <h2 className="mt-3 text-2xl font-semibold text-primary-deep">Our Mission</h2>
          <p className="mt-3 text-muted-foreground">
            To deliver world-class physiotherapy in Jamshedpur — combining clinical expertise,
            modern equipment and genuine human care so every patient can return to a pain-free,
            active life.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <Eye className="h-7 w-7 text-primary" />
          <h2 className="mt-3 text-2xl font-semibold text-primary-deep">Our Vision</h2>
          <p className="mt-3 text-muted-foreground">
            To become the most trusted rehabilitation and wellness destination in eastern India —
            known for outcomes, empathy and the long-term wellbeing of every patient we treat.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-12">
        <SectionHeader eyebrow="What we stand for" title="Our values" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift"
            >
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-primary-deep">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <DoctorCard />
      <CTABand />
    </>
  );
}
