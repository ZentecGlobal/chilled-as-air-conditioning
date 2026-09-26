import { HelpCircle, Phone, Send } from "lucide-react";
import Link from "next/link";
import Section from "./Section";
import FadeIn from "./FadeIn";
import FAQItemRow from "./FAQItemRow";
import DarkSectionDecor from "./DarkSectionDecor";
import { business } from "@/lib/site-data";

export type FAQItem = { question: string; answer: string };

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
}: {
  items: FAQItem[];
  title?: string;
}) {
  return (
    <Section bg="light">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-dark via-navy to-navy-dark p-7 text-white shadow-2xl shadow-navy-dark/30 md:p-8">
            <DarkSectionDecor />
            <HelpCircle
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 text-white/[0.05]"
              strokeWidth={1}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                FAQs
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight">{title}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">
                Can&apos;t find what you&apos;re after? Give Jon a call and he&apos;ll
                sort you out, no pressure.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={business.phoneHref}
                  className="btn-shine relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue to-navy px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Jon
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <FadeIn key={item.question} delay={i * 0.08}>
              <FAQItemRow
                question={item.question}
                answer={item.answer}
                index={i}
                defaultOpen={i === 0}
              />
            </FadeIn>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </Section>
  );
}
