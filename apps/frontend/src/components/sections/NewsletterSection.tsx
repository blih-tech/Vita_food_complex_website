'use client';

import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations();

  return (
    <section className="relative w-full h-[602px] bg-white flex flex-col items-center justify-center overflow-hidden px-6">
      
      {/* Background Graphic (replace with Bg.png when available) */}
      <div 
        className="absolute inset-0 bg-[#E9F7ED] pointer-events-none opacity-50"
        style={{
          backgroundImage: "url('/assets/hero/biscuit-piece.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute inset-0 bg-white/40 pointer-events-none backdrop-blur-[2px]" />

      <div className="relative z-10 flex flex-col items-center text-center gap-10 w-full max-w-[800px]">
        <h2 className="font-['Outfit'] font-black text-[40px] sm:text-[56px] lg:text-[72px] text-[#404040] leading-[1.1] tracking-[-0.02em]">
          Enter your Email Address to get latest news
        </h2>
        
        <form 
          className="flex flex-col sm:flex-row w-full max-w-[600px] gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Enter your Email Address"
            className="flex-1 px-8 py-5 rounded-full border-2 border-[#E5E5E5] bg-white text-[18px] font-['Outfit'] outline-none focus:border-[#23B349] transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-[#404040] text-white px-10 py-5 rounded-full font-['Funnel_Display'] font-bold text-[20px] hover:bg-[#2a2a2a] transition-colors shadow-lg active:scale-95 whitespace-nowrap"
          >
            Subscribe →
          </button>
        </form>
      </div>

    </section>
  );
}
