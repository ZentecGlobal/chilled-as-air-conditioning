import Link from "next/link";
import { ArrowRight, Camera, Check, ChevronRight, ExternalLink, MapPin, Phone, Send, Snowflake, Star, Wrench } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import TrustBadges from "@/components/ui/TrustBadges";
import MiniSlideshow, { type SlideshowPhoto } from "@/components/ui/MiniSlideshow";
import WorkMarquee, { type MarqueePhoto } from "@/components/ui/WorkMarquee";
import HeroFormPanel from "@/components/ui/HeroFormPanel";
import HeroBackgroundPhoto from "@/components/ui/HeroBackgroundPhoto";
import HeroDecor from "@/components/ui/HeroDecor";
import HeroHeadline from "@/components/ui/HeroHeadline";
import AboutPhotoFrame from "@/components/ui/AboutPhotoFrame";
import FAQ from "@/components/ui/FAQ";
import ContactSection from "@/components/ui/ContactSection";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business, coreServices, serviceAreas } from "@/lib/site-data";

const faqItems = [
  {
    question: "What areas does Chilled As Air Conditioning service?",
    answer:
      "I'm based in Nanango and cover the wider South Burnett region, including Wondai and Crows Nest. If your town isn't listed, call anyway, I travel further than you'd think.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, every job starts with a free, no-pressure quote so you know exactly what you're paying before any work begins.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Split system installations, servicing and deep cleans, fault finding and repairs, plus ongoing support for motels and real estate managed properties.",
  },
  {
    question: "How quickly can you respond to a callout?",
    answer:
      "Being based locally in Nanango means quicker response times than a contractor travelling in from out of town, call to lock in a time that suits.",
  },
];

const workMarqueePhotos: MarqueePhoto[] = [
  {
    src: "/images/unsorted-general/20260227_172237.jpg",
    alt: "Jon from Chilled As Air Conditioning performing a split system deep clean",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0010.jpg",
    alt: "Indoor split system fitted with a protective catch-bag ready for a deep clean wash-down",
  },
  {
    src: "/images/unsorted-general/20260122_095623.jpg",
    alt: "Newly installed Dimplex split system indoor unit by Chilled As Air Conditioning",
  },
  {
    src: "/images/servicing-cleaning/fault-finding/20241216_142304.jpg",
    alt: "Refrigerant pressure gauge reading during an air conditioning fault-finding callout",
  },
  {
    src: "/images/unsorted-general/20260709_090417.jpg",
    alt: "Split system outdoor condenser unit installed by Chilled As Air Conditioning",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0015.jpg",
    alt: "Heavily soiled air conditioner filters removed for washing during a deep clean",
  },
  {
    src: "/images/unsorted-general/20260709_093046.jpg",
    alt: "Jon from Chilled As Air Conditioning servicing an outdoor split system unit",
  },
  {
    src: "/images/servicing-cleaning/fault-finding/20260605_184735.jpg",
    alt: "Ice built up on an evaporator coil and copper pipework found during a fault-finding job",
  },
  {
    src: "/images/unsorted-general/20260707_115009.jpg",
    alt: "Split system indoor unit mounted and installed by Chilled As Air Conditioning",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0019.jpg",
    alt: "Close-up of a dirty indoor coil before a split system deep clean",
  },
  {
    src: "/images/servicing-cleaning/fault-finding/20250109_094022.jpg",
    alt: "Inverter control board exposed during a commercial air conditioning fault-finding job",
  },
  {
    src: "/images/unsorted-general/20260227_170243.jpg",
    alt: "On-site air conditioning maintenance work, Chilled As Air Conditioning",
  },
  {
    src: "/images/ducted/ducted-rooftop-unit.jpg",
    alt: "Rooftop ducted air conditioning outdoor unit serviced by Chilled As Air Conditioning",
  },
  {
    src: "/images/ducted/ducted-filter-dirty.jpg",
    alt: "A heavily clogged ducted air conditioning filter before cleaning",
  },
  {
    src: "/images/ducted/ducted-return-grille.jpg",
    alt: "A ducted return air grille removed for cleaning",
  },
  {
    src: "/images/ducted/ducted-filter-check.jpg",
    alt: "Checking a dirty ducted air conditioning filter by hand",
  },
];

const heroBackgroundPhoto = {
  src: "/images/unsorted-general/20260122_095623.jpg",
  alt: "Newly installed Dimplex split system indoor unit by Chilled As Air Conditioning",
};

// Split Systems and Installations only have 1-2 real photos so far, so they
// stay single static images. Servicing & Cleaning has 38+ real photos, so
// it gets a rotating mini-slideshow instead.
const homepageServicePhotos: Record<string, SlideshowPhoto[]> = {
  "split-systems": [
    {
      src: "/images/unsorted-general/20260122_095623.jpg",
      alt: "Newly installed Dimplex split system indoor unit by Chilled As Air Conditioning",
      position: "object-center",
    },
  ],
  "ducted-air-conditioning": [
    {
      src: "/images/ducted/ducted-rooftop-unit.jpg",
      alt: "A rooftop ducted air conditioning outdoor unit serviced by Chilled As Air Conditioning",
      position: "object-[50%_55%]",
    },
  ],
  installations: [
    {
      src: "/images/unsorted-general/20260707_115009.jpg",
      alt: "Split system indoor unit mounted and installed by Chilled As Air Conditioning",
      position: "object-center",
    },
  ],
  "servicing-cleaning": [
    {
      src: "/images/unsorted-general/20260227_172237.jpg",
      alt: "Jon from Chilled As Air Conditioning performing a split system deep clean",
      position: "object-top",
    },
    {
      src: "/images/servicing-cleaning/deep-cleans/IMG_0010.jpg",
      alt: "Indoor split system fitted with a protective catch-bag ready for a deep clean wash-down",
    },
    {
      src: "/images/servicing-cleaning/fault-finding/20241216_142304.jpg",
      alt: "Refrigerant pressure gauge reading during an air conditioning fault-finding callout",
    },
    {
      src: "/images/servicing-cleaning/deep-cleans/IMG_0015.jpg",
      alt: "Heavily soiled air conditioner filters removed for washing during a deep clean",
    },
    {
      src: "/images/servicing-cleaning/fault-finding/20260605_184735.jpg",
      alt: "Ice built up on an evaporator coil and copper pipework found during a fault-finding job",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-20 text-white md:min-h-[760px] md:py-28">
        <HeroBackgroundPhoto src={heroBackgroundPhoto.src} alt={heroBackgroundPhoto.alt} />
        <HeroDecor />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] [background-size:32px_32px]"
        />
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-14 xl:px-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div className="max-w-2xl md:ml-8 lg:ml-0">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Nanango &amp; the South Burnett
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-6 border-l-4 border-brand-blue/70 pl-5">
                <HeroHeadline />
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-100 [text-shadow:0_1px_10px_rgba(11,36,64,0.7)]">
                  G&apos;day, I&apos;m Jon, the bloke you&apos;ll actually see
                  turn up at your place. I run {business.name} out of Nanango,
                  servicing homes and businesses right across the{" "}
                  {business.region} region, including Wondai and Crows Nest.
                </p>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-100 [text-shadow:0_1px_10px_rgba(11,36,64,0.7)]">
                  Whether it&apos;s a new split system, a full install, or
                  your unit&apos;s just due for a clean, give me a call and
                  I&apos;ll sort you out.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={business.phoneHref}
                  className="group inline-flex items-center gap-2.5 rounded-xl btn-shine relative overflow-hidden bg-gradient-to-r from-brand-blue to-navy py-2 pl-2 pr-6 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 group-hover:bg-white/30">
                    <Phone className="h-4 w-4 text-white" aria-hidden="true" />
                  </span>
                  Call Jon: {business.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-white/30 bg-white/10 py-2 pl-2 pr-6 font-semibold text-white shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy hover:shadow-lg"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors duration-200 group-hover:bg-white/25">
                    <Send className="h-4 w-4 text-white" aria-hidden="true" />
                  </span>
                  Get a Free Quote
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <TrustBadges />
            </FadeIn>
            <div className="mt-8 max-w-md lg:hidden">
              <HeroFormPanel delay={0.35} />
            </div>
          </div>
          <div className="hidden justify-self-end lg:block">
            <HeroFormPanel delay={0.2} />
          </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 sm:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
          <ChevronRight
            className="h-4 w-4 animate-bounce rotate-90"
            aria-hidden="true"
          />
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

      <Section decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <FadeIn className="relative order-2 pb-6 sm:pb-8 md:order-1">
            <AboutPhotoFrame
              src="/images/unsorted-general/20260227_172237.jpg"
              alt="Jon, owner of Chilled As Air Conditioning, on the job"
            />
          </FadeIn>
          <FadeIn delay={0.15} className="order-1 md:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Meet the Bloke Behind the Van
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
              About <span className="text-brand-blue">Jon</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-700">
              I&apos;m Jon, and I run {business.name} out of Nanango. I
              started this business because I wanted to give the South
              Burnett a local air con option people could actually trust,
              someone who turns up when he says he will, does the job
              properly, and doesn&apos;t disappear afterwards if something
              needs sorting out.
            </p>
            <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3">
              {["Turns up when he says he will", "Does the job properly", "Still around if something needs sorting"].map((t, i) => (
                <li key={t}>
                  <FadeIn delay={0.1 + i * 0.1}>
                    <div className="group flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-white p-3 font-medium text-navy shadow-sm transition-all duration-300 hover:translate-x-1.5 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/10">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                        <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {t}
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-navy px-5 py-2.5 font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-md"
            >
              More about Jon
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
              <a
                href={business.phoneHref}
                className="btn-shine relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-transparent bg-gradient-to-r from-brand-blue to-navy px-5 py-2.5 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Jon
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-light via-sky-50 to-white py-14 md:py-20">
        <Snowflake
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 right-10 h-24 w-24 text-brand-blue/15"
          strokeWidth={1}
        />
        <Snowflake
          aria-hidden="true"
          className="pointer-events-none absolute right-40 top-24 h-12 w-12 text-brand-blue/20"
          strokeWidth={1}
        />
        <Snowflake
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-8 h-16 w-16 text-brand-blue/10"
          strokeWidth={1}
        />
        <Container>
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
              What I <span className="text-brand-blue">Do</span>
            </h2>
            <p className="mt-2 text-slate-700">
              Here&apos;s what I get asked for most. Head to the{" "}
              <Link href="/services" className="text-brand-blue underline hover:text-brand-blue-dark">
                full services page
              </Link>{" "}
              for everything else I cover.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {coreServices.map((service, i) => {
                const photos = homepageServicePhotos[service.slug];
                return (
                <FadeIn key={service.slug} delay={i * 0.1} className="h-full">
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/10"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative">
                    {photos && photos.length > 0 ? (
                      <div className="overflow-hidden rounded-2xl border-4 border-brand-blue-light shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                        <MiniSlideshow photos={photos} />
                      </div>
                    ) : (
                      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border-4 border-brand-blue-light bg-gradient-to-br from-navy-dark via-navy to-navy-dark shadow-lg">
                        <div aria-hidden="true" className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/30 blur-3xl" />
                        <ServiceIcon slug={service.slug} className="relative h-14 w-14 text-white/90" />
                      </div>
                    )}
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-xs font-extrabold tracking-wider text-navy shadow-md backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute -bottom-6 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-lg ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-brand-blue/40">
                      <ServiceIcon slug={service.slug} className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="mt-9 text-xl font-bold leading-snug text-navy">{service.name}</h3>
                  <p className="mt-2 flex-1 text-slate-700">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={service.href}
                    className="group/link mt-5 flex items-center justify-between border-t border-slate-100 pt-4 font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                  >
                    Learn more
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-brand-blue group-hover/link:text-white">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
                </FadeIn>
                );
              })}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-14 md:py-20">
        <DarkSectionDecor />
        <Container>
          <FadeIn className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
              <span className="flex h-6 w-6 shrink-0 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white [animation-duration:3s]">
                <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Real Photos, Real Jobs
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white drop-shadow-sm md:text-4xl">
              Our <span className="text-brand-blue">Work</span>
            </h2>
            <p className="mt-3 text-slate-300">
              A look at recent jobs across the South Burnett, real photos
              from real jobs, not stock photography.
            </p>
          </FadeIn>
        </Container>
        <div className="relative mt-10 flex flex-col gap-5">
          <WorkMarquee
            photos={workMarqueePhotos.slice(0, Math.ceil(workMarqueePhotos.length / 2))}
          />
          <WorkMarquee
            photos={workMarqueePhotos.slice(Math.ceil(workMarqueePhotos.length / 2))}
            reverse
          />
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
              <Star className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Customer Reviews
          </span>
          <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl overflow-hidden rounded-2xl border-2 border-brand-blue/20 shadow-lg sm:grid-cols-2">
          <div className="bg-white p-8 md:p-10">
            <h3 className="text-xl font-bold text-navy md:text-2xl">
              Real Feedback, Straight From Google
            </h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              See what customers across Nanango and the South Burnett have
              to say about their experience with Chilled As Air
              Conditioning on Google.
            </p>
            <a
              href={business.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-navy bg-white px-5 py-2.5 font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-md"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              View Our Google Reviews
            </a>
          </div>
          <div className="relative flex items-center justify-center bg-navy-dark p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle,_rgba(255,255,255,0.4)_1px,_transparent_1px)] [background-size:22px_22px]"
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.69 28.18A11.96 11.96 0 0 1 11.02 24c0-1.45.25-2.86.67-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88z"
                />
                <path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                />
              </svg>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" decorative>
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
          <div className="flex flex-col">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                South Burnett Region
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
                Servicing the <span className="text-brand-blue">South Burnett</span>
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-slate-700">
                Based in Nanango and covering the wider South Burnett region,
                including Wondai and Crows Nest. If you&apos;re not sure
                whether you&apos;re in range, just give me a call, chances
                are I can help.
              </p>
            </FadeIn>
            <ul className="mt-6 grid grid-cols-1 gap-3">
              {serviceAreas.map((area, i) => (
                <li key={area.slug}>
                  <FadeIn delay={0.1 + i * 0.1}>
                    <Link
                      href={area.href}
                      className="group flex items-center gap-4 rounded-2xl border border-brand-blue/15 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/10"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-navy">{area.name}</span>
                        <span className="block text-sm text-slate-600">
                          {area.isMain ? "Jon's home base" : "Regularly serviced"}
                        </span>
                      </span>
                      {area.isMain && (
                        <span className="rounded-full bg-brand-blue-light px-3 py-1 text-xs font-semibold text-brand-blue">
                          Based here
                        </span>
                      )}
                      <ChevronRight
                        className="h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </FadeIn>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="group mt-6 inline-flex w-fit items-center gap-2 font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
            >
              See all service areas
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
          <FadeIn delay={0.15} className="relative min-h-[360px] lg:min-h-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/25 via-brand-blue/5 to-transparent blur-2xl"
            />
            <div className="group relative h-full min-h-[360px] overflow-hidden rounded-2xl border-4 border-white shadow-lg">
              <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-md">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
                </span>
                Live Map
              </span>
              <iframe
                title="Chilled As Air Conditioning service area map"
                src={business.mapEmbedSrc}
                className="absolute inset-0 h-full w-full grayscale-[15%]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-10 text-white md:py-14">
        <DarkSectionDecor />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] [background-size:32px_32px]"
        />
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
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Free Quotes, No Pressure
            </span>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Call me directly or send through your details and I&apos;ll
              get back to you.
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
                Request a Free Quote
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
