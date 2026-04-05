'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const RECIPES = [
  {
    id: 1,
    title: 'Kiyu - Cream With Milk',
    description: 'A delightful blend of kiyu biscuits and fresh milk cream.',
    image: '/assets/recipes/recipe-1.png',
  },
  {
    id: 2,
    title: 'Bora - Choco Fusion',
    description: 'Rich chocolate fusion with crunchy bora biscuit layers.',
    image: '/assets/recipes/recipe-2.png',
  },
  {
    id: 3,
    title: 'Vita - Morning Flour',
    description: 'Perfect morning pancakes using our premium wheat flour.',
    image: '/assets/recipes/recipe-3.png',
  },
  {
    id: 4,
    title: 'Creamy Delights',
    description: 'Hand-crafted creamy delights for your tea time.',
    image: '/assets/recipes/recipe-4.png',
  },
  {
    id: 5,
    title: 'Biscuit Crumble',
    description: 'A modern twist on the classic fruit crumble.',
    image: '/assets/recipes/recipe-5.png',
  },
];

export default function RecipesSection() {
  const t = useTranslations();
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
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="bg-[#E9F7ED] py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%]">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 lg:mb-[72px]">
          <h2 className="text-[#23B349] text-5xl md:text-6xl lg:text-[64px] font-bold font-['Funnel_Display'] leading-tight">
            Recipes Made Simple
          </h2>
          <p className="text-[#333733] text-xl lg:text-2xl font-['Funnel_Display'] font-normal opacity-80">
            Mix. Match. Enjoy
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-12"
          style={{ scrollSnapType: 'x proximity' }}
        >
          {RECIPES.map((recipe) => (
            <div 
              key={recipe.id}
              className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[539px] group relative select-none"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Card Container */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#2976ca]">
                {/* Main Image */}
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Path (Vector 1) */}
                <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
                  <svg 
                    viewBox="0 0 539 203" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    <path 
                      d="M539 202.429V0C539 0 392.068 26.0958 268 26.9906C143.932 27.8853 0 0.000221252 0 0.000221252V202.429H539Z" 
                      fill="#23B349"
                    />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 z-20 flex flex-col gap-4">
                  <div className="flex flex-col gap-2 pr-12">
                    <h3 className="text-white text-2xl lg:text-[40px] font-bold font-['Funnel_Display'] leading-tight">
                      {recipe.title}
                    </h3>
                    <p className="text-white/90 text-sm lg:text-2xl font-['Outfit'] font-normal line-clamp-2">
                      {recipe.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center cursor-pointer transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <rect width="64" height="64" rx="8" fill="white" />
                      <path d="M24 40L40 24M40 24H28M40 24V36" stroke="#23B349" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scroll Bar */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[1067px] h-2 bg-[#CBC59D] rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#333733] transition-all duration-100 rounded-full"
              style={{ 
                width: '30%', // Simulated thumb width
                transform: `translateX(${scrollProgress * 2.33}%)` // 2.33 factor to map 0-100 progress to thumb travel
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
