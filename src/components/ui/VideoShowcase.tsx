"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export type ShowcaseVideo = { src: string; label: string };

function useInViewPlay(ref: React.RefObject<HTMLVideoElement | null>, enabled: boolean) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!enabled) {
      video.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [ref, enabled]);
}

function StageVideo({
  video,
  active,
  muted,
  onProgress,
  onEnded,
}: {
  video: ShowcaseVideo;
  active: boolean;
  muted: boolean;
  onProgress: (p: number) => void;
  onEnded: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useInViewPlay(ref, active);
  useEffect(() => {
    if (active && ref.current) ref.current.currentTime = 0;
  }, [active]);
  return (
    <video
      ref={ref}
      muted={muted}
      playsInline
      onTimeUpdate={(e) => {
        const v = e.currentTarget;
        if (active && v.duration) onProgress(v.currentTime / v.duration);
      }}
      onEnded={onEnded}
      preload={active ? "auto" : "metadata"}
      aria-label={video.label}
      className={`absolute inset-0 h-full w-full bg-navy-dark object-cover transition-opacity duration-700 ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <source src={`${video.src}#t=0.1`} />
    </video>
  );
}

function PhoneVideo({ video, tilt }: { video: ShowcaseVideo; tilt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useInViewPlay(ref, true);
  return (
    <motion.div
      whileHover={{ y: -8, rotate: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`relative aspect-[9/16] w-full rounded-[1.75rem] border-[6px] border-white/15 bg-navy-dark shadow-2xl shadow-black/40 ${tilt}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/25"
      />
      <video
        ref={ref}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={video.label}
        className="h-full w-full rounded-[1.25rem] object-cover"
      >
        <source src={`${video.src}#t=0.1`} />
      </video>
    </motion.div>
  );
}

export default function VideoShowcase({
  landscape,
  portrait,
}: {
  landscape: ShowcaseVideo[];
  portrait: ShowcaseVideo[];
}) {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const next = () => {
    setProgress(0);
    setIndex((i) => (i + 1) % landscape.length);
  };

  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/30 via-brand-blue/5 to-transparent blur-2xl"
          />
        <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border-4 border-white/10 bg-navy-dark shadow-2xl shadow-black/40 ring-1 ring-brand-blue/30 lg:aspect-auto lg:h-[400px]">
          {landscape.map((v, i) => (
            <StageVideo key={v.src} video={v} active={i === index} muted={muted} onProgress={setProgress} onEnded={next} />
          ))}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy-dark/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
            </span>
            Live footage
          </span>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-dark/75 text-white backdrop-blur-sm transition-transform duration-200 hover:scale-110"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-2">
            {landscape.map((v, i) => (
              <button
                key={v.src}
                type="button"
                onClick={() => {
                  setProgress(0);
                  setIndex(i);
                }}
                aria-pressed={i === index}
                className={`relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  i === index
                    ? "bg-white text-navy shadow-lg"
                    : "bg-navy-dark/60 text-white hover:bg-navy-dark/80"
                }`}
              >
                <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                Clip {i + 1}
                {i === index && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-brand-blue"
                    style={{ transform: `scaleX(${progress})` }}
                  />
                )}
              </button>
            ))}
            <span className="ml-auto hidden text-xs font-medium text-white/80 sm:inline">
              {index + 1} / {landscape.length}
            </span>
          </div>
        </div>
        </div>
      </motion.div>

      <div className="mx-auto grid w-full max-w-[26rem] grid-cols-2 gap-5 lg:h-[400px] lg:w-auto lg:max-w-none lg:items-center">
        {portrait.map((v, i) => (
          <motion.div
            key={v.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: "easeOut" }}
            className="lg:w-[10.5rem]"
          >
            <PhoneVideo video={v} tilt={i === 0 ? "-rotate-2" : "rotate-2"} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
