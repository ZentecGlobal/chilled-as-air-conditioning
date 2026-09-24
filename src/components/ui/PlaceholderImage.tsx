import { ImageIcon, Snowflake } from "lucide-react";

// Marks a spot where a real photo from Jon's Google Drive will go later.
// Do not replace with an AI-generated image - leave as a placeholder until
// real photos are supplied.
export default function PlaceholderImage({
  alt,
  aspect = "aspect-video",
}: {
  alt: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex w-full ${aspect} flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed border-brand-blue/40 bg-frost p-4 text-center text-sm text-slate-500`}
    >
      <Snowflake
        className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-brand-blue/10"
        aria-hidden="true"
        strokeWidth={1.5}
      />
      <ImageIcon className="relative h-8 w-8 text-brand-blue/60" aria-hidden="true" />
      <span className="relative">Photo placeholder: {alt}</span>
    </div>
  );
}
