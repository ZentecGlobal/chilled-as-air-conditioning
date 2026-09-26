import { ShieldCheck, type LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";

export type WhyItem = { icon: LucideIcon; title: string; body: string };

export default function WhyChooseCards({ items }: { items: WhyItem[] }) {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          The Local Difference
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
          Why Choose <span className="text-brand-blue">Jon</span>
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, body }, i) => (
          <FadeIn key={title} delay={i * 0.12} className="h-full">
            <div className="group relative h-full rounded-3xl border border-brand-blue/15 bg-white p-6 pt-10 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/15">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 right-4 select-none text-6xl font-black leading-none text-brand-blue/[0.08] transition-colors duration-300 group-hover:text-brand-blue/15"
              >
                0{i + 1}
              </span>
              <span className="absolute left-6 top-0 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-navy text-white shadow-lg shadow-brand-blue/30 ring-4 ring-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-3 text-xl font-bold text-navy">{title}</h3>
              <p className="relative mt-2 leading-relaxed text-slate-700">{body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
