"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl container-px py-20">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Quick answers about physiotherapy treatment, home visits, timings, and more."
      />
      <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-primary-deep sm:text-base">{f.q}</span>
                {isOpen ? (
                  <Minus className="h-4 w-4 text-primary" />
                ) : (
                  <Plus className="h-4 w-4 text-primary" />
                )}
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
