"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
  // Controls if animation should only happen once or every time it enters the viewport
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  xOffset = 0,
  className = "",
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      exit={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
      }}
      viewport={{
        once,
        amount: 0.15,
        margin: "-50px 0px -50px 0px",
      }}
      transition={{
        duration,
        ease: [0.25, 1, 0.5, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
