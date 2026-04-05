"use client";

import Image from "next/image";

const OWNERS = [
  { id: 1, name: "Owner 1", image: "/assets/about/owner-1.png" },
  { id: 2, name: "Owner 2", image: "/assets/about/owner-2.png" },
  { id: 3, name: "Owner 3", image: "/assets/about/owner-3.png" },
  { id: 4, name: "Owner 4", image: "/assets/about/owner-4.png" },
  { id: 5, name: "Owner 5", image: "/assets/about/owner-5.png" },
  { id: 6, name: "Owner 6", image: "/assets/about/owner-6.png" },
  { id: 7, name: "Owner 7", image: "/assets/about/owner-7.png" },
  { id: 8, name: "Owner 8", image: "/assets/about/owner-8.png" },
  { id: 9, name: "Owner 9", image: "/assets/about/owner-9.png" },
];

export default function AboutOwnersSection() {
  return (
    <section className="bg-[#E9F7ED] py-16 lg:py-20">
      <div className="max-w-[1664px] mx-auto px-6 lg:px-[128px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12 lg:mb-[96px]">
          <h2 className="font-['Funnel_Display'] font-bold text-[#000500] text-5xl lg:text-[96px] leading-[1.25]">
            Meet the Owners
          </h2>
          <p className="font-['Outfit'] font-medium text-[#333733] text-lg lg:text-[32px] leading-[1.26] opacity-80">
            The People Behind Vita Hydro
          </p>
        </div>

        {/* Owners Grid */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-[17px]">
          {OWNERS.map((owner) => (
            <div
              key={owner.id}
              className="relative w-[124px] lg:w-[124px] h-[612px] rounded-lg overflow-hidden"
            >
              <Image
                src={owner.image}
                alt={owner.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
