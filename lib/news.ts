import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

const newsDir = path.join(process.cwd(), "data/news");

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  category: "news" | "event" | "media";
  content: string;
};

function parseContent(raw: string, locale: Locale): { title: string; content: string } {
  const { data, content } = matter(raw);
  const [jaContent, enContent] = content.split("<!-- en -->");
  return {
    title: locale === "en" && data.titleEn ? (data.titleEn as string) : (data.title as string),
    content: locale === "en" && enContent ? enContent.trim() : jaContent.trim(),
  };
}

export function getAllNews(locale: Locale = "ja"): NewsPost[] {
  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(newsDir, file), "utf-8");
      const { data } = matter(raw);
      const { title, content } = parseContent(raw, locale);
      return {
        slug: data.slug as string,
        title,
        date: data.date as string,
        category: data.category as NewsPost["category"],
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string, locale: Locale = "ja"): NewsPost | undefined {
  return getAllNews(locale).find((p) => p.slug === slug);
}
