'use client';

import { useTranslations } from 'next-intl';

export default function WhyChooseSection() {
  const t = useTranslations('WhyChoose');

  const cards = [
    {
        id: 'quality',
        bgColor: 'bg-[#1a1a1a]',
        textColor: 'text-white',
        labelColor: 'text-zinc-500'
    },
    {
        id: 'natural',
        bgColor: 'bg-[#23b349]',
        textColor: 'text-white',
        labelColor: 'text-green-900/60'
    },
    {
        id: 'innovation',
        bgColor: 'bg-[#4d4d33]',
        textColor: 'text-white',
        labelColor: 'text-yellow-100/40'
    }
  ];

  return (
    <section className="py-24 bg-[#f3f0ff]">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="heading-section text-center">
            {t('heading')}
        </h2>
      </div>

      <div className="container mx-auto px-6 space-y-8">
        {cards.map((card) => (
          <div key={card.id} className={`${card.bgColor} ${card.textColor} rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[400px] shadow-lg`}>
            <div className="p-12 lg:p-20 flex-1 flex flex-col justify-center space-y-6">
                <span className={`text-sm font-bold uppercase tracking-widest ${card.labelColor}`}>
                    {card.id}
                </span>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight leading-none">
                    {t(`cards.${card.id}.heading`)}
                </h3>
                <p className="text-xl opacity-80 max-w-md">
                    {t(`cards.${card.id}.body`)}
                </p>
            </div>
            <div className="w-full lg:w-1/2 bg-white/10 flex items-center justify-center p-12">
                 <div className="w-full h-full border-4 border-dashed border-white/20 rounded-[2rem] flex items-center justify-center text-white/40 font-bold uppercase tracking-widest">
                    Card Image
                 </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
