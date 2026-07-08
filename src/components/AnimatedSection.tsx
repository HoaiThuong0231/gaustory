"use client";

import { useRef, RefObject } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

function getInitial(direction: AnimatedSectionProps["direction"]) {
  const offset = 30;
  switch (direction) {
    case "up":
      return { opacity: 0, y: offset };
    case "down":
      return { opacity: 0, y: -offset };
    case "left":
      return { opacity: 0, x: offset };
    case "right":
      return { opacity: 0, x: -offset };
    default:
      return { opacity: 0 };
  }
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as RefObject<Element>, {
    once,
    margin: "-60px",
  });

  const initial = getInitial(direction);
  const animate = isInView
    ? {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.div>
  );
}
