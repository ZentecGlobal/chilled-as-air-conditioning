import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Snowflake } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ui/ContactForm";
import FAQ from "@/components/ui/FAQ";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business } from "@/lib/site-data";

const faqItems = [
  {
    question: "What's the fastest way to reach Jon?",
    answer: `A phone call to ${business.phoneDisplay} is the quickest way, email or the contact form both work too, and Jon will get back to you.`,
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, every job starts with a free, no-pressure quote so you know exactly what you're paying before any work begins.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "Jon aims to get back to enquiries as soon as he can, usually the same day, call directly if it's urgent.",
  },
];

export const metadata: Metadata = {
  title: "Contact Jon | Chilled As Air Conditioning",
  description:
    "Call, email or send your details to Jon at Chilled As Air Conditioning for a free quote in Nanango and the South Burnett.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-16 text-white md:py-24">
        <DarkSectionDecor />
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
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Free Quotes, No Pressure
              </span>
              <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Get In <span className="text-brand-blue">Touch</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Easiest way to reach me is a phone call, but email or the
                form below both work too. Free quotes, straight answers,
                no pressure.
              </p>
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
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-6">
            <FadeIn>
              <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                Contact <span className="text-brand-blue">Details</span>
              </h2>
            </FadeIn>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Phone", value: business.phoneDisplay, href: business.phoneHref },
                { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
                { icon: MapPin, label: "Location", value: business.location },
                { icon: MapPin, label: "Service Area", value: "Nanango, Wondai, Crows Nest and the wider South Burnett" },
              ].map(({ icon: Icon, label, value, href }, i) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-widest text-brand-blue">{label}</span>
                      <span className="block break-words text-sm font-semibold text-navy">{value}</span>
                    </span>
                  </>
                );
                const cls =
                  "group flex h-full items-center gap-3 rounded-2xl border border-brand-blue/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/10";
                return (
                  <li key={label}>
                    <FadeIn delay={0.1 + i * 0.08} className="h-full">
                      {href ? <a href={href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>}
                    </FadeIn>
                  </li>
                );
              })}
            </ul>
            <FadeIn delay={0.3} className="relative min-h-[280px] flex-1">
              <div aria-hidden="true" className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/25 via-brand-blue/5 to-transparent blur-2xl" />
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                <iframe
                  title="Chilled As Air Conditioning service area map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d412685.71249218535!2d151.835091!3d-26.752214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b95b2260013b995%3A0x400eef17f20bfc0!2sNanango%20QLD%204615%2C%20Australia!5e1!3m2!1sen!2sus!4v1790252721153!5m2!1sen!2sus"
                  className="absolute inset-0 h-full w-full grayscale-[15%]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/15 via-transparent to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-3xl border-2 border-brand-blue/20 bg-white shadow-lg">
              <div className="h-1.5 w-full bg-gradient-to-r from-brand-blue via-brand-blue to-navy" />
              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
                  Send Your <span className="text-brand-blue">Details</span>
                </h2>
                <p className="mt-2 text-slate-700">
                  Fill this in and Jon will get back to you.
                </p>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <FAQ items={faqItems} />
    </>
  );
}
