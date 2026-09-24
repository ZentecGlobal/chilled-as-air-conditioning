import { ReactNode } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionDecor from "./SectionDecor";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "white" | "light" | "dark";
  decorative?: boolean;
};

const bgClasses: Record<NonNullable<SectionProps["bg"]>, string> = {
  white: "bg-gradient-to-b from-white via-white to-frost/60",
  light: "bg-frost",
  dark: "bg-gradient-to-br from-navy-dark via-navy to-navy-dark text-white",
};

export default function Section({
  children,
  id,
  className = "",
  bg = "white",
  decorative = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-14 md:py-20 ${bgClasses[bg]} ${
        decorative ? "overflow-hidden" : ""
      } ${className}`}
    >
      {decorative && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle,_rgba(20,57,107,0.12)_1px,_transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />
          <SectionDecor />
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1 left-0 h-16 w-full text-white md:h-24"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,50 C240,100 480,0 720,30 C960,60 1200,20 1440,50 L1440,100 L0,100 Z"
            />
          </svg>
        </>
      )}
      <Container>
        <FadeIn>{children}</FadeIn>
      </Container>
    </section>
  );
}
