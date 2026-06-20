"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offsets = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  };

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...offsets[direction] };

  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
