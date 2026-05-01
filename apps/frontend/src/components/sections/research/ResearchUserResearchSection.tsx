"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ResearchUserResearchSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Research file requested for:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-24 py-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="font-['Funnel_Display'] font-bold text-[36px] md:text-[48px] leading-none text-[#23B349] tracking-[-0.01em]">
            User Research
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[18px] md:text-[24px] text-[#8A8C8A] tracking-[-0.004em]">
            We collected data from key consumer segments
          </p>
        </div>

        {/* Content: Chart + Demographics */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left: Donut Chart with floating badges */}
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center lg:ml-12">
            
            {/* SVG Donut Chart */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-xl">
              {/* Youth (34%) - Gray */}
              <circle 
                cx="50" cy="50" r="35" 
                fill="transparent" 
                stroke="#E8E8E8" 
                strokeWidth="24" 
                strokeDasharray="219.9" 
                strokeDashoffset="145.1" 
                className="transform origin-center rotate-[0deg]"
              />
              {/* Kids (33%) - Light Green */}
              <circle 
                cx="50" cy="50" r="35" 
                fill="transparent" 
                stroke="#90D152" 
                strokeWidth="24" 
                strokeDasharray="219.9" 
                strokeDashoffset="147.3" 
                className="transform origin-center rotate-[122.4deg]"
              />
              {/* Parents (33%) - Dark Green */}
              <circle 
                cx="50" cy="50" r="35" 
                fill="transparent" 
                stroke="#116D29" 
                strokeWidth="24" 
                strokeDasharray="219.9" 
                strokeDashoffset="147.3" 
                className="transform origin-center rotate-[241.2deg]"
              />
            </svg>

            {/* Floating Badges */}
            <div className="absolute top-[15%] left-[5%] w-[80px] md:w-[120px] lg:w-[140px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10">
              <span className="font-['Outfit'] font-semibold text-[24px] md:text-[32px] lg:text-[42px] text-black">72%</span>
            </div>
            
            <div className="absolute top-[35%] right-[-10%] w-[80px] md:w-[120px] lg:w-[140px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10">
              <span className="font-['Outfit'] font-semibold text-[24px] md:text-[32px] lg:text-[42px] text-black">87%</span>
            </div>

            <div className="absolute bottom-[5%] left-[15%] w-[80px] md:w-[120px] lg:w-[140px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10">
              <span className="font-['Outfit'] font-semibold text-[24px] md:text-[32px] lg:text-[42px] text-black">93%</span>
            </div>
          </div>

          {/* Right: Demographics & Newsletter */}
          <div className="flex flex-col w-full lg:w-[50%] gap-12 lg:gap-24">
            
            <div className="flex flex-col gap-6">
              <h3 className="font-['Outfit'] font-medium text-[36px] md:text-[48px] text-[#23B349] leading-tight tracking-[-0.004em]">
                Respondent Democratics
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <span className="font-['Outfit'] font-medium text-[20px] md:text-[24px] text-[#404040]">
                  Total Respondents
                </span>
                <span className="font-['Funnel_Display'] font-bold text-[36px] md:text-[48px] text-[#23B349] leading-none">
                  450+ <span className="text-[20px] md:text-[24px] font-medium text-[#404040]">Peoples</span>
                </span>
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#90D152] rounded-[16px] md:rounded-[24px] shrink-0"></div>
                  <span className="font-['Outfit'] font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#333733]">Kids (33%)</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#116D29] rounded-[16px] md:rounded-[24px] shrink-0"></div>
                  <span className="font-['Outfit'] font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#333733]">Parent&apos;s (33%)</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#E8E8E8] rounded-[16px] md:rounded-[24px] shrink-0"></div>
                  <span className="font-['Outfit'] font-medium text-[32px] md:text-[48px] lg:text-[60px] text-[#333733]">Youth (34%)</span>
                </div>
              </div>
            </div>

            {/* Newsletter / File Download CTA */}
            <div className="flex flex-col gap-6 pt-8 border-t border-gray-100">
              <h4 className="font-['Funnel_Display'] font-medium text-[24px] md:text-[32px] text-[#000500] leading-tight tracking-[-0.004em] max-w-[400px]">
                Drop your Email to Get full Research and insight File
              </h4>
              
              <form onSubmit={handleSubmit} className="flex items-center gap-4 max-w-[480px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="flex-1 h-[56px] px-6 md:px-8 border border-[#404040] rounded-full font-['Funnel_Display'] font-medium text-[18px] md:text-[24px] text-[#404040] placeholder:text-[#404040]/50 outline-none focus:border-[#23B349]"
                />
                <button
                  type="submit"
                  className="w-[56px] h-[56px] bg-[#23B349] rounded-full flex items-center justify-center shrink-0 hover:bg-[#1e993f] transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
