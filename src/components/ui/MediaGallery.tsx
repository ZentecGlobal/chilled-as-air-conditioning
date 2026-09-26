"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, Play, Video } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryPhoto = { src: string; alt: string; caption: string };
export type GalleryClip = { src: string; label: string; caption: string; poster: string };

type Item =
  | { kind: "photo"; src: string; alt: string; caption: string }
  | { kind: "video"; src: string; alt: string; caption: string; poster: string };

function StageVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, [src]);
  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      controls
      preload="auto"
      aria-label={label}
      className="absolute inset-0 h-full w-full object-contain"
    />
  );
}

export default function MediaGallery({
  photos,
  clips,
}: {
  photos: GalleryPhoto[];
  clips: GalleryClip[];
}) {
  const items: Item[] = [
    ...photos.map((p) => ({ kind: "photo" as const, ...p })),
    ...clips.map((c) => ({
      kind: "video" as const,
      src: c.src,
      alt: c.label,
      caption: c.caption,
      poster: c.poster,
    })),
  ];
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const current = items[index];

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex((next + items.length) % items.length);
  };

  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-navy-dark shadow-2xl shadow-black/40 sm:aspect-[4/3] lg:aspect-[16/11]">
          {current.kind === "photo" && (
            <Image src={current.src} alt="" fill sizes="60vw" aria-hidden="true" className="scale-110 object-cover opacity-40 blur-2xl" />
          )}
          {current.kind === "video" && (
            <Image src={current.poster} alt="" fill sizes="60vw" aria-hidden="true" className="scale-110 object-cover opacity-40 blur-2xl" />
          )}
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.div
              key={current.src}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {current.kind === "photo" ? (
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain"
                />
              ) : (
                <StageVideo src={current.src} label={current.alt} />
              )}
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-dark/70 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-brand-blue"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-dark/70 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-brand-blue"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {current.kind === "photo" ? (
                <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Video className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {current.kind}
            </span>
            <span className="truncate text-sm font-semibold text-white">{current.caption}</span>
          </div>
          <span className="shrink-0 text-sm font-medium text-slate-300">
            {index + 1} / {items.length}
          </span>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm lg:self-stretch">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue">
          <Camera className="h-4 w-4" aria-hidden="true" />
          Photos ({photos.length})
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => go(i)}
              aria-label={p.caption}
              aria-pressed={index === i}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                index === i ? "border-brand-blue shadow-lg shadow-brand-blue/30" : "border-white/10 hover:border-white/40"
              }`}
            >
              <Image src={p.src} alt="" fill sizes="160px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute inset-x-2 bottom-1.5 text-left text-[11px] font-semibold leading-tight text-white">
                {p.caption}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue">
          <Video className="h-4 w-4" aria-hidden="true" />
          Videos ({clips.length})
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {clips.map((c, i) => {
            const at = photos.length + i;
            return (
              <button
                key={c.src}
                type="button"
                onClick={() => go(at)}
                aria-label={c.caption}
                aria-pressed={index === at}
                className={`group relative aspect-[4/3] overflow-hidden rounded-xl border-2 bg-navy-dark transition-all duration-300 hover:-translate-y-0.5 ${
                  index === at ? "border-brand-blue shadow-lg shadow-brand-blue/30" : "border-white/10 hover:border-white/40"
                }`}
              >
                <Image src={c.poster} alt="" fill sizes="160px" className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                </span>
                <span className="absolute inset-x-2 bottom-1.5 text-left text-[11px] font-semibold leading-tight text-white">
                  {c.caption}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
