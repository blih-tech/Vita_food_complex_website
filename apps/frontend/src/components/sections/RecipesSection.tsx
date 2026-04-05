"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const RECIPES = [
  {
    id: 1,
    title: "Kiyu - Cream With Milk",
    description: "A delightful blend of kiyu biscuits and fresh milk cream.",
    image: "/assets/recipes/recipe-1.png",
  },
  {
    id: 2,
    title: "Bora - Choco Fusion",
    description: "Rich chocolate fusion with crunchy bora biscuit layers.",
    image: "/assets/recipes/recipe-2.png",
  },
  {
    id: 3,
    title: "Vita - Morning Flour",
    description: "Perfect morning pancakes using our premium wheat flour.",
    image: "/assets/recipes/recipe-3.png",
  },
  {
    id: 4,
    title: "Creamy Delights",
    description: "Hand-crafted creamy delights for your tea time.",
    image: "/assets/recipes/recipe-4.png",
  },
  {
    id: 5,
    title: "Biscuit Crumble",
    description: "A modern twist on the classic fruit crumble.",
    image: "/assets/recipes/recipe-5.png",
  },
];

export default function RecipesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="bg-[#E9F7ED] py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1788px] mx-auto px-6 lg:px-[128px]">
        {/* Header - Figma: gap=72px, gap=16px */}
        <div className="flex flex-col gap-4 mb-12 lg:mb-[72px]">
          <h2 className="text-[#23B349] text-4xl md:text-5xl lg:text-[64px] font-bold font-['Funnel_Display'] leading-tight">
            Recipes Made Simple
          </h2>
          <p className="text-[#333733] text-lg lg:text-xl font-['Funnel_Display'] font-normal opacity-80">
            Mix. Match. Enjoy
          </p>
        </div>

        {/* Horizontal Scroll Container - Figma: gap=96px */}
        <div
          ref={scrollRef}
          className="flex gap-8 lg:gap-12 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-8"
          style={{ scrollSnapType: "x proximity" }}
        >
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] group relative select-none"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Card Container */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                {/* Main Image */}
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Path */}
                <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
                  <svg
                    viewBox="0 0 400 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    <path
                      d="M400 150V0C400 0 291 19.5 200 20.5C109 21.5 0 0 0 0V150H400Z"
                      fill="#23B349"
                    />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 lg:p-6 z-20 flex flex-col gap-2">
                  <div className="flex flex-col gap-1 pr-10">
                    <h3 className="text-white text-xl lg:text-2xl font-bold font-['Funnel_Display'] leading-tight">
                      {recipe.title}
                    </h3>
                    <p className="text-white/90 text-sm lg:text-base font-['Outfit'] font-normal line-clamp-2">
                      {recipe.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <rect width="64" height="64" rx="8" fill="white" />
                      <path
                        d="M24 40L40 24M40 24H28M40 24V36"
                        stroke="#23B349"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scroll Bar */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-[1067px] h-2 bg-[#CBC59D] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#333733] transition-all duration-100 rounded-full"
              style={{
                width: "30%",
                transform: `translateX(${scrollProgress * 2.33}%)`,
              }}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
