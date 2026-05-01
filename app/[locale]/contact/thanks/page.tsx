import Link from "next/link";
import { type Locale, getDict, locales } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ThanksPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <div className="max-w-2xl mx-auto px-8 py-32 text-center">
      <div
        className="inline-flex items-center justify-center w-12 h-12 mb-10"
        style={{ backgroundColor: "var(--accent-light)" }}
      >
        <span style={{ color: "var(--accent)", fontSize: "1.25rem" }}>✓</span>
      </div>
      <h1 className="text-2xl font-light tracking-widest mb-6" style={{ color: "var(--ink)" }}>
        {isEn ? "Thank You" : "お問い合わせありがとうございます"}
      </h1>
      <p className="text-sm font-light leading-loose mb-12" style={{ color: "var(--muted)", lineHeight: "2" }}>
        {isEn
          ? "Your message has been received. We will get back to you within 3–5 business days."
          : "お問い合わせを受け付けました。内容を確認のうえ、通常3〜5営業日以内にご返信いたします。"}
      </p>
      <Link
        href={`/${locale}`}
        className="text-xs tracking-widest font-light px-8 py-3.5 transition-opacity duration-200 hover:opacity-70"
        style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
      >
        {isEn ? "Back to Top" : "トップページへ戻る"}
      </Link>
    </div>
  );
}
