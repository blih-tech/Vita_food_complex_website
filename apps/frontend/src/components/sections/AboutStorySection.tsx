"use client";

import Image from "next/image";

export default function AboutStorySection() {
  const storyParagraphs = [
    "In the highlands of Debre Sina, a simple idea began to take shape—an idea to create food that people could truly trust. It started with a vision: to bring quality biscuits and flour to everyday families, while supporting the farmers and communities behind them.",
    "With determination and an investment of 210 million Birr, Vita Hydro Agro-Processing PLC was born. What began as a dream soon became a modern facility, producing food at scale—but always with care, consistency, and purpose.",
    "From the very beginning, Vita Hydro chose a different path—working closely with local farmers, sourcing wheat from nearby fields, and ensuring that every step of production creates value, not just products. Jobs were created, communities were supported, and a strong foundation was built.",
    "As the company grew, so did its ambition: to close the gap in Ethiopia&apos;s food market, delivering both quality and quantity, and preparing for a future beyond borders.",
    "Today, Vita Hydro continues its journey—driven by the same belief it started with that good food brings people together, supports communities, and creates a better future for generations to come.",
  ];

  return (
    <section className="bg-[#E9F7ED] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1664px] mx-auto px-6 lg:px-[128px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Story Text - Left side */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/about/spark.svg"
                alt="Spark"
                width={100}
                height={100}
                className="w-16 h-16 lg:w-20 lg:h-20"
              />
              <h2 className="font-['Funnel_Display'] font-bold text-[#000500] text-3xl lg:text-[48px] leading-[1.25]">
                Once upon a time
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {storyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-['Funnel_Display'] font-medium text-[#333733] text-base lg:text-[24px] leading-[1.25]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image - Right side */}
          <div className="lg:w-[685px] lg:h-[770px] relative">
            <div className="relative w-full h-[400px] lg:h-full rounded-[8px] overflow-hidden">
              <Image
                src="/assets/about/story-image.png"
                alt="Vita Hydro Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
