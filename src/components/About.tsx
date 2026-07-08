"use client";

import { AnimatedSection } from "./AnimatedSection";

const values = [
  {
    id: "authentic",
    label: "Chân thật",
    desc: "Mọi chia sẻ đều đến từ trải nghiệm thực tế, không phóng đại, không quảng cáo sai sự thật.",
  },
  {
    id: "consistent",
    label: "Kiên định",
    desc: "Hành trình nuôi con không phải lúc nào cũng bằng phẳng — Mẹ Gấu ghi lại cả những khó khăn.",
  },
  {
    id: "trustworthy",
    label: "Đáng tin",
    desc: "Chỉ chia sẻ những sản phẩm và phương pháp Mẹ Gấu đã kiểm chứng qua thực tế với Gấu.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-5 sm:px-8"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <AnimatedSection delay={0}>
              <span
                className="text-label mb-4 block"
                style={{ color: "var(--accent)" }}
              >
                Về Gấu&apos;s Story
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2
                className="heading-display mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--text-primary)",
                }}
              >
                Không chỉ là{" "}
                <em style={{ color: "var(--brand-taupe)", fontStyle: "italic" }}>
                  review
                </em>
                , đây là hành trình
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                className="mb-5 leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8",
                }}
              >
                Gấu&apos;s Story được tạo ra từ một tình yêu rất đơn giản —
                muốn lưu giữ từng khoảnh khắc lớn lên của Gấu và chia sẻ những
                gì thực sự hữu ích đến cộng đồng các Mẹ.
              </p>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.8",
                }}
              >
                Ở đây không có công thức nuôi con hoàn hảo, không có sản phẩm
                "tốt nhất cho mọi bé". Chỉ có những trải nghiệm chân thật của
                một người Mẹ đang học cách yêu thương con mỗi ngày.
              </p>
            </AnimatedSection>

            {/* Ornament divider */}
            <AnimatedSection delay={0.25}>
              <div className="divider-ornament mb-8">
                <span
                  className="text-label"
                  style={{ color: "var(--accent)", whiteSpace: "nowrap" }}
                >
                  Giá trị cốt lõi
                </span>
              </div>
            </AnimatedSection>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {values.map((v, idx) => (
                <AnimatedSection key={v.id} delay={0.3 + idx * 0.1}>
                  <div className="flex gap-4">
                    <div
                      className="mt-1 w-1 rounded-full flex-shrink-0"
                      style={{
                        height: "auto",
                        background: "var(--accent)",
                        minHeight: "1.25rem",
                      }}
                    />
                    <div>
                      <p
                        className="font-medium mb-1"
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "0.9375rem",
                        }}
                      >
                        {v.label}
                      </p>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: "1.65",
                        }}
                      >
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <AnimatedSection delay={0.2} direction="left">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Baby Gấu Image */}
              <img
                src="/images/gau-baby.png"
                alt="Bé Gấu đáng yêu"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient overlay for text readability */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26, 20, 32, 0.88) 0%, rgba(26, 20, 32, 0.25) 50%, transparent 100%)",
                }}
              />

              {/* Bottom quote */}
              <div
                className="relative z-10 rounded-2xl p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "color-mix(in srgb, var(--bg-card) 95%, transparent)",
                  border: "1px solid var(--border-medium)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <p
                  className="heading-serif mb-3"
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "1.0625rem",
                    fontStyle: "italic",
                    lineHeight: "1.6",
                  }}
                >
                  &ldquo;Mỗi khoảnh khắc nhỏ với Gấu đều đáng được ghi lại và
                  trân trọng.&rdquo;
                </p>
                <p
                  className="text-label"
                  style={{ color: "var(--accent)" }}
                >
                  — Mẹ Gấu
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
