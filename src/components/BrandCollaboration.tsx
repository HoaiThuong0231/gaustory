"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/brands";
import { AnimatedSection } from "./AnimatedSection";

export function BrandCollaboration() {
  return (
    <section
      id="brands"
      className="py-24 md:py-32 px-5 sm:px-8"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection delay={0}>
            <span
              className="text-label mb-4 block"
              style={{ color: "var(--accent)" }}
            >
              Đối tác
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
              Brands We&apos;ve Worked With
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="mt-4 max-w-md mx-auto"
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: "1.75",
              }}
            >
              Gấu&apos;s Story hợp tác với các thương hiệu uy tín trong lĩnh
              vực mẹ & bé, chia sẻ những sản phẩm được kiểm chứng qua thực tế.
            </p>
          </AnimatedSection>
        </div>

        {/* Brand Grid */}
        <AnimatedSection delay={0.2}>
          <div
            className="rounded-3xl p-10 md:p-14"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px"
              style={{ background: "var(--border-light)" }}
            >
              {brands.map((brand, idx) => (
                <motion.a
                  key={brand.id}
                  href={brand.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center py-8 px-4 group"
                  style={{
                    background: "var(--bg-card)",
                    textDecoration: "none",
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 * idx,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ backgroundColor: "var(--bg-subtle)" }}
                >
                  {/* Brand name as text (until real logos are added) */}
                  <span
                    className="text-sm font-medium tracking-wider text-center transition-colors duration-300"
                    style={{
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                    }}
                  >
                    <span
                      className="block transition-colors duration-300 group-hover:text-[var(--brand-taupe)]"
                    >
                      {brand.name}
                    </span>
                  </span>

                  {/* Hover underline accent */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-8"
                    style={{ background: "var(--accent)" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: "50+", label: "Thương hiệu" },
              { value: "500K+", label: "Lượt tiếp cận" },
              { value: "98%", label: "Tỉ lệ hài lòng" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="heading-display mb-1"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    color: "var(--text-primary)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-label"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
