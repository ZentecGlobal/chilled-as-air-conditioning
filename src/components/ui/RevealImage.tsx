"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const wipe = {
  hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.12 },
  show: {
    clipPath: "inset(0 0% 0 0)",
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function RevealImage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.div className="absolute inset-0" variants={wipe}>
        {children}
      </motion.div>
    </motion.div>
  );
}
