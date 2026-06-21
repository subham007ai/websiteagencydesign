"use client";

/**
 * Sitora logo — rebuilt as a crisp vector so it scales and themes cleanly.
 * The geometric "S" monogram is drawn in currentColor (so it inverts for dark
 * surfaces), while the two circuit nodes pick up the active --accent — tying
 * the brand mark into the per-scene color progression.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 150"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* angular S spine */}
      <path
        d="M97 33 L49 33 L49 64 L83 64 L83 117 L33 117"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* circuit accent: connects the two inner corners */}
      <path
        d="M49 64 L83 64"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="49" cy="64" r="9" fill="var(--accent)" />
      <circle cx="83" cy="64" r="9" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({
  className = "",
  withTagline = false,
  stacked = false,
}: {
  className?: string;
  withTagline?: boolean;
  stacked?: boolean;
}) {
  if (stacked) {
    return (
      <span className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <LogoMark className="h-12 w-auto" />
        <span className="font-display text-3xl font-bold lowercase tracking-tight">
          sitora
        </span>
        {withTagline && (
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-ink-mute">
            Creative Web Design Agency
          </span>
        )}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-auto" />
      <span className="font-display text-xl font-bold lowercase tracking-tight">
        sitora
      </span>
    </span>
  );
}
