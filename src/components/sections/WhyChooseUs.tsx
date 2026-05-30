import { Users, Award, HeartHandshake, Activity } from "lucide-react";
import { StatCounter } from "@/components/ui/StatCounter";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">A clinic Jamshedpur trusts</h2>
          <p className="mt-3 text-white/80">
            Real outcomes, real care. Built on years of clinical practice and genuine patient
            relationships.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter
            value={500}
            suffix="+"
            label="Happy Patients"
            icon={<Users className="h-5 w-5" />}
          />
          <StatCounter
            value={5}
            suffix="+"
            label="Years of Experience"
            icon={<Award className="h-5 w-5" />}
          />
          <StatCounter
            value={10}
            suffix="+"
            label="Conditions Treated"
            icon={<Activity className="h-5 w-5" />}
          />
          <StatCounter
            value={100}
            suffix="%"
            label="Personalized Care"
            icon={<HeartHandshake className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
}
