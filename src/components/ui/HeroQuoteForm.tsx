"use client";

import { FormEvent, useState } from "react";
import { MapPin, MessageCircle, Phone, Send, User } from "lucide-react";

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
    "w-full rounded-lg border border-white/15 bg-white/10 py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-400 shadow-sm transition-colors focus:border-brand-blue focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-brand-blue/30";
  const iconClasses =
    "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400";

  return (
    <div className="p-6 sm:p-7">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Online Enquiry
      </span>
      <h2 className="mt-4 text-xl font-bold text-white">Get a Free Quote</h2>
      <p className="mt-1 text-sm text-slate-300">
        Fill this in and Jon will get back to you.
      </p>

      {status === "sent" ? (
        <p className="mt-4 rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white">
          Thanks, that&apos;s been sent to Jon. He&apos;ll be in touch soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
          <div className="relative">
            <User className={iconClasses} aria-hidden="true" />
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className={inputClasses}
            />
          </div>
          <div className="relative">
            <Phone className={iconClasses} aria-hidden="true" />
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              required
              className={inputClasses}
            />
          </div>
          <div className="relative">
            <MapPin className={iconClasses} aria-hidden="true" />
            <input
              name="suburb"
              type="text"
              placeholder="Suburb (Nanango, Wondai...)"
              className={inputClasses}
            />
          </div>
          <div className="relative">
            <MessageCircle className={`${iconClasses} top-4 translate-y-0`} aria-hidden="true" />
            <textarea
              name="message"
              rows={2}
              placeholder="What do you need done?"
              required
              className={inputClasses}
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-300">
              Something went wrong, please call Jon directly instead.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
            {status === "sending" ? "Sending..." : "Request a Free Quote"}
          </button>
        </form>
      )}
    </div>
  );
}
