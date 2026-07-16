export type BestPickCategory =
  | "all"
  | "feeding"
  | "skincare"
  | "breastfeeding"
  | "cleaning"
  | "diaper"
  | "bath"
  | "health"
  | "accessories";

export interface BestPickProduct {
  id: string;
  category: BestPickCategory;
  name: string;
  image: string;
  highlights: string[];
  shopeeUrl: string;
  tiktokUrl: string;
}

export interface BestPickCategoryMeta {
  id: BestPickCategory;
  label: string;
  emoji: string;
  description: string;
}

export const bestPickCategories: BestPickCategoryMeta[] = [
  {
    id: "all",
    label: "Tất cả",
    emoji: "🌟",
    description: "Toàn bộ sản phẩm Mẹ Gấu tin dùng",
  },
  {
    id: "feeding",
    label: "Ăn dặm",
    emoji: "🥣",
    description: "Dụng cụ ăn dặm an toàn, tiện lợi cho bé",
  },
  {
    id: "skincare",
    label: "Skincare & Chăm sóc",
    emoji: "🧴",
    description: "Chăm sóc làn da nhạy cảm của bé",
  },
  {
    id: "breastfeeding",
    label: "Sữa mẹ",
    emoji: "🤱",
    description: "Hỗ trợ hành trình nuôi con bằng sữa mẹ",
  },
  {
    id: "cleaning",
    label: "Tẩy rửa & Vệ sinh",
    emoji: "🫧",
    description: "Vệ sinh sạch sẽ, an toàn cho bé yêu",
  },
  {
    id: "diaper",
    label: "Bỉm tã",
    emoji: "👶",
    description: "Bỉm thấm hút, êm ái suốt ngày đêm",
  },
  {
    id: "bath",
    label: "Tắm & Vải",
    emoji: "🛁",
    description: "Mềm mại, an toàn cho bé từ sơ sinh",
  },
  {
    id: "health",
    label: "Sức khoẻ",
    emoji: "🩺",
    description: "Dụng cụ chăm sóc sức khoẻ cho bé",
  },
  {
    id: "accessories",
    label: "Phụ kiện",
    emoji: "🧸",
    description: "Đồ dùng tiện ích cho cả mẹ và bé",
  },
];

export const bestPickProducts: BestPickProduct[] = [
  // ─── ĂN DẶM ───
  {
    id: "cocobeat-blender",
    category: "feeding",
    name: "Máy xay ăn dặm Coco Bear",
    image: "/images/products/coco-bear.png",
    highlights: [
      "8 lưỡi dao đa năng, xay mịn đa dạng thực phẩm",
      "Bát inox 316 an toàn cho bé",
      "Dung tích lớn 200ml, đủ cho cả bữa ăn",
      "Dễ tháo lắp, vệ sinh nhanh gọn",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "elmich-pan-set",
    category: "feeding",
    name: "Bộ chảo quánh Elmich",
    image: "/images/products/elmich-pan.png",
    highlights: [
      "Chống dính cao cấp, không cần nhiều dầu mỡ",
      "Chất liệu an toàn tuyệt đối cho bé",
      "Kích thước nhỏ gọn phù hợp nấu ăn dặm",
      "Phân phối nhiệt đều, nấu nhanh không bị cháy",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "chanbe-oil",
    category: "feeding",
    name: "Dầu ăn dặm ChanBé",
    image: "/images/products/chanbe-oil.png",
    highlights: [
      "Giàu DHA, Omega 3-6-9 hỗ trợ não bộ",
      "Nguồn gốc tự nhiên, ép lạnh nguyên chất",
      "Không chất bảo quản, an toàn từ 6 tháng",
      "Mùi nhẹ, bé ăn ngon miệng hơn",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "folding-highchair",
    category: "feeding",
    name: "Ghế ăn dặm gấp gọn",
    image: "/images/products/folding-chair.png",
    highlights: [
      "Gấp gọn siêu tiện, tiết kiệm diện tích",
      "Dây đai 5 điểm an toàn cho bé",
      "Khay ăn tháo rời dễ vệ sinh",
      "Điều chỉnh độ cao linh hoạt",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "meiji-milk-bar",
    category: "feeding",
    name: "Sữa thanh Meiji 0-1",
    image: "/images/products/meiji-milk.png",
    highlights: [
      "Dinh dưỡng đầy đủ, tiện lợi khi đi chơi",
      "Pha nhanh, không vón cục",
      "Vị thơm ngon, bé uống ưa thích",
      "Thương hiệu Nhật Bản uy tín",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },

  // ─── SKINCARE ───
  {
    id: "bluecap-cream",
    category: "skincare",
    name: "Kem bôi viêm da cơ địa, dị ứng Blue Cap",
    image: "/images/products/blue-cap-cream.png",
    highlights: [
      "Giảm ngứa, đỏ do viêm da cơ địa nhanh chóng",
      "Thành phần dịu nhẹ, an toàn cho da bé",
      "Không corticoid, dùng dài ngày được",
      "Phục hồi hàng rào da, ngăn tái phát",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "bepanthen-balm",
    category: "skincare",
    name: "Kem hăm Bepanthen Balm",
    image: "/images/products/bepanthen-balm.png",
    highlights: [
      "Phục hồi da hăm, làm lành nhanh",
      "Tạo màng bảo vệ da suốt ngày đêm",
      "Không chứa chất bảo quản, an toàn tuyệt đối",
      "Thương hiệu Đức - được khuyên dùng rộng rãi",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "cetaphil-moisturizer",
    category: "skincare",
    name: "Kem dưỡng ẩm Cetaphil",
    image: "/images/products/cetaphil-cream.png",
    highlights: [
      "Dưỡng ẩm sâu, phù hợp da nhạy cảm",
      "Không mùi, không gây kích ứng",
      "Kết cấu nhẹ, thấm nhanh",
      "Được bác sĩ da liễu khuyên dùng",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "cetaphil-bodywash",
    category: "skincare",
    name: "Sữa tắm cho bé Cetaphil",
    image: "/images/products/cetaphil-wash.png",
    highlights: [
      "Dịu nhẹ, không cay mắt khi tắm",
      "Giữ ẩm da tự nhiên sau tắm",
      "pH cân bằng, thân thiện da bé",
      "Không xà phòng, không paraben",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },

  // ─── SỮA MẸ ───
  {
    id: "emoon-breast-pump",
    category: "breastfeeding",
    name: "Máy hút sữa Emoon",
    image: "/images/products/emoon-pump.png",
    highlights: [
      "Lực hút mạnh, điều chỉnh 9 cấp độ",
      "Mô phỏng cơ chế ngậm ti tự nhiên",
      "Êm ái, không gây đau khi hút",
      "Dễ lắp, vệ sinh tiệt trùng đơn giản",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "sunmum-storage-bag",
    category: "breastfeeding",
    name: "Túi trữ sữa Sunmum",
    image: "/images/products/sunmum-bag.png",
    highlights: [
      "Chất liệu PE an toàn, không BPA",
      "Khoá zip kép tránh tràn đổ",
      "Có vạch chia độ ml rõ ràng",
      "Tiệt trùng sẵn, dùng ngay",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "aga-breast-pad",
    category: "breastfeeding",
    name: "Miếng lót thấm sữa AGA-AE",
    image: "/images/products/aga-pad.png",
    highlights: [
      "Thấm hút tốt, chống tràn sữa hiệu quả",
      "Siêu mỏng, không lộ qua áo",
      "Chất liệu mềm mại, không gây kích ứng",
      "Băng keo giữ miếng lót cố định",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "moyyum-ppsu-bottle",
    category: "breastfeeding",
    name: "Bình sữa Moyyum PPSU",
    image: "/images/products/moyyum-bottle.png",
    highlights: [
      "PPSU thế hệ 3 — nhẹ, bền, chịu nhiệt vượt trội",
      "4 dung tích: 80ml, 170ml, 270ml, 330ml đủ mọi nhu cầu",
      "Phiên bản trơn sang trọng, dễ vệ sinh, ít bám cặn",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "wesser-ppsu-bottle",
    category: "breastfeeding",
    name: "Bình sữa Wesser cổ hẹp PPSU",
    image: "/images/products/wesser-bottle.png",
    highlights: [
      "Chất liệu PPSU cao cấp — nhẹ, bền, chịu nhiệt 180°C",
      "Cổ hẹp tiêu chuẩn, dễ lắp núm ti phổ thông",
      "Không chứa BPA, an toàn tuyệt đối cho bé từ sơ sinh",
      "Trong suốt, dễ quan sát lượng sữa, vạch chia ml rõ ràng",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "anti-reflux-pillow",
    category: "breastfeeding",
    name: "Gối chống trào Boona",
    image: "/images/products/anti-reflux-pillow.png",
    highlights: [
      "Nâng đầu bé đúng góc độ sau bú",
      "Giảm trào ngược dạ dày hiệu quả",
      "Chất liệu cotton mềm, thoáng khí",
      "Thiết kế ôm sát, bé ngủ ngon hơn",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },

  // ─── TẨY RỬA & VỆ SINH ───
  {
    id: "animo-bottle-wash-bottle",
    category: "cleaning",
    name: "Nước rửa bình Animo",
    image: "/images/products/animo-bottle.png",
    highlights: [
      "Thành phần gốc thực vật, an toàn 100%",
      "Tẩy sạch cặn sữa, mùi sữa chua hiệu quả",
      "Không còn mùi hoá chất sau tráng",
      "Được kiểm định an toàn cho trẻ sơ sinh",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "animo-bottle-wash-refill",
    category: "cleaning",
    name: "Nước rửa bình Animo túi refill",
    image: "/images/products/animo-pouch.png",
    highlights: [
      "Dạng túi refill tiết kiệm, thân thiện môi trường",
      "Giá trị hơn chai thường cùng chất lượng",
      "Dễ đổ, ít hao hụt",
      "Lý tưởng để dùng hàng ngày lâu dài",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "emoon-gum-gauze",
    category: "cleaning",
    name: "Gạc rơ lưỡi Emoon",
    image: "/images/products/emoon-gauze.png",
    highlights: [
      "Vệ sinh lưỡi, nướu sạch khuẩn mỗi ngày",
      "Chất gạc mềm mịn, không gây tổn thương",
      "Tiệt trùng sẵn, sử dụng ngay",
      "Gói đơn lẻ tiện lợi, vệ sinh",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "mamamy-wipes",
    category: "cleaning",
    name: "Khăn ướt Mamamy không mùi 100 tờ",
    image: "/images/products/mamamy-wipes.png",
    highlights: [
      "100 tờ/gói - vừa đủ dày, siêu tiết kiệm",
      "Không mùi, an toàn da nhạy cảm",
      "Dày dặn, không bị rách khi dùng",
      "Thành phần nước tinh khiết > 99%",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "lamy-wipes",
    category: "cleaning",
    name: "Khăn ướt Lamy không mùi 100 tờ",
    image: "/images/products/lamy-wipes.png",
    highlights: [
      "Mua thùng 10 gói siêu tiết kiệm chi phí",
      "Không mùi, không paraben, không cồn",
      "Đạt chuẩn an toàn xuất khẩu",
      "Mềm mại, dịu nhẹ cho da bé",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },

  // ─── BỈM TÃ ───
  {
    id: "huggies-nature-made",
    category: "diaper",
    name: "Bỉm Huggies Nature Made",
    image: "/images/products/huggies-nature-made.png",
    highlights: [
      "Chất liệu thiên nhiên, siêu mềm mại",
      "Thấm hút nhanh, giữ khô 12h",
      "Lõi bông mỏng nhẹ, bé thoải mái vận động",
      "Không chứa hoá chất gây hại da",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "huggies-panda",
    category: "diaper",
    name: "Bỉm Huggies Nature Made Panda",
    image: "/images/products/huggies-panda.png",
    highlights: [
      "Phiên bản giới hạn hình gấu trúc cực cute",
      "Chất liệu organic cotton tự nhiên",
      "Chống tràn 360° cả ngày",
      "Phù hợp cho bé da nhạy cảm",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "gooby-night-diaper",
    category: "diaper",
    name: "Bỉm đêm Gooby",
    image: "/images/products/gooby-night.png",
    highlights: [
      "Thấm hút siêu dày dành riêng ban đêm",
      "Giữ khô 12h liên tục, bé ngủ ngon",
      "Chống tràn hông hiệu quả khi bé nằm nghiêng",
      "Mềm mịn, không gây hăm vùng mông",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "huggies-overnite",
    category: "diaper",
    name: "Bỉm Huggies Nature Made Overnite",
    image: "/images/products/huggies-overnite.png",
    highlights: [
      "Lõi siêu thấm thiên nhiên cho ban đêm",
      "Giữ khô tới 12 tiếng",
      "Đai chống tràn 2 bên ôm sát",
      "Thân thiện môi trường - ít hoá chất hơn",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },

  // ─── TẮM & VẢI ───
  {
    id: "manny-bamboo-towel",
    category: "bath",
    name: "Khăn tắm sợi tre lụa Manny",
    image: "/images/products/manny-towel.png",
    highlights: [
      "Sợi tre tự nhiên, kháng khuẩn tự nhiên",
      "Siêu mềm mịn, không kích ứng da bé",
      "Thấm hút tốt, khô nhanh",
      "Bền màu sau nhiều lần giặt",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "royal-bamboo-towel",
    category: "bath",
    name: "Khăn tắm sợi tre Royal Towel",
    image: "/images/products/royal-towel.png",
    highlights: [
      "Chất liệu bamboo cao cấp, sang trọng",
      "Kháng khuẩn, chống nấm mốc tự nhiên",
      "Kích thước lớn bọc trọn bé sau tắm",
      "Giặt máy được, giữ độ mềm lâu dài",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "animo-oak-towel",
    category: "bath",
    name: "Khăn tắm sợi sồi Animo",
    image: "/images/products/animo-towel.png",
    highlights: [
      "Sợi sồi đặc biệt, mềm hơn bông thường",
      "Kháng khuẩn, ít giữ mùi ẩm mốc",
      "Bề mặt dệt mịn như nhung",
      "Phù hợp da sơ sinh siêu mỏng manh",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "bath-net",
    category: "bath",
    name: "Lưới tắm cho bé",
    image: "/images/products/bath-net.png",
    highlights: [
      "Đỡ bé an toàn trong chậu tắm",
      "Lưới thoáng, không tích đọng nước",
      "Điều chỉnh góc nghiêng phù hợp",
      "Tiết kiệm sức cho mẹ khi tắm bé một mình",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },

  // ─── SỨC KHOẺ ───
  {
    id: "lineabon-d3k2-10ml",
    category: "health",
    name: "D3K2 LineaBon 10ml",
    image: "/images/products/lineabon-d3k2-10ml.png",
    highlights: [
      "Dung tích 10ml nhỏ gọn tiện trải nghiệm cho bé",
      "D3 + K2 phối hợp tăng hấp thu canxi tối ưu",
      "Hỗ trợ phát triển xương, răng bé chắc khoẻ",
      "Dạng lỏng nhỏ giọt chuẩn liều lượng, dễ uống",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "lineabon-d3k2",
    category: "health",
    name: "D3K2 LineaBon 15ml",
    image: "/images/products/lineabon-d3k2.png",
    highlights: [
      "D3 + K2 phối hợp tăng hấp thu canxi tối ưu",
      "Hỗ trợ phát triển xương, răng bé chắc khoẻ",
      "Dạng lỏng dễ nhỏ, bé không cần nuốt viên",
      "Sản xuất theo tiêu chuẩn EU",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "emoon-nasal-aspirator",
    category: "health",
    name: "Máy hút mũi cầm tay Emoon",
    image: "/images/products/emoon-nasal.png",
    highlights: [
      "Dây silicon siêu mềm, không gây trầy xước niêm mạc",
      "Thiết kế bầu tròn dễ đưa vào cánh mũi, ngăn trào ngược",
      "Chất liệu nhựa y tế trong suốt, dễ quan sát dịch mũi",
      "Dễ dàng tháo rời các bộ phận để vệ sinh, tiệt trùng",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "emoon-nail-kit",
    category: "health",
    name: "Bộ bấm móng tay Emoon",
    image: "/images/products/emoon-nail-kit.png",
    highlights: [
      "Lưỡi cắt bo tròn, an toàn cho ngón tay nhỏ",
      "Đèn LED chiếu sáng khi cắt ban đêm",
      "Kẹp giữ móng không bắn tung toé",
      "Bộ đầy đủ: bấm + giũa + nhíp",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "fatz-sterilizer",
    category: "health",
    name: "Máy tiệt trùng hơi nước Fatz",
    image: "/images/products/fatz-sterilizer.png",
    highlights: [
      "Tiệt trùng hơi nước nóng 100°C, diệt 99.9% vi khuẩn",
      "Dung tích lớn tiệt trùng nhiều bình cùng lúc",
      "Tự ngắt khi xong, an toàn tuyệt đối",
      "Giữ vô trùng 24h trong tủ máy",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },

  // ─── PHỤ KIỆN ───
  {
    id: "animo-deer-plush",
    category: "accessories",
    name: "Thú bông hình hươu Animo",
    image: "/images/products/animo-deer.png",
    highlights: [
      "Chất bông mềm mại, ôm rất thích tay",
      "Thiết kế hươu xinh xắn, bé yêu mê",
      "An toàn tuyệt đối, không rụng lông",
      "Giặt máy được, không phai màu",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "emoon-sippy-cup",
    category: "accessories",
    name: "Bình tập hút nước Emoon",
    image: "/images/products/emoon-sippy.png",
    highlights: [
      "Chống tràn thông minh, không lo đổ",
      "Ống hút mềm, lực hút vừa tầm bé",
      "Chất liệu Tritan không BPA",
      "Phù hợp tập uống nước từ 6 tháng",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "floating-seat",
    category: "accessories",
    name: "Ghế phao tập ngồi cho bé",
    image: "/images/products/float-seat.png",
    highlights: [
      "Đỡ lưng vững chắc, tập ngồi an toàn",
      "Chất liệu PVC không mùi, an toàn",
      "Thiết kế tròn ôm sát cơ thể bé",
      "Bơm phồng tiện lợi, gấp gọn dễ dàng",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
  {
    id: "50h-rechargeable-fan",
    category: "accessories",
    name: "Quạt tích điện 50h",
    image: "/images/products/fan-50h.png",
    highlights: [
      "Pin siêu trâu dùng 50h liên tục",
      "Gió êm, không ồn - bé ngủ ngon",
      "Cánh quạt bọc lưới an toàn cho tay bé",
      "Sạc USB tiện lợi đi mọi nơi",
    ],
    shopeeUrl: "",
    tiktokUrl: "",
  },
];
