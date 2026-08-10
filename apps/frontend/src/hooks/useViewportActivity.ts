"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether a section is close enough to the viewport to justify running
 * continuous visual work such as marquees, autoplay carousels, or CSS loops.
 *
 * We intentionally start paused so below-the-fold animations do not all begin
 * during hydration. Browsers without IntersectionObserver fall back to active.
 */
export function useViewportActivity<T extends HTMLElement = HTMLElement>(
  rootMargin = "200px 0px",
) {
  const ref = useRef<T | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin,
        threshold: 0.01,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isActive };
}
