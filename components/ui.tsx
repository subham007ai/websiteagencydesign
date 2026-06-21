"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Uppercase orange-tagged eyebrow. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.28em] text-ink-mute",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";
  const styles = {
    primary:
      "bg-gradient-to-r from-accent to-accent-2 text-canvas hover:scale-[1.03] active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(var(--accent-rgb),0.7)]",
    secondary:
      "border border-line bg-surface/60 text-ink backdrop-blur hover:border-accent hover:text-accent",
    ghost: "text-ink-soft hover:text-accent",
  }[variant];
  const external = href.startsWith("http") || href.startsWith("mailto");
  if (external) {
    return (
      <Magnetic>
        <a href={href} className={cn(base, styles, className)} onClick={onClick}>
          {children}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic>
      <Link href={href} className={cn(base, styles, className)} onClick={onClick}>
        {children}
      </Link>
    </Magnetic>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-medium text-ink-soft">
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Eyebrow className={align === "center" ? "justify-center" : ""}>
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg text-ink-soft text-balance">{intro}</p>
      )}
    </div>
  );
}

/** Infinite logo/word marquee for the trusted-by row. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-14">
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-lg font-semibold text-ink-mute transition-colors hover:text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
