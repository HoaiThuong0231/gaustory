"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ShoppingBag,
  MessageCircle,
  Music2,
  Copy,
  Check,
  Download,
  ExternalLink,
} from "lucide-react";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import { socialLinks, contactInfo } from "@/data/social";
import { AnimatedSection } from "./AnimatedSection";

const iconComponents: Record<string, React.ReactNode> = {
  Music2: <Music2 size={18} strokeWidth={1.5} />,
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  ShoppingBag: <ShoppingBag size={18} strokeWidth={1.5} />,
  MessageCircle: <MessageCircle size={18} strokeWidth={1.5} />,
};

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-3 w-full text-left p-4 rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        background: "var(--bg-subtle)",
        border: "1px solid var(--border-light)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "var(--border-medium)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "var(--border-light)";
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--accent-light)", color: "var(--accent)" }}
      >
        <Mail size={18} strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-label mb-0.5"
          style={{ color: "var(--text-muted)" }}
        >
          Email
        </p>
        <p
          className="truncate font-medium"
          style={{ color: "var(--text-primary)", fontSize: "0.9375rem" }}
        >
          {email}
        </p>
      </div>
      <motion.div
        className="flex items-center gap-1.5 flex-shrink-0"
        style={{ color: "var(--text-muted)" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5"
              style={{ color: "var(--accent)" }}
            >
              <Check size={14} strokeWidth={2} />
              <span className="text-label text-xs">Đã sao chép</span>
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5 transition-colors duration-200 group-hover:text-[var(--brand-taupe)]"
            >
              <Copy size={14} strokeWidth={1.5} />
              <span className="text-label text-xs">Sao chép</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-5 sm:px-8"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection delay={0}>
            <span
              className="pink-accent-text mb-4 block"
            >
              Hợp tác
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="heading-display mb-4"
              style={{
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                color: "var(--text-primary)",
              }}
            >
              Work with Gấu&apos;s Story
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="max-w-md mx-auto"
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: "1.75",
              }}
            >
              Hãy cùng nhau tạo ra những nội dung chất lượng, chân thật và có
              giá trị đến cộng đồng các Mẹ.
            </p>
          </AnimatedSection>
        </div>

        {/* Main Card */}
        <AnimatedSection delay={0.15}>
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Top bar */}
            <div
              className="h-1"
              style={{
                background:
                  "linear-gradient(to right, var(--accent), var(--accent))",
              }}
            />

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Contact info */}
                <div>
                  <h3
                    className="heading-serif mb-6"
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "1.25rem",
                    }}
                  >
                    Kết nối với Gấu&apos;s Story
                  </h3>

                  {/* Email */}
                  <div className="mb-4">
                    <CopyEmailButton email={contactInfo.email} />
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-col gap-2.5">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300"
                        style={{
                          border: "1px solid var(--border-light)",
                          textDecoration: "none",
                          background: "transparent",
                        }}
                        whileHover={{
                          backgroundColor: "var(--bg-subtle)",
                          borderColor: "var(--border-medium)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                          style={{
                            background: "var(--bg-subtle)",
                            color: "var(--brand-taupe)",
                          }}
                        >
                          {iconComponents[social.icon]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-medium text-sm leading-snug transition-colors duration-200 group-hover:text-[var(--brand-taupe)]"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {social.platform}
                          </p>
                          <p
                            className="text-xs truncate"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {social.id !== "zalo" && social.handle}
                          </p>
                        </div>
                        <ExternalLink
                          size={13}
                          strokeWidth={1.5}
                          color="var(--text-muted)"
                          className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Right: CTA panel */}
                <div className="flex flex-col justify-between gap-8">
                  {/* Media Kit */}
                  <div
                    className="flex-1 rounded-2xl p-6 flex flex-col gap-4"
                    style={{
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <div>
                       <span
                        className="pink-accent-text mb-2 block"
                      >
                        Media Kit
                      </span>
                      <p
                        className="heading-serif mb-3"
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "1.125rem",
                        }}
                      >
                        Thông tin hợp tác chi tiết
                      </p>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.875rem",
                          lineHeight: "1.65",
                        }}
                      >
                        Tải Media Kit để xem thống kê kênh, các hình thức hợp
                        tác và bảng giá chi tiết.
                      </p>
                    </div>
                    <a
                      href={contactInfo.mediaKitUrl}
                      className="btn-primary w-full justify-center"
                      style={{ paddingTop: "0.625rem", paddingBottom: "0.625rem" }}
                    >
                      <Download size={15} strokeWidth={1.5} />
                      Tải Media Kit
                    </a>
                  </div>

                  {/* Quick message */}
                  <div>
                    <p
                      className="heading-serif mb-3"
                      style={{
                        color: "var(--text-primary)",
                        fontSize: "1rem",
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;Mỗi sản phẩm được chia sẻ đều là lời hứa về sự
                      chân thật với cộng đồng của mình.&rdquo;
                    </p>
                    <p
                      className="pink-accent-text"
                    >
                      — Mẹ Gấu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
