import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import FAQ from "@/components/ui/FAQ";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business, coreServices } from "@/lib/site-data";

const faqItems = [
  {
    question: "Do you service Nanango regularly?",
    answer:
      "Yes, Nanango is home base, so it's where I respond fastest. Older Queenslanders to newer builds out towards Yarraman Road, I've worked on plenty of places just like yours.",
  },
  {
    question: "What air con services are available in Nanango?",
    answer:
      "Split system installs, servicing and deep cleans, and fault finding, plus repairs, relocations, and scheduled maintenance for motels and real estate.",
  },
  {
    question: "Do you offer free quotes in Nanango?",
    answer:
      "Yes, every job in Nanango starts with a free, no-pressure quote.",
  },
];

export const metadata: Metadata = {
  title: "Air Conditioning in Nanango | Chilled As Air Conditioning",
  description:
    "Local air conditioning installation, servicing and repairs in Nanango, QLD. Call Jon for a free quote.",
};

export default function NanangoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-16 text-white md:py-24">
        <DarkSectionDecor />
        <div className="relative z-10">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Based Here
            </span>
            <h1 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Air Conditioning in <span className="text-brand-blue">Nanango</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Nanango is home base for me, so if you&apos;re local,
              you&apos;re getting the quickest response and someone who
              knows the town and its houses inside out. From the older
              Queenslanders to newer builds out towards Yarraman Road,
              I&apos;ve worked on plenty of places just like yours.
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
              Nanango sits right in the heart of the South Burnett, and
              it&apos;s where I&apos;m based full time. Being local means
              less time on the road for me and a faster callout for you,
              especially when your air con decides to play up in the
              middle of summer.
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
                <span className="font-semibold text-navy">Fast Local Response</span>
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
          Services Available in Nanango
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
            <Link
              href={service.href}
              className="group relative flex h-full items-start gap-3 overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/10"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                <ServiceIcon slug={service.slug} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold text-navy">
                  {service.name}
                </span>
                <span className="text-sm text-slate-700">
                  {service.shortDescription}
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

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-10 text-white md:py-14">
        <DarkSectionDecor />
        <Snowflake
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-10 h-20 w-20 text-white/10"
          strokeWidth={1}
        />
        <div className="relative z-10">
        <Container>
          <FadeIn className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white backdrop-blur-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Local, Reliable, Ready to Help
            </span>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
              Sorted, Nanango
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              If you&apos;re in Nanango and your air con needs sorting, give
              me a call. Free quotes, straight talk, no runaround.
            </p>
            <a
              href={business.phoneHref}
              className="mt-4 inline-block text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-brand-blue md:text-3xl"
            >
              {business.phoneDisplay}
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={business.phoneHref}
                className="group inline-flex items-center gap-2.5 rounded-xl btn-shine relative overflow-hidden bg-gradient-to-r from-brand-blue to-navy py-2 pl-2 pr-6 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 group-hover:bg-white/30">
                  <Phone className="h-4 w-4 text-white" aria-hidden="true" />
                </span>
                Call Jon Now
              </a>
              <Button
                href="/contact"
                variant="secondary"
                icon={<Send className="h-4 w-4" aria-hidden="true" />}
              >
                Get a Free Quote
              </Button>
            </div>
          </FadeIn>
        </Container>
        </div>
      </section>

      <FAQ items={faqItems} title="Nanango Air Conditioning FAQs" />
    </>
  );
}
