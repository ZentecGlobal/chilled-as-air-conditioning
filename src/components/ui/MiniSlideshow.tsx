"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";

export type SlideshowPhoto = {
  src: string;
  alt: string;
  position?: string;
};

export default function MiniSlideshow({
  photos,
  intervalMs = 3200,
}: {
  photos: SlideshowPhoto[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${
            photo.position ?? "object-center"
          } ${i === index ? "opacity-100" : "opacity-0"}`}
          priority={i === 0}
        />
      ))}
      {photos.length > 1 && (
        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-navy-dark/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <Images className="h-3.5 w-3.5" aria-hidden="true" />
          {photos.length}+ photos
        </span>
      )}
    </div>
  );
}
