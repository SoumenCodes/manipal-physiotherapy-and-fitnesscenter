import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinic, fullAddress } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 container-px py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-deep font-bold">
              M
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold">Manipal Physiotherapy</div>
              <div className="text-xs text-white/70">& Fitness Centre</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 font-devanagari">
            मणिपाल फिजियोथेरेपी एंड फिटनेस सेंटर
          </p>
          <p className="mt-3 text-sm text-white/70">
            Expert physiotherapy, rehabilitation and fitness care in Jamshedpur — built around you.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/testimonials", "Testimonials"],
              ["/gallery", "Gallery"],
              ["/book", "Book Appointment"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link href={to as string} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white/60" />
              <a href={`tel:${clinic.phoneRaw}`} className="hover:text-white">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white/60" />
              <a href={`mailto:${clinic.email}`} className="hover:text-white">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Hours</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/80">
            <Clock className="mt-0.5 h-4 w-4 text-white/60" />
            <span>
              Monday – Sunday
              <br />
              9:00 AM – 9:00 PM
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
