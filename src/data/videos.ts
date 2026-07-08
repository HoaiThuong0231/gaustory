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
      "Một ngày bình thường của hai mẹ con — từ lúc thức dậy đến giờ chơi và giờ ngủ trưa.",
    thumbnail: "/images/video-thumb-2.jpg",
    tiktokUrl: "https://www.tiktok.com/@gaustory/collection/Routine-7659328884651625232",
    category: "Routine",
  },
  {
    id: "video-3",
    title: "Review sữa tắm cho bé dưới 6 tháng",
    description:
      "Review những sản phẩm Gấu dùng — chỉ những gì Mẹ Gấu thực sự tin tưởng mới được chia sẻ.",
    thumbnail: "/images/video-thumb-3.jpg",
    tiktokUrl: "https://tiktok.com/@gaustory",
    category: "Review sản phẩm",
  },
];
