"use client";

import { motion } from "framer-motion";
import HeroQuoteForm from "@/components/ui/HeroQuoteForm";

export default function HeroFormPanel({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-blue/40 via-brand-blue/10 to-transparent blur-3xl"
        animate={{ opacity: [0.55, 1, 0.55], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative overflow-hidden rounded-[2rem] p-[1.5px] shadow-2xl shadow-black/30">
        <div
          aria-hidden="true"
          className="absolute -inset-[60%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(38,171,219,0.9)_70deg,transparent_140deg,transparent_200deg,rgba(255,255,255,0.55)_260deg,transparent_320deg)]"
        />
        <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-navy-dark/85 backdrop-blur-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.09] to-transparent"
          />
          <HeroQuoteForm />
        </div>
      </div>
    </motion.div>
  );
}
