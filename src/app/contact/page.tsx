import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { clinic, fullAddress } from "@/data/clinic";
import { whatsappUrl, bookServiceMessage } from "@/lib/whatsapp";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact | Manipal Physiotherapy & Fitness Centre Jamshedpur",
  description:
    "Visit us at Vijaya Gardens Road, Baridih, Jamshedpur. Open Mon–Sun 9 AM–9 PM. Call +91 88275 96359 or chat on WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Manipal Physiotherapy Jamshedpur",
    description: "Address, phone, WhatsApp and directions.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physiotherapist"],
    name: clinic.name,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.line3}`,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postal,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
  };

  const cards = [
    {
      icon: Phone,
      label: "Phone",
      value: clinic.phone,
      href: `tel:${clinic.phoneRaw}`,
      accent: "text-primary",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us instantly",
      href: whatsappUrl(bookServiceMessage()),
      accent: "text-[#25D366]",
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: clinic.email,
      href: `mailto:${clinic.email}`,
      accent: "text-primary",
    },
    { icon: Clock, label: "Hours", value: clinic.hoursShort, accent: "text-primary" },
  ];

  return (
    <>
      <JsonLd data={ld} />
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl container-px py-10 text-center">
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Get in touch
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-primary-deep sm:text-5xl">
            We're here to help you heal
          </h1>
          <p className="mt-3 text-muted-foreground font-devanagari">
            मणिपाल फिजियोथेरेपी एंड फिटनेस सेंटर
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Inner = (
              <>
                <div
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft ${c.accent}`}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-primary-deep">{c.value}</div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="rounded-2xl border border-border bg-card p-5 shadow-card hover-lift"
              >
                {Inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                {Inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-2xl font-semibold text-primary-deep">Visit us</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {fullAddress}
            </p>
            <a
              href={clinic.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary-deep hover:border-primary hover:text-primary"
            >
              Get directions
            </a>
            <a
              href={whatsappUrl(bookServiceMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-elegant"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="Manipal Physiotherapy location map"
              src={clinic.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full sm:h-[440px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
