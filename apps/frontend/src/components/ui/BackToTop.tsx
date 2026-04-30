"use client";

import { useState, useEffect } from "react";

interface BackToTopProps {
  className?: string;
}

export default function BackToTop({ className = "" }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-[#23B349] text-white rounded-full shadow-lg hover:bg-[#0F4B1F] transition-all duration-300 opacity-0 invisible z-40 flex items-center justify-center group ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      } ${className}`}
      aria-label="Back to top"
    >
      <svg 
        className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}
