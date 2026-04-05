"use client";

export default function TestimonialSection() {
  return (
    <section className="bg-[#E9F7ED] py-16 lg:py-20">
      <div className="max-w-[1654px] mx-auto px-6 lg:px-[135px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-12 lg:gap-[72px] mb-12 lg:mb-[48px]">
          <h2 className="font-['Funnel_Display'] font-bold text-[#23B349] text-4xl lg:text-[64px] leading-[1.25]">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="flex justify-center gap-8 lg:gap-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0F4B1F] text-white cursor-pointer hover:opacity-80 transition-opacity">
            ←
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0F4B1F] text-white cursor-pointer hover:opacity-80 transition-opacity">
            →
          </div>
        </div>
      </div>
    </section>
  );
}
