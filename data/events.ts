export type EventItem = {
  date: string;
  endDate?: string;
  title: string;
  titleEn: string;
  venue: string;
  venueEn: string;
  location: string;
  locationEn: string;
  type: "signing" | "reading" | "exhibition" | "workshop" | "talk";
  url?: string;
  upcoming?: boolean;
};

export const eventItems: EventItem[] = [
  {
    date: "2026-06-07",
    title: "『しりとりきんちゃく』刊行記念サイン会",
    titleEn: "Shiritori Kinchaku Launch Signing Event",
    venue: "紀伊國屋書店 新宿本店",
    venueEn: "Kinokuniya Shinjuku Main Store",
    location: "東京都新宿区",
    locationEn: "Shinjuku, Tokyo",
    type: "signing",
    upcoming: true,
  },
  {
    date: "2025-11-23",
    title: "読み聞かせ会 in 横浜",
    titleEn: "Read-Aloud Event in Yokohama",
    venue: "横浜市中央図書館",
    venueEn: "Yokohama City Central Library",
    location: "神奈川県横浜市",
    locationEn: "Yokohama, Kanagawa",
    type: "reading",
  },
  {
    date: "2025-09-14",
    title: "ぎょうざシリーズ2冊刊行記念サイン会",
    titleEn: "Gyoza Series 2-Book Launch Signing",
    venue: "丸善・丸の内本店",
    venueEn: "Maruzen Marunouchi Main Store",
    location: "東京都千代田区",
    locationEn: "Chiyoda, Tokyo",
    type: "signing",
  },
  {
    date: "2025-07-19",
    title: "夏の絵本フェア 作家トーク",
    titleEn: "Summer Picture Book Fair Author Talk",
    venue: "くまざわ書店 武蔵小杉店",
    venueEn: "Kumazawa Bookstore Musashi-Kosugi",
    location: "神奈川県川崎市",
    locationEn: "Kawasaki, Kanagawa",
    type: "talk",
  },
  {
    date: "2025-04-05",
    title: "春の読み聞かせ会",
    titleEn: "Spring Read-Aloud Session",
    venue: "世田谷区立図書館",
    venueEn: "Setagaya City Library",
    location: "東京都世田谷区",
    locationEn: "Setagaya, Tokyo",
    type: "reading",
  },
  {
    date: "2024-12-14",
    title: "クリスマス絵本フェアサイン会",
    titleEn: "Christmas Picture Book Fair Signing",
    venue: "ブックファースト新宿店",
    venueEn: "Book First Shinjuku",
    location: "東京都新宿区",
    locationEn: "Shinjuku, Tokyo",
    type: "signing",
  },
  {
    date: "2024-08-24",
    title: "夏休み絵本ワークショップ",
    titleEn: "Summer Vacation Picture Book Workshop",
    venue: "川崎市立図書館",
    venueEn: "Kawasaki City Library",
    location: "神奈川県川崎市",
    locationEn: "Kawasaki, Kanagawa",
    type: "workshop",
  },
  {
    date: "2024-04-20",
    title: "TSUTAYA×ぎょうざ原画展",
    titleEn: "TSUTAYA × Gyoza Original Art Exhibition",
    venue: "TSUTAYA BOOKSTORE 六本木",
    venueEn: "TSUTAYA BOOKSTORE Roppongi",
    location: "東京都港区",
    locationEn: "Minato, Tokyo",
    type: "exhibition",
  },
];
