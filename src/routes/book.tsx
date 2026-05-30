import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { clinic } from "@/data/clinic";
import { whatsappUrl, bookServiceMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Manipal Physiotherapy Jamshedpur" },
      { name: "description", content: "Book your physiotherapy consultation in Jamshedpur. Quick WhatsApp booking, flexible timings, home visits available." },
      { property: "og:title", content: "Book Appointment — Manipal Physiotherapy" },
      { property: "og:description", content: "Reserve your physiotherapy session in Baridih, Jamshedpur." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const bullets = [
  "Personalized assessment in your first session",
  "Transparent, milestone-driven recovery plan",
  "Modern equipment & evidence-based therapy",
  "Flexible timings · Home visits across Jamshedpur",
];

function BookPage() {
  return (
    <section className="pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 container-px py-12 md:grid-cols-[1fr_1.15fr]">
        <div>
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Book appointment</div>
          <h1 className="mt-4 text-4xl font-semibold text-primary-deep sm:text-5xl">Start your recovery today</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tell us a bit about you. We'll confirm your slot on WhatsApp and prepare for your visit.
          </p>
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href={`tel:${clinic.phoneRaw}`} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover-lift">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                <div className="text-sm font-semibold text-primary-deep">{clinic.phone}</div>
              </div>
            </a>
            <a href={whatsappUrl(bookServiceMessage())} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover-lift">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="text-sm font-semibold text-primary-deep">Chat with us</div>
              </div>
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
