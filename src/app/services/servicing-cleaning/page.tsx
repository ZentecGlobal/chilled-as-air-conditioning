import type { Metadata } from "next";
import Image from "next/image";
import RevealImage from "@/components/ui/RevealImage";
import {
  Camera,
  CheckCircle2,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import WorkMarquee, { type MarqueePhoto } from "@/components/ui/WorkMarquee";
import FAQ from "@/components/ui/FAQ";
import ContactSection from "@/components/ui/ContactSection";
import IncludedSteps from "@/components/ui/IncludedSteps";
import WhyChooseCards from "@/components/ui/WhyChooseCards";
import MediaGallery from "@/components/ui/MediaGallery";
import DarkSectionDecor from "@/components/ui/DarkSectionDecor";
import { business } from "@/lib/site-data";

const faqItems = [
  {
    question: "How often should I get my split system serviced?",
    answer:
      "Once a year is a good rule of thumb, more often for units that run constantly like in motels or rentals. A dirty unit works harder, costs more to run, and pumps out worse air.",
  },
  {
    question: "What's included in a service or deep clean?",
    answer:
      "Filter cleaning and replacement, coil and fan cleaning on indoor and outdoor units, checking refrigerant levels, a drain line check, and a general health check of the whole system.",
  },
  {
    question: "Do you service motels and rental properties?",
    answer:
      "Yes, I provide ongoing servicing and support for motels, rentals, and real estate managed properties across the South Burnett.",
  },
];

export const metadata: Metadata = {
  title: "Servicing & Cleaning | Chilled As Air Conditioning",
  description:
    "Air conditioning servicing and cleaning across Nanango and the South Burnett. Call Jon for a free quote.",
};

const deepCleanPhotos: MarqueePhoto[] = [
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0010.jpg",
    alt: "Indoor split system fitted with a protective catch-bag ready for a deep clean wash-down",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0011.jpg",
    alt: "Grimy indoor coil exposed mid deep clean, before washing",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0012.jpg",
    alt: "Split system front housing and filters removed for a thorough deep clean",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0015.jpg",
    alt: "Heavily soiled air conditioner filters removed for washing during a deep clean",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0017.jpg",
    alt: "Air conditioner casing and filters dismantled ready for deep cleaning",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0019.jpg",
    alt: "Close-up of a dirty indoor coil before a split system deep clean",
  },
];

// Specific, accurate captions for the fault-finding photos we've reviewed closely.
const faultFindingKnownAlt: Record<string, string> = {
  "20241216_142304.jpg":
    "Refrigerant pressure gauge reading during an air conditioning fault-finding callout",
  "20250109_094022.jpg":
    "Inverter control board exposed during a commercial air conditioning fault-finding job",
  "20250203_081706.jpg":
    "Close-up inspection of a control circuit board while fault finding a split system",
  "20250402_142049.jpg":
    "Dust and cobwebs on a split system control board found during a fault-finding inspection",
  "20260525_085127.jpg":
    "Refrigerant testing equipment set up beside an outdoor condenser unit during fault finding",
  "20260605_184735.jpg":
    "Ice built up on an evaporator coil and copper pipework found during a fault-finding job",
};

// The rest of the fault-finding set, in filename order. Every photo Jon
// supplied for this folder is shown, not just a curated handful.
const faultFindingFilenames = [
  "20241105_110356.jpg",
  "20241216_142304.jpg",
  "20250109_093931.jpg",
  "20250109_093936.jpg",
  "20250109_094018.jpg",
  "20250109_094022.jpg",
  "20250109_095202.jpg",
  "20250115_072122.jpg",
  "20250115_072431.jpg",
  "20250115_072845.jpg",
  "20250115_073857.jpg",
  "20250124_115545.jpg",
  "20250124_121248.jpg",
  "20250124_121255.jpg",
  "20250124_122351.jpg",
  "20250203_081552.jpg",
  "20250203_081706.jpg",
  "20250203_081709.jpg",
  "20250203_093643.jpg",
  "20250326_071908.jpg",
  "20250402_142046.jpg",
  "20250402_142049.jpg",
  "20250402_142157.jpg",
  "20250402_142227.jpg",
  "20250607_135621.jpg",
  "20251201_095111.jpg",
  "20260525_085120.jpg",
  "20260525_085127.jpg",
  "20260605_183223.jpg",
  "20260605_184735.jpg",
  "20260618_085001.jpg",
  "20260627_105338.jpg",
];

const genericFaultFindingCaptions = [
  "Diagnosing an air conditioning fault on site",
  "Fault-finding inspection in progress",
  "Checking system components during a fault-finding callout",
  "On-site diagnostic work during a fault-finding job",
];

const faultFindingPhotos: MarqueePhoto[] = faultFindingFilenames.map(
  (filename, i) => ({
    src: `/images/servicing-cleaning/fault-finding/${filename}`,
    alt:
      faultFindingKnownAlt[filename] ??
      `${genericFaultFindingCaptions[i % genericFaultFindingCaptions.length]}, Chilled As Air Conditioning`,
  }),
);

const jobPhotos = [
  {
    src: "/images/unsorted-general/20260227_172237.jpg",
    alt: "Jon from Chilled As Air Conditioning performing a split system deep clean",
    caption: "Deep clean in progress",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0010.jpg",
    alt: "Indoor split system fitted with a protective catch-bag ready for a deep clean wash-down",
    caption: "Ready for a wash-down",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0015.jpg",
    alt: "Heavily soiled air conditioner filters removed for washing during a deep clean",
    caption: "Filters before washing",
  },
  {
    src: "/images/servicing-cleaning/deep-cleans/IMG_0019.jpg",
    alt: "Close-up of a dirty indoor coil before a split system deep clean",
    caption: "Dirty coil, before",
  },
];

const jobClips = [
  { src: "/videos/job-clip-1.mp4", label: "Split system deep clean, clip one", caption: "Deep clean, clip 1", poster: "/images/servicing-media/poster-clip-1.jpg" },
  { src: "/videos/job-clip-2.mp4", label: "Split system deep clean, clip two", caption: "Deep clean, clip 2", poster: "/images/servicing-media/poster-clip-2.jpg" },
  { src: "/videos/job-clip-3.mp4", label: "Split system service, clip three", caption: "On the job, clip 3", poster: "/images/servicing-media/poster-clip-3.jpg" },
  { src: "/videos/job-clip-4.mp4", label: "Before and after a split system clean", caption: "Before and after", poster: "/images/servicing-media/poster-clip-4.jpg" },
  { src: "/videos/job-clip-5.mp4", label: "Split system wash-down", caption: "Wash-down", poster: "/images/servicing-media/poster-clip-5.jpg" },
];

const included = [
  "Filter cleaning and replacement where needed",
  "Coil and fan cleaning on the indoor and outdoor units",
  "Checking refrigerant levels and system performance",
  "Drain line check to prevent leaks and water damage",
  "A general health check so small issues don't become big ones",
];

const whyChoose = [
  {
    icon: Sparkles,
    title: "Thorough, No Shortcuts",
    body: "I treat every service like it's my own system, filters, coils and housings, done properly.",
  },
  {
    icon: MessageCircle,
    title: "Straight Talk If Something's Wrong",
    body: "If a system needs more than a clean, I'll tell you honestly rather than just patching it over.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer Breakdowns, Longer Life",
    body: "Regular servicing with me means less strain on your system and a longer life for your unit.",
  },
];

export default function ServicingCleaningPage() {
  return (
    <>
      <Section bg="light" decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md">
                <ServiceIcon slug="servicing-cleaning" className="h-6 w-6" />
              </span>
              <h1 className="text-3xl font-bold text-navy md:text-4xl">
                Servicing &amp; Cleaning
              </h1>
            </div>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-700">
              A dirty or neglected unit works harder, costs more to run,
              and pumps out worse air. Regular servicing keeps your system
              running efficiently and your household breathing cleaner
              air, especially through a South Burnett summer.
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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <RevealImage><Image
                src="/images/unsorted-general/20260227_172237.jpg"
                alt="Jon from Chilled As Air Conditioning performing a split system deep clean"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_8%]"
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

      <Section bg="light" decorative>
        <IncludedSteps items={included} dark={false} />
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
              Deep Cleans <span className="text-brand-blue">in Action</span>
            </h2>
            <p className="mt-3 text-slate-300">
              A look at recent deep cleans, filters, coils and housings
              that hadn&apos;t seen a proper wash in a long while.
            </p>
          </FadeIn>
        </Container>
        <div className="relative mt-10">
          <WorkMarquee photos={deepCleanPhotos} reverse />
        </div>
      </section>

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
              Fault Finding <span className="text-brand-blue">in Action</span>
            </h2>
            <p className="mt-3 text-slate-300">
              Tracking down what&apos;s actually wrong, pressure testing,
              board inspections, and diagnosing the cause rather than just
              guessing.
            </p>
          </FadeIn>
        </Container>
        <div className="relative mt-10">
          <WorkMarquee photos={faultFindingPhotos} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-16 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] [background-size:32px_32px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl"
        />
        <Container>
          <FadeIn className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-navy shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Real Footage, Real Jobs
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
              Recent <span className="text-brand-blue">Jobs</span>
            </h2>
            <p className="mt-3 text-slate-300">
              Photos and clips from recent jobs out in the field.
            </p>
          </FadeIn>
          <div className="relative mt-10">
            <MediaGallery photos={jobPhotos} clips={jobClips} />
          </div>
        </Container>
      </section>

      <Section bg="light" decorative>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md">
                <ServiceIcon slug="motels-real-estate" className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
                Motels &amp; <span className="text-brand-blue">Real Estate</span> Servicing
              </h2>
            </div>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-700">
              Ongoing servicing and support for motels, rentals, and real
              estate managed properties across the South Burnett, regular
              call-outs so units stay reliable for guests and tenants.
            </p>
            <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3">
              {[
                "Regular call-outs on a schedule that suits you",
                "Units kept reliable for guests and tenants",
                "One local contact, straight to Jon",
              ].map((t, i) => (
                <li key={t}>
                  <FadeIn delay={0.1 + i * 0.1}>
                    <div className="group flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/10">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="font-medium text-navy">{t}</span>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="animate-tilt-soft absolute -bottom-5 -right-5 hidden h-full w-full rounded-2xl bg-gradient-to-br from-brand-blue to-navy-dark sm:block"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg group">
              <RevealImage><Image
                src="/images/unsorted-general/20260707_110538.jpg"
                alt="Split system indoor unit serviced by Chilled As Air Conditioning at a managed property"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
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
        <WhyChooseCards items={whyChoose} />
      </Section>

      <Section bg="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Get a Free Quote
          </h2>
          <p className="mt-2 text-slate-300">
            Overdue for a service? Give me a call and I&apos;ll get you
            booked in.
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

      <ContactSection />

      <FAQ items={faqItems} title="Servicing & Cleaning Questions" />
    </>
  );
}
