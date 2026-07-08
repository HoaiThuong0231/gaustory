export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  description: string;
  url: string;
  icon: string; // lucide icon name
  color?: string; // accent color for hover
}

export const socialLinks: SocialLink[] = [
  {
    id: "tiktok-baby",
    platform: "TikTok Mẹ & Bé",
    handle: "@gaustory",
    description: "Hành trình lớn lên của Gấu, ăn dặm và nuôi con",
    url: "https://tiktok.com/@gaustory",
    icon: "Music2",
    color: "#010101",
  },
  {
    id: "facebook",
    platform: "Facebook",
    handle: "Gấu's Story",
    description: "Cập nhật mới nhất từ Mẹ Gấu",
    url: "https://www.facebook.com/share/195PjnQ8oc/?mibextid=wwXIfr",
    icon: "Facebook",
    color: "#1877F2",
  },

  {
    id: "shopee",
    platform: "Shopee",
    handle: "Gấu's Story Shop",
    description: "Những sản phẩm Mẹ Gấu tin dùng và giới thiệu",
    url: "https://collshp.com/meomoonne?view=storefront",
    icon: "ShoppingBag",
    color: "#EE4D2D",
  },
  {
    id: "zalo",
    platform: "Zalo",
    handle: "0334 972 658",
    description: "Kết nối trực tiếp với Mẹ Gấu qua Zalo",
    url: "https://zalo.me/0334972658",
    icon: "MessageCircle",
    color: "#0068FF",
  },
];

export const contactInfo = {
  email: "contact.gaustory@gmail.com",
  mediaKitUrl: "#", // placeholder
};
