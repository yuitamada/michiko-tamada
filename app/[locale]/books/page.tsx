import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { type Locale, getDict } from "@/lib/i18n";
import { books } from "@/data/books/books";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDict(locale as Locale).books.heading };
}

export default async function BooksPage({ params }: Props) {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  const b = d.books;
  const published = books.filter((book) => !book.upcoming);
  const upcoming = books.filter((book) => book.upcoming);

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <p className="text-[12px] tracking-[0.25em] font-light mb-4" style={{ color: "var(--muted)" }}>
        {b.section}
      </p>
      <h1 className="text-3xl font-light tracking-widest mb-20">{b.heading}</h1>

      {/* Published */}
      <section className="mb-24">
        <p className="text-[12px] tracking-[0.2em] font-light mb-10 pb-4"
          style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
          {b.published}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {published.map((book) => (
            <Link key={book.slug} href={`/${locale}/books/${book.slug}`} className="group block">
              <div className="relative mb-5 overflow-hidden" style={{ aspectRatio: "3/4", boxShadow: "var(--shadow-sm)" }}>
                <Image src={book.coverImage} alt={book.title} fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <p className="text-xs font-medium tracking-wide leading-snug group-hover:opacity-60 transition-opacity">
                {book.title}
              </p>
              <p className="text-[12px] font-light mt-1.5" style={{ color: "var(--muted)" }}>{book.publisher}</p>
              <p className="text-[12px] font-light" style={{ color: "var(--muted-light)" }}>
                {new Date(book.publishedAt).toLocaleDateString(locale === "en" ? "en-US" : "ja-JP", { year: "numeric", month: "long" })}
                {book.price != null && ` · ¥${book.price.toLocaleString()}`}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section>
          <p className="text-[12px] tracking-[0.2em] font-light mb-10 pb-4"
            style={{ color: "var(--accent)", borderBottom: "1px solid var(--border)" }}>
            {b.upcoming}
          </p>
          <div className="space-y-6">
            {upcoming.map((book) => (
              <Link key={book.slug} href={`/${locale}/books/${book.slug}`}
                className="flex gap-8 p-8 rounded-sm transition-opacity duration-200 hover:opacity-80"
                style={{ backgroundColor: "var(--accent-light)" }}>
                <div className="w-28 flex-shrink-0" style={{ boxShadow: "var(--shadow-md)" }}>
                  <Image src={book.coverImage} alt={book.title} width={112} height={150} className="w-full h-auto" />
                </div>
                <div>
                  <span className="inline-block text-[12px] tracking-widest px-3 py-1 mb-4"
                    style={{ backgroundColor: "var(--accent)", color: "white" }}>
                    {b.upcomingBadge(book.publishedAt.slice(0, 7))}
                  </span>
                  <p className="text-lg font-medium tracking-wide mb-1">{book.title}</p>
                  <p className="text-xs font-light mb-4" style={{ color: "var(--muted)" }}>{book.publisher}</p>
                  <p className="text-sm font-light leading-loose" style={{ color: "var(--muted)", lineHeight: "1.9" }}>
                    {book.descriptions[locale] ?? book.descriptions.en ?? book.descriptions.ja}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
