import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces, Noto_Sans_Devanagari } from "next/font/google";
import "../styles.css";
import { Toaster } from "sonner";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { clinic, fullAddress } from "@/data/clinic";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Manipal Physiotherapy And Fitness Center",
    template: "%s | Manipal Physiotherapy And Fitness Center",
  },
  description: "Expert physiotherapy and rehabilitation clinic in Jamshedpur.",
  openGraph: {
    siteName: clinic.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e1507b4b-12c2-43bc-bd4a-3cc16df9354b/id-preview-f36b267a--60004b87-f947-4bff-b6fa-f8c852827809.lovable.app-1780157372061.png",
        width: 1200,
        height: 630,
        alt: "Manipal Physiotherapy And Fitness Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e1507b4b-12c2-43bc-bd4a-3cc16df9354b/id-preview-f36b267a--60004b87-f947-4bff-b6fa-f8c852827809.lovable.app-1780157372061.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physiotherapist"],
    name: clinic.name,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.line3}`,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postal,
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 09:00-21:00",
    areaServed: "Jamshedpur",
    description: `Expert physiotherapy and rehabilitation clinic in Jamshedpur. ${fullAddress}`,
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${fraunces.variable} ${notoSansDevanagari.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        <JsonLd data={orgLd} />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen pb-24 md:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileCallBar />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
