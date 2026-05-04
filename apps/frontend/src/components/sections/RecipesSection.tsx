"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const recipes = [
  {
    id: 1,
    title: "Creamy Delights",
    description: "Experience the rich, velvety texture of our signature cream biscuits.",
    image: "/assets/recipes/recipe-1.png",
    color: "#2976CA",
  },
  {
    id: 2,
    title: "Oreo Moments",
    description: "Perfectly balanced chocolate and cream for your tea time.",
    image: "/assets/recipes/recipe-2.png",
    color: "#1648B5",
  },
  {
    id: 3,
    title: "Sweet Bites",
    description: "Small, crunchy treats that bring big smiles to everyone.",
    image: "/assets/recipes/recipe-3.png",
    color: "#23B349",
  },
  {
    id: 4,
    title: "Morning Fresh",
    description: "Start your day with our high-quality wheat flour bakes.",
    image: "/assets/recipes/recipe-4.png",
    color: "#7E4627",
  },
  {
    id: 5,
    title: "Baker's Secret",
    description: "The secret ingredient to all your favorite home recipes.",
    image: "/assets/recipes/recipe-5.png",
    color: "#A099B5",
  }
];

export default function RecipesSection() {
  const t = useTranslations("Recipes");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section id="recipes" className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 lg:px-24 mb-12 sm:mb-16 md:mb-20 flex flex-col items-center text-center">
        <p className="font-['Funnel_Display'] font-semibold text-base sm:text-[18px] md:text-[20px] text-[#23B349] tracking-widest uppercase mb-3 sm:mb-4">
          Our Recipes Made Simple
        </p>
        <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl md:text-[64px] lg:text-[80px] text-[#404040] leading-[1.05] tracking-[-0.02em] px-4">
          Mix. Match. <span className="text-[#23B349]">Enjoy</span>
        </h2>
      </div>

      {/* Horizontal Scroll Area - Improved mobile padding and card sizing */}
      <div className="relative w-full">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-12 px-5 sm:px-6 md:px-12 lg:px-24 scrollbar-hide snap-x snap-mandatory -mx-1"
        >
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[480px] h-[420px] sm:h-[480px] md:h-[520px] lg:h-[600px] rounded-3xl sm:rounded-[32px] md:rounded-[40px] overflow-hidden snap-center group cursor-pointer shadow-2xl flex flex-col transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Top Half: Product Image Area */}
              <div className="relative w-full h-[60%] bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center p-8">
                 <Image 
                  src={recipe.image} 
                  alt={recipe.title} 
                  fill 
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bottom Half: Solid Color Text Area */}
              <div 
                className="relative w-full h-[40%] p-6 sm:p-8 flex flex-col justify-center gap-2 sm:gap-3"
                style={{ backgroundColor: recipe.color }}
              >
                {/* Overlapping Arrow Indicator */}
                <div className="absolute -top-6 right-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={recipe.color} strokeWidth="3" className="translate-x-[1px] -translate-y-[1px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>

                <h3 className="font-['Funnel_Display'] font-bold text-[24px] sm:text-[32px] lg:text-[36px] text-white leading-tight">
                  {recipe.title}
                </h3>
                <p className="font-['Outfit'] font-normal text-[14px] sm:text-[16px] text-white/90 leading-relaxed line-clamp-3">
                  {recipe.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar Container */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 mt-12">
          <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#23B349] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(10, scrollProgress)}%` }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
