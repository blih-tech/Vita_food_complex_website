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
    <section id="recipes" className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 mb-16 sm:mb-20 flex flex-col items-center text-center">
        <p className="font-['Funnel_Display'] font-semibold text-[18px] sm:text-[20px] text-[#23B349] tracking-wider uppercase mb-4">
          Our Recipes Made Simple
        </p>
        <h2 className="font-['Outfit'] font-black text-[48px] sm:text-[64px] lg:text-[80px] text-[#404040] leading-tight tracking-tight">
          Mix. Match. <span className="text-[#23B349]">Enjoy</span>
        </h2>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="relative w-full">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-12 px-6 sm:px-12 lg:px-24 scrollbar-hide snap-x snap-mandatory"
        >
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              className="relative shrink-0 w-[300px] sm:w-[450px] lg:w-[544px] h-[450px] sm:h-[550px] lg:h-[593px] rounded-[32px] sm:rounded-[48px] overflow-hidden snap-center group cursor-pointer shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: recipe.color }}
            >
              {/* Product Image */}
              <div className="absolute inset-0 z-0">
                 <Image 
                  src={recipe.image} 
                  alt={recipe.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-12 z-10 flex flex-col gap-3 sm:gap-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-['Funnel_Display'] font-bold text-[32px] sm:text-[36px] lg:text-[40px] text-white leading-tight">
                  {recipe.title}
                </h3>
                <p className="font-['Outfit'] font-normal text-[18px] sm:text-[20px] lg:text-[24px] text-white/90 leading-relaxed max-w-[400px]">
                  {recipe.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="absolute top-8 right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#23B349] transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
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
