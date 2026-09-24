"use client";

import { motion } from "framer-motion";

export default function SectionDecor() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
