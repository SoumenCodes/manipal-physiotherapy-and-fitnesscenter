import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Props = { limit?: number; showAll?: boolean };

export function ServicesGrid({ limit, showAll = true }: Props) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="mx-auto max-w-7xl container-px py-20">
      <SectionHeader
        eyebrow="What we treat"
        title="Specialized Physiotherapy Services"
        description="From everyday pain to post-surgery recovery — comprehensive care tailored to each patient."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
      {showAll && limit && (
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary-deep hover:border-primary hover:text-primary"
          >
            View all services
          </Link>
        </div>
      )}
    </section>
  );
}
