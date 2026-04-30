"use client";

import { useState, useEffect } from "react";

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const currentProgress = scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-20 right-4 z-50 hidden lg:block ${className}`}>
      <div className="w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-b from-[#23B349] to-[#0F4B1F] transition-all duration-300 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-2 text-center font-medium">
        {Math.round(progress)}%
      </div>
    </div>
  );
}
