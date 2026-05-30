import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { clinic } from "@/data/clinic";
import { whatsappUrl, bookServiceMessage } from "@/lib/whatsapp";

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a
        href={`tel:${clinic.phoneRaw}`}
        className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary-deep"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a
        href={whatsappUrl(bookServiceMessage())}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] py-3 text-sm font-semibold text-white"
      >
        <WhatsAppIcon className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
