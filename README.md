# Sitora — Premium Creative Web Design Agency

Sitora is a high-end web design and engineering studio portfolio website. Designed around premium typographic restraint, organic textures, and dynamic scroll-driven themes, Sitora showcases how strategy, design, and engineering converge into products that capture attention and drive revenue.

---

## 🎨 Design Philosophy & Aesthetics

Sitora moves away from generic, cookie-cutter agency designs to offer an atmospheric, premium experience:
- **Atmospheric Depth**: Utilizes a global filmic grain overlay (`Grain`) and responsive, custom radial glows (`Aurora`) mimicking modern high-end developer consoles.
- **Dynamic Accent Theme (Intersection Observer)**: Sections declare their own accent color themes via `data-accent` and `data-accent-2` attributes. As you scroll, `AccentTheme` interceptively transitions root-level CSS properties (`--accent`, `--accent-rgb`, etc.) on the fly, instantly transforming the site's palette without heavy re-renders.
- **Generative Cover Art (`MeshCover`)**: deterministic, seeded SVGs use turbulence, gaussian blur, and composite matrices to output organic gradient visuals for projects and blog covers instead of plain image placeholders.
- **Micro-interactions & Smoothness**: Syncs native scrolling with a customized kinetic feel using `Lenis`, combined with mask-clipped kinetic text reveals and magnetic hover effects.

---

## 🛠️ Key Interactive Modules

### 🧮 Interactive Scope Cost Calculator (`/pricing`)
An intuitive, slider-driven estimator allowing prospective clients to structure custom projects.
- **Adjustable Parameters**: Project Complexity (Landing Page to Custom Platforms), Motion Fidelity (Static, Fluid, or Immersive GSAP), and Backend integrations (None, Supabase/Database, or Complex APIs).
- **Dual Currency Support**: Switch values seamlessly between Indian Rupees (₹ INR) with GST billing configurations, and US Dollars ($ USD).
- **Smart Estimation**: Dynamically calculates estimated budgets and delivery timelines in real-time, feeding parameters straight to the inquiry page.

### 📝 Smart Multi-Step Contact Form (`/contact`)
An advanced client intake portal that acts as a live project advisor.
- **Stack**: Validated with `Zod` schema parsing and powered by `React Hook Form`.
- **Dynamic Visual Summary**: As users toggle service chips, budges, and timelines, a live sliding card displays their estimated package name, timeline, and key feature checklist.
- **Spam Mitigation**: Includes a hidden honeypot validation field (`website_hp`) to silently filter bot submissions without disrupting user flows.

---

## ⚙️ Technical Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS 3
- **Motion & Interactions**: Framer Motion 11 & Lenis Smooth Scroll
- **Form & Validation**: React Hook Form 7 & Zod 3

---

## 🔍 Git Repository Audit

As part of the repository maintenance, a systematic audit was conducted to verify what files are tracked and what remains excluded from the public codebase to maintain security and performance hygiene.

| Path | Status | Reason / Explanation |
| :--- | :---: | :--- |
| `app/`, `components/`, `lib/` | **Pushed** | Core application pages, routing setups, design system components, and assets. |
| `tailwind.config.ts`, `next.config.mjs`, `tsconfig.json` | **Pushed** | Project configurations (CSS compiler settings, routing parameters, and type constraints). |
| `package.json`, `package-lock.json` | **Pushed** | Dependency list and locks to ensure consistent local installations. |
| `.vscode/settings.json` | **Pushed** | Standard workspace settings (ignores custom `@apply` warnings in Tailwind/PostCSS). |
| `node_modules/` | **Excluded** | Large dependency packages; easily reinstalled locally via npm. |
| `.next/` | **Excluded** | Next.js build caching and compilation outputs. |
| `next-env.d.ts` | **Excluded** | Auto-generated TypeScript types configured dynamically by Next.js. |
| `.claude/` | **Excluded** | Local IDE agent state config files; added to `.gitignore`. |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
# Opens local instance at http://localhost:3000
```

### 3. Production Compilation
Ensure type checks, lint checks, and pre-renders compile cleanly:
```bash
npm run build
npm run start
```
