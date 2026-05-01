import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://michiko-tamada.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "玉田美知子 絵本作家",
    template: "%s | 玉田美知子",
  },
  description: "絵本作家・玉田美知子の公式サイト。作品情報、プロフィール、イベント情報、お問い合わせ。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "玉田美知子 公式サイト",
    title: "玉田美知子 絵本作家",
    description: "絵本作家・玉田美知子の公式サイト。作品情報、プロフィール、イベント情報、お問い合わせ。",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ubaukya",
    creator: "@ubaukya",
  },
  alternates: {
    languages: {
      ja: "/ja",
      en: "/en",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${noto.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
