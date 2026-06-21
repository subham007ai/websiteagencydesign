import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, Reveal, ArrowIcon, Tag } from "@/components/ui";
import { Aurora, MeshCover } from "@/components/visuals";
import { POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal — Sitora",
  description:
    "Notes on product, design, and the craft of building things that grow.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pt-40 pb-12 sm:pt-48">
        <Aurora corner="top-right" intensity={0.7} />
        <div className="relative mx-auto max-w-wrap">
          <Eyebrow>Journal</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl">
            Notes on building things that grow.
          </h1>
        </div>
      </section>

      {/* featured */}
      <section className="relative mx-auto max-w-wrap px-6 pb-6">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-line bg-surface/50 transition-colors hover:border-accent/50 lg:grid-cols-2"
          >
            <MeshCover seed={2} className="aspect-[16/10] lg:aspect-auto" />
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs text-ink-mute">
                <Tag>{featured.category}</Tag>
                <span>{featured.date}</span>
                <span>· {featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink-soft">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Read entry
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* rest */}
      <section className="relative mx-auto max-w-wrap px-6 py-8">
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-line bg-surface/50 transition-colors hover:border-accent/50"
              >
                <MeshCover seed={i + 5} className="aspect-[16/9]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-mute">
                    <Tag>{p.category}</Tag>
                    <span>{p.date}</span>
                    <span>· {p.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{p.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
