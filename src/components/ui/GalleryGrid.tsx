"use client";

import { useState } from "react";
import { gallery, categories, type GalleryItem } from "@/data/gallery";

export function GalleryGrid() {
  const [cat, setCat] = useState<(typeof categories)[number]["id"]>("all");
  const items: GalleryItem[] = cat === "all" ? gallery : gallery.filter((g) => g.category === cat);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCat(c.id)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              cat === c.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground/80 hover:border-primary hover:text-primary"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <figure
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card"
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary-deep/95 to-transparent p-4 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
              {it.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
