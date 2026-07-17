export interface FeaturedVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // path to image or placeholder
  tiktokUrl: string;
  views?: string;
  category: string;
}

export const featuredVideos: FeaturedVideo[] = [
  {
    id: "video-1",
    title: "Hành trình ăn dặm của Gấu",
    description:
      "Gấu lần đầu thử cháo bí đỏ — những biểu cảm đáng yêu nhất bạn sẽ thấy hôm nay.",
    thumbnail: "/images/video-thumb-1.jpg",
    tiktokUrl: "https://www.tiktok.com/@gaustory/collection/Series%20%C4%82n%20D%E1%BA%B7m-7658534796427692801",
    category: "Ăn dặm",
  },
  {
    id: "video-2",
    title: "Routine của Gấu",
    description:
      "Những khoảnh khắc đời thường của Gấu — từ buổi sáng thức dậy, giờ ăn, giờ chơi đến lúc chìm vào giấc ngủ.",
    thumbnail: "/images/video-thumb-2.png",
    tiktokUrl: "https://www.tiktok.com/@gaustory/collection/Routine-7659328884651625232",
    category: "Routine",
  },
  {
    id: "video-3",
    title: "Review sản phẩm mẹ Gấu tin dùng",
    description:
      "Review tất cả sản phẩm mẹ Gấu tin dùng cho Gấu — trải nghiệm thật, đánh giá thật, không quảng cáo.",
    thumbnail: "/images/video-thumb-3.jpg",
    tiktokUrl: "https://tiktok.com/@gaustory",
    category: "Review sản phẩm",
  },
];
