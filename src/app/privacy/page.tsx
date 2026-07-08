import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Chính sách bảo mật của Gấu's Story",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh py-24 px-5 sm:px-8" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-sm transition-colors duration-200 hover:text-[var(--brand-taupe)]"
          style={{ color: "var(--text-muted)" }}
        >
          ← Quay lại trang chủ
        </Link>

        <h1
          className="heading-display mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "var(--text-primary)",
          }}
        >
          Privacy Policy
        </h1>

        <div
          className="prose"
          style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
        >
          <p className="mb-4">
            Gấu&apos;s Story cam kết bảo vệ quyền riêng tư của bạn. Trang này
            giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá
            nhân của bạn.
          </p>
          <p className="mb-4">
            Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng
            liên hệ chúng tôi qua email:{" "}
            <a
              href="mailto:contact.gaustory@gmail.com"
              style={{ color: "var(--brand-taupe)" }}
            >
              contact.gaustory@gmail.com
            </a>
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Cập nhật lần cuối: Tháng 7 năm 2025
          </p>
        </div>
      </div>
    </main>
  );
}
