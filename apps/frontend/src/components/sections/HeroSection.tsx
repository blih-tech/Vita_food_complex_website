'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Green Wavy Organic Background Shape */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary opacity-90"></div>
        <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <path 
            d="M0,400 Q360,200 720,400 T1440,400 L1440,800 L0,800 Z" 
            fill="var(--color-primary)"
            opacity="0.3"
          />
          <path 
            d="M0,500 Q360,300 720,500 T1440,500 L1440,800 L0,800 Z" 
            fill="var(--color-primary)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 min-h-screen">
        <div className="space-y-8">
          <div className="space-y-0">
            <h1 className="heading-hero text-primary" style={{ color: 'var(--color-primary)' }}>
              {t('headline1')}
            </h1>
            <h2 className="heading-hero" style={{ color: 'var(--color-body-text)' }}>
              {t('headline2')}
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Product Package Image Floating Center-Right */}
          <div className="relative z-10">
            <img 
              src="/assets/hero/product-package.svg" 
              alt="Vita Product Package" 
              className="w-80 h-96 mx-auto transform hover:scale-105 transition-transform duration-300"
            />
            {/* Star/Badge Element Bottom-Left */}
            <img 
              src="/assets/hero/star-badge.svg" 
              alt="Premium Quality" 
              className="absolute bottom-8 left-8 w-24 h-24 transform rotate-12 hover:rotate-0 transition-transform duration-300"
            />
          </div>
          
          {/* Scattered Biscuit Pieces Around Product */}
          <img 
            src="/assets/hero/biscuit-piece.svg" 
            alt="Biscuit Piece" 
            className="absolute top-10 right-10 w-16 h-16 transform rotate-45 hover:rotate-90 transition-transform duration-300"
          />
          <img 
            src="/assets/hero/biscuit-piece.svg" 
            alt="Biscuit Piece" 
            className="absolute bottom-20 right-20 w-12 h-12 transform -rotate-12 hover:rotate-0 transition-transform duration-300"
          />
          <img 
            src="/assets/hero/biscuit-piece.svg" 
            alt="Biscuit Piece" 
            className="absolute top-32 left-8 w-14 h-14 transform rotate-12 hover:rotate-45 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
