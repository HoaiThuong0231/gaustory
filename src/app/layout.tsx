import type { Metadata, Viewport } from "next";
import {
  DM_Sans,
  Great_Vibes,
  Cookie,
  Coiny,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/site";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cookie",
  display: "swap",
});

const coiny = Coiny({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  variable: "--font-coiny",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gấu's Story — Growing with Gấu, Sharing with Love",
    template: "%s | Gấu's Story",
  },
  description:
    "Mẹ bỉm thông thái — nuôi con đủ đầy mà vẫn tối ưu chi phí. Gấu's Story chia sẻ những sản phẩm thực sự dùng được, review thật từ trải nghiệm thật, giúp mẹ chọn đúng — không mua thừa, không bỏ lỡ.",
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    title: "Gấu's Story — Growing with Gấu, Sharing with Love",
    description:
      "Mẹ bỉm thông thái — nuôi con đủ đầy mà vẫn tối ưu chi phí. Review sản phẩm thật, chọn đúng từ lần đầu, không mua thừa.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gấu's Story",
    description: "Mẹ bỉm thông thái — nuôi con đủ đầy, tối ưu chi phí.",
    creator: siteConfig.author.handle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1714" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${dmSans.variable} ${greatVibes.variable} ${cookie.variable} ${coiny.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
