import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur shadow-card"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 container-px py-3">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hero-gradient text-white font-bold shadow-elegant">
            M
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight text-primary-deep sm:text-base">
              Manipal Physiotherapy
            </div>
            <div className="hidden text-[11px] text-muted-foreground sm:block">
              & Fitness Centre · Jamshedpur
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${clinic.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-primary-deep transition hover:border-primary hover:text-primary md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> {clinic.phone}
          </a>
          <Link
            to="/book"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90 md:inline-flex"
          >
            Book Appointment
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col container-px py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-primary-soft" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
