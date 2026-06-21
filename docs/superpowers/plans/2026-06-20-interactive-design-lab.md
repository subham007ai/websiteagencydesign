# Sitora Interactive Design Lab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the mock SaaS dashboard (`components/DashboardPreview.tsx`) with an interactive website "Design Lab" showcasing Sitora's styles, typography, and motion presets.

**Architecture:** A unified client component layout displaying a sidebar control panel on the left and a live web page preview canvas on the right. State changes in the control panel instantly update class parameters and Framer Motion spring physics options.

**Tech Stack:** Next.js 15, React 19, Framer Motion, Tailwind CSS

## Global Constraints

- next: ^15.1.6
- react: ^19.0.0
- framer-motion: ^11.15.0
- tailwindcss: ^3.4.17
- Sitora signature accent color mapping:
  - accent: rgb(var(--accent-rgb) / <alpha-value>)
  - accent-2: rgb(var(--accent-2-rgb) / <alpha-value>)

---

### Task 1: Refactor DashboardPreview.tsx into the Interactive Design Lab

**Files:**
- Modify: `components/DashboardPreview.tsx`

**Interfaces:**
- Consumes: None (root-level client layout component).
- Produces: Default export `DashboardPreview` rendering the style sandbox.

- [ ] **Step 1: Implement full Design Lab component**

Replace the contents of [DashboardPreview.tsx](file:///d:/port-3/components/DashboardPreview.tsx) with the following complete implementation:

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/components/ui";

type StylePreset = "editorial" | "brutalist" | "glassmorphic";
type FontPreset = "sans" | "display" | "mono";
type MotionPreset = "clean" | "snappy" | "fluid";

export default function DashboardPreview() {
  const [stylePreset, setStylePreset] = useState<StylePreset>("editorial");
  const [fontPreset, setFontPreset] = useState<FontPreset>("display");
  const [motionPreset, setMotionPreset] = useState<MotionPreset>("fluid");

  // Determine transition physics based on selected motion speed
  const getTransition = () => {
    if (motionPreset === "clean") {
      return { type: "tween" as const, duration: 0 };
    }
    if (motionPreset === "snappy") {
      return { type: "spring" as const, stiffness: 180, damping: 15, mass: 0.5 };
    }
    return { type: "spring" as const, stiffness: 70, damping: 16, mass: 1.1 };
  };

  // Define fonts classes
  const fontClasses = {
    sans: "font-sans",
    display: "font-display",
    mono: "font-mono",
  }[fontPreset];

  const transitionConfig = getTransition();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass overflow-hidden rounded-2xl border border-line shadow-2xl"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-line bg-surface-2/60 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
          </span>
          Sitora Design Lab
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium text-accent">
            Live Sandbox
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid gap-px bg-line md:grid-cols-[280px_1fr]">
        {/* Left Side: Control Panel */}
        <div className="flex flex-col gap-5 bg-surface/60 p-5">
          {/* Controls: Preset Style */}
          <div className="space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-ink-mute">Style Preset</p>
            <div className="flex flex-col gap-1.5">
              {(["editorial", "brutalist", "glassmorphic"] as StylePreset[]).map((style) => (
                <button
                  key={style}
                  onClick={() => setStylePreset(style)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-all",
                    stylePreset === style
                      ? "bg-accent/15 text-accent ring-1 ring-accent/25"
                      : "text-ink-soft hover:bg-canvas/40 hover:text-ink"
                  )}
                >
                  <span className="capitalize">{style}</span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-current transition-all",
                      stylePreset === style ? "scale-100" : "scale-0 opacity-0"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Controls: Font Preset */}
          <div className="space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-ink-mute">Typography</p>
            <div className="grid grid-cols-3 gap-1 rounded-lg bg-canvas/40 p-1">
              {(["sans", "display", "mono"] as FontPreset[]).map((font) => (
                <button
                  key={font}
                  onClick={() => setFontPreset(font)}
                  className={cn(
                    "rounded-md py-1.5 text-center text-xs font-medium capitalize transition-all",
                    fontPreset === font
                      ? "bg-surface-2 text-ink shadow-sm"
                      : "text-ink-mute hover:text-ink-soft"
                  )}
                >
                  {font}
                </button>
              ))}
            </div>
          </div>

          {/* Controls: Motion Physics */}
          <div className="space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-ink-mute">Animation Speed</p>
            <div className="grid grid-cols-3 gap-1 rounded-lg bg-canvas/40 p-1">
              {(["clean", "snappy", "fluid"] as MotionPreset[]).map((motion) => (
                <button
                  key={motion}
                  onClick={() => setMotionPreset(motion)}
                  className={cn(
                    "rounded-md py-1.5 text-center text-xs font-medium capitalize transition-all",
                    motionPreset === motion
                      ? "bg-surface-2 text-ink shadow-sm"
                      : "text-ink-mute hover:text-ink-soft"
                  )}
                >
                  {motion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Preview Canvas */}
        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-surface/30 p-6 md:p-8">
          {/* Glassmorphic Background Glow */}
          <motion.div
            animate={{
              opacity: stylePreset === "glassmorphic" ? 0.35 : 0.05,
              scale: stylePreset === "glassmorphic" ? 1.1 : 0.8,
            }}
            transition={transitionConfig}
            className="pointer-events-none absolute h-64 w-64 rounded-full bg-gradient-to-br from-accent/50 to-amber-500/30 blur-3xl"
          />

          {/* Dynamic Mock Website Interface */}
          <motion.div
            layout
            transition={transitionConfig}
            className={cn(
              "relative z-10 w-full max-w-md transition-colors duration-300",
              stylePreset === "editorial" && "rounded-2xl border border-line bg-surface/75 p-6 shadow-xl",
              stylePreset === "brutalist" && "rounded-none border-2 border-ink bg-canvas p-6 shadow-[6px_6px_0px_0px_var(--accent)]",
              stylePreset === "glassmorphic" && "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl"
            )}
          >
            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-line/30 pb-4">
              <span className={cn("text-xs font-bold uppercase tracking-wider text-accent", fontClasses)}>
                Sitora Lab
              </span>
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-mute/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-ink-mute/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-ink-mute/40" />
              </div>
            </div>

            {/* Mock Content */}
            <div className="py-6 space-y-3">
              <motion.h4
                layout
                transition={transitionConfig}
                className={cn("text-2xl font-bold tracking-tight text-ink", fontClasses)}
              >
                We craft digital interfaces.
              </motion.h4>
              <motion.p
                layout
                transition={transitionConfig}
                className="text-xs leading-relaxed text-ink-soft"
              >
                A collaborative web design and engineering studio. We turn wild product ideas into robust, launched digital architectures.
              </motion.p>
            </div>

            {/* Mock Sub-Cards Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <motion.div
                layout
                transition={transitionConfig}
                className={cn(
                  "p-3",
                  stylePreset === "editorial" && "rounded-xl bg-surface-2/40 border border-line/50",
                  stylePreset === "brutalist" && "rounded-none border border-ink bg-canvas shadow-[3px_3px_0px_0px_var(--accent-2)]",
                  stylePreset === "glassmorphic" && "rounded-2xl bg-white/5 border border-white/5"
                )}
              >
                <p className={cn("text-[9px] font-bold text-accent uppercase tracking-wider", fontClasses)}>Design</p>
                <p className="mt-1 text-[11px] text-ink-soft">UI, Motion & brand identity</p>
              </motion.div>
              <motion.div
                layout
                transition={transitionConfig}
                className={cn(
                  "p-3",
                  stylePreset === "editorial" && "rounded-xl bg-surface-2/40 border border-line/50",
                  stylePreset === "brutalist" && "rounded-none border border-ink bg-canvas shadow-[3px_3px_0px_0px_var(--accent-2)]",
                  stylePreset === "glassmorphic" && "rounded-2xl bg-white/5 border border-white/5"
                )}
              >
                <p className={cn("text-[9px] font-bold text-accent uppercase tracking-wider", fontClasses)}>Engineering</p>
                <p className="mt-1 text-[11px] text-ink-soft">Next.js & custom integrations</p>
              </motion.div>
            </div>

            {/* Mock CTA Button */}
            <div className="mt-6 flex justify-end">
              <motion.button
                layout
                transition={transitionConfig}
                className={cn(
                  "px-4 py-2 text-xs font-semibold shadow-sm transition-all",
                  stylePreset === "editorial" && "rounded-full bg-gradient-to-r from-accent to-accent-2 text-canvas hover:scale-[1.02]",
                  stylePreset === "brutalist" && "rounded-none border-2 border-ink bg-accent text-ink font-bold shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
                  stylePreset === "glassmorphic" && "rounded-xl bg-white/10 text-ink border border-white/10 hover:bg-white/15"
                )}
              >
                Launch Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify compilation status**

Run `npm run lint` and `npm run build` to confirm there are no syntax, import, or hydration issues.
