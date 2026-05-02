export type Book = {
  slug: string;
  title: string;
  publishedAt: string;
  upcoming: boolean;
  publisher: string;
  price: number | null;
  isbn: string | null;
  coverImage: string;
  descriptions: Record<string, string>;
  awards: Record<string, string[]>;
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
    descriptions: {
      ja: "「ほんじつ ごご２じごろ おおばまち にらやまの ぎょうざが いなくなり さがしています」――町の放送を聞いたとしおくんはびっくり。ぎょうざが消えた!? 一体なにがあったのか？ としおくんの想像が膨らむ、餃子愛に包まれたデビュー作。",
      en: "An unexpected town announcement rings out: 'This afternoon, the gyoza from Nirayama, Oba-machi has gone missing.' Young Toshio is baffled — how can gyoza go missing? His imagination runs wild in this debut work brimming with gyoza-loving humor.",
      zh: "镇上广播突然响起：「今日下午两点左右，大庭町韭山的饺子不见了，正在寻找中」——听到广播的俊雄吓了一跳。饺子不见了!? 到底发生了什么？俊雄的想象越来越丰富，这是一部充满饺子情怀的出道之作。",
      tw: "鎮上廣播突然響起：「今日下午兩點左右，大庭町韭山的餃子不見了，正在尋找中」——聽到廣播的俊雄嚇了一跳。餃子不見了!? 到底發生了什麼？俊雄的想像越來越豐富，這是一部充滿餃子情懷的出道之作。",
      ko: "마을 방송이 울려 퍼집니다: '오늘 오후 2시경, 오바마치 니라야마의 교자가 사라졌습니다. 찾고 있습니다.' 방송을 들은 토시오는 깜짝 놀랐습니다. 교자가 사라졌다고?! 토시오의 상상이 부풀어 오르는, 교자 사랑으로 가득한 데뷔작.",
      es: "Un inesperado anuncio municipal resuena: '¡Esta tarde el gyoza de Nirayama, Oba-machi ha desaparecido!' El pequeño Toshio queda boquiabierto — ¿cómo puede desaparecer un gyoza? Su imaginación vuela en esta obra debut rebosante de humor y amor por los gyoza.",
      vi: "Một thông báo bất ngờ vang lên trên loa phường: 'Chiều nay khoảng 2 giờ, gyoza từ Nirayama, Oba-machi đã mất tích.' Bé Toshio ngạc nhiên — gyoza mà cũng mất tích được sao? Trí tưởng tượng của bé bay bổng trong tác phẩm đầu tay tràn đầy tình yêu với gyoza này.",
    },
    awards: {
      ja: [
        "第43回講談社絵本新人賞 受賞",
        "第16回MOE絵本屋さん大賞2023 新人賞 第3位",
        "第15回リブロ絵本大賞 入賞",
        "第15回ようちえん絵本大賞 受賞",
        "第8回未来屋えほん大賞 大賞",
        "第17回MOE絵本屋さん大賞2024 新人賞 第1位",
        "第1回みんなのよみきかせ絵本大賞（園児さんと先生でえらぶ！よみきかせ絵本部門）第3位",
      ],
      en: [
        "43rd Kodansha Picture Book New Author Award, Winner",
        "16th MOE Bookstore Picture Book Award 2023, New Author 3rd Place",
        "15th Libro Picture Book Award, Selected",
        "15th Yochien Picture Book Grand Prize, Winner",
        "8th Miraiya Ehon Grand Prize, Winner",
        "17th MOE Bookstore Picture Book Award 2024, New Author 1st Place",
        "1st Minna no Yomikikase Ehon Award, 3rd Place",
      ],
      zh: [
        "第43届讲谈社绘本新人奖 获奖",
        "第16届MOE绘本书店大奖2023 新人奖第3位",
        "第15届Libro绘本大奖 入选",
        "第15届幼儿园绘本大奖 获奖",
        "第8届未来屋绘本大奖 大奖",
        "第17届MOE绘本书店大奖2024 新人奖第1位",
        "第1届大家的读绘本大奖 第3位",
      ],
      tw: [
        "第43屆講談社繪本新人獎 獲獎",
        "第16屆MOE繪本書店大獎2023 新人獎第3位",
        "第15屆Libro繪本大獎 入選",
        "第15屆幼稚園繪本大獎 獲獎",
        "第8屆未來屋繪本大獎 大獎",
        "第17屆MOE繪本書店大獎2024 新人獎第1位",
        "第1屆大家的讀繪本大獎 第3位",
      ],
      ko: [
        "제43회 코단샤 그림책 신인상 수상",
        "제16회 MOE 그림책 서점 대상 2023 신인상 3위",
        "제15회 Libro 그림책 대상 입선",
        "제15회 유치원 그림책 대상 수상",
        "제8회 미라이야 그림책 대상 대상",
        "제17회 MOE 그림책 서점 대상 2024 신인상 1위",
        "제1회 모두의 그림책 읽어주기 대상 3위",
      ],
      es: [
        "43.º Premio Nuevos Autores Kodansha, Ganadora",
        "16.º Premio de Librería MOE 2023, Nuevos Autores 3.er Lugar",
        "15.º Premio de Álbum Ilustrado Libro, Seleccionada",
        "15.º Gran Premio Yochien, Ganadora",
        "8.º Gran Premio Miraiya, Gran Premio",
        "17.º Premio de Librería MOE 2024, Nuevos Autores 1.er Lugar",
        "1.º Premio de Lectura en Voz Alta, 3.er Lugar",
      ],
      vi: [
        "Giải Tác giả mới Kodansha lần thứ 43, Người chiến thắng",
        "Giải Nhà sách MOE lần thứ 16 năm 2023, Tác giả mới hạng 3",
        "Giải Libro lần thứ 15, Được chọn",
        "Giải Yochien lần thứ 15, Người chiến thắng",
        "Giải Miraiya lần thứ 8, Giải lớn",
        "Giải Nhà sách MOE lần thứ 17 năm 2024, Tác giả mới hạng 1",
        "Giải Đọc to lần thứ 1, Hạng 3",
      ],
    },
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
    descriptions: {
      ja: "テンシンハイツの一室に引っ越してきたのはぎょうざさんでした。「はじめまして。となりに ひっこしてきた ぎょうざです」。週に1回テレビのコメンテーターとしても活躍していたぎょうざさんが、ある日からテレビにも出なくなり――。ぎょうざさんの行方と、謎の隣人の正体とは？",
      en: "A mysterious new neighbor has moved into Tenshin Heights: 'Hello, I'm the gyoza who just moved in next door.' Once a regular TV commentator, the gyoza has suddenly vanished from screens. Where has the gyoza gone, and who is the mysterious neighbor?",
      zh: "搬进天心公寓的新邻居，竟然是一个饺子。「你好，我是刚搬来隔壁的饺子。」曾经每周在电视上担任评论员的饺子先生，突然有一天从荧幕上消失了——饺子先生去哪里了？神秘邻居的真面目究竟是什么？",
      tw: "搬進天心公寓的新鄰居，竟然是一個餃子。「你好，我是剛搬來隔壁的餃子。」曾經每週在電視上擔任評論員的餃子先生，突然有一天從螢幕上消失了——餃子先生去哪裡了？神秘鄰居的真面目究竟是什麼？",
      ko: "텐신하이츠에 이사 온 새 이웃은 놀랍게도 교자였습니다. '처음 뵙겠습니다. 옆집에 이사 온 교자입니다.' 매주 텔레비전 코멘테이터로 활약하던 교자씨가 어느 날 갑자기 방송에도 나오지 않게 되었습니다. 교자씨는 어디로 갔을까요? 수수께끼 이웃의 정체는?",
      es: "El misterioso nuevo vecino que se mudó al Tenshin Heights resultó ser un gyoza. '¡Hola, soy el gyoza que acaba de mudarse a la puerta de al lado!' El gyoza, que solía comentar en televisión semanalmente, de repente dejó de aparecer en pantalla. ¿A dónde fue? ¿Y quién es el misterioso vecino?",
      vi: "Người hàng xóm mới dọn vào Tenshin Heights thật ra là một chiếc gyoza. 'Xin chào, tôi là gyoza vừa dọn đến ở bên cạnh.' Gyoza vốn thường xuất hiện trên truyền hình với tư cách bình luận viên, nhưng bỗng một ngày biến mất khỏi màn ảnh. Gyoza đã đi đâu? Và danh tính thật sự của người hàng xóm bí ẩn là gì?",
    },
    awards: { ja: [], en: [], zh: [], tw: [], ko: [], es: [], vi: [] },
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
    descriptions: {
      ja: "「一見おにぎりに見えないけれど、じつはおにぎり」——そんなギリギリおにぎりを発掘するためのオーディションが開催される。てんむす、はんぺんのバター焼き、スパムむすびらが「ギリギリオニギリーズ」のメンバー選考に挑む、ユーモアたっぷりの写真絵本。紙粘土で制作された立体おにぎりをキッチンミノルさんが撮影。",
      en: "An audition is held to find the greatest 'borderline onigiri' — rice balls that barely qualify as onigiri. Tenmasu, pan-fried hanpen, and spam musubi compete for membership in the 'Girigiri Onigiriizu' in this delightfully absurd photo picture book featuring clay-sculpted rice balls photographed by Kitchen Minoru.",
      zh: "「乍看之下不像饭团，但其实就是饭团」——为了发掘这样的「极限饭团」，一场选秀会开幕了。天妇罗饭团、煎汉堡鱼饼饭团、午餐肉饭团等纷纷挑战「极限饭团团」的成员资格。这是一本充满幽默的写真绘本，由Kitchen Minoru拍摄用纸粘土制作的立体饭团。",
      tw: "「乍看之下不像飯糰，但其實就是飯糰」——為了發掘這樣的「極限飯糰」，一場選秀會開幕了。天婦羅飯糰、煎漢堡魚餅飯糰、午餐肉飯糰等紛紛挑戰「極限飯糰團」的成員資格。這是一本充滿幽默的寫真繪本，由Kitchen Minoru拍攝用紙黏土製作的立體飯糰。",
      ko: "'얼핏 보면 오니기리처럼 보이지 않지만, 사실은 오니기리'인 극한의 주먹밥을 발굴하기 위한 오디션이 열립니다. 텐무스, 버터구이 한펜, 스팸 무스비 등이 '기리기리 오니기리즈' 멤버 선발에 도전합니다. 키친 미노루가 찍은 점토로 만든 입체 주먹밥을 담은 유머 넘치는 사진 그림책.",
      es: "Se organiza una audición para encontrar el mayor 'onigiri al límite'. Tenmasu, hanpen a la mantequilla y spam musubi compiten por ser miembros de los 'Girigiri Onigiriizu' en este absurdo y encantador libro de fotografías con onigiri de arcilla fotografiados por Kitchen Minoru.",
      vi: "Một buổi tuyển chọn được tổ chức để tìm kiếm 'onigiri giới hạn'. Tenmasu, hanpen chiên bơ và spam musubi cạnh tranh để trở thành thành viên 'Girigiri Onigiriizu' trong cuốn sách ảnh hài hước với những onigiri nặn bằng đất sét do Kitchen Minoru chụp.",
    },
    awards: {
      ja: ["第18回MOE絵本屋さん大賞2025 第21位"],
      en: ["18th MOE Bookstore Picture Book Award 2025, 21st Place"],
      zh: ["第18届MOE绘本书店大奖2025 第21位"],
      tw: ["第18屆MOE繪本書店大獎2025 第21位"],
      ko: ["제18회 MOE 그림책 서점 대상 2025 21위"],
      es: ["18.º Premio de Librería MOE 2025, 21.er Lugar"],
      vi: ["Giải Nhà sách MOE lần thứ 18 năm 2025, Hạng 21"],
    },
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
    descriptions: {
      ja: "ふしぎなきんちゃくが「しりとり」でつながるものを次々と追いかけ、中に入れてしまう。あてっこも入った、楽しみながら言葉に興味を持てる読み聞かせユーモア絵本。",
      en: "A mysterious drawstring pouch chases down anything connected by a shiritori word chain, swallowing them up one by one. A playful guessing-game picture book that sparks children's love of language.",
      zh: "一只神奇的束口袋不断追逐着用「接龙游戏」连接的东西，把它们一一收进去。充满猜谜乐趣、让孩子在游戏中爱上语言的幽默读绘本。",
      tw: "一只神奇的束口袋不斷追逐著用「接龍遊戲」連接的東西，把它們一一收進去。充滿猜謎樂趣、讓孩子在遊戲中愛上語言的幽默讀繪本。",
      ko: "신비로운 복주머니가 '끝말잇기'로 연결되는 것들을 하나씩 쫓아가 안에 넣어버립니다. 맞추는 재미도 있는, 언어에 흥미를 가질 수 있는 즐거운 읽어주기 유머 그림책.",
      es: "Una misteriosa bolsa con cordón persigue todo lo conectado por una cadena de palabras shiritori, tragándoselos uno por uno. Un divertido libro ilustrado de adivinanzas que despierta el amor de los niños por el lenguaje.",
      vi: "Một chiếc túi rút dây bí ẩn liên tục đuổi theo những thứ được kết nối bởi trò chơi nối đuôi chữ shiritori, nuốt chửng chúng từng cái một. Cuốn sách tranh hài hước giúp trẻ em yêu thích ngôn ngữ qua trò chơi đoán chữ.",
    },
    awards: { ja: [], en: [], zh: [], tw: [], ko: [], es: [], vi: [] },
    tags: ["幼児〜小学低学年", "言葉遊び", "ユーモア"],
    links: {
      publisherPage: "https://www.kadokawa.co.jp/product/322511000526/",
      amazon: "https://www.amazon.co.jp/dp/4041172306",
    },
  },
];
