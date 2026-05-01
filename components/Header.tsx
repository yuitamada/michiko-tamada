"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

type Props = { locale: Locale };

export default function Header({ locale }: Props) {
  const d = getDict(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === "ja" ? "en" : "ja";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const isTop = pathname === `/${locale}`;

  const nav = [
    { label: d.nav.profile, href: `/${locale}/profile` },
    { label: d.nav.books, href: `/${locale}/books` },
    { label: d.nav.news, href: `/${locale}/news` },
    { label: d.nav.media, href: `/${locale}/media` },
    { label: d.nav.events, href: `/${locale}/events` },
    { label: d.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header style={{ backgroundColor: "var(--cream)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo — トップページでは非表示 */}
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
        <nav className="hidden md:flex items-center gap-10">
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

          <Link
            href={otherPath}
            className="text-[10px] tracking-[0.2em] font-light px-3 py-1.5 transition-colors duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent-light)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {otherLocale.toUpperCase()}
          </Link>
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
          <Link
            href={otherPath}
            onClick={() => setOpen(false)}
            className="block px-8 py-4 text-[10px] tracking-[0.2em]"
            style={{ color: "var(--muted)" }}
          >
            {otherLocale.toUpperCase()} — Switch Language
          </Link>
        </div>
      )}
    </header>
  );
}
