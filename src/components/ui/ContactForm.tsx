"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";

export default function ContactForm() {
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
    "w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 shadow-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30";
  const iconClasses =
    "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-blue/50";

  if (status === "sent") {
    return (
      <p className="rounded-2xl border-2 border-brand-blue/30 bg-brand-blue-light p-4 text-slate-800 shadow-sm">
        Thanks, that&apos;s been sent to Jon. He&apos;ll get back to you as
        soon as he can, for anything urgent, call {"0473 789 644"} directly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold text-navy">
          Name
        </label>
        <div className="relative">
          <User className={iconClasses} aria-hidden="true" />
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="font-semibold text-navy">
          Phone
        </label>
        <div className="relative">
          <Phone className={iconClasses} aria-hidden="true" />
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold text-navy">
          Email
        </label>
        <div className="relative">
          <Mail className={iconClasses} aria-hidden="true" />
          <input id="email" name="email" type="email" className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="suburb" className="font-semibold text-navy">
          Suburb
        </label>
        <div className="relative">
          <MapPin className={iconClasses} aria-hidden="true" />
          <input
            id="suburb"
            name="suburb"
            type="text"
            placeholder="Nanango, Wondai, Crows Nest..."
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-semibold text-navy">
          What do you need done?
        </label>
        <div className="relative">
          <MessageCircle className={`${iconClasses} top-5 translate-y-0`} aria-hidden="true" />
          <textarea id="message" name="message" rows={5} required className={inputClasses} />
        </div>
      </div>

      {status === "error" && (
        <p className="rounded-xl border-2 border-brand-red/30 bg-brand-red/5 p-3 text-sm text-brand-red-dark">
          Something went wrong sending that, please call Jon directly on{" "}
          {"0473 789 644"} instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2 rounded-xl btn-shine relative overflow-hidden bg-gradient-to-r from-brand-blue to-navy px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
        {status === "sending" ? "Sending..." : "Request a Free Quote"}
      </button>
    </form>
  );
}
