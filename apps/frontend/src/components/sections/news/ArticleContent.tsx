import React from "react";

export default function ArticleContent() {
  return (
    <section className="flex flex-col w-full max-w-[1427px] mx-auto gap-8 md:gap-[38px] pt-12 pb-24">
      {/* Lead Paragraph */}
      <p className="font-outfit font-normal text-xl md:text-2xl leading-relaxed text-[#8A8C8A]">
        Artificial Intelligence has moved from the realm of science fiction into our daily reality. As we navigate through 2024, the transformative power of AI is becoming increasingly evident across every sector of the economy.
      </p>

      {/* Content Section */}
      <div className="flex flex-col gap-6 md:gap-10 mt-4 md:mt-8">
        <h3 className="font-inter font-medium text-xl md:text-2xl leading-snug text-[#0A0A0A]">
          The Current State of AI Adoption
        </h3>

        <div className="flex flex-col gap-6 md:gap-[38px]">
          <p className="font-outfit font-normal text-base md:text-lg leading-relaxed text-[#0A0A0A]">
            Organizations worldwide are rapidly integrating AI technologies into their operations. From automating routine tasks to providing sophisticated data analysis, AI is no longer a luxury but a necessity for staying competitive in today&apos;s market.
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            According to recent studies, over 85% of enterprises now use some form of AI in their business processes. This represents a dramatic increase from just 35% in 2020, highlighting the accelerated adoption driven by recent technological breakthroughs.
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            According to recent studies, over 85% of enterprises now use some form of AI in their business processes. This represents a dramatic increase from just 35% in 2020, highlighting the accelerated adoption driven by recent technological breakthroughs.
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            According to recent studies, over 85% of enterprises now use some form of AI in their business processes. This represents a dramatic increase from just 35% in 2020, highlighting the accelerated adoption driven by recent technological breakthroughs.
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            According to recent studies, over 85% of enterprises now use some form of AI in their business processes. This represents a dramatic increase from just 35% in 2020, highlighting the accelerated adoption driven by recent technological breakthroughs.
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-[88%] md:w-[1265px] h-[1.82px] bg-black/10 mt-12 md:mt-24"></div>
    </section>
  );
}
