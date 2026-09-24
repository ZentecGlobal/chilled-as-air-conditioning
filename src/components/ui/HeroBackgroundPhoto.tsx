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
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 18, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] blur-[1px]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-dark/75 via-navy-dark/35 to-brand-blue/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-dark/45 via-transparent to-navy-dark/10"
      />
    </div>
  );
}
