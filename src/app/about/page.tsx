import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealImage from "@/components/ui/RevealImage";
import {
  HandCoins,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import ContactSection from "@/components/ui/ContactSection";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business, serviceAreas } from "@/lib/site-data";

const faqItems = [
  {
    question: "Who is Jon and where is Chilled As Air Conditioning based?",
    answer:
      "I'm Jon, a local air conditioning contractor based in Nanango, QLD, servicing homes and businesses across the South Burnett region.",
  },
  {
    question: "How long has Chilled As Air Conditioning been operating?",
    answer:
      "I started this business to give the South Burnett a local air con option people could actually trust, someone who turns up, does the job properly, and stands behind the work.",
  },
  {
    question: "What areas do you service?",
    answer:
      "Nanango, Wondai, Crows Nest, and the wider South Burnett region. If your town isn't listed, call anyway, I travel further than the list suggests.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, every job starts with a free, no-pressure quote so you know exactly what you're paying before any work begins.",
  },
];

export const metadata: Metadata = {
  title: "About Jon | Chilled As Air Conditioning",
  description:
    "Meet Jon, the local air conditioning contractor behind Chilled As Air Conditioning in Nanango, QLD.",
};

const values = [
  {
    icon: MessageCircle,
    title: "Straight Communication",
    body: "No jargon, no runaround, just honest answers about what your job actually needs.",
  },
  {
    icon: HandCoins,
    title: "Fair Pricing",
    body: "A fair price up front, with no surprise add-ons once the job's underway.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Work",
    body: "Every split system, install, and service job done properly, and backed after.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section bg="light" decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Meet the Bloke Behind the Van
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
              About <span className="text-brand-blue">Jon</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
              I&apos;m Jon, and I run {business.name} out of Nanango. I started
              this business because I wanted to give the South Burnett a local
              air con option people could actually trust, someone who turns
              up when he says he will, does the job properly, and doesn&apos;t
              disappear afterwards if something needs sorting out.
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
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <RevealImage><Image
                src="/images/unsorted-general/20260227_172237.jpg"
                alt="Jon, owner of Chilled As Air Conditioning, on the job"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
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

      <Section decorative>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            My Approach
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
            Why I <span className="text-brand-blue">Do This</span>
          </h2>
          <p className="mt-2 leading-relaxed text-slate-700">
            There&apos;s nothing worse than a hot house and a tradie who
            doesn&apos;t call back. I built this business around being the
            opposite of that.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-3xl border border-brand-blue/15 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/10">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

      <Section bg="light" decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
                Local to the <span className="text-brand-blue">South Burnett</span>
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
              Based in {business.location}, I service Nanango and the
              surrounding {business.region} region, including Wondai and
              Crows Nest. This is my community, and I treat every job,
              big or small, like it matters, because it does.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {serviceAreas.map((area, i) => (
              <FadeIn key={area.slug} delay={0.1 + i * 0.1}>
              <Link
                href={area.href}
                className="group flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white px-5 py-3 font-semibold text-navy shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-brand-blue/15"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                {area.name}
              </Link>
              </FadeIn>
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
              Get In Touch
            </span>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
              Got a Job for Me?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Got a job you need done properly? Give me a call.
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

      <FAQ items={faqItems} title="About Chilled As Air Conditioning" />
    </>
  );
}
