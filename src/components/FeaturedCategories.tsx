"use client";

import { motion } from "framer-motion";
import { Star, Utensils, Sun, Heart, Lightbulb } from "lucide-react";
import { categories } from "@/data/categories";
import { AnimatedSection } from "./AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  Star: <Star size={20} strokeWidth={1.5} />,
  Utensils: <Utensils size={20} strokeWidth={1.5} />,
  Sun: <Sun size={20} strokeWidth={1.5} />,
  Heart: <Heart size={20} strokeWidth={1.5} />,
  Lightbulb: <Lightbulb size={20} strokeWidth={1.5} />,
};

export function FeaturedCategories() {
  return (
    <section
      id="categories"
      className="py-24 md:py-32 px-5 sm:px-8"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection delay={0}>
            <span
              className="pink-accent-text mb-4 block"
            >
              Nội dung
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                color: "var(--text-primary)",
              }}
            >
              Những điều Gấu&apos;s Story chia sẻ
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="mt-4 max-w-lg mx-auto"
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: "1.75",
              }}
            >
              Từ hành trình ăn dặm đến những sản phẩm thực sự tin dùng — mỗi
              chủ đề đều xuất phát từ trải nghiệm thật của hai mẹ con.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => {
            const Tag = cat.url ? motion.a : motion.div;
            const linkProps = cat.url
              ? {
                  href: cat.url,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                  style: { textDecoration: "none" },
                }
              : {};

            return (
              <AnimatedSection key={cat.id} delay={0.1 * idx} direction="up">
                <Tag
                  {...(linkProps as object)}
                  className={`card-luxury p-7 h-full group ${cat.url ? "cursor-pointer" : "cursor-default"} block`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: ["var(--accent-light)", "color-mix(in srgb, var(--brand-blue) 30%, var(--bg-card))", "color-mix(in srgb, var(--brand-lavender) 30%, var(--bg-card))", "color-mix(in srgb, var(--brand-mint) 30%, var(--bg-card))", "color-mix(in srgb, var(--brand-yellow) 40%, var(--bg-card))"][idx % 5],
                      color: ["var(--accent)", "var(--brand-blue)", "var(--brand-lavender)", "var(--accent-sage)", "var(--accent)"][idx % 5],
                    }}
                  >
                    {iconMap[cat.icon]}
                  </div>

                  {/* Tag + arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="pink-accent-text"
                    >
                      {cat.tag}
                    </span>
                    {cat.url && (
                      <span
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase"
                        style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}
                      >
                        Xem ngay ↗
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-medium mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]"
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "1.125rem",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 500,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: "1.65",
                    }}
                  >
                    {cat.description}
                  </p>
                </Tag>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
