"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the loader once the DOM is fully loaded/mounted
    const handleLoad = () => {
      // Small buffer for smoother feeling
      const timer = setTimeout(() => {
        setLoading(false);
      }, 900);
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback in case load event already fired
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
    if (!loading) {
      if (typeof window !== "undefined") {
        (window as any).__pageLoaded = true;
        document.dispatchEvent(new CustomEvent("page-loaded"));
      }
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07391b] text-white select-none"
        >
          {/* Decorative background gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,247,237,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-xs text-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="relative w-24 h-24 mb-6"
            >
              {/* Spinning Golden wheat/circle ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-t-[#D4AF37] border-r-transparent border-b-[#D4AF37]/30 border-l-transparent"
              />
              
              {/* Center Logo representation (Vita V symbol) */}
              <div className="absolute inset-2 bg-emerald-800 rounded-full flex items-center justify-center shadow-lg border border-[#D4AF37]/20">
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#D4AF37]"
                >
                  <path
                    d="M10 12 L20 28 L30 12"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 12 L20 20 L25 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 }
              }}
              className="font-outfit text-2xl font-bold tracking-wider text-[#E9F7ED]"
            >
              VITA
            </motion.h1>
            
            {/* Tagline */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 0.7,
                transition: { delay: 0.5, duration: 0.5 }
              }}
              className="mt-2 text-xs uppercase tracking-widest text-[#E9F7ED]/70 font-inter"
            >
              Hydro Agro-Processing
            </motion.p>

            {/* Small dynamic progress dot indicators */}
            <div className="flex gap-1.5 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-[#D4AF37]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
