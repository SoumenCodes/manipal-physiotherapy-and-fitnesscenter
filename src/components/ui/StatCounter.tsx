"use client";

import { useReveal } from "@/hooks/use-reveal";
import { useCounter } from "@/hooks/use-counter";

type Props = { value: number; suffix?: string; label: string; icon?: React.ReactNode };

export function StatCounter({ value, suffix = "", label, icon }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.4 });
  const n = useCounter(value, visible);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur"
    >
      {icon && (
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
          {icon}
        </div>
      )}
      <div className="text-4xl font-bold text-white sm:text-5xl">
        {n}
        <span className="text-primary-foreground/90">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-white/75">{label}</div>
    </div>
  );
}
