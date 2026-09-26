// Single source of truth for business details and content used across the site.

export const business = {
  name: "Chilled As Air Conditioning",
  ownerFirstName: "Jon",
  phoneDisplay: "0473 789 644",
  phoneHref: "tel:+61473789644",
  googleProfileUrl: "https://www.google.com/maps?cid=8066028812620994747",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160000!2d151.6016738!3d-26.4010316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ae478371d8d8acb%3A0x6ff04a782c5718bb!2sChilled%20As%20Air%20Conditioning!5e0!3m2!1sen!2sau!4v1790300000000!5m2!1sen!2sau",
  email: "chilledasairconditioning@gmail.com",
  location: "Nanango QLD 4615",
  region: "South Burnett",
  tagline: "Your Comfort, Our Priority",
  offer: "Free Quotes",
};

export type ServiceLink = {
  name: string;
  slug: string;
  hasDedicatedPage: boolean;
  href: string;
  shortDescription: string;
};

// The core services get their own dedicated pages. The rest live as
// sections on the /services overview page, linked to by anchor.
export const services: ServiceLink[] = [
  {
    name: "Split Systems",
    slug: "split-systems",
    hasDedicatedPage: true,
    href: "/services/split-systems",
    shortDescription:
      "Supply and install of quality split system air conditioners for homes and businesses across the South Burnett.",
  },
  {
    name: "Installations",
    slug: "installations",
    hasDedicatedPage: true,
    href: "/services/installations",
    shortDescription:
      "Full air conditioning installations, done right the first time, from single-room units to whole-house setups.",
  },
  {
    name: "Ducted Air Conditioning",
    slug: "ducted-air-conditioning",
    hasDedicatedPage: true,
    href: "/services/ducted-air-conditioning",
    shortDescription:
      "Servicing, repairs and maintenance for ducted systems, for homes and businesses across the South Burnett.",
  },
  {
    name: "Servicing & Cleaning",
    slug: "servicing-cleaning",
    hasDedicatedPage: true,
    href: "/services/servicing-cleaning",
    shortDescription:
      "Regular servicing and cleaning to keep your air con running efficiently and your air quality clean.",
  },
  {
    name: "Deep Cleans",
    slug: "deep-cleans",
    hasDedicatedPage: false,
    href: "/services#deep-cleans",
    shortDescription:
      "A thorough deep clean for units that haven't been serviced in a while, or that need a proper refresh.",
  },
  {
    name: "Fault Finding",
    slug: "fault-finding",
    hasDedicatedPage: false,
    href: "/services#fault-finding",
    shortDescription:
      "Not cooling properly, making noise, or tripping the switch? Jon will track down the problem and fix it.",
  },
  {
    name: "Repairs",
    slug: "repairs",
    hasDedicatedPage: false,
    href: "/services#repairs",
    shortDescription:
      "Honest, straightforward repairs on most brands and models of split systems and ducted units.",
  },
  {
    name: "Relocations",
    slug: "relocations",
    hasDedicatedPage: false,
    href: "/services#relocations",
    shortDescription:
      "Moving house or renovating? Jon can safely relocate your existing unit to its new spot.",
  },
  {
    name: "Scheduled Maintenance",
    slug: "scheduled-maintenance",
    hasDedicatedPage: false,
    href: "/services#scheduled-maintenance",
    shortDescription:
      "Set-and-forget maintenance plans so your system is looked after year-round without you having to remember.",
  },
  {
    name: "Motels & Real Estate",
    slug: "motels-real-estate",
    hasDedicatedPage: false,
    href: "/services#motels-real-estate",
    shortDescription:
      "Ongoing air conditioning servicing and support for motels, rentals, and real estate managed properties.",
  },
  {
    name: "Cold Rooms",
    slug: "cold-rooms",
    hasDedicatedPage: false,
    href: "/services#cold-rooms",
    shortDescription:
      "Servicing, repairs, maintenance and cleaning for cold rooms, including door seals, handles and rollers.",
  },
];

export const coreServices = services.filter((s) => s.hasDedicatedPage);

export type ServiceArea = {
  name: string;
  slug: string;
  href: string;
  isMain: boolean;
  blurb: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    name: "Nanango",
    slug: "nanango",
    href: "/service-areas/nanango",
    isMain: true,
    blurb:
      "Jon is based right here in Nanango, so if you're local, you're getting the fastest response times and someone who genuinely knows the area.",
  },
  {
    name: "Wondai",
    slug: "wondai",
    href: "/service-areas/wondai",
    isMain: false,
    blurb:
      "Regular trips out to Wondai for installs, servicing, and repairs, just give Jon a call to lock in a time.",
  },
  {
    name: "Crows Nest",
    slug: "crows-nest",
    href: "/service-areas/crows-nest",
    isMain: false,
    blurb:
      "Crows Nest homes and businesses can get the same reliable, local service Jon provides across the South Burnett.",
  },
];

export const navServices = services.map((s) => ({
  name: s.name,
  href: s.href,
}));
