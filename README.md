# Sitora — Creative Web Design Agency

A scrollytelling agency website. The visitor doesn't browse a site — they watch
an idea become a launched, growing digital product as they scroll. The page is
the proof of capability.

**Narrative color progression:** scenes 01–07 evolve the accent from monochrome
→ blue → purple → green → orange → gold (see `lib/stages.ts`), so the viewer
subconsciously feels the product maturing. Scenes 08–10 hand the accent to the
visitor's industry choice.

## The 10 scenes

| # | Scene | What happens |
|---|-------|--------------|
| 01 | The Idea | Dark canvas, ambient 3D particles, a typewriter brief |
| 02 | Discovery & Strategy | Sticky-note strategy board with self-drawing connections |
| 03 / 04 | Wireframe → Design | **Pinned, scroll-scrubbed.** The wireframe draws itself, then floods into a premium UI |
| 05 | Development | Self-typing code editor + build pipeline |
| 06 | Launch | Deploy progress, screen flash, success ticket |
| 07 | Growth & Results | Count-up KPIs + a rising chart (industry-aware) |
| 08 | Industry Selector | Pick a path — the whole site recolors and re-content |
| 09 | Case Studies | Expandable Challenge → Outcome story (industry-aware) |
| 10 | Final CTA | Conversational lead form (React Hook Form + Zod) |

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript · Tailwind CSS
- **GSAP + ScrollTrigger** — pinning and scroll-scrubbed scene timelines
- **Lenis** — smooth scrolling, synced to ScrollTrigger
- **Framer Motion** — reveals, micro-interactions, layout transitions
- **Three.js / React Three Fiber** — the ambient particle field in Scene 01
- **React Hook Form + Zod** — the contact form

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## How personalization works

`components/IndustryContext.tsx` holds the selected industry and writes its
accent into CSS custom properties (`--accent`, `--accent-2`, `--accent-rgb`), so
the entire site recolors instantly. Per-industry content (metrics, case study,
testimonial) lives in `lib/industries.ts` — edit there to retune the copy.

## Notes

- Every scene respects `prefers-reduced-motion` (particles, typewriters, pins,
  and count-ups all degrade to static/instant states).
- The contact form is wired to a simulated submit (`console.log`). Swap
  `onSubmit` in `SceneContact.tsx` for a server action / Supabase insert to go
  live. Analytics (GA / PostHog) can be added in `app/layout.tsx`.
