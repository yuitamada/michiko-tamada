import type { Metadata } from "next";
import { type Locale, getDict } from "@/lib/i18n";
import { mediaItems } from "@/data/media";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  return { title: d.media.heading };
}

const typeColors: Record<string, string> = {
  interview: "#e8f4ec",
  review: "#edf1ea",
  feature: "#fef3c7",
  tv: "#e8eaf6",
  radio: "#fce8e8",
};

export default async function MediaPage({ params }: Props) {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  const isEn = locale === "en";

  const sorted = [...mediaItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <p className="text-[10px] tracking-[0.25em] font-light mb-3" style={{ color: "var(--muted)" }}>
        {d.media.section}
      </p>
      <h1 className="text-2xl font-light tracking-widest mb-16" style={{ color: "var(--ink)" }}>
        {d.media.heading}
      </h1>

      <ul>
        {sorted.map((item, i) => (
          <li
            key={i}
            style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}
          >
            <div
              className="flex items-start gap-6 py-6"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] tracking-widest font-light w-24 flex-shrink-0 pt-0.5"
                style={{ color: "var(--muted-light)" }}
              >
                {new Date(item.date).toLocaleDateString(isEn ? "en-US" : "ja-JP")}
              </span>

              <span
                className="text-[10px] tracking-widest font-light px-2.5 py-1 flex-shrink-0 self-start"
                style={{ backgroundColor: typeColors[item.type] ?? "var(--accent-light)", color: "var(--muted)" }}
              >
                {d.media.types[item.type]}
              </span>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-light tracking-wide" style={{ color: "var(--muted)" }}>
                  {isEn ? item.outletEn : item.outlet}
                </span>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light leading-relaxed transition-opacity duration-200 hover:opacity-60"
                  >
                    {isEn ? item.titleEn : item.title} ↗
                  </a>
                ) : (
                  <span className="text-sm font-light leading-relaxed">
                    {isEn ? item.titleEn : item.title}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
