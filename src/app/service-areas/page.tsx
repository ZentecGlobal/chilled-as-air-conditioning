import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone, Send, Snowflake } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import ContactSection from "@/components/ui/ContactSection";
import PageHeroBackdrop from "@/components/ui/PageHeroBackdrop";
import RevealTitle from "@/components/ui/RevealTitle";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business, serviceAreas } from "@/lib/site-data";

const faqItems = [
  {
    question: "What areas does Chilled As Air Conditioning service?",
    answer:
      "Nanango, Wondai, Crows Nest, and the wider South Burnett region. If your town isn't listed here, call anyway, I travel further than this list suggests.",
  },
  {
    question: "Is there a call-out fee if I'm outside these towns?",
    answer:
      "Give me a call and I'll let you know straight up whether I can get to you and what that involves, no surprises.",
  },
  {
    question: "How quickly can you get to my area?",
    answer:
      "Nanango is home base so response is fastest there. Wondai and Crows Nest are regular runs too, call to lock in a time that suits.",
  },
];

export const metadata: Metadata = {
  title: "Service Areas | Chilled As Air Conditioning",
  description:
    "Air conditioning services across Nanango, Wondai, Crows Nest and the South Burnett region.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-20 text-white md:py-32">
        <PageHeroBackdrop src="/images/unsorted-general/20260305_092358.jpg" position="50% 40%" />
        <Snowflake
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-10 h-20 w-20 text-white/10"
          strokeWidth={1}
        />
        <div className="relative z-10">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Where I Work
              </span>
              <RevealTitle className="mt-4 text-4xl font-extrabold md:text-5xl" text="Service" accent="Areas" />
              <p className="mt-4 text-lg leading-relaxed text-slate-100 [text-shadow:0_1px_12px_rgba(11,36,64,0.8)]">
                I&apos;m based in Nanango and cover the wider South Burnett
                region. Here&apos;s where you&apos;ll find me most, but if
                your town isn&apos;t listed, call anyway, I travel
                further than this list suggests.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-md">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                {serviceAreas.length} Towns Covered
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-md">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <Send className="h-4 w-4" aria-hidden="true" />
                </span>
                Free Quotes on Every Job
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-md">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </span>
                Not Listed? Call Anyway
              </span>
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

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceAreas.map((area, i) => (
            <FadeIn key={area.slug} delay={i * 0.1}>
              <Link
                href={area.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/10"
              >
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-blue/40">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 flex items-center gap-2 text-xl font-semibold text-navy">
                  {area.name}
                  {area.isMain && (
                    <span className="rounded-full bg-brand-blue-light px-2.5 py-0.5 text-xs font-semibold text-brand-blue">
                      Based here
                    </span>
                  )}
                </h2>
                <p className="mt-2 flex-1 text-slate-700">{area.blurb}</p>
                <span className="group/link mt-3 inline-flex items-center gap-1 font-semibold text-brand-blue">
                  {area.name} details
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
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
              Not Listed?
            </span>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
              Call Anyway
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              I service plenty of the South Burnett outside these three
              towns. Give me a call and I&apos;ll let you know straight up
              if I can get to you.
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

      <ContactSection />

      <FAQ items={faqItems} title="Service Area Questions" />
    </>
  );
}
