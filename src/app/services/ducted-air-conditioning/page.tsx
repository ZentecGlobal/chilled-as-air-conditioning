import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
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
import RevealImage from "@/components/ui/RevealImage";
import { business } from "@/lib/site-data";

const faqItems = [
  {
    question: "Is ducted air conditioning right for my home or business?",
    answer:
      "It depends on your layout, roof space and how you use each room. I'll take a look on site and give you a straight answer, including if a split system would suit you better.",
  },
  {
    question: "Do you do ducted for both homes and businesses?",
    answer:
      "Yes, I cover both residential and commercial ducted air conditioning across the South Burnett.",
  },
  {
    question: "Do you offer free quotes on ducted systems?",
    answer: "Yes, every job starts with a free, no-pressure quote.",
  },
];

export const metadata: Metadata = {
  title: "Ducted Air Conditioning | Chilled As Air Conditioning",
  description:
    "Ducted air conditioning for homes and businesses across Nanango and the South Burnett. Call Jon for a free quote.",
};

const audiences = [
  {
    icon: Home,
    title: "For Your Home",
    points: [
      "Cool the whole house from one system",
      "Discreet vents instead of units on the wall",
      "Suits larger family homes, new builds and renovations",
    ],
  },
  {
    icon: Building2,
    title: "For Your Business",
    points: [
      "Even comfort across offices, shops and open floor plans",
      "One system instead of several separate units",
      "Quoted on site so it fits how your space is used",
    ],
  },
];

const included = [
  "An on-site look at your space to see if ducted is the right fit",
  "A clear, free quote before any work begins",
  "Advice on the right system for your home or business",
  "Ducted servicing and repairs on most brands",
];

const whyChoose = [
  {
    icon: MessageCircle,
    title: "Straight Talking",
    body: "I'm local, I show up when I say I will, and I'll tell you honestly if ducted isn't the right call.",
  },
  {
    icon: HandCoins,
    title: "Fair Pricing",
    body: "A straight answer and a fair price, with no surprises when the job's done.",
  },
  {
    icon: ShieldCheck,
    title: "Backed After the Job",
    body: "Someone you can actually call if anything comes up, long after the install.",
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
              Comfort through the whole space from one system, tucked neatly
              out of sight. Whether it&apos;s your home or your business,
              I&apos;ll look at your place, tell you straight if ducted is the
              right fit, and quote it before any work begins.
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
                  src="/images/unsorted-general/20260709_094540.jpg"
                  alt="Outdoor air conditioning unit installed by Chilled As Air Conditioning"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  style={{ objectPosition: "50% 12%" }}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </RevealImage>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent"
              />
              <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                Homes &amp; businesses across the South Burnett
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
            Ducted for <span className="text-brand-blue">Homes and Businesses</span>
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, points }, i) => (
            <FadeIn key={title} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-blue/15 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/10">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-navy">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
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
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          What&apos;s Included
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {included.map((item, i) => (
            <FadeIn key={item} delay={i * 0.08}>
              <div className="group flex h-full items-start gap-3 rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/20">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
                <span className="text-slate-700">{item}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">Why Choose Jon</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {whyChoose.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className="group flex h-full flex-col items-start rounded-3xl border border-brand-blue/15 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-sm text-slate-700">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
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

      <FAQ items={faqItems} title="Ducted Air Conditioning Questions" />
    </>
  );
}
