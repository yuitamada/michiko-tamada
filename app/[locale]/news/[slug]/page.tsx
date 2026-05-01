import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, locales, getDict } from "@/lib/i18n";
import { getAllNews, getNewsBySlug } from "@/lib/news";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllNews(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getNewsBySlug(slug, locale as Locale);
  if (!post) return {};
  return { title: post.title };
}

const categoryStyle: Record<string, string> = {
  news: "var(--accent-light)",
  event: "#fef3c7",
  media: "#e0e7ff",
};

function markdownToHtml(md: string): string {
  return md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
}

export default async function NewsDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getNewsBySlug(slug, locale as Locale);
  if (!post) notFound();
  const d = getDict(locale as Locale);

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      <Link href={`/${locale}/news`} className="text-xs tracking-wide hover:underline" style={{ color: "var(--muted)" }}>
        {d.news.back}
      </Link>

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs px-2 py-0.5"
            style={{ backgroundColor: categoryStyle[post.category] ?? "var(--accent-light)" }}
          >
            {d.news.categories[post.category]}
          </span>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "ja-JP")}
          </span>
        </div>

        <h1 className="text-2xl font-medium mb-10">{post.title}</h1>

        <div
          className="text-sm leading-loose space-y-4"
          style={{ color: "var(--ink)" }}
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
      </div>
    </div>
  );
}
