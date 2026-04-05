"use client";

import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Vita Hydro products have been a staple in our family for years. The quality is unmatched.",
    author: "Happy Customer",
    image: "/assets/about/testimonial-1.png",
  },
  {
    id: 2,
    quote:
      "I trust Vita Hydro for all my baking needs. Their flour is simply the best.",
    author: "Local Baker",
    image: "/assets/about/testimonial-2.png",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#E9F7ED] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1654px] mx-auto px-6 lg:px-[135px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-12 lg:gap-[72px] mb-12 lg:mb-[48px]">
          <h2 className="font-['Funnel_Display'] font-bold text-[#000500] text-4xl lg:text-[64px] leading-[1.25]">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-[24px] p-8 shadow-lg flex-1 max-w-[800px]"
            >
              <div className="flex flex-col gap-6">
                <p className="font-['Outfit'] text-[#333733] text-lg lg:text-xl leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-lg">
                    {testimonial.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-8 lg:gap-12 mt-12">
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0F4B1F] text-white cursor-pointer hover:bg-[#1a6b2e] transition-colors shadow-lg">
            ←
          </button>
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0F4B1F] text-white cursor-pointer hover:bg-[#1a6b2e] transition-colors shadow-lg">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
