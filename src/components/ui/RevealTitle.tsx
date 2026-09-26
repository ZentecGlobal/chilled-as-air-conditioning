"use client";

import { motion } from "framer-motion";

export default function RevealTitle({
  text,
  accent,
  className = "",
}: {
  text: string;
  accent: string;
  className?: string;
}) {
  const words = [
    ...text.split(" ").filter(Boolean).map((w) => ({ w, a: false })),
    ...accent.split(" ").filter(Boolean).map((w) => ({ w, a: true })),
  ];
  return (
    <h1 className={className}>
      {words.map(({ w, a }, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`mr-[0.3em] inline-block ${
            a ? "bg-gradient-to-r from-sky-200 via-brand-blue to-sky-300 bg-clip-text text-transparent" : ""
          }`}
        >
          {w}
        </motion.span>
      ))}
    </h1>
  );
}
