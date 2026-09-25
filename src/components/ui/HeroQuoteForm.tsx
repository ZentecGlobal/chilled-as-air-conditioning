"use client";

import { FormEvent, useState } from "react";
import { Check, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const fieldMotion = (i: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: 0.5 + i * 0.09, ease: "easeOut" as const },
});

export default function HeroQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "peer w-full rounded-xl border border-white/20 bg-white/[0.08] py-3 pl-11 pr-3 text-sm text-white placeholder-slate-300/80 shadow-inner transition-all duration-200 hover:border-white/35 focus:border-brand-blue focus:bg-white/[0.14] focus:outline-none focus:ring-4 focus:ring-brand-blue/25";
  const iconClasses =
    "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300 transition-colors duration-200 peer-focus:text-brand-blue";

  return (
    <div className="p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Online Enquiry
        </span>
        <span className="rounded-full bg-gradient-to-r from-brand-blue to-navy px-3 py-1 text-xs font-bold text-white shadow-md">
          100% Free
        </span>
      </div>
      <h2 className="mt-4 text-2xl font-extrabold text-white">Get a Free Quote</h2>
      <p className="mt-1 text-sm text-slate-200">
        Fill this in and Jon will get back to you.
      </p>

      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-5 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-5 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-navy-dark"
            >
              <Check className="h-6 w-6" strokeWidth={3} aria-hidden="true" />
            </motion.span>
            <p className="mt-3 font-semibold text-white">Thanks, that&apos;s been sent to Jon.</p>
            <p className="mt-1 text-sm text-slate-200">He&apos;ll be in touch soon.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            exit={{ opacity: 0 }}
            className="mt-5 flex flex-col gap-3"
          >
            <motion.div {...fieldMotion(0)} className="relative">
              <input name="name" type="text" placeholder="Your name" required className={inputClasses} />
              <User className={iconClasses} aria-hidden="true" />
            </motion.div>
            <motion.div {...fieldMotion(1)} className="relative">
              <input name="phone" type="tel" placeholder="Phone number" required className={inputClasses} />
              <Phone className={iconClasses} aria-hidden="true" />
            </motion.div>
            <motion.div {...fieldMotion(2)} className="relative">
              <input name="suburb" type="text" placeholder="Suburb (Nanango, Wondai...)" className={inputClasses} />
              <MapPin className={iconClasses} aria-hidden="true" />
            </motion.div>
            <motion.div {...fieldMotion(3)} className="relative">
              <textarea name="message" rows={2} placeholder="What do you need done?" required className={`${inputClasses} resize-none`} />
              <MessageCircle className={`${iconClasses} !top-5 !translate-y-0`} aria-hidden="true" />
            </motion.div>

            {status === "error" && (
              <p className="rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-200">
                Something went wrong, please call Jon directly instead.
              </p>
            )}

            <motion.div {...fieldMotion(4)}>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-shine group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue via-brand-blue to-navy px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand-blue/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                {status === "sending" ? "Sending..." : "Request a Free Quote"}
              </button>
              <p className="mt-2.5 text-center text-xs text-slate-300">
                Free quotes, straight talk, no pressure.
              </p>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
