'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const COLUMN_1_IMAGES = [
  '/assets/social/social-1.png',
  '/assets/social/social-2.png',
  '/assets/social/social-3.png',
];

const COLUMN_2_IMAGES = [
  '/assets/social/social-4.png',
  '/assets/social/social-5.png',
  '/assets/social/social-1.png',
];

const COLUMN_3_IMAGES = [
  '/assets/social/social-6.png',
  '/assets/social/social-7.png',
  '/assets/social/social-8.png',
];

const COLUMN_4_IMAGES = [
  '/assets/social/social-2.png',
  '/assets/social/social-3.png',
  '/assets/social/social-4.png',
];

const COLUMN_5_IMAGES = [
  '/assets/social/social-5.png',
  '/assets/social/social-6.png',
  '/assets/social/social-7.png',
];

interface ScrollingColumnProps {
  images: string[];
  direction: 'up' | 'down';
  speed?: string;
}

function ScrollingColumn({ images, direction, speed = '25s' }: ScrollingColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);
  const displayImages = [...images, ...images]; // Duplicate for seamless loop

  const handleMouseEnter = () => {
    if (columnRef.current) {
      columnRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (columnRef.current) {
      columnRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div 
      className="flex-1 overflow-hidden h-full relative min-w-[200px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={columnRef}
        className={`flex flex-col gap-4 md:gap-[16px] will-change-transform ${
          direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'
        }`}
        style={{ animationDuration: speed }}
      >
        {displayImages.map((src, idx) => (
          <div 
            key={idx} 
            className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Social moment ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialWallSection() {
  const t = useTranslations();

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden h-[1080px] flex items-center justify-center">
      
      {/* Background Scrolling Grid Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center opacity-70">
        
        {/* Grid Columns */}
        <div className="flex gap-4 h-[200%] w-[120%] -ml-[10%] transform rotate-[0deg]">
          <ScrollingColumn images={COLUMN_1_IMAGES} direction="up" speed="35s" />
          <ScrollingColumn images={COLUMN_2_IMAGES} direction="down" speed="40s" />
          <ScrollingColumn images={COLUMN_3_IMAGES} direction="up" speed="30s" />
          <ScrollingColumn images={COLUMN_4_IMAGES} direction="down" speed="45s" />
          <ScrollingColumn images={COLUMN_5_IMAGES} direction="up" speed="38s" />
        </div>

        {/* Gradient Overlays to fade top and bottom */}
        <div 
          className="absolute top-0 left-0 right-0 h-[250px] z-10 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to bottom, #FFFFFF 10%, rgba(255,255,255,0.7) 50%, transparent 100%)' 
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-[250px] z-10 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to top, #FFFFFF 10%, rgba(255,255,255,0.7) 50%, transparent 100%)' 
          }}
        />
        {/* Radial gradient to focus center */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(255,255,255,0.8)_70%,#FFFFFF_100%)]" />
      </div>

      {/* Center Content */}
      <div className="relative z-20 max-w-[1024px] mx-auto px-6 flex flex-col items-center justify-center text-center gap-12 bg-white/50 backdrop-blur-md p-12 rounded-[48px] shadow-2xl shadow-green-900/5">
        
        <div className="flex flex-col items-center gap-4">
          <p className="font-['Funnel_Display'] font-medium text-[20px] text-[#404040] leading-tight">
            Uplifting Every Daily Food Moment.
          </p>
          <h2 className="font-['Outfit'] font-black text-[50px] sm:text-[64px] lg:text-[80px] text-[#23B349] leading-[0.9] tracking-[-0.02em]">
            Moments with Vita®
          </h2>
        </div>

        {/* Explore Button */}
        <button className="flex items-center justify-center gap-3 bg-[#23B349] text-white px-8 py-4 rounded-full font-['Funnel_Display'] font-medium text-[24px] leading-tight hover:bg-[#1a8e38] transition-colors group">
          Explore
          <span className="font-['Outfit'] text-[20px] group-hover:translate-x-1 transition-transform">→</span>
        </button>

      </div>

      <style jsx global>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
      `}</style>
    </section>
  );
}
