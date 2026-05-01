import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { books } from "@/data/books/books";
import { getAllNews } from "@/lib/news";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://michiko-tamada.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({ url: `${baseUrl}/${locale}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 });
    routes.push({ url: `${baseUrl}/${locale}/profile`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 });
    routes.push({ url: `${baseUrl}/${locale}/books`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 });
    routes.push({ url: `${baseUrl}/${locale}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 });
    routes.push({ url: `${baseUrl}/${locale}/media`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 });
    routes.push({ url: `${baseUrl}/${locale}/events`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 });
    routes.push({ url: `${baseUrl}/${locale}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 });

    for (const book of books) {
      routes.push({ url: `${baseUrl}/${locale}/books/${book.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 });
    }

    for (const post of getAllNews(locale)) {
      routes.push({ url: `${baseUrl}/${locale}/news/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "never", priority: 0.5 });
    }
  }

  return routes;
}
