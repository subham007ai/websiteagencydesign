"use client";

import { motion } from "framer-motion";

/** Filmic grain overlay — mounted once globally for texture. */
export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

/**
 * Animated orange aurora bloom. `corner` controls where the light originates,
 * echoing the ARCH / Omni corner-light look.
 */
export function Aurora({
  corner = "top-right",
  intensity = 1,
  className = "",
}: {
  corner?: "top-right" | "top-left" | "center" | "bottom";
  intensity?: number;
  className?: string;
}) {
  const pos = {
    "top-right": { a: "85% 8%", b: "100% 0%" },
    "top-left": { a: "12% 8%", b: "0% 0%" },
    center: { a: "50% 35%", b: "50% 60%" },
    bottom: { a: "50% 100%", b: "50% 120%" },
  }[corner];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 animate-[aurora-drift_14s_ease-in-out_infinite]"
        style={{
          background: `radial-gradient(60% 55% at ${pos.a}, rgba(var(--accent-rgb),${0.55 * intensity}), transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 animate-[aurora-drift-2_18s_ease-in-out_infinite]"
        style={{
          background: `radial-gradient(45% 45% at ${pos.b}, rgba(255,180,90,${0.3 * intensity}), transparent 55%)`,
        }}
      />
      {/* deep core shadow keeps the center readable */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_45%,transparent,#08080a_92%)]" />
    </div>
  );
}

/** Glass circular icon button, ARCH-style. */
export function IconPill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Generative SVG cover art — layered blurred orange blobs + grain, seeded so
 * each project/post gets a distinct organic visual instead of a flat gradient.
 */
export function MeshCover({
  seed = 0,
  className = "",
  label,
}: {
  seed?: number;
  className?: string;
  label?: string;
}) {
  // deterministic pseudo-random from seed
  const rnd = (n: number) => {
    const x = Math.sin(seed * 99.13 + n * 12.7) * 43758.5453;
    return x - Math.floor(x);
  };
  const blobs = [0, 1, 2, 3].map((i) => ({
    cx: Number((15 + rnd(i) * 70).toFixed(3)),
    cy: Number((15 + rnd(i + 9) * 70).toFixed(3)),
    r: Number((22 + rnd(i + 4) * 26).toFixed(3)),
    hue: i % 2 === 0 ? "#F97316" : "#FB923C",
    o: Number((0.5 + rnd(i + 2) * 0.4).toFixed(3)),
  }));

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <defs>
          <filter id={`blur-${seed}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id={`grain-${seed}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feComposite operator="over" in2="SourceGraphic" />
          </filter>
        </defs>
        <rect width="100" height="100" fill="#0c0a08" />
        <g filter={`url(#blur-${seed})`}>
          {blobs.map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={b.hue} opacity={b.o} />
          ))}
        </g>
        <rect width="100" height="100" filter={`url(#grain-${seed})`} opacity="0.12" />
        <rect width="100" height="100" fill="url(#vig)" />
        <radialGradient id="vig" cx="50%" cy="45%" r="75%">
          <stop offset="55%" stopColor="transparent" />
          <stop offset="100%" stopColor="#08080a" stopOpacity="0.85" />
        </radialGradient>
      </svg>
      {label && (
        <span className="ghost-word pointer-events-none absolute inset-0 flex items-center justify-center text-center text-[clamp(2rem,9vw,5rem)]">
          {label}
        </span>
      )}
    </div>
  );
}

/** Kinetic heading — reveals each line from a clipped mask. */
export function Kinetic({
  lines,
  className = "",
}: {
  lines: React.ReactNode[];
  className?: string;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
