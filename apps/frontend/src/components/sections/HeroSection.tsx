'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background-page" style={{ backgroundColor: 'var(--color-background-page)' }}>
      {/* Wavy Background Shape */}
      <div className="absolute top-0 right-0 w-full h-full z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary">
          <path d="M784.5,622.5Q684,745,557.5,821.5Q431,898,315.5,815Q200,732,168.5,616Q137,500,165.5,381.5Q194,263,307,185.5Q420,108,550.5,152.5Q681,197,783,298.5Q885,400,784.5,622.5Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <div className="space-y-0">
            <h1 className="heading-hero text-primary" style={{ color: 'var(--color-primary)' }}>
              {t('headline1')}
            </h1>
            <h2 className="heading-hero text-body-text" style={{ color: 'var(--color-body-text)' }}>
              {t('headline2')}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="bg-primary text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm" style={{ backgroundColor: 'var(--color-primary)' }}>
                {t('badge')}
             </div>
          </div>
        </div>

        <div className="relative">
          {/* Product Placeholder */}
          <div className="w-full aspect-square flex items-center justify-center relative">
            <div className="w-64 h-96 bg-zinc-200 rounded-3xl shadow-drop relative overflow-hidden" style={{ borderRadius: '2rem' }}>
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold text-xl uppercase tracking-tighter rotate-12">
                    Vita Product
                </div>
            </div>
            
            {/* Star Badge Element */}
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-center p-4 font-black uppercase text-xs rotate-12 shadow-lg">
                Freshly Baked
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
