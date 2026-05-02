"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { locales, getDict } from "@/lib/i18n";

type Props = { locale: Locale };

const langLabels: Record<string, string> = {
  ja: "日本語", en: "English", zh: "简体中文", tw: "繁體中文",
  ko: "한국어", es: "Español", vi: "Tiếng Việt",
};
const langShort: Record<string, string> = {
  ja: "JP", en: "EN", zh: "简", tw: "繁", ko: "KO", es: "ES", vi: "VI",
};

export default function Header({ locale }: Props) {
  const d = getDict(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const isTop = pathname === `/${locale}`;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const getLocalePath = (target: string) =>
    pathname.replace(`/${locale}`, `/${target}`);

  const nav = [
    { label: d.nav.profile, href: `/${locale}/profile` },
    { label: d.nav.books, href: `/${locale}/books` },
    { label: d.nav.news, href: `/${locale}/news` },
    { label: d.nav.media, href: `/${locale}/media` },
    { label: d.nav.events, href: `/${locale}/events` },
    { label: d.nav.shop, href: `/${locale}/shop` },
    { label: d.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header style={{ backgroundColor: "var(--cream)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        {isTop ? (
          <div />
        ) : (
          <Link href={`/${locale}`} className="flex flex-col justify-center gap-0.5">
            <span className="text-[10px] tracking-[0.2em] font-light" style={{ color: "var(--muted)" }}>
              MICHIKO TAMADA
            </span>
            <span className="text-base font-medium tracking-widest leading-none">玉田美知子</span>
          </Link>
        )}

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(({ label, href }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="text-xs tracking-widest font-light transition-colors duration-200"
                style={{ color: active ? "var(--accent)" : "var(--muted)" }}
              >
                {label}
                {active && (
                  <span className="block h-px mt-0.5" style={{ backgroundColor: "var(--accent)" }} />
                )}
              </Link>
            );
          })}

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-[10px] tracking-[0.2em] font-light px-3 py-1.5 transition-colors duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              {langShort[locale]}
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-1 w-36 z-50"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}
              >
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={getLocalePath(l)}
                    onClick={() => setLangOpen(false)}
                    className="block px-4 py-2.5 text-[10px] tracking-widest font-light transition-opacity duration-200 hover:opacity-60"
                    style={{
                      color: l === locale ? "var(--accent)" : "var(--muted)",
                      borderBottom: "1px solid var(--border-light)",
                      backgroundColor: l === locale ? "var(--accent-light)" : "transparent",
                    }}
                  >
                    {langLabels[l]}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className="block w-5 h-px transition-all" style={{ backgroundColor: "var(--ink)" }} />
          <span className="block w-5 h-px transition-all" style={{ backgroundColor: "var(--ink)" }} />
          <span className="block w-4 h-px transition-all" style={{ backgroundColor: "var(--ink)" }} />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--cream)" }}>
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-8 py-4 text-xs tracking-widest font-light"
              style={{
                borderBottom: "1px solid var(--border-light)",
                color: pathname.startsWith(href) ? "var(--accent)" : "var(--ink)",
              }}
            >
              {label}
            </Link>
          ))}
          {/* Language selector */}
          <div className="px-8 py-4">
            <p className="text-[9px] tracking-widest font-light mb-3" style={{ color: "var(--muted-light)" }}>
              LANGUAGE
            </p>
            <div className="flex flex-wrap gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={getLocalePath(l)}
                  onClick={() => setOpen(false)}
                  className="text-[10px] tracking-widest font-light px-2.5 py-1"
                  style={{
                    border: "1px solid var(--border)",
                    color: l === locale ? "var(--accent)" : "var(--muted)",
                    backgroundColor: l === locale ? "var(--accent-light)" : "transparent",
                  }}
                >
                  {langShort[l]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
