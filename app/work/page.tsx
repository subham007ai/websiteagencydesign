import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, Reveal, ArrowIcon, Tag } from "@/components/ui";
import { Aurora, MeshCover } from "@/components/visuals";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Sitora",
  description:
    "Selected projects from Sitora — products, launches, and storefronts built to grow.",
};

export default function WorkPage() {
  return (
    <main className="overflow-hidden">
      {/* header */}
      <section className="relative px-6 pt-40 pb-16 sm:pt-48">
        <Aurora corner="top-right" intensity={0.8} />
        <div className="relative mx-auto max-w-wrap">
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl">
            Work that moves the number that matters.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            A look at what happens when strategy, design, and engineering pull in
            the same direction.
          </p>
        </div>
      </section>

      {/* grid */}
      <section className="relative mx-auto max-w-wrap px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/work/${p.slug}`}
                className="group block overflow-hidden rounded-3xl border border-line bg-surface/50 transition-colors hover:border-accent/50"
              >
                <div className="relative">
                  <MeshCover
                    seed={i + 1}
                    label={p.client.toUpperCase()}
                    className="aspect-[16/10]"
                  />
                  <span className="absolute bottom-4 right-5 font-display text-6xl font-bold text-ink drop-shadow-lg">
                    {p.stat}
                  </span>
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-canvas/40 text-ink backdrop-blur transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowIcon className="h-4 w-4 -rotate-45" />
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold text-ink">{p.title}</h2>
                    <span className="text-xs text-ink-mute">{p.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-mute">{p.sector}</p>
                  <p className="mt-3 text-ink-soft">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
