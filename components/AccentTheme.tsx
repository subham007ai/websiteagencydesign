"use client";

import { useEffect } from "react";

/**
 * Scroll-driven theme switcher. Observes sections with `data-accent` attributes
 * and transitions the global CSS custom properties (--accent, --accent-rgb, --accent-2)
 * dynamically when the section dominates the viewport.
 */
function hexToRgb(hex: string): string | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : null;
}

export default function AccentTheme() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-accent]");
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const accent = entry.target.getAttribute("data-accent");
          const accent2 = entry.target.getAttribute("data-accent-2");

          if (accent) {
            document.documentElement.style.setProperty("--accent", accent);
            const rgb = hexToRgb(accent);
            if (rgb) {
              document.documentElement.style.setProperty("--accent-rgb", rgb);
            }
          }
          if (accent2) {
            document.documentElement.style.setProperty("--accent-2", accent2);
            const rgb2 = hexToRgb(accent2);
            if (rgb2) {
              document.documentElement.style.setProperty("--accent-2-rgb", rgb2);
            }
          }
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, []);

  return null;
}
