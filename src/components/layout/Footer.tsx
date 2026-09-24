import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { business, coreServices, serviceAreas } from "@/lib/site-data";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-dark bg-navy-dark text-slate-300">
      <div className="h-[3px] w-full bg-gradient-to-r from-navy via-brand-blue to-brand-blue" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_0.8fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/chilled-as-icon-only.png"
              alt=""
              width={399}
              height={399}
              className="h-12 w-12"
            />
            <span className="leading-tight">
              <span className="block text-xl font-extrabold tracking-wide text-white">
                Chilled As
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                Air Conditioning
              </span>
            </span>
          </div>
          <p className="mt-3">{business.tagline}</p>
        </div>

        <div>
          <h2 className="mb-3 font-bold text-white">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-bold text-white">Services</h2>
          <ul className="space-y-2">
            {coreServices.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="transition-colors hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="transition-colors hover:text-white">
                All Services
              </Link>
            </li>
          </ul>

          <h2 className="mb-3 mt-6 font-bold text-white">Service Areas</h2>
          <ul className="space-y-2">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={area.href} className="transition-colors hover:text-white">
                  {area.name}
                </Link>
              </li>
            ))}
            <li>South Burnett region</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-bold text-white">Contact</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="pt-1 text-sm">{business.location}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <a
                href={business.phoneHref}
                className="pt-1 text-sm transition-colors hover:text-white"
              >
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <a
                href={`mailto:${business.email}`}
                className="min-w-0 break-words pt-1 text-sm transition-colors hover:text-white"
              >
                {business.email}
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-navy px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 text-sm sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://zentecglobal.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:text-white"
            >
              Zentec Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
