"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Chuyển sang Light Mode" : "Chuyển sang Dark Mode"}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border-none cursor-pointer transition-all duration-300"
      style={{
        background: isDark ? "#ffffff" : "var(--accent)",
        boxShadow: isDark
          ? "0 0 10px 2px rgba(255,255,255,0.15)"
          : "0 0 10px 2px rgba(26,127,212,0.30)",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
          >
            <Sun size={16} strokeWidth={1.8} color="var(--accent)" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
          >
            <Moon size={16} strokeWidth={1.8} color="#ffffff" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
