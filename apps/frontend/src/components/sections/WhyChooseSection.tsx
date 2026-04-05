'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const QUALITY_CARDS = [
  {
    id: '01',
    title: 'Quality You Can Trust',
    description: 'Carefully produced with high standards to ensure consistent taste and reliable results every time',
    image: '/assets/quality/quality-1.png',
    bgColor: '#A099B5',
    circleColor: '#DDD4F8',
    numberColor: 'text-[#686577]/50', // Extracted R:0.683 G:0.655 B:0.768
  },
  {
    id: '02',
    title: 'Natural Ingredients',
    description: 'We use only the finest ingredients sourced from local farmers to provide the best quality for your family',
    image: '/assets/quality/quality-2.png',
    bgColor: '#7E4627',
    circleColor: '#F28B52',
    numberColor: 'text-[#61341F]/40', // Extracted R:0.614 G:0.342 B:0.186
  },
  {
    id: '03',
    title: 'Modern Production',
    description: 'Our state-of-the-art facilities in Debre Sina ensure that every product meets international safety standards',
    image: '/assets/quality/quality-3.png',
    bgColor: '#9D8562',
    circleColor: '#EECD9C',
    numberColor: 'text-[#615238]/50', // Extracted R:0.616 G:0.522 B:0.384
  },
];

export default function WhyChooseSection() {
  const t = useTranslations();

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%]">
        
        {/* Section Heading */}
        <h2 className="text-[#23B349] text-5xl md:text-6xl lg:text-[64px] font-bold font-['Funnel_Display'] leading-tight mb-16 lg:mb-20">
          Why Choose Our Products?
        </h2>

        {/* Vertical Cards Container */}
        <div className="flex flex-col gap-6 lg:gap-[24px]">
          {QUALITY_CARDS.map((card) => (
            <div 
              key={card.id}
              className="relative w-full min-h-[600px] lg:h-[713px] rounded-lg overflow-hidden flex flex-col lg:flex-row items-center group"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Blurred Background Decoration */}
              <div 
                className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] lg:w-[795px] lg:h-[610px] rounded-full blur-[100px] lg:blur-[250px] opacity-60 z-0"
                style={{ backgroundColor: card.circleColor }}
              />

              {/* Content Area */}
              <div className="relative z-10 flex-1 p-8 lg:p-20 flex flex-col justify-between h-full">
                {/* Large Background Number */}
                <div className={`absolute top-10 left-10 lg:left-20 font-['Outfit'] font-black text-[180px] md:text-[250px] lg:text-[320px] leading-none select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 ${card.numberColor}`}>
                  {card.id}
                </div>

                {/* Text Group */}
                <div className="mt-auto max-w-2xl flex flex-col gap-6">
                  <h3 className="text-[#BBE7C7] text-3xl lg:text-[48px] font-bold font-['Funnel_Display'] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#333733] text-xl lg:text-[32px] font-['Outfit'] font-normal leading-[1.125] lg:leading-[36px]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Image Area */}
              <div className="relative z-10 flex-1 w-full h-[400px] lg:h-full p-8 lg:p-20 lg:pr-32">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
