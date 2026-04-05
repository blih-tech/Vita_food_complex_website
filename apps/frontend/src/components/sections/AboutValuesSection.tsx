"use client";

import Image from "next/image";

const VALUE_CARDS = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "To provide high-quality, nutritious, and affordable food products while supporting local farmers and communities across Ethiopia.",
    bgColor: "#FFFFFF",
    iconColor: "#197F34",
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To become East Africa's leading food production company, known for quality, sustainability, and community impact.",
    bgColor: "#0F4B1F",
    textColor: "#FFFFFF",
  },
  {
    id: "values",
    title: "Our Core Values",
    items: [
      "Quality First",
      "Community Support",
      "Sustainability",
      "Innovation",
    ],
    bgColor: "#197F34",
  },
];

export default function AboutValuesSection() {
  return (
    <section className="bg-[#E9F7ED] py-16 lg:py-20">
      <div className="max-w-[1661px] mx-auto px-6 lg:px-[128px]">
        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mission Card */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-lg relative overflow-hidden min-h-[400px] lg:min-h-[770px]">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#197F34] opacity-20" />
            <div className="absolute bottom-0 left-0 w-full h-[200px]">
              <div className="absolute bottom-8 left-8 w-12 h-2 bg-[#197F34] rounded-full opacity-50" />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-1" />
              <h3 className="font-['Funnel_Display'] font-bold text-[#000500] text-xl lg:text-[32px] leading-[1.25] mb-4">
                Our Mission
              </h3>
              <p className="font-['Outfit'] font-normal text-[#333733] text-base lg:text-[18px] leading-[1.5]">
                To provide high-quality, nutritious, and affordable food
                products while supporting local farmers and communities across
                Ethiopia.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#0F4B1F] rounded-[24px] p-6 lg:p-8 shadow-lg relative overflow-hidden min-h-[400px] lg:min-h-[435px]">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white opacity-10" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="font-['Funnel_Display'] font-bold text-white text-xl lg:text-[32px] leading-[1.25] mb-4">
                Our Vision
              </h3>
              <p className="font-['Outfit'] font-normal text-white/90 text-base lg:text-[18px] leading-[1.5]">
                To become East Africa&apos;s leading food production company,
                known for quality, sustainability, and community impact.
              </p>
            </div>
          </div>

          {/* Image Card 1 */}
          <div className="relative rounded-[24px] overflow-hidden shadow-lg min-h-[400px] lg:min-h-[333px]">
            <Image
              src="/assets/about/baking-biscuits.png"
              alt="Baking Biscuits"
              fill
              className="object-cover"
            />
          </div>

          {/* Image Card 2 */}
          <div className="relative rounded-[24px] overflow-hidden shadow-lg min-h-[400px] lg:min-h-[435px]">
            <Image
              src="/assets/about/wheat-farming.png"
              alt="Wheat Farming"
              fill
              className="object-cover"
            />
          </div>

          {/* Core Values Card */}
          <div className="bg-[#197F34] rounded-[24px] p-6 lg:p-8 shadow-lg relative overflow-hidden min-h-[400px] lg:min-h-[690px] md:col-span-2 lg:col-span-2">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white opacity-20" />
            <div className="relative z-10 h-full flex flex-col justify-center lg:justify-start lg:pt-16">
              <h3 className="font-['Funnel_Display'] font-bold text-white text-xl lg:text-[32px] leading-[1.25] mb-8">
                Our Core Values
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Quality First",
                  "Community Support",
                  "Sustainability",
                  "Innovation",
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-white" />
                    <span className="font-['Outfit'] font-medium text-white text-lg lg:text-[24px]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-lg relative overflow-hidden min-h-[400px] lg:min-h-[225px] md:col-span-2">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#197F34] opacity-10" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="font-['Funnel_Display'] font-bold text-[#000500] text-xl lg:text-[32px] leading-[1.25] mb-4">
                By The Numbers
              </h3>
              <p className="font-['Outfit'] font-normal text-[#333733] text-base lg:text-[18px] leading-[1.5]">
                210 Million Birr investment | 500+ local farmers supported |
                Products distributed across Ethiopia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
