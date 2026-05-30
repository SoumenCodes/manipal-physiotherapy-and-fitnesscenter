# Manipal Physiotherapy & Fitness Centre — Build Plan

A premium, trust-building healthcare website on the project's TanStack Start stack. Visual quality bar: Apollo / Manipal Hospitals / Practo. WhatsApp-only appointment flow (no backend needed).

## Design system

Theme tokens in `src/styles.css` (oklch, light + dark):

- `--primary`: Medical Blue (~#0A6FB8)
- `--primary-deep` / accent: Deep Navy (~#0B1F3A)
- `--accent-soft`: Trust Teal (~#1FB6A6) — limited use for highlights / icon backgrounds
- `--background`: White, `--muted`: Light Gray (~#F4F7FB)
- `--success` for trust ticks, `--destructive` for form errors
- `--gradient-hero`: navy → primary
- `--shadow-card`, `--shadow-elegant` for premium cards
- Typography: Plus Jakarta Sans (UI) + Fraunces (headlines) loaded via Google Fonts in `__root.tsx`. Devanagari fallback via Noto Sans Devanagari for the Hindi name.
- Motion utilities: `fade-in-up`, `reveal-on-scroll` (IntersectionObserver hook), subtle `hover-lift`. Framer Motion is already viable — used sparingly for hero, counters, testimonial slider.

## Routes (file-based, each with own `head()` meta + JSON-LD)

```
src/routes/
  __root.tsx          // shell, fonts, Header, Footer, FloatingWhatsApp, MobileCallBar, ScrollProgress, Organization JSON-LD
  index.tsx           // Home
  about.tsx           // About Us
  services.tsx        // Services (10 conditions)
  testimonials.tsx    // Testimonials
  gallery.tsx         // Gallery
  book.tsx            // Book Appointment
  contact.tsx         // Contact
```

Each leaf route gets: title, description, og:title, og:description, og:image (hero asset), canonical, og:url. Contact + Home carry LocalBusiness/MedicalBusiness JSON-LD with address, phone, hours; Services page carries Service schema list; Testimonials carries Review schema.

## Page content

**Home** — Hero (headline, sub, two CTAs: Book Appointment → `/book`, Call Now → `tel:+918827596359`, trust badge row), About teaser, Services grid (10 cards), Why Choose Us with animated counters (500+ patients, 5+ years, 10+ conditions treated, Home Visits Available), Doctor profile card (Dr. Ajit), Testimonials slider (3 visible / swipeable on mobile), FAQ accordion (6 Qs targeting Jamshedpur SEO), CTA band.

**About** — Mission, Vision, patient-centric care, evidence-based approach, modern techniques, values grid, doctor profile expanded.

**Services** — All 10 services as detail cards (icon, title, 2-line desc, what we treat, "Book this treatment" → WhatsApp deep link with prefilled service).

**Testimonials** — Full grid of realistic Indian patient stories (name, age, condition, review, star rating). 8–10 cards.

**Gallery** — Masonry grid, 4 categories tabbed (Clinic Interior, Treatment Sessions, Equipment, Patient Care), hover zoom + caption overlay.

**Book Appointment** — Validated form (zod + react-hook-form already common; will install if missing). Fields: Full Name, Phone (+91 pattern), Age, Problem (select from 10 services + Other), Preferred Date (date picker, today+), Message. On submit: opens WhatsApp deep link `https://wa.me/918827596359?text=...` with formatted message; shows confirmation toast. No backend.

**Contact** — Contact cards (Phone click-to-call, Email mailto, WhatsApp), full address with Hindi line, hours table, Google Maps `<iframe>` embed (place query), large WhatsApp CTA.

## Reusable components

```
src/components/
  layout/
    Header.tsx              // sticky, transparent→solid on scroll, mobile sheet nav
    Footer.tsx              // brand, quick links, contact, hours, socials
    ScrollProgress.tsx      // top progress bar
    FloatingWhatsApp.tsx    // bottom-right pulse button
    MobileCallBar.tsx       // sticky bottom call+WhatsApp on <md
  sections/
    Hero.tsx, TrustBadges.tsx, AboutTeaser.tsx, ServicesGrid.tsx,
    WhyChooseUs.tsx (with AnimatedCounter), DoctorCard.tsx,
    TestimonialsSlider.tsx, FAQ.tsx, CTABand.tsx, MapEmbed.tsx
  ui/
    SectionHeader.tsx, ServiceCard.tsx, StatCounter.tsx,
    TestimonialCard.tsx, GalleryGrid.tsx, AppointmentForm.tsx
  seo/
    JsonLd.tsx              // typed wrapper around <script type="application/ld+json">
src/data/
  clinic.ts                 // name, phones, email, address, hours, socials — single source of truth
  services.ts               // 10 services {slug,title,icon,description,treats[]}
  testimonials.ts           // 8–10 Indian patient stories
  faqs.ts, gallery.ts, doctor.ts
src/hooks/
  use-reveal.ts, use-counter.ts, use-scroll-progress.ts
src/lib/
  whatsapp.ts               // buildWhatsAppUrl(service?, formData?) helper
  validators.ts             // zod schemas for appointment form
```

## Imagery (AI-generated, Indian context)

Generated with `generate_image` into `src/assets/`:

- `hero-physio.jpg` — Indian physiotherapist (male, ~35, light blue scrubs) guiding a senior patient through knee rehab in a bright modern clinic. 16:9.
- `doctor-ajit.jpg` — professional portrait, Indian male physiotherapist, white coat, clinic backdrop.
- `about-clinic.jpg` — wide shot of modern Indian physio clinic interior.
- Gallery (6–8 images): equipment closeups (parallel bars, TENS unit, ultrasound therapy), treatment sessions (back, shoulder, sports), clinic interior, reception. Premium quality tier.
- `og-cover.jpg` — branded hero with logo treatment for social sharing.

All `og:image` set on leaf routes only.

## Premium UX features

Floating WhatsApp pulse, sticky navbar with shadow on scroll, top scroll progress bar, smooth scroll (CSS `scroll-behavior`), animated section reveals, mobile bottom call+WhatsApp bar, click-to-call across all phone numbers, WhatsApp deep-link from every "Book" CTA, skeleton states for images (blur-up), FAQ accordion, animated counters.

## SEO

- Per-route title/description targeting: "Physiotherapy in Jamshedpur", "Best Physiotherapist Jamshedpur", "Back Pain Treatment Jamshedpur", "Knee Pain Physiotherapy Jamshedpur", "Home Physiotherapy Jamshedpur", "Rehabilitation Centre Jamshedpur".
- LocalBusiness + MedicalBusiness JSON-LD on root/contact with address, geo, hours, phone, sameAs.
- FAQPage JSON-LD on home (FAQ section).
- Service schema array on /services.
- Review/AggregateRating JSON-LD on /testimonials.
- Canonical on every leaf, relative paths (no domain yet).
- `public/robots.txt` + `public/sitemap.xml` covering all 7 routes.

## Dependencies to add

- `framer-motion` (animations)
- `react-hook-form` + `@hookform/resolvers` + `zod` (form)
- `embla-carousel-react` (testimonials slider — already common in shadcn carousel; will reuse `src/components/ui/carousel.tsx`)

## Out of scope (and why)

- No database / no Lovable Cloud (per your choice — WhatsApp handoff only).
- No auth, no admin, no blog system.
- No payments.
- Map is an iframe embed (no Google Maps API key required).

## Acceptance check before handoff

1. All 7 routes render with unique `<title>` and og text.
2. Hero, doctor, and gallery images are real AI-generated assets (no placeholders).
3. WhatsApp button + Call button work on mobile and desktop.
4. Appointment form validates and opens prefilled WhatsApp.
5. Lighthouse-style smoke: no console errors, images lazy-loaded, mobile layout clean at 360px.
6. JSON-LD validates structurally (Organization, LocalBusiness, FAQPage, Service, Review).
