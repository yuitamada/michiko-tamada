export type MediaItem = {
  date: string;
  outlet: string;
  outletEn: string;
  title: string;
  titleEn: string;
  type: "interview" | "review" | "feature" | "tv" | "radio";
  url?: string;
};

export const mediaItems: MediaItem[] = [
  {
    date: "2025-03-01",
    outlet: "MOE（白泉社）",
    outletEn: "MOE (Hakusensha)",
    title: "第17回MOE絵本屋さん大賞2024 新人賞1位 インタビュー",
    titleEn: "17th MOE Bookstore Picture Book Award 2024 — New Author 1st Place Interview",
    type: "interview",
  },
  {
    date: "2025-01-15",
    outlet: "NHK Eテレ「いないいないばあっ！」",
    outletEn: "NHK E-Tele Inalnaibaa!",
    title: "絵本紹介コーナー「ぎょうざが いなくなり さがしています」",
    titleEn: "Picture Book Spotlight: Gyoza ga Inakunari Sagashiteimasu",
    type: "tv",
  },
  {
    date: "2024-11-10",
    outlet: "PHP研究所「母の友」",
    outletEn: "Haha no Tomo (PHP)",
    title: "絵本作家インタビュー「笑いで子どもを包む絵本」",
    titleEn: "Author Interview: Picture Books That Wrap Children in Laughter",
    type: "interview",
  },
  {
    date: "2024-09-20",
    outlet: "朝日新聞",
    outletEn: "Asahi Shimbun",
    title: "絵本レビュー「ぎょうざが となりに ひっこしてきました」",
    titleEn: "Book Review: Gyoza ga Tonari ni Hikkoshite Kimashita",
    type: "review",
  },
  {
    date: "2024-07-01",
    outlet: "こどもの本棚（全国学校図書館協議会）",
    outletEn: "Kodomo no Hondana (NSLA)",
    title: "2024年夏のおすすめ絵本 特集",
    titleEn: "Summer 2024 Recommended Picture Books Feature",
    type: "feature",
  },
  {
    date: "2024-05-15",
    outlet: "ほんのひきだし",
    outletEn: "Honnohikidashi",
    title: "玉田美知子インタビュー「ユーモアの源泉」",
    titleEn: "Michiko Tamada Interview: The Source of Humor",
    type: "interview",
  },
  {
    date: "2024-03-03",
    outlet: "絵本ナビ",
    outletEn: "Ehonnavi",
    title: "作家特集・玉田美知子さんの絵本の世界",
    titleEn: "Author Feature: The Picture Book World of Michiko Tamada",
    type: "feature",
    url: "https://www.ehonnavi.net/author.asp?n=95745",
  },
];
