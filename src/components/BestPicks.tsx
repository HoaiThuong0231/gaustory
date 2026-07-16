"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Play, Star, ChevronRight, ChevronLeft, Search, X } from "lucide-react";
import {
  bestPickProducts,
  bestPickCategories,
  type BestPickCategory,
} from "@/data/bestPicks";
import { AnimatedSection } from "./AnimatedSection";

/* ─── Shopee / TikTok icons ─── */
function ShopeeIcon({ size = 16 }: { size?: number }) {
  return (
    <img
      src="/images/icons/shopee.png"
      alt="Shopee"
      width={size}
      height={size}
      className="object-contain flex-shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <img
      src="/images/icons/tiktok.png"
      alt="TikTok"
      width={size}
      height={size}
      className="object-contain flex-shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

/* ─── Product Card ─── */
function ProductCard({
  product,
  index,
}: {
  product: (typeof bestPickProducts)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{
        duration: 0.42,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-light)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-400 hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
      style={{ willChange: "transform, box-shadow" }}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full overflow-hidden flex-shrink-0 bg-white"
        style={{ paddingBottom: "100%" }}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          /* Fallback placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center"
            style={{ background: "var(--bg-subtle)" }}>
            <span style={{ fontSize: "2rem" }}>
              {bestPickCategories.find((c) => c.id === product.category)?.emoji ?? "🛒"}
            </span>
            <span
              className="text-[0.7rem] font-medium leading-snug"
              style={{ color: "var(--text-muted)" }}
            >
              {product.name}
            </span>
          </div>
        )}

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background:
              "linear-gradient(to top, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Name */}
        <h3
          className="leading-snug text-sm transition-colors duration-200 group-hover:opacity-80"
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-coiny)",
            fontSize: "0.95rem",
            lineHeight: "1.35",
            fontWeight: 400,
          }}
        >
          {product.name}
        </h3>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5 flex-1">
          {product.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-1.5 text-xs leading-relaxed"
              style={{ color: "var(--text-primary)", fontFamily: "Arial, sans-serif" }}
            >
              <Star
                size={10}
                strokeWidth={0}
                fill="var(--accent)"
                className="mt-[3px] flex-shrink-0"
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="flex gap-2 mt-auto pt-2 border-t border-[var(--border-light)]">
          <a
            id={`shopee-${product.id}`}
            href={product.shopeeUrl || "#"}
            target={product.shopeeUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-disabled={!product.shopeeUrl}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: product.shopeeUrl
                ? "#EE4D2D"
                : "color-mix(in srgb, #EE4D2D 40%, var(--bg-subtle))",
              color: "#fff",
              boxShadow: product.shopeeUrl
                ? "0 3px 10px rgba(238, 77, 45, 0.35)"
                : "none",
              pointerEvents: product.shopeeUrl ? "auto" : "none",
              opacity: product.shopeeUrl ? 1 : 0.55,
              textDecoration: "none",
            }}
          >
            <ShopeeIcon size={15} />
            <span className="hidden sm:inline">Shopee</span>
          </a>
          <a
            id={`tiktok-${product.id}`}
            href={product.tiktokUrl || "#"}
            target={product.tiktokUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-disabled={!product.tiktokUrl}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: product.tiktokUrl
                ? "#010101"
                : "color-mix(in srgb, #010101 40%, var(--bg-subtle))",
              color: "#fff",
              boxShadow: product.tiktokUrl
                ? "0 3px 10px rgba(0,0,0,0.35)"
                : "none",
              pointerEvents: product.tiktokUrl ? "auto" : "none",
              opacity: product.tiktokUrl ? 1 : 0.55,
              textDecoration: "none",
            }}
          >
            <TikTokIcon size={15} />
            <span className="hidden sm:inline">TikTok</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Helper: Normalize Vietnamese Text (remove accents & lowercase) ─── */
function normalizeSearchText(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase();
}

/* ─── Main Section ─── */
export function BestPicks() {
  const ITEMS_PER_PAGE = 4;

  const [activeCategory, setActiveCategory] =
    useState<BestPickCategory>("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const tabsRef = useRef<HTMLDivElement>(null);

  const categoryFiltered =
    activeCategory === "all"
      ? bestPickProducts
      : bestPickProducts.filter((p) => p.category === activeCategory);

  const filtered = categoryFiltered.filter((p) => {
    if (!searchQuery.trim()) return true;
    const query = normalizeSearchText(searchQuery.trim());
    const matchName = normalizeSearchText(p.name).includes(query);
    const matchHighlights = p.highlights.some((h) =>
      normalizeSearchText(h).includes(query)
    );
    return matchName || matchHighlights;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: BestPickCategory) => {
    setActiveCategory(cat);
    setSearchQuery("");
    setCurrentPage(0);
  };

  const activeMeta = bestPickCategories.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="best-picks"
      className="py-24 md:py-32 px-5 sm:px-8"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <AnimatedSection delay={0}>
            <span className="pink-accent-text mb-3 block">
              Được Mẹ Gấu tin dùng
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
              Mẹ Gấu&apos;s Best Picks
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
              Những sản phẩm Mẹ Gấu đã thực sự mua, dùng và yêu thích trong
              hành trình nuôi con. Không quảng cáo hoa mỹ — chỉ là trải nghiệm
              thật.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Tab Bar ── */}
        <AnimatedSection delay={0.25}>
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="tablist"
            aria-label="Danh mục sản phẩm"
          >
            {bestPickCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  id={`tab-${cat.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative whitespace-nowrap"
                  style={{
                    background: isActive
                      ? "var(--accent)"
                      : "var(--bg-card)",
                    color: isActive ? "#fff" : "var(--text-secondary)",
                    border: isActive
                      ? "1.5px solid transparent"
                      : "1.5px solid var(--border-medium)",
                    boxShadow: isActive
                      ? "0 4px 16px color-mix(in srgb, var(--accent) 45%, transparent)"
                      : "var(--shadow-xs)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-tab-badge"
                      className="ml-1 text-xs px-1.5 py-0.5 rounded-full font-bold"
                      style={{
                        background: "rgba(255,255,255,0.25)",
                        color: "#fff",
                      }}
                    >
                      {cat.id === "all"
                        ? bestPickProducts.length
                        : bestPickProducts.filter((p) => p.category === cat.id)
                            .length}
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* ── Category description & Search bar ── */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${activeCategory}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-2xl text-xl flex-shrink-0"
                style={{ background: "var(--accent-light)" }}
              >
                {activeMeta.emoji}
              </div>
              <div>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}
                >
                  {activeMeta.label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {activeMeta.description} &middot;{" "}
                  <strong style={{ color: "var(--accent)" }}>
                    {filtered.length} sản phẩm
                  </strong>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Search Input */}
          <div className="relative w-full sm:w-72 md:w-80 flex-shrink-0">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200"
              style={{ color: searchQuery ? "var(--accent)" : "var(--text-muted)" }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(0);
              }}
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full text-sm outline-none transition-all duration-300 border"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                borderColor: searchQuery ? "var(--accent)" : "var(--border-medium)",
                boxShadow: searchQuery ? "0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)" : "var(--shadow-xs)",
                fontFamily: "var(--font-body)",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(0);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:opacity-80"
                style={{ color: "var(--text-muted)" }}
                aria-label="Xoá tìm kiếm"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ── Product Grid ── */}
        <div
          id={`tabpanel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
        >
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center flex flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-[var(--bg-card)] px-4"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-[var(--bg-subtle)]">
                🔍
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Không tìm thấy sản phẩm nào khớp với &quot;{searchQuery}&quot;
                {activeCategory !== "all" && ` trong mục ${activeMeta.label}`}
              </p>
              {activeCategory !== "all" &&
                bestPickProducts.some((p) => {
                  const query = normalizeSearchText(searchQuery.trim());
                  return (
                    normalizeSearchText(p.name).includes(query) ||
                    p.highlights.some((h) => normalizeSearchText(h).includes(query))
                  );
                }) && (
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setCurrentPage(0);
                    }}
                    className="mt-1 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                      boxShadow: "0 3px 12px color-mix(in srgb, var(--accent) 40%, transparent)",
                    }}
                  >
                    Xem sản phẩm khớp trong &quot;Tất cả&quot; →
                  </button>
                )}
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${searchQuery}-${currentPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {paginated.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* ── Prev / Next ── */}
          {filtered.length > 0 && totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                id="best-picks-prev"
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-x-0.5"
                style={{
                  background: currentPage === 0 ? "var(--bg-subtle)" : "var(--accent)",
                  color: currentPage === 0 ? "var(--text-muted)" : "#fff",
                  boxShadow: currentPage === 0 ? "none" : "0 4px 14px color-mix(in srgb, var(--accent) 40%, transparent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <ChevronLeft size={15} strokeWidth={2.5} />
                Trước
              </button>

              {/* Page dots */}
              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: i === currentPage ? "20px" : "8px",
                      height: "8px",
                      background: i === currentPage ? "var(--accent)" : "var(--border-medium)",
                    }}
                    aria-label={`Trang ${i + 1}`}
                  />
                ))}
              </div>

              <button
                id="best-picks-next"
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:translate-x-0.5"
                style={{
                  background: currentPage === totalPages - 1 ? "var(--bg-subtle)" : "var(--accent)",
                  color: currentPage === totalPages - 1 ? "var(--text-muted)" : "#fff",
                  boxShadow: currentPage === totalPages - 1 ? "none" : "0 4px 14px color-mix(in srgb, var(--accent) 40%, transparent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Tiếp
                <ChevronRight size={15} strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>

        {/* ── Coming soon note ── */}
        <AnimatedSection delay={0.1}>
          <div
            className="mt-10 flex items-center gap-3 px-5 py-4 rounded-2xl border"
            style={{
              background:
                "color-mix(in srgb, var(--accent-light) 60%, var(--bg-card))",
              borderColor:
                "color-mix(in srgb, var(--accent) 25%, transparent)",
            }}
          >
            <ChevronRight
              size={16}
              strokeWidth={2.5}
              style={{ color: "var(--accent)", flexShrink: 0 }}
            />
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <strong style={{ color: "var(--accent)" }}>
                Link Shopee &amp; TikTok Shop
              </strong>{" "}
              đang được cập nhật — quay lại sớm để mua ngay những sản phẩm Mẹ
              Gấu tin dùng nhé! 🛒
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
