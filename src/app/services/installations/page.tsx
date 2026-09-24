import type { Metadata } from "next";
import Image from "next/image";
import RevealImage from "@/components/ui/RevealImage";
import {
  Camera,
  CheckCircle2,
  HardHat,
  Phone,
  Send,
  Wrench,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import FAQ from "@/components/ui/FAQ";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business } from "@/lib/site-data";

const faqItems = [
  {
    question: "What's included in an air conditioning installation?",
    answer:
      "Site assessment and advice, single or multi-room installations, electrical connection and safety switch compliance, neat pipe and cable runs, and full system testing before I leave the job.",
  },
  {
    question: "Do you handle the electrical work too?",
    answer:
      "Yes, I take care of the full installation from start to finish, including electrical and piping, so you're not left chasing different tradies to get one job done.",
  },
  {
    question: "Do you offer free quotes for installations?",
    answer: "Yes, every job starts with a free, no-pressure quote.",
  },
];

export const metadata: Metadata = {
  title: "Air Conditioning Installations | Chilled As Air Conditioning",
  description:
    "Full air conditioning installations for homes and businesses across Nanango and the South Burnett. Call Jon for a free quote.",
};

const included = [
  "Site assessment and advice on the best setup for your home or business",
  "Single and multi-room installations",
  "Electrical connection and safety switch compliance",
  "Neat pipe and cable runs, inside and out",
  "Full system testing before I leave the job",
];

const whyChoose = [
  {
    icon: Wrench,
    title: "One Tradie, One Job",
    body: "Done properly the first time, no chasing different tradies to finish one job.",
  },
  {
    icon: HardHat,
    title: "Right Across the South Burnett",
    body: "I've installed systems right across the region and stand behind every one.",
  },
  {
    icon: CheckCircle2,
    title: "If It's Not Right, I Fix It",
    body: "Something not right after the job? You call me and I'll sort it.",
  },
];

const galleryPhotos = [
  {
    src: "/images/unsorted-general/20260707_115009.jpg",
    alt: "Split system indoor unit mounted and installed by Chilled As Air Conditioning",
    position: "50% 42%",
  },
  {
    src: "/images/unsorted-general/20260709_094540.jpg",
    alt: "Split system outdoor condenser unit installed by Chilled As Air Conditioning",
    position: "50% 22%",
  },
];

const heroPhoto = {
  src: "/images/unsorted-general/20260305_092358.jpg",
  alt: "Split system indoor unit installed on a living room wall by Chilled As Air Conditioning",
  position: "50% 38%",
};

export default function InstallationsPage() {
  return (
    <>
      <Section bg="light" decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md">
                <ServiceIcon slug="installations" className="h-6 w-6" />
              </span>
              <h1 className="text-3xl font-bold text-navy md:text-4xl">Installations</h1>
            </div>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
              Whether it&apos;s one room or the whole house, I take care of
              the full installation from start to finish, supply,
              mounting, electrical, piping, and testing, so you&apos;re not
              left chasing different tradies to get one job done.
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
              className="animate-tilt-soft absolute -bottom-5 -right-5 hidden h-full w-full rounded-2xl bg-gradient-to-br from-brand-blue to-navy-dark sm:block"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg group">
              <RevealImage><Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                style={{ objectPosition: heroPhoto.position }}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              /></RevealImage>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-14 md:py-20">
        <DarkSectionDecor />
        <Container>
          <FadeIn className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Real Photos, Real Jobs
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white drop-shadow-sm md:text-4xl">
              Recent <span className="text-brand-blue">Installations</span>
            </h2>
            <p className="mt-3 text-slate-300">
              A look at recent split system installs across the South
              Burnett, real photos from real jobs.
            </p>
          </FadeIn>
        </Container>
        <Container>
          <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {galleryPhotos.map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 0.15} className={i === 1 ? "sm:mt-12" : ""}>
                <div
                className={`group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white shadow-xl transition-shadow duration-300 hover:shadow-2xl `}
              >
                <RevealImage><Image
                  src={photo.src}
                  alt={photo.alt}
                  style={{ objectPosition: photo.position }}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                /></RevealImage>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent"
                />
              </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <Section bg="dark">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          What&apos;s Included
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {included.map((item, i) => (
            <FadeIn key={item} delay={i * 0.08}>
              <div className="h-full group flex items-start gap-3 rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/20">
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
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
          Why Choose Jon
        </h2>
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
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Get a Free Quote
          </h2>
          <p className="mt-2 text-slate-300">
            Call me to talk through what you need, or book in a time for me
            to come take a look.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneHref}
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-navy bg-white px-6 py-3 font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-md"
            >
              <Phone
                className="h-4 w-4 text-navy transition-colors duration-200 group-hover:text-white"
                aria-hidden="true"
              />
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

      <FAQ items={faqItems} title="Installation Questions" />
    </>
  );
}
