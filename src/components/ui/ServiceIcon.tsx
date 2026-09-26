import {
  Snowflake,
  AirVent,
  Wrench,
  SprayCan,
  Droplets,
  Search,
  Hammer,
  Truck,
  CalendarClock,
  Building2,
  ThermometerSnowflake,
  type LucideIcon,
} from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  "split-systems": Snowflake,
  installations: Wrench,
  "ducted-air-conditioning": AirVent,
  "servicing-cleaning": SprayCan,
  "deep-cleans": Droplets,
  "fault-finding": Search,
  repairs: Hammer,
  relocations: Truck,
  "scheduled-maintenance": CalendarClock,
  "motels-real-estate": Building2,
  "cold-rooms": ThermometerSnowflake,
};

export default function ServiceIcon({
  slug,
  className = "h-6 w-6",
}: {
  slug: string;
  className?: string;
}) {
  const Icon = serviceIcons[slug] ?? Snowflake;
  return <Icon className={className} aria-hidden="true" strokeWidth={2} />;
}
