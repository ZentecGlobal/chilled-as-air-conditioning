"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { navServices, serviceAreas, business } from "@/lib/site-data";

const navLinkClasses =
  "relative py-1 text-white font-medium transition-colors hover:text-brand-blue " +
  "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:rounded-full " +
  "after:bg-brand-blue after:transition-all after:duration-200 hover:after:w-full";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative bg-gradient-to-r from-navy-dark via-navy-dark to-navy backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-navy-dark/20" : ""
      }`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -right-10 -top-20 h-36 w-36 rounded-full bg-brand-red/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.div whileHover={{ scale: 1.08, rotate: 5 }} transition={{ duration: 0.2 }}>
            <Image
              src="/images/logo/chilled-as-icon-only.png"
              alt=""
              width={399}
              height={399}
              className="h-10 w-10 sm:h-11 sm:w-11"
              priority
            />
          </motion.div>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-wide text-white sm:text-xl">
              Chilled As
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Air Conditioning
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Link href="/" className={navLinkClasses}>
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 ${navLinkClasses}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full z-40 w-max min-w-44 rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <li>
                    <Link
                      href="/services"
                      className="block px-3.5 py-1.5 text-sm font-semibold text-navy transition-colors hover:bg-frost hover:text-brand-blue"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                  </li>
                  <li className="my-1 border-t border-slate-100" />
                  {navServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="block px-3.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-frost hover:text-brand-blue"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 ${navLinkClasses}`}
              aria-expanded={areasOpen}
              aria-haspopup="true"
              onClick={() => setAreasOpen((open) => !open)}
            >
              Service Areas
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  areasOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {areasOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full z-40 w-max min-w-44 rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <li>
                    <Link
                      href="/service-areas"
                      className="block px-3.5 py-1.5 text-sm font-semibold text-navy transition-colors hover:bg-frost hover:text-brand-blue"
                      onClick={() => setAreasOpen(false)}
                    >
                      All Service Areas
                    </Link>
                  </li>
                  <li className="my-1 border-t border-slate-100" />
                  {serviceAreas.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="block px-3.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-frost hover:text-brand-blue"
                        onClick={() => setAreasOpen(false)}
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link href="/about" className={navLinkClasses}>
              About
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link href="/contact" className={navLinkClasses}>
              Contact
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="ml-2"
          >
            <a
              href={business.phoneHref}
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-blue to-navy py-2 pl-2 pr-5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-blue/30 [animation-duration:2.5s]"
              />
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 group-hover:bg-white/30">
                <Phone className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              Call {business.ownerFirstName}
            </a>
          </motion.li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-white/30 px-3 py-2 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Gradient accent bar */}
      <div className="relative h-[3px] w-full bg-gradient-to-r from-navy via-brand-blue to-brand-blue" />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
          <ul className="flex flex-col">
            <li className="border-b border-slate-100">
              <Link
                href="/"
                className="block px-4 py-3 text-navy"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="border-b border-slate-100">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-navy"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-frost"
                  >
                    <li>
                      <Link
                        href="/services"
                        className="block px-8 py-1.5 text-sm font-semibold text-navy"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Services
                      </Link>
                    </li>
                    {navServices.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block px-8 py-1.5 text-sm text-slate-700"
                          onClick={() => setMobileOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="border-b border-slate-100">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-navy"
                aria-expanded={mobileAreasOpen}
                onClick={() => setMobileAreasOpen((open) => !open)}
              >
                <span>Service Areas</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileAreasOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {mobileAreasOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-frost"
                  >
                    <li>
                      <Link
                        href="/service-areas"
                        className="block px-8 py-1.5 text-sm font-semibold text-navy"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Service Areas
                      </Link>
                    </li>
                    {serviceAreas.map((area) => (
                      <li key={area.href}>
                        <Link
                          href={area.href}
                          className="block px-8 py-1.5 text-sm text-slate-700"
                          onClick={() => setMobileOpen(false)}
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="border-b border-slate-100">
              <Link
                href="/about"
                className="block px-4 py-3 text-navy"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>

            <li className="border-b border-slate-100">
              <Link
                href="/contact"
                className="block px-4 py-3 text-navy"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li className="p-4">
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-xl btn-shine relative overflow-hidden bg-gradient-to-r from-brand-blue to-navy px-4 py-3 text-center font-semibold text-white shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Phone className="h-4 w-4 text-white" aria-hidden="true" />
                </span>
                Call {business.ownerFirstName}: {business.phoneDisplay}
              </a>
            </li>
          </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
