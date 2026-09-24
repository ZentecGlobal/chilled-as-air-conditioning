"use client";

import { motion } from "framer-motion";

export default function DarkSectionDecor() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
