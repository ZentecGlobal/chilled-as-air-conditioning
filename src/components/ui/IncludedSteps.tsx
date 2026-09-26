import { CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function IncludedSteps({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          How It Works
        </span>
        <h2
          className={`mt-4 text-3xl font-extrabold md:text-4xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          What&apos;s <span className="text-brand-blue">Included</span>
        </h2>
      </div>
      <div
        className={`relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 ${
          items.length >= 5 ? "lg:grid-cols-5 lg:gap-5" : items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {items.map((item, i) => (
          <FadeIn key={item} delay={i * 0.1} className="h-full">
            <div className="group relative h-full rounded-3xl border border-brand-blue/15 bg-white p-6 pt-9 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/20">
              <span
                className={`absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-lg font-extrabold text-white shadow-lg ring-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                  dark ? "ring-navy" : "ring-frost"
                }`}
              >
                {i + 1}
              </span>
              <p className="font-semibold leading-snug text-navy">{item}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
