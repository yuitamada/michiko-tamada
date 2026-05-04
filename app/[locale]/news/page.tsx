import type { Metadata } from "next";
import Link from "next/link";
import { type Locale, getDict } from "@/lib/i18n";
import { getAllNews } from "@/lib/news";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDict(locale as Locale).news.heading };
}

const categoryColor: Record<string, string> = {
  news: "var(--accent-light)",
  event: "#fef3c7",
  media: "#e8eaf6",
};

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  const posts = getAllNews(locale as Locale);

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <p className="text-[12px] tracking-[0.25em] font-light mb-4" style={{ color: "var(--muted)" }}>
        {d.news.section}
      </p>
      <h1 className="text-3xl font-light tracking-widest mb-20">{d.news.heading}</h1>

      <ul>
        {posts.map((post, i) => (
          <li key={post.slug} style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}>
            <Link
              href={`/${locale}/news/${post.slug}`}
              className="flex items-start gap-8 py-6 transition-opacity duration-200 hover:opacity-60"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span className="text-[12px] tracking-widest font-light w-24 flex-shrink-0 pt-0.5" style={{ color: "var(--muted-light)" }}>
                {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "ja-JP")}
              </span>
              <span
                className="text-[12px] tracking-widest font-light px-2.5 py-1 flex-shrink-0 self-start"
                style={{ backgroundColor: categoryColor[post.category] ?? "var(--accent-light)", color: "var(--muted)" }}
              >
                {d.news.categories[post.category]}
              </span>
              <span className="text-sm font-light leading-relaxed">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
