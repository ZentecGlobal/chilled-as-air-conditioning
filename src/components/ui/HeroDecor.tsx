"use client";

import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";

const floatingSnowflakes = [
  { top: "14%", left: "62%", size: 20, duration: 9, delay: 0, opacity: 0.18 },
  { top: "58%", left: "72%", size: 14, duration: 11, delay: 1.2, opacity: 0.14 },
  { top: "30%", left: "84%", size: 24, duration: 8, delay: 0.6, opacity: 0.16 },
  { top: "74%", left: "56%", size: 16, duration: 10, delay: 2, opacity: 0.12 },
];

export default function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-blue/25 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-red/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {floatingSnowflakes.map((flake, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: flake.top, left: flake.left }}
          animate={{ y: [0, -18, 0], rotate: [0, 20, 0] }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Snowflake
            aria-hidden="true"
            className="text-white"
            style={{ width: flake.size, height: flake.size, opacity: flake.opacity }}
            strokeWidth={1}
          />
        </motion.div>
      ))}

      <Snowflake
        aria-hidden="true"
        className="absolute right-[8%] top-16 h-40 w-40 text-white/5 md:h-56 md:w-56"
        strokeWidth={0.75}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ mixBlendMode: "overlay" }}
        animate={{ x: ["0%", "260%"] }}
        transition={{ duration: 7, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
      />
    </div>
  );
}
