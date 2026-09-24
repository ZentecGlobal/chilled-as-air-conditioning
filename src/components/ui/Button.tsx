import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

const baseClasses =
  "group inline-flex items-center gap-2.5 rounded-xl py-2 pl-2 pr-6 font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "btn-shine relative overflow-hidden border-2 border-transparent bg-gradient-to-r from-brand-blue to-navy text-white hover:shadow-brand-blue/30",
  secondary:
    "border-2 border-brand-blue bg-white text-brand-blue hover:border-transparent hover:bg-gradient-to-r hover:from-brand-blue hover:to-navy hover:text-white",
};

const iconWrapClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-white/20 group-hover:bg-white/30",
  secondary: "bg-brand-blue/10 group-hover:bg-white/20",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
}: ButtonProps) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `${baseClasses} ${variantClasses[variant]}`;
  const content = (
    <>
      {icon && (
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${iconWrapClasses[variant]}`}
        >
          {icon}
        </span>
      )}
      {children}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
