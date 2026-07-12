"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 px-5 sm:px-8"
      style={{
        background: "var(--bg-subtle)",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Brand + copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/images/gau-logo.jpg"
                alt="Gấu's Story Logo"
                className="w-7 h-7 rounded-full object-cover border border-[var(--border-medium)]"
              />
              <span
                className="text-sm font-medium"
                style={{
                  color: "var(--text-secondary)",
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-coiny)",
                }}
              >
                Gấu&apos;s Story
              </span>
            </div>

            <span
              style={{ color: "var(--border-medium)", fontSize: "1rem" }}
              className="hidden sm:block"
            >
              ·
            </span>

            <p
              className="text-xs"
              style={{ color: "var(--text-muted)", letterSpacing: "0.03em", fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              © {currentYear} Gấu&apos;s Story. All rights reserved.
            </p>

            <Link
              href="/privacy"
              className="text-xs transition-colors duration-200 hover:text-[var(--brand-taupe)]"
              style={{ color: "var(--text-muted)", letterSpacing: "0.03em", fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Right: Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer"
            style={{
              background: "none",
              border: "none",
              padding: 0,
            }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            aria-label="Quay về đầu trang"
          >
            <span
              className="text-xs transition-colors duration-200 group-hover:text-[var(--brand-taupe)]"
              style={{ color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.7rem", fontWeight: 500, fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Lên đầu trang
            </span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:border-[var(--brand-taupe)] group-hover:bg-[var(--bg-subtle)]"
              style={{ borderColor: "var(--border-medium)" }}
            >
              <ArrowUp size={13} strokeWidth={1.5} color="var(--text-muted)" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
