'use client';

import { useTranslations } from 'next-intl';

export default function WhyChooseSection() {
  const t = useTranslations('WhyChoose');

  const cards = [
    {
        id: 'quality',
        bgColor: 'bg-[#a099b5]',
        textColor: 'text-white',
        labelColor: 'text-purple-200',
        image: '/assets/quality/quality-control.svg'
    },
    {
        id: 'natural',
        bgColor: 'bg-[#23b349]',
        textColor: 'text-white',
        labelColor: 'text-green-200',
        image: '/assets/quality/production-process.svg'
    },
    {
        id: 'innovation',
        bgColor: 'bg-[#9d8562]',
        textColor: 'text-white',
        labelColor: 'text-tan-200',
        image: '/assets/quality/raw-materials.svg'
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
            <div className="w-full lg:w-1/2 bg-white/10 flex items-center justify-center p-12 overflow-hidden">
                <img 
                    src={card.image} 
                    alt={t(`cards.${card.id}.heading`)} 
                    className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-300"
                />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
