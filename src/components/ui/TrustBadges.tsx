import { BadgeDollarSign, MapPin, MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";

const badges = [
  { icon: BadgeDollarSign, label: business.offer },
  { icon: MapPin, label: "Local & Reliable" },
  { icon: MessageCircle, label: "Straight Talk, No Pressure" },
];

export default function TrustBadges() {
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {badges.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}
