import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Section from "./Section";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { business } from "@/lib/site-data";

export default function ContactSection() {
  return (
      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Get In Touch
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
                Send Jon <span className="text-brand-blue">Your Details</span>
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-slate-700">
                Fill this in and Jon will get back to you, or reach out
                directly using any of the details below.
              </p>
            </FadeIn>
            <ul className="mt-8 grid grid-cols-1 gap-4">
              {[
                { icon: Phone, label: "Call Jon", value: business.phoneDisplay, href: business.phoneHref },
                { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
                { icon: MapPin, label: "Based in", value: business.location },
                { icon: Clock, label: "Quotes", value: "Free on every job" },
              ].map(({ icon: Icon, label, value, href }, i) => {
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-widest text-brand-blue">
                        {label}
                      </span>
                      <span className="block break-words font-semibold text-navy">{value}</span>
                    </span>
                  </>
                );
                const cardClass =
                  "group flex items-center gap-4 rounded-2xl border border-brand-blue/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/10";
                return (
                  <li key={label}>
                    <FadeIn delay={0.1 + i * 0.08}>
                      {href ? (
                        <a href={href} className={cardClass}>
                          {inner}
                        </a>
                      ) : (
                        <div className={cardClass}>{inner}</div>
                      )}
                    </FadeIn>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/15 via-transparent to-transparent blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border-2 border-brand-blue/20 bg-frost shadow-sm">
              <div className="h-1.5 w-full bg-gradient-to-r from-brand-blue via-brand-blue to-navy" />
              <div className="p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
  );
}
