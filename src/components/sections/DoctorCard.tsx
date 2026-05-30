import Link from "next/link";
import { Award, CheckCircle2 } from "lucide-react";
import doctorImg from "@/assets/doctor-ajit.jpg";
import { doctor } from "@/data/doctor";

export function DoctorCard() {
  return (
    <section className="mx-auto max-w-7xl container-px py-20">
      <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10 md:grid-cols-[1fr_1.4fr]">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={doctorImg.src}
            alt={`${doctor.name} — ${doctor.title}`}
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary-deep shadow-elegant">
            <Award className="h-3.5 w-3.5 text-primary" /> {doctor.experience}
          </div>
        </div>
        <div>
          <div className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Meet your therapist
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-primary-deep sm:text-4xl">
            {doctor.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-primary">{doctor.title}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{doctor.bio}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {doctor.expertise.map((e) => (
              <li key={e} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-success" /> {e}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90"
            >
              Book a Consultation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary-deep hover:border-primary hover:text-primary"
            >
              More about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
