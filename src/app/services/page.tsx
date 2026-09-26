import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealImage from "@/components/ui/RevealImage";
import {
  ArrowRight,
  BadgeDollarSign,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Snowflake,
  Wrench,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import FAQ from "@/components/ui/FAQ";
import ContactSection from "@/components/ui/ContactSection";
import PageHeroBackdrop from "@/components/ui/PageHeroBackdrop";
import RevealTitle from "@/components/ui/RevealTitle";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business, coreServices, services } from "@/lib/site-data";

const faqItems = [
  {
    question: "What air conditioning services do you offer?",
    answer:
      "Split system installations, ongoing servicing and deep cleans, fault finding and repairs, plus support for motels and real estate managed properties, everything covered on this page.",
  },
  {
    question: "Do you offer free quotes on every job?",
    answer:
      "Yes, every job starts with a free, no-pressure quote so you know what you're paying before work begins.",
  },
  {
    question: "What if I'm not sure which service I need?",
    answer:
      "Call me anyway and describe the problem, chances are I can help, or point you to the right fix.",
  },
];

const quickStats = [
  { icon: Wrench, label: `${services.length} Services Covered` },
  { icon: BadgeDollarSign, label: "Free Quotes on Every Job" },
  { icon: MapPin, label: "South Burnett Wide" },
];

export const metadata: Metadata = {
  title: "Air Conditioning Services | Chilled As Air Conditioning",
  description:
    "Split systems, installations, servicing, repairs, fault finding and more across Nanango and the South Burnett.",
};

const coreServicePhotos: Record<
  string,
  { src: string; alt: string; position?: string }
> = {
  "split-systems": {
    src: "/images/unsorted-general/20260122_095623.jpg",
    alt: "Newly installed Dimplex split system indoor unit by Chilled As Air Conditioning",
  },
  "ducted-air-conditioning": {
    src: "/images/ducted/ducted-rooftop-unit.jpg",
    alt: "A rooftop ducted air conditioning outdoor unit serviced by Chilled As Air Conditioning",
    position: "50% 55%",
  },
  installations: {
    src: "/images/unsorted-general/20260707_115009.jpg",
    alt: "Split system indoor unit mounted and installed by Chilled As Air Conditioning",
  },
  "servicing-cleaning": {
    src: "/images/unsorted-general/20260227_172237.jpg",
    alt: "Jon from Chilled As Air Conditioning performing a split system deep clean",
    position: "50% 8%",
  },
};

const otherServices = services.filter((s) => !s.hasDedicatedPage);

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-20 text-white md:py-32">
        <PageHeroBackdrop src="/images/servicing-cleaning/deep-cleans/IMG_0010.jpg" position="50% 22%" />
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
                  <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                What I Cover
              </span>
              <RevealTitle className="mt-4 text-4xl font-extrabold md:text-5xl" text="All My" accent="Services" />
              <p className="mt-4 text-lg leading-relaxed text-slate-100 [text-shadow:0_1px_12px_rgba(11,36,64,0.8)]">
                Everything I cover, from a straightforward split system
                install to ongoing maintenance for motels and rentals. If
                you can&apos;t see exactly what you need, call me anyway,
                chances are I can help.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {quickStats.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-md"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {label}
                </span>
              ))}
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
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
            <Snowflake className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          Most Requested
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
          Core <span className="text-brand-blue">Services</span>
        </h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          The jobs I&apos;m called out for most.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, i) => {
            const photo = coreServicePhotos[service.slug];
            return (
              <FadeIn key={service.slug} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/10"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {photo && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-4 border-brand-blue-light shadow-lg">
                    <RevealImage><Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      style={photo.position ? { objectPosition: photo.position } : undefined}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    /></RevealImage>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent"
                    />
                  </div>
                )}
                {!photo && (
                  <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border-4 border-brand-blue-light bg-gradient-to-br from-navy-dark via-navy to-navy-dark shadow-lg">
                  <div aria-hidden="true" className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/30 blur-3xl" />
                  <ServiceIcon slug={service.slug} className="relative h-14 w-14 text-white/90" />
                    </div>
                )}
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-blue/40">
                    <ServiceIcon slug={service.slug} className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-navy">{service.name}</h3>
                </div>
                <p className="mt-2 flex-1 leading-relaxed text-slate-700">
                  {service.shortDescription}
                </p>
                <span className="group/link mt-3 inline-flex items-center gap-1 font-semibold text-brand-blue">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section bg="light">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
            <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          And More
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
          More <span className="text-brand-blue">Services</span>
        </h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Everything else I cover, get in touch if you&apos;re not sure
          where your job fits.
        </p>
        <div className="relative -mx-4 mt-8 overflow-hidden sm:-mx-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-frost to-transparent md:w-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-frost to-transparent md:w-10"
          />
          <div className="flex w-max animate-marquee gap-5 px-4 sm:px-6">
            {[...otherServices, ...otherServices].map((service, i) => (
              <div
                key={`${service.slug}-${i}`}
                id={i < otherServices.length ? service.slug : undefined}
                className="group flex w-72 shrink-0 gap-4 rounded-2xl border-2 border-brand-blue/20 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/15 md:w-80"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon slug={service.slug} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{service.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex w-max animate-marquee-reverse gap-5 px-4 sm:px-6">
            {[...otherServices].reverse().concat([...otherServices].reverse()).map((service, i) => (
              <div
                key={`${service.slug}-${i}`}
                                className="group flex w-72 shrink-0 gap-4 rounded-2xl border-2 border-brand-blue/20 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/15 md:w-80"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon slug={service.slug} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{service.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              Not Sure What You Need?
            </span>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
              Just Give Jon a Call
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Describe the problem and he&apos;ll tell you straight what
              needs doing. Free quotes on every job.
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

      <FAQ items={faqItems} />
    </>
  );
}
