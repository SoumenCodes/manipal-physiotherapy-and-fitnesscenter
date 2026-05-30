import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Stethoscope, Sparkles, HomeIcon } from "lucide-react";
import heroPhysio from "@/assets/hero-physio.jpg";
import { clinic } from "@/data/clinic";

const badges = [
  { icon: ShieldCheck, label: "Experienced Care" },
  { icon: Stethoscope, label: "Personalized Treatment" },
  { icon: Sparkles, label: "Modern Equipment" },
  { icon: HomeIcon, label: "Home Visit Available" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-soft-gradient" />
      <div className="absolute -top-32 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 container-px pb-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14 md:pb-24">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Now serving Jamshedpur · Baridih
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-primary-deep sm:text-5xl md:text-6xl">
            Move Better. <br />
            <span className="text-gradient-primary">Live Pain Free.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Expert physiotherapy, rehabilitation and fitness care in Jamshedpur — built around you.
            Evidence-based treatment, personal attention, and a recovery plan that actually works.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-primary-deep transition hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <ul className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 rounded-xl border border-border bg-card p-2.5 text-[12px] font-medium text-foreground/80"
              >
                <b.icon className="h-4 w-4 shrink-0 text-primary" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-hero-gradient opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-elegant">
            <img
              src={heroPhysio}
              alt="Physiotherapist assisting an elderly patient with knee rehabilitation in a modern Jamshedpur clinic"
              width={1600}
              height={1024}
              className="aspect-[5/4] h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-elegant sm:flex sm:items-center sm:gap-3 md:left-auto md:right-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-primary-deep">500+ Patients Treated</div>
              <div className="text-xs text-muted-foreground">Trusted across Jamshedpur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
