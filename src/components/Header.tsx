"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg-base) 92%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-light)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <img
                src="/images/gau-logo.jpg"
                alt="Gấu's Story Logo"
                className="w-9 h-9 rounded-full object-cover border border-[var(--border-medium)] shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className="text-sm font-medium tracking-wide transition-colors duration-200 group-hover:text-[var(--brand-taupe)]"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.04em",
                }}
              >
                Gấu&apos;s Story
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="btn-ghost text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="btn-primary hidden md:inline-flex text-sm"
                style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
              >
                Liên hệ hợp tác
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border-medium)] bg-[var(--bg-card)] transition-colors duration-200 hover:bg-[var(--bg-subtle)]"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X size={16} strokeWidth={1.5} color="var(--text-primary)" />
                ) : (
                  <Menu
                    size={16}
                    strokeWidth={1.5}
                    color="var(--text-primary)"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              borderBottom: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="py-3 px-4 rounded-xl text-sm transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color =
                      "var(--text-primary)";
                    (e.target as HTMLElement).style.background =
                      "var(--bg-subtle)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color =
                      "var(--text-secondary)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-[var(--border-light)]">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="btn-primary w-full justify-center mt-2"
                >
                  Liên hệ hợp tác
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
