import { notFound } from "next/navigation";
import { type Locale, locales } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LangSetter } from "@/components/LangSetter";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <>
      <LangSetter locale={locale} />
      <Header locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  );
}
