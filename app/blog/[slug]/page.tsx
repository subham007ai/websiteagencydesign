import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowIcon, Tag } from "@/components/ui";
import { POSTS, getPost } from "@/lib/content";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: "Journal — Sitora" };
  return { title: `${p.title} — Sitora`, description: p.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="overflow-hidden">
      <section className="relative px-6 pt-40 pb-10 sm:pt-48">
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b ${post.cover} opacity-50`} />
        <div className="relative mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent">
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Journal
          </Link>
          <div className="mt-8 flex items-center gap-3 text-xs text-ink-mute">
            <Tag>{post.category}</Tag>
            <span>{post.date}</span>
            <span>· {post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-6xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="relative mx-auto max-w-2xl px-6 py-10">
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
          {post.body.map((para, i) => (
            <p key={i} className={i === 0 ? "text-xl text-ink" : ""}>
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-surface/50 p-7">
          <p className="text-lg font-medium text-ink">
            Have a project that needs this kind of thinking?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            Start a project
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
