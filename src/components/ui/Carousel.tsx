"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; caption: string };

export default function Carousel({ slides }: { slides: CarouselSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollByDirection(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.firstElementChild as HTMLElement | null;
    const slideWidth = slide?.offsetWidth ?? track.clientWidth;
    track.scrollBy({ left: direction * (slideWidth + 16), behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    const slide = track?.firstElementChild as HTMLElement | null;
    if (!track || !slide) return;
    const slideWidth = slide.offsetWidth + 16;
    setIndex(Math.round(track.scrollLeft / slideWidth));
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] w-[80%] shrink-0 snap-start overflow-hidden rounded-xl shadow-sm sm:w-[46%] md:w-[31%]"
          >
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 768px) 31vw, 80vw"
                className="object-cover"
              />
            ) : (
              <video
                controls
                preload="none"
                className="h-full w-full bg-navy-dark object-cover"
                aria-label={slide.caption}
              >
                <source src={slide.src} />
              </video>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByDirection(-1)}
        aria-label="Previous"
        className="absolute left-1 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-transform hover:scale-105 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scrollByDirection(1)}
        aria-label="Next"
        className="absolute right-1 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-transform hover:scale-105 sm:flex"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <p className="mt-2 text-center text-sm text-slate-500">
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}
