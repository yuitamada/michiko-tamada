export type Locale = "ja" | "en";
export const locales: Locale[] = ["ja", "en"];
export const defaultLocale: Locale = "ja";

const history = {
  ja: [
    { year: "1977年", text: "神奈川県生まれ" },
    { year: "2000年代", text: "多摩美術大学 立体デザイン専攻卒業" },
    { year: "2023年", text: "『ぎょうざが いなくなり さがしています』（講談社）でデビュー" },
    { year: "2025年", text: "『ぎょうざが となりに ひっこしてきました』（講談社）刊行" },
    { year: "2025年", text: "『ギリギリオニギリーズ』（白泉社）刊行" },
    { year: "2026年", text: "『しりとりきんちゃく』（KADOKAWA）刊行予定" },
  ],
  en: [
    { year: "1977", text: "Born in Kanagawa Prefecture" },
    { year: "2000s", text: "Graduated from Tama Art University, Department of Three-Dimensional Design" },
    { year: "2023", text: "Debuted with Gyoza ga Inakunari Sagashiteimasu (Kodansha)" },
    { year: "2025", text: "Published Gyoza ga Tonari ni Hikkoshite Kimashita (Kodansha)" },
    { year: "2025", text: "Published Girigiri Onigiriizu (Hakusensha)" },
    { year: "2026", text: "Shiritori Kinchaku (KADOKAWA), upcoming" },
  ],
};

const awards = {
  ja: [
    { year: "2020年", text: "第21回ピンポイント絵本コンペ 入選" },
    { year: "2021年", text: "第42回講談社絵本新人賞 佳作受賞" },
    { year: "2022年", text: "第43回講談社絵本新人賞 受賞" },
    { year: "2023年", text: "第16回MOE絵本屋さん大賞 新人賞 第3位（『ぎょうざが いなくなり さがしています』）" },
    { year: "2024年", text: "第15回リブロ絵本大賞 入賞" },
    { year: "2024年", text: "第15回ようちえん絵本大賞 受賞" },
    { year: "2024年", text: "第8回未来屋えほん大賞 大賞" },
    { year: "2024年", text: "第17回MOE絵本屋さん大賞 新人賞 第1位" },
    { year: "2025年", text: "第1回みんなのよみきかせ絵本大賞（園児さんと先生でえらぶ！よみきかせ絵本部門）第3位" },
  ],
  en: [
    { year: "2020", text: "21st Pinpoint Picture Book Competition, Selected Work" },
    { year: "2021", text: "42nd Kodansha Picture Book New Author Award, Honorable Mention" },
    { year: "2022", text: "43rd Kodansha Picture Book New Author Award, Winner" },
    { year: "2023", text: "16th MOE Bookstore Picture Book Award, New Author 3rd Place (Gyoza ga Inakunari…)" },
    { year: "2024", text: "15th Libro Picture Book Award, Selected" },
    { year: "2024", text: "15th Yochien Picture Book Grand Prize, Winner" },
    { year: "2024", text: "8th Miraiya Ehon Grand Prize, Winner" },
    { year: "2024", text: "17th MOE Bookstore Picture Book Award 2024, New Author 1st Place" },
    { year: "2025", text: "1st Minna no Yomikikase Ehon Award (Kids & Teachers' Read-Aloud Section), 3rd Place" },
  ],
};

const contactCategories = {
  ja: [
    "取材・インタビュー",
    "イベント・サイン会のご依頼",
    "講演・ワークショップのご依頼",
    "仕事のご依頼（絵本・イラストレーション）",
    "書店・図書館からのご連絡",
    "その他",
  ],
  en: [
    "Media Interview / Coverage",
    "Signing Event / Appearance Request",
    "Lecture / Workshop Request",
    "Work Inquiry (Picture Books / Illustration)",
    "Bookstore / Library Inquiry",
    "Other",
  ],
};

export const dict = {
  ja: {
    lang: "ja",
    nav: {
      profile: "プロフィール",
      books: "作品",
      news: "お知らせ",
      media: "メディア",
      events: "イベント",
      contact: "お問い合わせ",
    },
    footer: {
      role: "絵本作家",
    },
    home: {
      role: "絵本作家",
      tagline:
        "子育てが一段落してから絵本作家を志し、2023年にデビュー。ユーモアと驚きに満ちた物語で、子どもたちを笑顔にする絵本を作り続けています。",
      profileLink: "プロフィール",
      worksLink: "作品を見る",
      publishedSection: "刊行作品",
      allWorks: "全作品を見る →",
      upcomingSection: "近刊予定",
      upcomingBadge: (date: string) => `${date} 刊行予定`,
      newsSection: "お知らせ",
      allNews: "すべてのお知らせを見る →",
      snsText: "日々の制作の様子はSNSでも発信しています。",
    },
    profile: {
      section: "プロフィール",
      heading: "プロフィール",
      nameEn: "MICHIKO TAMADA",
      bio1: "神奈川県在住。多摩美術大学立体デザイン専攻卒業。子育てが一段落した後に絵本作家を志し、2023年に『ぎょうざが いなくなり さがしています』（講談社）でデビュー。ユーモアあふれる設定と、子どもが思わず笑ってしまうような展開で、多くの読者に親しまれている。",
      bio2: "デビュー作は講談社絵本新人賞・ようちえん絵本大賞・未来屋えほん大賞・MOE絵本屋さん大賞新人賞1位など多数の賞を受賞。現在も年に1〜2作のペースで刊行を続けている。",
      historyHeading: "略歴",
      awardsHeading: "受賞歴",
      history: history.ja,
      awards: awards.ja,
      inquiryHeading: "取材・仕事のご依頼",
      inquiryText: "取材・サイン会・講演・ワークショップ・教育機関向けイベントなどのご依頼は、",
      inquiryLink: "お問い合わせフォーム",
      inquiryTextAfter: "よりご連絡ください。",
    },
    books: {
      section: "作品",
      heading: "作品一覧",
      published: "刊行済み",
      upcoming: "近刊予定",
      upcomingBadge: (date: string) => `${date} 刊行予定`,
      by: "著",
      publishDate: "刊行日",
      publishScheduled: "刊行予定",
      price: "定価",
      isbn: "ISBN",
      synopsis: "あらすじ",
      awards: "受賞・選出",
      links: "リンク",
      specialSite: "公式特設サイト ↗",
      publisherPage: "出版社ページ ↗",
      amazon: "Amazon ↗",
      back: "← 作品一覧に戻る",
    },
    news: {
      section: "お知らせ",
      heading: "お知らせ",
      categories: { news: "お知らせ", event: "イベント", media: "メディア" },
      back: "← お知らせ一覧に戻る",
    },
    media: {
      section: "メディア",
      heading: "メディア掲載",
      types: { interview: "インタビュー", review: "書評", feature: "特集", tv: "テレビ", radio: "ラジオ" },
    },
    events: {
      section: "イベント",
      heading: "イベント情報",
      upcoming: "開催予定",
      past: "過去のイベント",
      types: { signing: "サイン会", reading: "読み聞かせ", exhibition: "展示", workshop: "ワークショップ", talk: "トーク" },
    },
    contact: {
      section: "お問い合わせ",
      heading: "お問い合わせ",
      intro:
        "取材・イベント・仕事のご依頼など、お気軽にご連絡ください。内容を確認のうえ、担当者よりご返信いたします。通常3〜5営業日以内にご返信しておりますが、お急ぎの場合はその旨をご記入ください。",
      name: "お名前",
      org: "所属・会社名",
      email: "メールアドレス",
      category: "お問い合わせの種類",
      categoryPlaceholder: "選択してください",
      message: "お問い合わせ内容",
      messagePlaceholder: "ご依頼の詳細、希望日時などをご記入ください。",
      privacy:
        "ご入力いただいた個人情報は、お問い合わせへの返信のみに使用し、第三者への提供は行いません。",
      submit: "送信する",
      categories: contactCategories.ja,
    },
    notFound: {
      code: "404",
      heading: "ページが見つかりません",
      text: "お探しのページは存在しないか、移動した可能性があります。",
      back: "トップページへ戻る",
    },
  },
  en: {
    lang: "en",
    nav: {
      profile: "Profile",
      books: "Works",
      news: "News",
      media: "Media",
      events: "Events",
      contact: "Contact",
    },
    footer: {
      role: "Picture Book Author",
    },
    home: {
      role: "PICTURE BOOK AUTHOR",
      tagline:
        "After raising her children, Michiko Tamada pursued her lifelong dream of becoming a picture book author, debuting in 2023. She creates books filled with humor and surprise that bring smiles to children everywhere.",
      profileLink: "Profile",
      worksLink: "View Works",
      publishedSection: "PUBLISHED WORKS",
      allWorks: "All Works →",
      upcomingSection: "UPCOMING",
      upcomingBadge: (date: string) => `Coming ${date}`,
      newsSection: "NEWS",
      allNews: "All News →",
      snsText: "Follow along for daily updates on her creative process.",
    },
    profile: {
      section: "PROFILE",
      heading: "Profile",
      nameEn: "MICHIKO TAMADA",
      bio1:
        "Based in Kanagawa, Japan. Graduated from Tama Art University, Department of Three-Dimensional Design. After raising her children, she pursued her dream of becoming a picture book author and debuted in 2023 with Gyoza ga Inakunari Sagashiteimasu (Kodansha). Her books are beloved for their humor-filled setups and unexpected twists that make children laugh.",
      bio2:
        "Her debut work received numerous awards including the Kodansha Picture Book New Author Award, the Yochien Picture Book Grand Prize, the Miraiya Ehon Grand Prize, and 1st place in the MOE Bookstore Picture Book Award New Author category. She continues to publish one to two books per year.",
      historyHeading: "Career",
      awardsHeading: "Awards",
      history: history.en,
      awards: awards.en,
      inquiryHeading: "Media & Work Inquiries",
      inquiryText:
        "For media interviews, signing events, lectures, workshops, and educational events, please use the ",
      inquiryLink: "contact form",
      inquiryTextAfter: ".",
    },
    books: {
      section: "WORKS",
      heading: "Works",
      published: "Published",
      upcoming: "Upcoming",
      upcomingBadge: (date: string) => `Coming ${date}`,
      by: "by Michiko Tamada",
      publishDate: "Published",
      publishScheduled: "Expected",
      price: "Price",
      isbn: "ISBN",
      synopsis: "Synopsis",
      awards: "Awards",
      links: "Links",
      specialSite: "Official Site ↗",
      publisherPage: "Publisher Page ↗",
      amazon: "Amazon ↗",
      back: "← Back to Works",
    },
    news: {
      section: "NEWS",
      heading: "News",
      categories: { news: "News", event: "Event", media: "Media" },
      back: "← Back to News",
    },
    media: {
      section: "MEDIA",
      heading: "Media Coverage",
      types: { interview: "Interview", review: "Review", feature: "Feature", tv: "TV", radio: "Radio" },
    },
    events: {
      section: "EVENTS",
      heading: "Events",
      upcoming: "Upcoming",
      past: "Past Events",
      types: { signing: "Signing", reading: "Read-Aloud", exhibition: "Exhibition", workshop: "Workshop", talk: "Talk" },
    },
    contact: {
      section: "CONTACT",
      heading: "Contact",
      intro:
        "For media interviews, events, and work inquiries, please fill out the form below. We will respond within 3–5 business days. Please indicate urgency if needed.",
      name: "Name",
      org: "Organization / Company",
      email: "Email Address",
      category: "Inquiry Type",
      categoryPlaceholder: "Please select",
      message: "Message",
      messagePlaceholder: "Please describe your request, including preferred dates if applicable.",
      privacy:
        "Personal information submitted will only be used to respond to your inquiry and will not be shared with third parties.",
      submit: "Send",
      categories: contactCategories.en,
    },
    notFound: {
      code: "404",
      heading: "Page Not Found",
      text: "The page you are looking for does not exist or may have moved.",
      back: "Back to Top",
    },
  },
} as const;

export type Dict = (typeof dict)["ja"];

export function getDict(locale: Locale): Dict {
  return dict[locale] as unknown as Dict;
}
