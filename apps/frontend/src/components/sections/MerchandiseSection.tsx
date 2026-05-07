'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function MerchandiseSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Merchandise");
  const c = content?.[locale as string] || content?.en;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const MERCH_KEYS = ['necklace', 'cap', 'tshirt', 'sweeter', 'signatureCap', 'badge'] as const;
  const MERCH_IMAGES = [
    '/assets/merchandise/merch-1.png',
    '/assets/merchandise/merch-2.png',
    '/assets/merchandise/merch-3.png',
    '/assets/merchandise/merch-4.png',
    '/assets/merchandise/merch-5.png',
    '/assets/merchandise/merch-red.png',
  ];
  const MERCH_BGS = ['#23B349', '#23B349', '#23B349', '#23B349', '#23B349', '#FF0707'];

  const MERCH_ITEMS = MERCH_KEYS.map((key, i) => ({
    id: i + 1,
    image: MERCH_IMAGES[i],
    title: c?.items?.[i]?.title || t(`items.${key}.title`),
    desc: c?.items?.[i]?.desc || t(`items.${key}.desc`),
    bg: MERCH_BGS[i],
    isSpecial: i === 5,
  }));

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
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[128px] flex flex-col items-center">
        
        {/* Header Column */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20 gap-4">
          <p className="font-['Funnel_Display'] font-medium text-[20px] text-[#404040] leading-tight">
            {c?.label || t("label")}
          </p>
          <h2 className="font-['Outfit'] font-black text-[50px] sm:text-[64px] lg:text-[80px] text-[#23B349] leading-[0.9] tracking-[-0.02em]">
            {c?.heading || t("heading")}
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-12 w-full snap-x snap-mandatory"
        >
          {MERCH_ITEMS.map((item) => (
            <div 
              key={item.id}
              className={`flex-shrink-0 relative rounded-[24px] overflow-hidden select-none group w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[740px] lg:h-[740px] snap-center ${item.isSpecial ? 'bg-[#FF0707]' : 'bg-[#F3F3F3]'}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${item.isSpecial ? 'mix-blend-soft-light' : ''}`}
              />
              
              {/* Product Info Area */}
              {item.isSpecial ? (
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 z-10 bg-gradient-to-t from-[#FF0707]/90 to-transparent">
                  <h3 className="font-['Funnel_Display'] font-medium text-[20px] sm:text-[24px] text-[#FFEC19] leading-none mb-4">
                    {item.title}
                  </h3>
                  <p className="font-['Outfit'] font-bold text-[32px] sm:text-[48px] lg:text-[64px] text-white leading-[0.96] tracking-[-0.02em] max-w-[600px]">
                    {item.desc}
                  </p>
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8" style={{ backgroundColor: item.bg }}>
                  <h3 className="font-['Outfit'] font-bold text-[32px] lg:text-[40px] xl:text-[48px] text-white leading-tight tracking-[-0.02em] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Outfit'] font-medium text-[14px] lg:text-[16px] text-white/90">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Custom Scroll Bar */}
        <div className="mt-8 flex justify-center w-full">
          <div className="relative w-full max-w-[1067px] h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#23B349] transition-all duration-100 rounded-full"
              style={{ 
                width: '30%', // Simulated thumb width
                transform: `translateX(${scrollProgress * 2.33}%)` // Factor to map progress to track
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
