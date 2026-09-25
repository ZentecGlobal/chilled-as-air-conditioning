"use client";

import { motion } from "framer-motion";

type Word = { w: string; accent?: boolean; underline?: boolean };
const lines: Word[][] = [
  [{ w: "Your" }, { w: "Comfort,", accent: true }],
  [{ w: "Our" }, { w: "Priority", accent: true, underline: true }],
];

export default function HeroHeadline() {
  let i = 0;
  return (
    <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map(({ w, accent, underline }) => {
            const delay = 0.15 + i++ * 0.14;
            return (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
                className={`relative mr-3 inline-block md:mr-4 ${
                  accent
                    ? "bg-gradient-to-r from-sky-200 via-brand-blue to-sky-300 bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {w}
                {underline && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2.5 w-full md:-bottom-2"
                  >
                    <motion.path
                      d="M2 8 C 40 2, 90 12, 130 6 S 185 4, 198 7"
                      fill="none"
                      stroke="#26abdb"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
                    />
                  </svg>
                )}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
