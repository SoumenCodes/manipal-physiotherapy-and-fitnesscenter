import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export function CTABand() {
  return (
    <section className="mx-auto max-w-7xl container-px py-16">
      <div className="overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white sm:p-12">
        <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Ready to feel like yourself again?
            </h3>
            <p className="mt-2 max-w-xl text-white/80">
              Book a consultation today. Personalized assessment, transparent plan, and care that
              meets you where you are.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-deep shadow-elegant hover:opacity-95"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {clinic.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
