import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import type { Service } from "@/data/services";
import { whatsappUrl, bookServiceMessage } from "@/lib/whatsapp";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card hover-lift"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-primary-deep">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {service.treats.slice(0, 3).map((t) => (
          <li
            key={t}
            className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between gap-2">
        <Link
          href="/book"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={whatsappUrl(bookServiceMessage(service.title))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book ${service.title} on WhatsApp`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white opacity-80 transition hover:opacity-100"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
