import { Phone } from "lucide-react";
import { business } from "@/lib/site-data";

export default function FloatingCallButton() {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Call ${business.ownerFirstName} on ${business.phoneDisplay}`}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy-dark bg-navy text-white shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy opacity-30" />
      <Phone className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
