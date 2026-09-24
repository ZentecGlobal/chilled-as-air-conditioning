import { HelpCircle } from "lucide-react";
import Section from "./Section";
import FadeIn from "./FadeIn";
import FAQItemRow from "./FAQItemRow";

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
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          FAQs
        </span>
        <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">{title}</h2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-4">
        {items.map((item, i) => (
          <FadeIn key={item.question} delay={i * 0.08}>
            <FAQItemRow question={item.question} answer={item.answer} />
          </FadeIn>
        ))}
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
