"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Drives Lenis smooth scrolling and syncs it to GSAP ScrollTrigger so every
 * pinned/scrubbed scene reads from the same scroll position. Respects
 * prefers-reduced-motion by skipping the smoothing layer entirely.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Recompute once fonts/images settle.
    const refresh = () => ScrollTrigger.refresh();
    const id = window.setTimeout(refresh, 400);

    return () => {
      window.clearTimeout(id);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
