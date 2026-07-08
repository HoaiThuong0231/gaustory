"use client";

import { motion } from "framer-motion";
import { ArrowDown, ShoppingBag, FileText, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const ctaButtons = [
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@gaustory",
    variant: "primary" as const,
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.83a4.85 4.85 0 0 1-1-.14z" />
      </svg>
    ),
  },
  {
    id: "shopee",
    label: "Shopee",
    href: "https://shopee.vn/gausstory",
    variant: "secondary" as const,
    icon: <ShoppingBag size={15} strokeWidth={1.5} />,
  },
  {
    id: "media-kit",
    label: "Media Kit",
    href: "#",
    variant: "secondary" as const,
    icon: <FileText size={15} strokeWidth={1.5} />,
  },
  {
    id: "contact",
    label: "Liên hệ",
    href: "#contact",
    variant: "secondary" as const,
    icon: <Mail size={15} strokeWidth={1.5} />,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center px-5 sm:px-8 pt-20 pb-16 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--accent) 6%, transparent), transparent)",
        }}
      />

      {/* Floating blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute top-24 right-[8%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--accent) 6%, transparent)",
          filter: "blur(64px)",
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-24 left-[6%] w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--accent-sage) 10%, transparent)",
          filter: "blur(64px)",
        }}
        animate={{
          y: [0, 16, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Brand label */}
        <motion.div variants={item}>
          <span
            className="text-label inline-block mb-8"
            style={{ color: "var(--accent)" }}
          >
            ✦ &nbsp; Câu chuyện của Gấu &nbsp; ✦
          </span>
        </motion.div>

        {/* Logo / Avatar area */}
        <motion.div variants={item} className="mb-8">
          <div className="relative inline-block">
            {/* Decorative ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, var(--accent), var(--accent-light), var(--accent))`,
                padding: "2px",
                borderRadius: "9999px",
              }}
            />
            <motion.div
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center overflow-hidden shadow-md"
              style={{
                background: "var(--bg-subtle)",
                border: "3.5px solid var(--bg-base)",
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/gau-logo.jpg"
                alt="Gấu's Story Avatar"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={item}
          className="heading-display mb-4"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            color: "var(--text-primary)",
          }}
        >
          Gấu&apos;s Story
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="heading-serif mb-6"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
            color: "var(--brand-taupe)",
            fontStyle: "italic",
          }}
        >
          Growing with Gấu, Sharing with Love.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="mb-10 max-w-xl leading-relaxed"
          style={{
            fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
            color: "var(--text-secondary)",
            lineHeight: "1.75",
          }}
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {ctaButtons.map((btn) =>
            btn.variant === "primary" ? (
              <a key={btn.id} href={btn.href} className="btn-primary">
                {btn.icon}
                {btn.label}
              </a>
            ) : (
              <a key={btn.id} href={btn.href} className="btn-secondary">
                {btn.icon}
                {btn.label}
              </a>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span
          className="text-label"
          style={{ color: "var(--text-muted)", fontSize: "0.6rem" }}
        >
          Khám phá
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown
            size={14}
            strokeWidth={1.5}
            color="var(--text-muted)"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
