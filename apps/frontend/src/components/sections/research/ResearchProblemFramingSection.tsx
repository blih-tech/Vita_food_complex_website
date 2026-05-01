"use client";

import { Users, HelpCircle, Clock, Target } from "lucide-react";

export default function ResearchProblemFramingSection() {
  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-24 py-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-[45%] lg:sticky lg:top-32">
          <h2 className="font-['Outfit'] font-extrabold text-[48px] md:text-[60px] lg:text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349] uppercase">
            Problem Framing
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[18px] md:text-[24px] leading-tight text-[#8A8C8A] tracking-[-0.004em] max-w-[600px]">
            Every good story starts with a WHY. Defining the right problem helps us find the right solution
          </p>
        </div>

        {/* Right Side: Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[55%] lg:max-w-[745px]">
          
          {/* Card 1: Who */}
          <div className="bg-[#23B349] border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col h-[260px] md:h-[290px]">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-auto">
              <Users className="w-6 h-6 text-[#23B349]" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-white leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              Who
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-white leading-[138%] tracking-[-0.01em]">
              Children, parents, youth, and retail stakeholders
            </p>
          </div>

          {/* Card 2: What */}
          <div className="bg-white border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col h-[260px] md:h-[290px]">
            <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center mb-auto">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              What
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-[#404040] leading-[138%] tracking-[-0.01em]">
              Packaging strongly influences buying decisions and brand perception
            </p>
          </div>

          {/* Card 3: When */}
          <div className="bg-white border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col h-[260px] md:h-[290px]">
            <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center mb-auto">
              <Clock className="w-6 h-6 text-[#FFEC19]" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              When
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-[#404040] leading-[138%] tracking-[-0.01em]">
              At point-of-sale, during product discovery and purchase decisions
            </p>
          </div>

          {/* Card 4: Why */}
          <div className="bg-white border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col h-[260px] md:h-[290px]">
            <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center mb-auto">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              Why
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-[#404040] leading-[138%] tracking-[-0.01em]">
              Visual appeal, trust, taste perception, and information drive purchases
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
