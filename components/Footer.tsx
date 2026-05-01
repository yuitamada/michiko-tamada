import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

type Props = { locale: Locale };

export default function Footer({ locale }: Props) {
  const d = getDict(locale);

  return (
    <footer className="mt-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-12 justify-between">

        <div>
          <p className="text-base font-medium tracking-widest">玉田美知子</p>
          <p className="text-xs tracking-widest mt-1 font-light" style={{ color: "var(--muted)" }}>
            {d.footer.role}
          </p>
          <div className="flex gap-5 mt-6">
            <a href="https://x.com/ubaukya" target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-widest font-light transition-colors duration-200 hover:opacity-60"
              style={{ color: "var(--muted)" }}>
              X
            </a>
            <a href="https://www.instagram.com/michiko_tamada/" target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-widest font-light transition-colors duration-200 hover:opacity-60"
              style={{ color: "var(--muted)" }}>
              Instagram
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          {[
            { label: d.nav.profile, href: `/${locale}/profile` },
            { label: d.nav.books, href: `/${locale}/books` },
            { label: d.nav.news, href: `/${locale}/news` },
            { label: d.nav.contact, href: `/${locale}/contact` },
          ].map(({ label, href }) => (
            <Link key={href} href={href}
              className="text-xs tracking-widest font-light transition-opacity duration-200 hover:opacity-60"
              style={{ color: "var(--muted)" }}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-10">
        <p className="text-[10px] tracking-widest font-light" style={{ color: "var(--muted-light)" }}>
          &copy; {new Date().getFullYear()} Michiko Tamada. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
