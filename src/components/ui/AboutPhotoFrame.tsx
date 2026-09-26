"use client";

import Image from "next/image";
import RevealImage from "@/components/ui/RevealImage";
import { MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPhotoFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative">
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-2xl bg-gradient-to-br from-brand-blue to-navy-dark sm:block"
        animate={{ rotate: [0, 1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
        <RevealImage><Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        /></RevealImage>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl border border-white bg-white px-4 py-3 shadow-xl sm:-left-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-navy text-white">
          <Wrench className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold text-navy">Owner-Operated</span>
          <span className="block text-xs text-slate-500">Not a franchise</span>
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        className="absolute -right-3 top-6 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 shadow-xl backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <MapPin className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
          <span className="text-xs font-bold text-navy">Nanango, QLD</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
