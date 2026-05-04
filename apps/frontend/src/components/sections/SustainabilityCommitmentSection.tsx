"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SustainabilityCommitmentSection() {
  const t = useTranslations("Sustainability");

  const commitments = [
    {
      title: "Local Sourcing",
      items: [
        "Partnering with local farmers",
        "Supporting Ethiopian agriculture",
        "Strengthening rural economies",
        "24/7 Property Support",
      ],
    },
    {
      title: "Community Impact",
      items: [
        "150–200 jobs created",
        "Skills development opportunities",
        "Local economic growth",
        "24/7 Property Support",
      ],
    },
    {
      title: "Responsible Production",
      items: [
        "Efficient manufacturing processes",
        "Waste reduction systems",
        "By-products reused for livestock feed",
        "24/7 Property Support",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1400px]">
        {/* ── HEADING ── */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#23B349] mb-6">
            Our Commitment
          </h2>
          <p className="font-[family-name:var(--font-funnel-display)] font-medium text-[16px] md:text-[20px] lg:text-[24px] text-[#404040]/70 max-w-[1100px] mx-auto leading-relaxed">
            We believe sustainability is not a choice — it&apos;s a responsibility. From sourcing local wheat to
            minimizing waste, every step of our process is designed to create long-term value for people,
            communities, and the environment
          </p>
        </div>

        {/* ── COMMITMENT CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-32">
          {commitments.map((c, i) => (
            <div key={i} className="bg-gradient-to-br from-[#E9F7ED] to-[#23B349]/10 rounded-[32px] p-8 md:p-10 border border-[#23B349]/10">
              <h3 className="font-[family-name:var(--font-outfit)] font-bold text-[24px] md:text-[28px] text-[#23B349] mb-8">
                {c.title}
              </h3>
              <div className="space-y-4">
                {c.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-[#23B349]/5 shadow-sm">
                    <CheckCircle2 className="text-[#23B349] w-5 h-5 flex-shrink-0" />
                    <span className="font-[family-name:var(--font-funnel-display)] text-[14px] md:text-[16px] text-[#404040]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── QUICK FACT SECTION ── */}
        <div className="relative w-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
          {/* Background — Using a placeholder green texture or image */}
          <div className="absolute inset-0 bg-[#23B349]">
             <Image src="/assets/about/wheat-farming.png" alt="" fill className="object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-br from-[#23B349]/80 to-[#0D3B1F]/90" />
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column Stats */}
            <div className="md:col-span-4 flex flex-col gap-12">
               <div>
                 <span className="font-[family-name:var(--font-outfit)] font-black text-[60px] md:text-[80px] lg:text-[100px] text-white leading-none tracking-tighter">+11</span>
                 <p className="font-[family-name:var(--font-funnel-display)] text-white/70 text-[16px] md:text-[18px]">Unique SKUs for Everyone.</p>
               </div>
               <div>
                 <span className="font-[family-name:var(--font-outfit)] font-black text-[60px] md:text-[80px] lg:text-[100px] text-white leading-none tracking-tighter text-outline">2tn</span>
                 <p className="font-[family-name:var(--font-funnel-display)] text-white/70 text-[16px] md:text-[18px]">Biscuits/Hour</p>
               </div>
            </div>

            {/* Middle Column Stats */}
            <div className="md:col-span-4 flex flex-col items-center text-center gap-12 md:gap-20">
               <div>
                 <span className="font-[family-name:var(--font-outfit)] font-black text-[60px] md:text-[80px] lg:text-[100px] text-white leading-none tracking-tighter">60tn</span>
                 <p className="font-[family-name:var(--font-funnel-display)] text-white/70 text-[16px] md:text-[18px]">Tones of Flour Production/Day</p>
               </div>
               
               <div className="bg-white/10 backdrop-blur-md px-10 py-4 rounded-2xl border border-white/20">
                  <h4 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[40px] lg:text-[50px] text-white leading-none">Quick Fact</h4>
               </div>

               <div>
                 <span className="font-[family-name:var(--font-outfit)] font-black text-[60px] md:text-[80px] lg:text-[120px] text-white leading-none tracking-tighter">22Km²</span>
                 <p className="font-[family-name:var(--font-funnel-display)] text-white/70 text-[16px] md:text-[18px]">Factory Size in Square Kilometer</p>
               </div>
            </div>

            {/* Right Column Stats */}
            <div className="md:col-span-4 flex flex-col gap-12 text-right items-end">
               <div>
                 <span className="font-[family-name:var(--font-outfit)] font-black text-[60px] md:text-[80px] lg:text-[100px] text-white leading-none tracking-tighter">+200</span>
                 <p className="font-[family-name:var(--font-funnel-display)] text-white/70 text-[16px] md:text-[18px]">Jobs Created</p>
               </div>
               <div>
                 <span className="font-[family-name:var(--font-outfit)] font-black text-[50px] md:text-[70px] lg:text-[80px] text-white leading-none tracking-tighter">$1.4M</span>
                 <div className="w-[120px] h-[60px] relative mt-2 opacity-50 ml-auto">
                    <Image src="/assets/hero/badge.svg" alt="" fill className="object-contain" />
                 </div>
               </div>
               <div>
                 <span className="font-[family-name:var(--font-outfit)] font-black text-[60px] md:text-[80px] lg:text-[100px] text-white leading-none tracking-tighter">Br210M</span>
                 <p className="font-[family-name:var(--font-funnel-display)] text-white/70 text-[16px] md:text-[18px]">Total Investment</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
