import type { Metadata } from "next";
import Image from "next/image";
import { type Locale, getDict } from "@/lib/i18n";
import { shopItems } from "@/data/shop";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  return { title: d.shop.heading };
}

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  const d = getDict(locale as Locale);
  const isEn = locale !== "ja";

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <p className="text-[10px] tracking-[0.25em] font-light mb-3" style={{ color: "var(--muted)" }}>
        {d.shop.section}
      </p>
      <h1 className="text-2xl font-light tracking-widest mb-16" style={{ color: "var(--ink)" }}>
        {d.shop.heading}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {shopItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            {/* Image */}
            <div
              className="relative mb-4 overflow-hidden"
              style={{ aspectRatio: "1/1", backgroundColor: "var(--cream-deep)", boxShadow: "var(--shadow-sm)" }}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={isEn ? item.nameEn : item.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  onError={undefined}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] tracking-widest" style={{ color: "var(--muted-light)" }}>
                    NO IMAGE
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <p className="text-xs font-medium tracking-wide leading-snug mb-1">
              {isEn ? item.nameEn : item.name}
            </p>
            <p className="text-[10px] font-light mb-3" style={{ color: "var(--muted)" }}>
              ¥{item.price.toLocaleString()}
            </p>

            {/* Button */}
            {item.squareUrl ? (
              <a
                href={item.squareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center text-[10px] tracking-widest font-light px-4 py-2.5 text-white transition-opacity duration-200 hover:opacity-80"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {d.shop.buy}
              </a>
            ) : (
              <span
                className="mt-auto text-center text-[10px] tracking-widest font-light px-4 py-2.5"
                style={{ backgroundColor: "var(--accent-light)", color: "var(--muted)" }}
              >
                {d.shop.comingSoon}
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="text-[10px] font-light" style={{ color: "var(--muted-light)" }}>
        {d.shop.note}
      </p>
    </div>
  );
}
