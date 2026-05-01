export type Book = {
  slug: string;
  title: string;
  publishedAt: string;
  upcoming: boolean;
  publisher: string;
  price: number | null;
  isbn: string | null;
  coverImage: string;
  description: string;
  descriptionEn: string;
  awards: string[];
  tags: string[];
  links: {
    publisherPage?: string;
    specialSite?: string;
    amazon?: string;
  };
};

export const books: Book[] = [
  {
    slug: "gyoza-inakunari",
    title: "ぎょうざが いなくなり さがしています",
    publishedAt: "2023-08-31",
    upcoming: false,
    publisher: "講談社",
    price: 1650,
    isbn: "978-4-06-532042-6",
    coverImage: "/images/books/gyoza-inakunari.jpg",
    description:
      "「ほんじつ ごご２じごろ おおばまち にらやまの ぎょうざが いなくなり さがしています」――町の放送を聞いたとしおくんはびっくり。ぎょうざが消えた!? 一体なにがあったのか？ としおくんの想像が膨らむ、餃子愛に包まれたデビュー作。",
    descriptionEn:
      "An unexpected town announcement rings out: 'This afternoon, the gyoza from Nirayama, Oba-machi has gone missing.' Young Toshio is baffled — how can gyoza go missing? His imagination runs wild in this debut work brimming with gyoza-loving humor.",
    awards: [
      "第43回講談社絵本新人賞 受賞",
      "第16回MOE絵本屋さん大賞2023 新人賞 第3位",
      "第15回リブロ絵本大賞 入賞",
      "第15回ようちえん絵本大賞 受賞",
      "第8回未来屋えほん大賞 大賞",
      "第17回MOE絵本屋さん大賞2024 新人賞 第1位",
      "第1回みんなのよみきかせ絵本大賞（園児さんと先生でえらぶ！よみきかせ絵本部門）第3位",
    ],
    tags: ["3〜5歳", "ユーモア", "食べ物"],
    links: {
      publisherPage: "https://www.kodansha.co.jp/book/products/0000377277",
      specialSite: "https://cocreco.kodansha.co.jp/ehon/special/gyoza-i",
      amazon: "https://www.amazon.co.jp/dp/4065320429",
    },
  },
  {
    slug: "gyoza-tonari",
    title: "ぎょうざが となりに ひっこしてきました",
    publishedAt: "2025-06-30",
    upcoming: false,
    publisher: "講談社",
    price: 1650,
    isbn: "978-4-06-539426-7",
    coverImage: "/images/books/gyoza-tonari.jpg",
    description:
      "テンシンハイツの一室に引っ越してきたのはぎょうざさんでした。「はじめまして。となりに ひっこしてきた ぎょうざです」。週に1回テレビのコメンテーターとしても活躍していたぎょうざさんが、ある日からテレビにも出なくなり――。ぎょうざさんの行方と、謎の隣人の正体とは？",
    descriptionEn:
      "A mysterious new neighbor has moved into Tenshin Heights: 'Hello, I'm the gyoza who just moved in next door.' Once a regular TV commentator, the gyoza has suddenly vanished from screens. Where has the gyoza gone, and who is the mysterious neighbor?",
    awards: [],
    tags: ["3〜5歳", "ユーモア", "食べ物"],
    links: {
      publisherPage: "https://www.kodansha.co.jp/book/products/0000412714",
      specialSite: "https://cocreco.kodansha.co.jp/ehon/special/gyoza-i",
      amazon: "https://www.amazon.co.jp/dp/4065394260",
    },
  },
  {
    slug: "girigiri-onigiriizu",
    title: "ギリギリオニギリーズ",
    publishedAt: "2025-08-29",
    upcoming: false,
    publisher: "白泉社",
    price: 1430,
    isbn: "978-4-592-76376-5",
    coverImage: "/images/books/girigiri-onigiriizu.jpg",
    description:
      "「一見おにぎりに見えないけれど、じつはおにぎり」——そんなギリギリおにぎりを発掘するためのオーディションが開催される。てんむす、はんぺんのバター焼き、スパムむすびらが「ギリギリオニギリーズ」のメンバー選考に挑む、ユーモアたっぷりの写真絵本。紙粘土で制作された立体おにぎりをキッチンミノルさんが撮影。",
    descriptionEn:
      "An audition is held to find the greatest 'borderline onigiri' — rice balls that barely qualify as onigiri. Tenmasu, pan-fried hanpen, and spam musubi compete for membership in the 'Girigiri Onigiriizu' in this delightfully absurd photo picture book featuring clay-sculpted rice balls photographed by Kitchen Minoru.",
    awards: [
      "第18回MOE絵本屋さん大賞2025 第21位",
    ],
    tags: ["幼児〜小学低学年", "ユーモア", "食べ物", "写真絵本"],
    links: {
      publisherPage: "https://www.hakusensha.co.jp/booklist/75517/",
      amazon: "https://www.amazon.co.jp/dp/4592763769",
    },
  },
  {
    slug: "shiritori-kinchaku",
    title: "しりとりきんちゃく",
    publishedAt: "2026-05-13",
    upcoming: true,
    publisher: "KADOKAWA",
    price: 1815,
    isbn: "978-4-04-117230-8",
    coverImage: "/images/books/shiritori-kinchaku.jpg",
    description:
      "ふしぎなきんちゃくが「しりとり」でつながるものを次々と追いかけ、中に入れてしまう。あてっこも入った、楽しみながら言葉に興味を持てる読み聞かせユーモア絵本。",
    descriptionEn:
      "A mysterious drawstring pouch chases down anything connected by a shiritori word chain, swallowing them up one by one. A playful guessing-game picture book that sparks children's love of language.",
    awards: [],
    tags: ["幼児〜小学低学年", "言葉遊び", "ユーモア"],
    links: {
      publisherPage: "https://www.kadokawa.co.jp/product/322511000526/",
      amazon: "https://www.amazon.co.jp/dp/4041172306",
    },
  },
];
