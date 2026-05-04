import type { Metadata } from "next";
import { type Locale, getDict } from "@/lib/i18n";
import { eventItems } from "@/data/events";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  return { title: d.events.heading };
}

const typeColors: Record<string, string> = {
  signing: "#edf1ea",
  reading: "#fef3c7",
  exhibition: "#e8eaf6",
  workshop: "#fce8e8",
  talk: "#e8f4ec",
};

export default async function EventsPage({ params }: Props) {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  const isEn = locale === "en";

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = eventItems.filter((e) => e.date >= today || e.upcoming).sort((a, b) => a.date.localeCompare(b.date));
  const past = eventItems.filter((e) => e.date < today && !e.upcoming).sort((a, b) => b.date.localeCompare(a.date));

  const EventList = ({ items }: { items: typeof eventItems }) => (
    <ul>
      {items.map((item, i) => (
        <li key={i} style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined }}>
          <div
            className="flex items-start gap-6 py-6"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span
              className="text-[12px] tracking-widest font-light w-24 flex-shrink-0 pt-0.5"
              style={{ color: "var(--muted-light)" }}
            >
              {new Date(item.date).toLocaleDateString(isEn ? "en-US" : "ja-JP")}
            </span>

            <span
              className="text-[12px] tracking-widest font-light px-2.5 py-1 flex-shrink-0 self-start"
              style={{ backgroundColor: typeColors[item.type] ?? "var(--accent-light)", color: "var(--muted)" }}
            >
              {d.events.types[item.type]}
            </span>

            <div className="flex flex-col gap-1.5">
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
              <span className="text-xs font-light" style={{ color: "var(--muted)" }}>
                {isEn ? item.venueEn : item.venue} — {isEn ? item.locationEn : item.location}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <p className="text-[12px] tracking-[0.25em] font-light mb-3" style={{ color: "var(--muted)" }}>
        {d.events.section}
      </p>
      <h1 className="text-2xl font-light tracking-widest mb-16" style={{ color: "var(--ink)" }}>
        {d.events.heading}
      </h1>

      {upcoming.length > 0 && (
        <section className="mb-16">
          <p className="text-[12px] tracking-[0.25em] font-light mb-8" style={{ color: "var(--accent)" }}>
            {d.events.upcoming}
          </p>
          <EventList items={upcoming} />
        </section>
      )}

      {past.length > 0 && (
        <section>
          <p className="text-[12px] tracking-[0.25em] font-light mb-8" style={{ color: "var(--muted)" }}>
            {d.events.past}
          </p>
          <EventList items={past} />
        </section>
      )}
    </div>
  );
}
