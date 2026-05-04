import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { type Locale, getDict } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDict(locale as Locale).profile.heading };
}

export default async function ProfilePage({ params }: Props) {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  const p = d.profile;

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <p className="text-[10px] tracking-[0.25em] font-light mb-4" style={{ color: "var(--muted)" }}>
        {p.section}
      </p>
      <h1 className="text-3xl font-light tracking-widest mb-20">{p.heading}</h1>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Photo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/profile/michiko-tamada.jpg"
            alt="玉田美知子"
            width={400}
            height={300}
            className="w-72 h-auto"
            style={{ boxShadow: "var(--shadow-md)" }}
            priority
          />
        </div>

        {/* Bio */}
        <div className="flex-1 space-y-8">
          <div>
            <div className="flex items-center gap-6">
              <h2 className="text-2xl font-light tracking-widest">玉田美知子</h2>
              <Image
                src="/images/profile/tamadamichiko.jpg"
                alt="たまだみちこ"
                width={160}
                height={160}
                className="w-28 h-auto"
              />
            </div>
            <p className="text-[10px] tracking-[0.2em] font-light mt-1" style={{ color: "var(--muted)" }}>
              {p.nameEn}
            </p>
          </div>

          <p className="text-sm font-light leading-loose" style={{ lineHeight: "2", color: "var(--ink)" }}>{p.bio1}</p>
          <p className="text-sm font-light leading-loose" style={{ lineHeight: "2", color: "var(--ink)" }}>{p.bio2}</p>

          {/* History */}
          <div className="pt-4">
            <p className="text-[10px] tracking-[0.2em] font-light mb-6 pb-3"
              style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
              {p.historyHeading}
            </p>
            <ul className="space-y-4">
              {p.history.map(({ year, text }) => (
                <li key={year + text} className="flex gap-8 text-sm font-light">
                  <span className="w-20 flex-shrink-0 text-[10px] tracking-widest pt-1" style={{ color: "var(--accent)" }}>
                    {year}
                  </span>
                  <span style={{ lineHeight: "1.8" }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div>
            <p className="text-[10px] tracking-[0.2em] font-light mb-6 pb-3"
              style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
              {p.awardsHeading}
            </p>
            <ul className="space-y-4">
              {p.awards.map(({ year, text }) => (
                <li key={text} className="flex gap-8 text-sm font-light">
                  <span className="w-20 flex-shrink-0 text-[10px] tracking-widest pt-1" style={{ color: "var(--muted-light)" }}>
                    {year}
                  </span>
                  <span style={{ lineHeight: "1.8" }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Inquiry */}
      <div className="mt-24 p-10" style={{ backgroundColor: "var(--cream-deep)" }}>
        <p className="text-[10px] tracking-[0.2em] font-light mb-4" style={{ color: "var(--muted)" }}>
          {p.inquiryHeading}
        </p>
        <p className="text-sm font-light leading-loose" style={{ lineHeight: "2" }}>
          {p.inquiryText}
          <Link href={`/${locale}/contact`} className="underline underline-offset-4 transition-opacity hover:opacity-60"
            style={{ color: "var(--accent)" }}>
            {p.inquiryLink}
          </Link>
          {p.inquiryTextAfter}
        </p>
      </div>
    </div>
  );
}
