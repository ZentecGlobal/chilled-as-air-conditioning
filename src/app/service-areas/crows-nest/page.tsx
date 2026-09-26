import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ServiceIcon from "@/components/ui/ServiceIcon";
import FAQ from "@/components/ui/FAQ";
import ContactSection from "@/components/ui/ContactSection";
import PageHeroBackdrop from "@/components/ui/PageHeroBackdrop";
import RevealTitle from "@/components/ui/RevealTitle";
import { business, coreServices } from "@/lib/site-data";

const faqItems = [
  {
    question: "Do you service Crows Nest regularly?",
    answer:
      "Yes, Crows Nest homes and businesses get the same reliable service I bring everywhere else across the South Burnett.",
  },
  {
    question: "What air con services are available in Crows Nest?",
    answer:
      "Split system installs, servicing and deep cleans, and fault finding, plus repairs, relocations, and scheduled maintenance for motels and real estate.",
  },
  {
    question: "Do you offer free quotes in Crows Nest?",
    answer:
      "Yes, every job in Crows Nest starts with a free, no-pressure quote.",
  },
];

export const metadata: Metadata = {
  title: "Air Conditioning in Crows Nest | Chilled As Air Conditioning",
  description:
    "Local air conditioning installation, servicing and repairs in Crows Nest, QLD. Call Jon for a free quote.",
};

export default function CrowsNestPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-20 text-white md:py-32">
        <PageHeroBackdrop src="/images/ducted/ducted-rooftop-unit.jpg" position="50% 38%" />
        <div className="relative z-10">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Regular Coverage
            </span>
            <RevealTitle className="mt-5 text-3xl font-extrabold md:text-4xl" text="Air Conditioning in" accent="Crows Nest" />
            <p className="mt-4 text-lg leading-relaxed text-slate-100 [text-shadow:0_1px_12px_rgba(11,36,64,0.8)]">
              Crows Nest homes and businesses get the same reliable
              service I bring everywhere else across the South Burnett.
              If your split system needs installing, servicing, or
              fixing, I&apos;m happy to make the trip out.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={business.phoneHref}
                className="btn-shine relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue to-navy px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Jon: {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Get a Free Quote
              </Link>
            </div>
          </FadeIn>
        </Container>
        </div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1 left-0 h-16 w-full text-white md:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50 C240,100 480,0 720,30 C960,60 1200,20 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </section>

      <Section decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Why Locals Choose Jon
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
              Part of the <span className="text-brand-blue">South Burnett</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
              Crows Nest rounds out the main towns I cover across the
              South Burnett region. Cooler nights up here don&apos;t mean
              you can skip the aircon, plenty of homes and shops still
              need reliable cooling and heating, and I&apos;m glad to
              help.
            </p>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/20 via-brand-blue/5 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-brand-blue/15 bg-brand-blue-light shadow-lg">
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-blue via-brand-blue to-navy" />
            <ul className="space-y-4 p-6">
              <li>
                <FadeIn delay={0.1}>
                  <div className="group flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-semibold text-navy">Regular Trips Out</span>
              </div>
                </FadeIn>
              </li>
              <li>
                <FadeIn delay={0.2}>
                  <div className="group flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-semibold text-navy">On Time, Every Time</span>
              </div>
                </FadeIn>
              </li>
              <li>
                <FadeIn delay={0.3}>
                  <div className="group flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-semibold text-navy">Work Backed After the Job</span>
              </div>
                </FadeIn>
              </li>
            </ul>
          </div>
            </div>
        </div>
      </Section>

      <Section bg="light">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
          Services Available in Crows Nest
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
            <Link
              href={service.href}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/10"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-navy text-white shadow-lg shadow-brand-blue/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <ServiceIcon slug={service.slug} className="h-6 w-6" />
              </span>
              <span className="flex-1">
                <span className="block text-lg font-bold text-navy">{service.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-700">{service.shortDescription}</span>
              </span>
              <span className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm font-semibold text-brand-blue">
                Learn more
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-light transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand-blue group-hover:text-white">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
            </FadeIn>
          ))}
        </div>
        <p className="mt-4 text-slate-700">
          Plus deep cleans, fault finding, repairs, relocations, scheduled
          maintenance, and support for motels and real estate, see the{" "}
          <Link href="/services" className="text-brand-blue underline hover:text-brand-blue-dark">
            full services list
          </Link>
          .
        </p>
      </Section>

      <ContactSection />

      <FAQ items={faqItems} title="Crows Nest Air Conditioning FAQs" />
    </>
  );
}
