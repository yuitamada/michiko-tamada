import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { type Locale, locales, getDict } from "@/lib/i18n";
import { books } from "@/data/books/books";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => books.map((book) => ({ locale, slug: book.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};
  return { title: book.title, description: book.descriptions[locale] ?? book.descriptions.en ?? book.descriptions.ja };
}

export default async function BookDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();
  const d = getDict(locale as Locale);
  const b = d.books;

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <Link href={`/${locale}/books`}
        className="text-[10px] tracking-widest font-light transition-opacity hover:opacity-60"
        style={{ color: "var(--muted)" }}>
        {b.back}
      </Link>

      <div className="mt-14 flex flex-col md:flex-row gap-16">
        {/* Cover */}
        <div className="flex-shrink-0">
          {book.upcoming && (
            <span className="inline-block text-[10px] tracking-widest font-light px-3 py-1 mb-5"
              style={{ backgroundColor: "var(--accent)", color: "white" }}>
              {b.upcomingBadge(book.publishedAt.slice(0, 7))}
            </span>
          )}
          <div style={{ boxShadow: "var(--shadow-md)", display: "inline-block" }}>
            <Image src={book.coverImage} alt={book.title} width={224} height={300} className="block w-56 h-auto" priority />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-light tracking-widest mb-2">{book.title}</h1>
          <p className="text-xs font-light tracking-widest mb-10" style={{ color: "var(--muted)" }}>{b.by}</p>

          {/* Meta */}
          <dl className="grid grid-cols-[6rem_1fr] gap-y-4 text-sm font-light mb-10 pb-10"
            style={{ borderBottom: "1px solid var(--border)" }}>
            <dt className="text-[10px] tracking-widest pt-0.5" style={{ color: "var(--muted-light)" }}>
              {locale === "en" ? "Publisher" : "出版社"}
            </dt>
            <dd>{book.publisher}</dd>

            <dt className="text-[10px] tracking-widest pt-0.5" style={{ color: "var(--muted-light)" }}>
              {book.upcoming ? b.publishScheduled : b.publishDate}
            </dt>
            <dd>
              {book.upcoming
                ? b.upcomingBadge(book.publishedAt.slice(0, 7))
                : new Date(book.publishedAt).toLocaleDateString(locale === "en" ? "en-US" : "ja-JP", { year: "numeric", month: "long", day: "numeric" })}
            </dd>

            {book.price != null && (
              <>
                <dt className="text-[10px] tracking-widest pt-0.5" style={{ color: "var(--muted-light)" }}>{b.price}</dt>
                <dd>¥{book.price.toLocaleString()}{locale === "ja" && "（税込）"}</dd>
              </>
            )}
            {book.isbn && (
              <>
                <dt className="text-[10px] tracking-widest pt-0.5" style={{ color: "var(--muted-light)" }}>{b.isbn}</dt>
                <dd className="font-mono text-xs">{book.isbn}</dd>
              </>
            )}
          </dl>

          {/* Synopsis */}
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.2em] font-light mb-4" style={{ color: "var(--muted)" }}>{b.synopsis}</p>
            <p className="text-sm font-light leading-loose" style={{ lineHeight: "2" }}>
              {book.descriptions[locale] ?? book.descriptions.en ?? book.descriptions.ja}
            </p>
          </div>

          {/* Links */}
          {(book.links.publisherPage || book.links.specialSite || book.links.amazon) && (
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.2em] font-light mb-4" style={{ color: "var(--muted)" }}>{b.links}</p>
              <div className="flex flex-wrap gap-3">
                {book.links.specialSite && (
                  <a href={book.links.specialSite} target="_blank" rel="noopener noreferrer"
                    className="text-[10px] tracking-widest font-light px-5 py-2.5 transition-colors duration-200"
                    style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}>
                    {b.specialSite}
                  </a>
                )}
                {book.links.publisherPage && (
                  <a href={book.links.publisherPage} target="_blank" rel="noopener noreferrer"
                    className="text-[10px] tracking-widest font-light px-5 py-2.5 transition-colors duration-200"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)" }}>
                    {b.publisherPage}
                  </a>
                )}
                {book.links.amazon && (
                  <a href={book.links.amazon} target="_blank" rel="noopener noreferrer"
                    className="text-[10px] tracking-widest font-light px-5 py-2.5 transition-colors duration-200"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)" }}>
                    {b.amazon}
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Awards */}
          {(book.awards[locale] ?? book.awards.en ?? book.awards.ja).length > 0 && (
            <div>
              <p className="text-[10px] tracking-[0.2em] font-light mb-4" style={{ color: "var(--muted)" }}>{b.awards}</p>
              <ul className="space-y-2.5">
                {(book.awards[locale] ?? book.awards.en ?? book.awards.ja).map((award) => (
                  <li key={award} className="flex items-start gap-3 text-sm font-light" style={{ lineHeight: "1.8" }}>
                    <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)", marginTop: "10px" }} />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
