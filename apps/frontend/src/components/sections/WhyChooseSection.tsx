'use client';

import { useTranslations } from 'next-intl';

type Card = {
  id: 'quality' | 'natural' | 'innovation';
  number: string;
  bgClass: string;
  numClass: string;
  image: string;
};

const CARDS: Card[] = [
  {
    id: 'quality',
    number: '01',
    bgClass: 'bg-[#A099B5]',
    numClass: 'text-[#8E87A3]',
    image: '/assets/quality/quality-control.svg',
  },
  {
    id: 'natural',
    number: '02',
    bgClass: 'bg-[#23B349]',
    numClass: 'text-[#1E9E41]',
    image: '/assets/quality/production-process.svg',
  },
  {
    id: 'innovation',
    number: '03',
    bgClass: 'bg-[#9D8562]',
    numClass: 'text-[#8A7455]',
    image: '/assets/quality/raw-materials.svg',
  },
];

export default function WhyChooseSection() {
  const t = useTranslations('WhyChoose');

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-[#F0EDF8]">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Section heading */}
        <h2
          className="font-['Funnel_Display'] font-bold text-[#333733] leading-none mb-12 lg:mb-16"
          style={{ fontSize: 'clamp(36px, 3.3vw, 64px)' }}
        >
          {t('heading')}
        </h2>

        {/* Stacked cards */}
        <div className="space-y-6 lg:space-y-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-3xl lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[280px] lg:min-h-[380px] shadow-lg ${card.bgClass}`}
            >
              {/* Decorative large number */}
              <span
                className={`absolute top-1/2 left-4 lg:left-8 -translate-y-1/2 font-['Outfit'] font-black leading-none pointer-events-none select-none opacity-35 ${card.numClass}`}
                style={{ fontSize: 'clamp(120px, 16vw, 320px)' }}
                aria-hidden="true"
              >
                {card.number}
              </span>

              {/* Left: text */}
              <div className="relative z-10 flex-1 flex flex-col justify-center px-8 py-10 lg:px-16 lg:py-16 gap-4 lg:gap-6">
                <h3
                  className="font-['Funnel_Display'] font-bold text-white leading-snug"
                  style={{ fontSize: 'clamp(28px, 2.5vw, 48px)' }}
                >
                  {t(`cards.${card.id}.heading`)}
                </h3>
                <p className="font-['Outfit'] font-normal text-white/80 text-lg lg:text-2xl leading-relaxed max-w-lg">
                  {t(`cards.${card.id}.body`)}
                </p>
              </div>

              {/* Right: image */}
              <div className="relative w-full lg:w-[45%] flex-shrink-0 min-h-[200px] lg:min-h-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={t(`cards.${card.id}.heading`)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
