import Link from "next/link";
import Image from "next/image";
import { type Locale, getDict } from "@/lib/i18n";
import { books } from "@/data/books/books";
import { getAllNews } from "@/lib/news";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  const publishedBooks = books.filter((b) => !b.upcoming);
  const upcomingBooks = books.filter((b) => b.upcoming);
  const latestNews = getAllNews(locale as Locale).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-20">
        <p className="text-[10px] tracking-[0.25em] font-light mb-8" style={{ color: "var(--muted)" }}>
          {d.home.role}
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.12em] mb-6 leading-tight">
          玉田美知子
        </h1>
        <p className="text-xs tracking-[0.2em] font-light mb-10" style={{ color: "var(--muted)" }}>
          MICHIKO TAMADA
        </p>
        <p className="text-sm font-light leading-loose max-w-md mb-12" style={{ color: "var(--muted)", lineHeight: "2" }}>
          {d.home.tagline}
        </p>
        <div className="flex gap-4">
          <Link
            href={`/${locale}/books`}
            className="inline-flex items-center text-xs tracking-widest font-light px-7 py-3.5 text-white transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {d.home.worksLink}
          </Link>
          <Link
            href={`/${locale}/profile`}
            className="inline-flex items-center text-xs tracking-widest font-light px-7 py-3.5 transition-colors duration-200"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            onMouseEnter={undefined}
          >
            {d.home.profileLink}
          </Link>
        </div>
      </section>

      {/* Published books */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <p className="text-[10px] tracking-[0.25em] font-light" style={{ color: "var(--muted)" }}>
            {d.home.publishedSection}
          </p>
          <Link
            href={`/${locale}/books`}
            className="text-[10px] tracking-widest font-light transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--muted)" }}
          >
            {d.home.allWorks}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {publishedBooks.map((book) => (
            <Link key={book.slug} href={`/${locale}/books/${book.slug}`} className="group block">
              <div
                className="relative mb-4 overflow-hidden transition-all duration-300"
                style={{
                  aspectRatio: "3/4",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={undefined}
              >
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="text-xs font-medium tracking-wide leading-snug group-hover:opacity-70 transition-opacity duration-200">
                {book.title}
              </p>
              <p className="text-[10px] font-light mt-1 tracking-wide" style={{ color: "var(--muted)" }}>
                {book.publisher}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
      </div>

      {/* Upcoming */}
      {upcomingBooks.length > 0 && (
        <section className="max-w-6xl mx-auto px-8 py-20">
          <p className="text-[10px] tracking-[0.25em] font-light mb-12" style={{ color: "var(--accent)" }}>
            {d.home.upcomingSection}
          </p>
          {upcomingBooks.map((book) => (
            <div key={book.slug} className="flex gap-8 items-start p-8 rounded-sm" style={{ backgroundColor: "var(--accent-light)" }}>
              <div className="w-28 flex-shrink-0" style={{ boxShadow: "var(--shadow-md)" }}>
                <Image src={book.coverImage} alt={book.title} width={112} height={150} className="w-full h-auto" />
              </div>
              <div className="pt-1">
                <span
                  className="inline-block text-[10px] tracking-widest font-light px-3 py-1 mb-4"
                  style={{ backgroundColor: "var(--accent)", color: "white" }}
                >
                  {d.home.upcomingBadge(book.publishedAt.slice(0, 7))}
                </span>
                <p className="text-lg font-medium tracking-wide mb-2">{book.title}</p>
                <p className="text-xs font-light mb-4 tracking-wide" style={{ color: "var(--muted)" }}>
                  {book.publisher}
                </p>
                <p className="text-sm font-light leading-loose" style={{ color: "var(--muted)", lineHeight: "1.9" }}>
                  {locale !== "ja" ? book.descriptionEn : book.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* News */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <p className="text-[10px] tracking-[0.25em] font-light" style={{ color: "var(--muted)" }}>
            {d.home.newsSection}
          </p>
          <Link
            href={`/${locale}/news`}
            className="text-[10px] tracking-widest font-light transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--muted)" }}
          >
            {d.home.allNews}
          </Link>
        </div>

        <ul>
          {latestNews.map((post, i) => (
            <li key={post.slug} style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}>
              <Link
                href={`/${locale}/news/${post.slug}`}
                className="flex items-start gap-8 py-5 transition-opacity duration-200 hover:opacity-60"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span className="text-[10px] tracking-widest font-light w-24 flex-shrink-0 pt-0.5" style={{ color: "var(--muted-light)" }}>
                  {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "ja-JP")}
                </span>
                <span
                  className="text-[10px] tracking-widest font-light px-2.5 py-1 flex-shrink-0 self-start"
                  style={{
                    backgroundColor:
                      post.category === "event" ? "#fef3c7"
                      : post.category === "media" ? "#e8eaf6"
                      : "var(--accent-light)",
                    color: "var(--muted)",
                  }}
                >
                  {d.news.categories[post.category]}
                </span>
                <span className="text-sm font-light leading-relaxed">{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* SNS */}
      <section style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--cream-deep)" }}>
        <div className="max-w-6xl mx-auto px-8 py-14 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <p className="text-xs font-light tracking-wide" style={{ color: "var(--muted)" }}>
            {d.home.snsText}
          </p>
          <div className="flex gap-5">
            {[
              { label: "X (Twitter)", href: "https://x.com/ubaukya" },
              { label: "Instagram", href: "https://www.instagram.com/michiko_tamada/" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest font-light px-5 py-2.5 transition-colors duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
