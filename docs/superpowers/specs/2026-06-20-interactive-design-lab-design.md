# Design Specification: Sitora Interactive Design Lab

This spec details the replacement of the mock SaaS dashboard (`components/DashboardPreview.tsx`) with an interactive, creative "Design Lab" showcasing Sitora's web design, typography, and animation capabilities.

---

## 1. Context & Objectives

* **Target File:** [DashboardPreview.tsx](file:///d:/port-3/components/DashboardPreview.tsx) (will contain the Design Lab logic).
* **Goal:** Replace the out-of-place SaaS console mockup with a premium "Design Editor Sandbox" where visitors can interactively toggle styling, typography, and scroll/spring animations on a mock landing page card.

---

## 2. Design System & Style Guide

The Design Lab features three distinct visual states:

### 1. Style Presets
* **Editorial:**
  * Clean, elegant layout with warm terracotta gradients.
  * Rounded card corners (`rounded-2xl`).
  * Wider padding (`p-6` on canvas elements).
* **Brutalist:**
  * High-contrast design.
  * Sharp corners (`rounded-none`).
  * Solid borders and thick lines (`border-2 border-ink`).
  * Hard orange/accent shadows (`shadow-[4px_4px_0px_0px_var(--accent)]`).
* **Glassmorphic:**
  * Frosted transparent layer overlays (`bg-white/5 backdrop-blur-md`).
  * Large, smooth rounded corners (`rounded-3xl`).
  * Deep amber radial glow elements backing the canvas.

### 2. Fonts
* **Sans:** `font-sans` (Inter)
* **Display:** `font-display` (Space Grotesk)
* **Mono:** `font-mono` (JetBrains Mono)

### 3. Motion Speed
* **Clean:** Instant layouts (no delay/spring, zero duration).
* **Snappy:** Quick response spring (`stiffness: 180, damping: 15, mass: 0.5`).
* **Fluid:** Soft, heavy spring (`stiffness: 70, damping: 18, mass: 1.2`).

---

## 3. UI Layout Specification

### Side-by-Side Split View (`md:grid-cols-[260px_1fr]`)
* **Control Panel (Left):**
  * Live breathing dot indicator beside "Sitora Design Lab".
  * Vertical category sections for **Layout Preset**, **Font Family**, and **Animation Transition**.
  * Dynamic chip buttons with glowing outlines on hover.
* **Interactive Canvas (Right):**
  * A mock web browser viewport.
  * Internal layout includes:
    * Mock header (`Logo` + simulated nav dots).
    * Dynamic Typography Hero block: `"We craft digital interfaces."`
    * Description snippet.
    * CTA Button (*"Launch Project"*) which responds to the active theme.

---

## 4. Verification Plan

### Automated Checks
* **Type Check & Lint:** `npm run lint` must pass with zero issues.
* **Production Build:** `npm run build` must compile and prerender the static route `/` with no SSR failures or hydration errors.

### Manual Verification
* Navigate to the homepage hero section.
* Toggle the style chips (Editorial, Brutalist, Glassmorphic). Confirm the right-hand canvas morphs layout, border styles, and shadows.
* Toggle font families (Sans, Display, Mono). Confirm the headline and paragraph text font swaps instantly.
* Toggle animation physics. Confirm the visual transitions follow the expected stiffness and damping levels.
