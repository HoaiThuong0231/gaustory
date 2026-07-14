"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { featuredVideos } from "@/data/videos";
import { AnimatedSection } from "./AnimatedSection";

function VideoCard({
  video,
  index,
}: {
  video: (typeof featuredVideos)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  const bgColors = [
    "linear-gradient(135deg, color-mix(in srgb, var(--brand-pink) 40%, var(--bg-subtle)), color-mix(in srgb, var(--brand-lavender) 30%, var(--bg-subtle)))",
    "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 35%, var(--bg-subtle)), color-mix(in srgb, var(--brand-mint) 30%, var(--bg-subtle)))",
    "linear-gradient(135deg, color-mix(in srgb, var(--brand-mint) 30%, var(--bg-subtle)), color-mix(in srgb, var(--brand-yellow) 40%, var(--bg-subtle)))",
  ];

  const emojis = ["🍲", "☀️", "🧴"];

  return (
    <AnimatedSection delay={0.1 * index} direction="up" className="h-full">
      <motion.a
        href={video.tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full group rounded-3xl overflow-hidden cursor-pointer"
        style={{
          background: "var(--bg-card)",
          border: "1.5px solid var(--border-medium)",
          boxShadow: "var(--shadow-sm)",
          textDecoration: "none",
          transition: "border-color 360ms cubic-bezier(0.22,1,0.36,1), box-shadow 360ms cubic-bezier(0.22,1,0.36,1)",
        }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => {
          setHovered(true);
        }}
        onHoverEnd={() => setHovered(false)}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md), 0 0 0 2px var(--accent-light)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-medium)";
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
        }}
      >
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Gradient placeholder */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              background: bgColors[index % bgColors.length],
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />

          {/* Center emoji */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="transition-transform duration-500"
              style={{
                fontSize: "3.5rem",
                transform: hovered ? "scale(1.1)" : "scale(1)",
              }}
            >
              {emojis[index % emojis.length]}
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className="text-label px-3 py-1.5 rounded-full"
              style={{
                background: "color-mix(in srgb, var(--bg-base) 90%, transparent)",
                color: "var(--text-secondary)",
                backdropFilter: "blur(8px)",
              }}
            >
              {video.category}
            </span>
          </div>


          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--bg-card)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <Play
                    size={20}
                    strokeWidth={0}
                    fill="var(--text-primary)"
                    style={{ marginLeft: "2px" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, color-mix(in srgb, var(--bg-card) 40%, transparent), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3
            className="mb-2 font-medium transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{
              color: "var(--text-primary)",
              fontSize: "1.0625rem",
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              lineHeight: "1.4",
            }}
          >
            {video.title}
          </h3>
          <p
            className="mb-4 flex-1"
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              lineHeight: "1.6",
            }}
          >
            {video.description}
          </p>
          <div className="flex items-center gap-1.5">
            <ExternalLink size={13} strokeWidth={1.5} color="var(--accent)" />
            <span
              className="text-[11px] font-bold tracking-wider uppercase"
              style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}
            >
              Xem trên TikTok
            </span>
          </div>
        </div>
      </motion.a>
    </AnimatedSection>
  );
}

export function FeaturedVideos() {
  return (
    <section
      id="videos"
      className="py-24 md:py-32 px-5 sm:px-8"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection delay={0}>
            <span
              className="pink-accent-text mb-4 block"
            >
              Video nổi bật
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
              Những khoảnh khắc được yêu thích
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
              Những video nhận được nhiều tình cảm nhất từ cộng đồng các Mẹ
              trên TikTok.
            </p>
          </AnimatedSection>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featuredVideos.map((video, idx) => (
            <VideoCard key={video.id} video={video} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <a
            href="https://tiktok.com/@gaustory"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            Xem tất cả video trên TikTok
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
