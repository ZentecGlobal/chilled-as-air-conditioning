import Image from "next/image";
import { Search } from "lucide-react";

export type MarqueePhoto = {
  src: string;
  alt: string;
};

const fadeClasses = {
  "navy-dark": {
    left: "bg-gradient-to-r from-navy-dark to-transparent",
    right: "bg-gradient-to-l from-navy-dark to-transparent",
  },
  white: {
    left: "bg-gradient-to-r from-white to-transparent",
    right: "bg-gradient-to-l from-white to-transparent",
  },
} as const;

// Seconds of scroll time per photo - keeping this constant means marquees
// with different photo counts still scroll at the same visual pace.
const SECONDS_PER_PHOTO = 7.5;

export default function WorkMarquee({
  photos,
  reverse = false,
  fade = "navy-dark",
}: {
  photos: MarqueePhoto[];
  reverse?: boolean;
  fade?: keyof typeof fadeClasses;
}) {
  const doubled = [...photos, ...photos];
  const durationSeconds = photos.length * SECONDS_PER_PHOTO;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 ${fadeClasses[fade].left}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 ${fadeClasses[fade].right}`}
      />
      <div
        style={{ animationDuration: `${durationSeconds}s` }}
        className={`flex w-max gap-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="group relative h-40 w-56 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md transition-shadow duration-300 hover:shadow-xl md:h-48 md:w-64"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="256px"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy-dark/0 transition-colors duration-300 group-hover:bg-navy-dark/40">
              <span className="flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-white text-brand-blue opacity-0 shadow-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Search className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
