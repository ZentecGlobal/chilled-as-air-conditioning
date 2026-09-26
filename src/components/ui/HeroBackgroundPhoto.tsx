"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackgroundPhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, x: "-1.5%" }}
        animate={{ scale: 1.0, x: "0%" }}
        transition={{ duration: 22, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_38%] contrast-[1.12] saturate-[1.15] brightness-[1.03]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/40 to-navy-dark/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/55 via-transparent to-navy-dark/25"
      />
    </div>
  );
}
