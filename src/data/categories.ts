export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  tag: string;
  url?: string; // optional external link
}

export const categories: Category[] = [
  {
    id: "cat-review",
    title: "Review Sản phẩm",
    description:
      "Chỉ những sản phẩm Mẹ Gấu thực sự dùng và kiểm chứng mới được chia sẻ đến cộng đồng.",
    icon: "Star",
    tag: "Chân thật",
  },
  {
    id: "cat-weaning",
    title: "Ăn dặm",
    description:
      "Hành trình khám phá thức ăn của Gấu — từ những muỗng cháo đầu tiên đến bữa ăn tự lập.",
    icon: "Utensils",
    tag: "Dinh dưỡng",
    url: "https://www.tiktok.com/@gaustory/collection/Series%20%C4%82n%20D%E1%BA%B7m-7658534796427692801",
  },
  {
    id: "cat-routine",
    title: "Routine của Gấu",
    description:
      "Những nếp sinh hoạt lành mạnh Mẹ Gấu xây dựng cho con — được chia sẻ từng bước một.",
    icon: "Sun",
    tag: "Lối sống",
    url: "https://www.tiktok.com/@gaustory/collection/Routine-7659328884651625232",
  },
  {
    id: "cat-care",
    title: "Chăm sóc em bé",
    description:
      "Từ tắm gội, massage đến chăm sóc da — những kiến thức Mẹ Gấu tích lũy sau nhiều tháng.",
    icon: "Heart",
    tag: "Sức khỏe",
  },
  {
    id: "cat-tips",
    title: "Mẹo cho mẹ bỉm",
    description:
      "Những bí quyết thiết thực giúp Mẹ nhẹ nhàng hơn trong hành trình nuôi con đầy yêu thương.",
    icon: "Lightbulb",
    tag: "Kinh nghiệm",
  },
];
