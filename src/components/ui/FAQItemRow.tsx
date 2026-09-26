"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQItemRow({
  question,
  answer,
  index,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        open
          ? "border-brand-blue/50 shadow-xl shadow-brand-blue/10"
          : "border-brand-blue/15 shadow-sm hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lg"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1.5 origin-top bg-gradient-to-b from-brand-blue to-navy transition-transform duration-300 ${
          open ? "scale-y-100" : "scale-y-0 group-hover:scale-y-50"
        }`}
      />
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center gap-4 p-5 pl-6 text-left"
      >
        <span
          className={`shrink-0 text-sm font-extrabold tracking-wider transition-colors duration-300 ${
            open ? "text-brand-blue" : "text-brand-blue/40"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-semibold text-navy">{question}</span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "rotate-180 bg-gradient-to-br from-brand-blue to-navy text-white shadow-md"
              : "bg-brand-blue-light text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
          }`}
        >
          {open ? (
            <Minus className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Plus className="h-4 w-4" aria-hidden="true" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="ml-[3.25rem] pb-5 pl-6 pr-6 leading-relaxed text-slate-700">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
