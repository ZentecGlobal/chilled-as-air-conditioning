"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroDecor from "@/components/ui/HeroDecor";

export default function PageHeroBackdrop({
  src,
  position = "center",
}: {
  src: string;
  position?: string;
}) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 22, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt=""
            fill
            priority
            quality={92}
            sizes="100vw"
            style={{ objectPosition: position }}
            className="object-cover contrast-[1.1] saturate-[1.12]"
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,36,64,0.78)_0%,rgba(11,36,64,0.55)_45%,rgba(11,36,64,0.25)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy-dark/45 via-transparent to-navy-dark/55"
        />
      </div>
      <HeroDecor />
    </>
  );
}
