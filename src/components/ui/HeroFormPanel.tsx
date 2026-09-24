"use client";

import { motion } from "framer-motion";
import HeroQuoteForm from "@/components/ui/HeroQuoteForm";

export default function HeroFormPanel({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/30 via-brand-blue/5 to-transparent blur-2xl"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-dark/50 shadow-2xl backdrop-blur-md transition-shadow duration-300 hover:shadow-brand-blue/20">
        <HeroQuoteForm />
      </div>
    </motion.div>
  );
}
