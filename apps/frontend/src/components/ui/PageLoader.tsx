"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 900);

      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  useEffect(() => {
    if (!loading && typeof window !== "undefined") {
      (window as typeof window & { __pageLoaded?: boolean }).__pageLoaded = true;
      document.dispatchEvent(new CustomEvent("page-loaded"));
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#00843D] text-white select-none"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10)_0%,rgba(0,132,61,0)_68%)]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.82, opacity: 0, y: 12 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: "easeOut" },
              }}
              className="relative mb-7 h-[120px] w-[120px] sm:h-[136px] sm:w-[136px]"
            >
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-[#D4AF37]/45 border-x-transparent"
              />

              <Image
                src="/assets/brand/vita-logo.svg"
                alt="Vita Food Complex"
                fill
                priority
                unoptimized
                sizes="136px"
                className="object-contain drop-shadow-[0_14px_32px_rgba(0,0,0,0.22)]"
              />
            </motion.div>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 0.72,
                transition: { delay: 0.25, duration: 0.45 },
              }}
              className="font-[family-name:var(--font-funnel-display)] text-[11px] font-medium uppercase tracking-[0.24em] text-[#E9F7ED] sm:text-xs"
            >
              Hydro Agro-Processing
            </motion.p>

            <div className="mt-7 flex gap-1.5" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: i * 0.2,
                  }}
                  className="h-2 w-2 rounded-full bg-[#D4AF37]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
