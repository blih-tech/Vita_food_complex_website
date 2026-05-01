"use client";

import Image from "next/image";
import { Link } from "@frontend/navigation";

export default function ResearchHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-[100px] lg:pt-[160px] pb-[100px] lg:pb-[200px]">
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-[1200px] mx-auto gap-6 lg:gap-8">
        <h3 className="font-['Funnel_Display'] font-medium text-[20px] md:text-[24px] text-[#90D152] uppercase tracking-wide">
          Market and Consumer Research
        </h3>
        
        <h1 className="font-['Outfit'] font-extrabold text-[48px] md:text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349] max-w-[800px]">
          Smart Packaging, <br /> Smarter Sales
        </h1>
        
        <p className="font-['Outfit'] font-medium text-[18px] md:text-[24px] leading-tight text-[#23B349] max-w-[900px] mt-2">
          Understanding how biscuit packaging influences purchasing behavior across age groups and drives sales performance in diverse retail environments in Ethiopia
        </p>
        
        <Link
          href="/contact"
          className="mt-6 flex items-center justify-center px-8 py-4 bg-[#23B349] text-white rounded-full font-['Funnel_Display'] font-medium text-[20px] md:text-[24px] hover:bg-[#1e993f] transition-colors gap-2"
        >
          Call Now <span>→</span>
        </Link>
      </div>

      {/* Decorative Bottom Background */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] lg:h-[60%] z-0 overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, rgba(35,179,73,0) 0%, rgba(35,179,73,0.15) 40%, rgba(35,179,73,0.3) 100%)",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%",
            transform: "scaleX(1.5)",
          }}
        />
        {/* Placeholder for Product Images from Figma */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] flex justify-center items-end opacity-80 pointer-events-none">
            {/* The real implementation would place precise product images here. Using a representative block for now as exact product image paths are not verified. */}
            <div className="w-[800px] h-[250px] bg-[url('/assets/images/products-group-placeholder.png')] bg-contain bg-no-repeat bg-bottom opacity-50" />
        </div>
      </div>
    </section>
  );
}
