"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 18,
  xOffset = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Never start a whole section at opacity: 0. Image-heavy sections used to be
  // invisible during hydration/lazy loading, which looked like broken images
  // before Framer Motion revealed them. Keep content painted immediately and
  // retain only a small movement reveal for visual polish.
  const initialState = reduceMotion
    ? { opacity: 1, y: 0, x: 0 }
    : {
        opacity: 1,
        y: Math.sign(yOffset) * Math.min(Math.abs(yOffset), 18),
        x: Math.sign(xOffset) * Math.min(Math.abs(xOffset), 18),
      };

  return (
    <motion.div
      ref={ref}
      initial={initialState}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{
        once,
        amount: 0.08,
        margin: "80px 0px 80px 0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        ease: [0.25, 1, 0.5, 1],
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
