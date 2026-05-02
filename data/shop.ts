export type ShopItem = {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  description: string;
  descriptionEn: string;
  image: string;
  squareUrl: string | null;
  available: boolean;
};

export const shopItems: ShopItem[] = [
  {
    id: "acrylic-keychain",
    name: "アクリルキーホルダー",
    nameEn: "Acrylic Keychain",
    price: 800,
    description: "ぎょうざキャラクターのアクリルキーホルダー。",
    descriptionEn: "Acrylic keychain featuring the gyoza character.",
    image: "/images/shop/acrylic-keychain.jpg",
    squareUrl: null,
    available: true,
  },
  {
    id: "tenugui",
    name: "手ぬぐい",
    nameEn: "Tenugui Hand Towel",
    price: 1200,
    description: "玉田美知子オリジナルデザインの手ぬぐい。",
    descriptionEn: "Traditional Japanese hand towel with original Michiko Tamada design.",
    image: "/images/shop/tenugui.jpg",
    squareUrl: null,
    available: true,
  },
  {
    id: "badge",
    name: "バッヂ",
    nameEn: "Badge / Pin",
    price: 400,
    description: "ぎょうざキャラクターのアイコンバッヂ。",
    descriptionEn: "Icon badge featuring the gyoza character.",
    image: "/images/shop/badge.jpg",
    squareUrl: null,
    available: true,
  },
  {
    id: "postcard",
    name: "ポストカード",
    nameEn: "Postcard",
    price: 200,
    description: "作品のイラストを使ったポストカードセット。",
    descriptionEn: "Postcard set featuring illustrations from the books.",
    image: "/images/shop/postcard.jpg",
    squareUrl: null,
    available: true,
  },
];
