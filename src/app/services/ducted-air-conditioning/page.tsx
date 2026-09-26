import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  Camera,
  CheckCircle2,
  HandCoins,
  Home,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Snowflake,
} from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import FAQ from "@/components/ui/FAQ";
import ContactSection from "@/components/ui/ContactSection";
import IncludedSteps from "@/components/ui/IncludedSteps";
import WhyChooseCards from "@/components/ui/WhyChooseCards";
import MediaGallery from "@/components/ui/MediaGallery";
import RevealImage from "@/components/ui/RevealImage";
import { business } from "@/lib/site-data";

const faqItems = [
  {
    question: "Do you install new ducted air conditioning systems?",
    answer:
      "I keep my ducted work to servicing, repairs and maintenance, for both homes and businesses. Being a one man band, I focus on looking after the systems you already have.",
  },
  {
    question: "Do you service ducted systems for both homes and businesses?",
    answer:
      "Yes, I cover both residential and commercial ducted air conditioning across the South Burnett.",
  },
  {
    question: "Do you offer free quotes on ducted servicing and repairs?",
    answer: "Yes, every job starts with a free, no-pressure quote.",
  },
];

export const metadata: Metadata = {
  title: "Ducted Air Conditioning | Chilled As Air Conditioning",
  description:
    "Ducted air conditioning servicing, repairs and maintenance for homes and businesses across Nanango and the South Burnett. Call Jon for a free quote.",
};

const audiences = [
  {
    icon: Home,
    title: "For Your Home",
    points: [
      "Servicing to keep your ducted system running efficiently",
      "Repairs when it stops cooling or something's gone wrong",
      "Filter and grille cleaning",
      "Regular maintenance so small problems don't become big ones",
    ],
  },
  {
    icon: Building2,
    title: "For Your Business",
    points: [
      "Servicing and maintenance for offices, shops and other commercial spaces",
      "Repairs to get you back up and running",
      "Filter and grille cleaning",
      "Regular scheduled maintenance",
    ],
  },
];

const included = [
  "An on-site look at your system to see what it needs",
  "A clear, free quote before any work begins",
  "Servicing, filter and grille cleaning",
  "Repairs and regular maintenance, for homes and businesses",
];

const ductedPhotos = [
  {
    src: "/images/ducted/ducted-filter-dirty.jpg",
    alt: "A heavily clogged ducted air conditioning filter before cleaning",
    caption: "Before: a clogged filter",
  },
  {
    src: "/images/ducted/ducted-return-grille.jpg",
    alt: "A ducted return air grille removed for cleaning",
    caption: "Return air grille",
  },
  {
    src: "/images/ducted/ducted-filter-check.jpg",
    alt: "Checking a dirty ducted air conditioning filter by hand",
    caption: "Checking the filter",
  },
];

const ductedClips = [
  {
    src: "/videos/ducted-filter-rinse.mp4",
    label: "Rinsing a ducted filter panel",
    caption: "Rinsing a filter panel",
    poster: "/images/ducted/poster-rinse.jpg",
  },
  {
    src: "/videos/ducted-filter-wash.mp4",
    label: "Washing a dirty ducted filter",
    caption: "Washing a dirty filter",
    poster: "/images/ducted/poster-wash.jpg",
  },
];

const whyChoose = [
  {
    icon: MessageCircle,
    title: "Straight Talking",
    body: "I'm local, I show up when I say I will, and I'll give you a straight answer on what your system needs.",
  },
  {
    icon: HandCoins,
    title: "Fair Pricing",
    body: "A straight answer and a fair price, with no surprises when the job's done.",
  },
  {
    icon: ShieldCheck,
    title: "Backed After the Job",
    body: "Someone you can actually call if anything comes up, long after the job is done.",
  },
];

export default function DuctedPage() {
  return (
    <>
      <Section bg="light" decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md">
                <ServiceIcon slug="ducted-air-conditioning" className="h-6 w-6" />
              </span>
              <h1 className="text-3xl font-extrabold text-navy md:text-4xl">
                Ducted Air Conditioning
              </h1>
            </div>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
              Keep your ducted system running the way it should. I look after
              ducted air conditioning for homes and businesses, with servicing,
              repairs and maintenance, and I&apos;ll quote it before any work begins.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={business.phoneHref}
                className="btn-shine relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-transparent bg-gradient-to-r from-brand-blue to-navy px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
              >
                <Phone className="h-4 w-4 text-white" aria-hidden="true" />
                Call Jon: {business.phoneDisplay}
              </a>
              <Button
                href="/contact"
                variant="secondary"
                icon={<Send className="h-4 w-4" aria-hidden="true" />}
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="animate-tilt-soft absolute -bottom-5 -right-5 hidden h-full w-full rounded-3xl bg-gradient-to-br from-brand-blue to-navy-dark sm:block"
            />
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
              <RevealImage>
                <Image
                  src="/images/ducted/ducted-rooftop-unit.jpg"
                  alt="A rooftop ducted air conditioning outdoor unit serviced by Chilled As Air Conditioning"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  style={{ objectPosition: "50% 55%" }}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </RevealImage>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent"
              />
              <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                Ducted servicing across the South Burnett
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
              <Snowflake className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Residential &amp; Commercial
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
            Ducted Servicing for <span className="text-brand-blue">Homes and Businesses</span>
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, points }, i) => (
            <FadeIn key={title} delay={i * 0.12} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-blue/15 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/15">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-[0.3] bg-gradient-to-r from-brand-blue via-brand-blue to-navy transition-transform duration-500 group-hover:scale-x-100"
                />
                <Icon
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-6 h-44 w-44 text-brand-blue/[0.06] transition-all duration-700 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-brand-blue/10"
                  strokeWidth={1}
                />
                <div className="relative flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-navy text-white shadow-lg shadow-brand-blue/30 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-extrabold text-navy">{title}</h3>
                </div>
                <ul className="relative mt-6 space-y-2.5">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 rounded-xl p-2 text-slate-700 transition-all duration-300 hover:translate-x-1.5 hover:bg-brand-blue-light/70"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-sm">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
              <Camera className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Real Photos, Real Jobs
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
            Ducted Servicing <span className="text-brand-blue">In Action</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Photos and clips from recent ducted jobs.
          </p>
        </div>
        <div className="mt-10">
          <MediaGallery photos={ductedPhotos} clips={ductedClips} />
        </div>
      </Section>

      <Section bg="light" decorative>
        <IncludedSteps items={included} />
      </Section>

      <Section decorative>
        <WhyChooseCards items={whyChoose} />
      </Section>

      <Section bg="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Get a Free Quote</h2>
          <p className="mt-2 text-slate-300">
            Give me a call and I&apos;ll come take a look, or talk you through
            it over the phone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneHref}
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-white bg-white px-6 py-3 font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Phone className="h-4 w-4 text-navy" aria-hidden="true" />
              Call Jon: {business.phoneDisplay}
            </a>
            <Button
              href="/contact"
              variant="secondary"
              icon={<Send className="h-4 w-4" aria-hidden="true" />}
            >
              Request a Free Quote
            </Button>
          </div>
        </div>
      </Section>

      <ContactSection />

      <FAQ items={faqItems} title="Ducted Air Conditioning Questions" />
    </>
  );
}
