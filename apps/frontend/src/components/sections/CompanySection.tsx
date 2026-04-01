'use client';

import { useTranslations } from 'next-intl';

export default function CompanySection() {
  const t = useTranslations('Company');

  return (
    <section className="py-24 bg-[#fdfaf5]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-2">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                {t('label')}
            </span>
            <h2 className="heading-section">
                {t('heading')}
            </h2>
          </div>
          <p className="text-body-large text-zinc-700 max-w-xl">
            {t('body')}
          </p>
          <button className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-colors">
            {t('cta')}
          </button>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Product Image Placeholder (Snack Bag) */}
            <div className="relative w-full max-w-md aspect-square bg-zinc-100 rounded-full flex items-center justify-center">
                 <div className="w-56 h-80 bg-zinc-300 rounded-3xl rotate-6 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-bold text-lg uppercase tracking-widest -rotate-6">
                        Snack Bag
                    </div>
                 </div>
                 
                 {/* Decorative organic shapes */}
                 <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-200 rounded-full opacity-50 blur-2xl"></div>
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'var(--color-primary)' }}></div>
            </div>
        </div>
      </div>
    </section>
  );
}
