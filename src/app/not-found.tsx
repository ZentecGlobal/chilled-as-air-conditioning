import Link from "next/link";
import { ArrowRight, Phone, Snowflake } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-16 text-white">
      <DarkSectionDecor />
      <Snowflake
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-16 h-40 w-40 text-white/5"
        strokeWidth={0.75}
      />
      <Container>
        <FadeIn className="relative mx-auto max-w-xl text-center">
          <p className="bg-gradient-to-r from-white to-brand-blue bg-clip-text text-7xl font-extrabold text-transparent md:text-8xl">
            404
          </p>
          <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Page not <span className="text-brand-blue">found</span>
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            Looks like that page has gone for a smoko. Head back home, or call
            Jon directly and he&apos;ll sort you out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="btn-shine relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue to-navy px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Back to Home
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Jon: {business.phoneDisplay}
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
