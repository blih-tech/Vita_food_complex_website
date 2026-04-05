"use client";

const OWNERS = [
  { id: 1, name: "Owner 1" },
  { id: 2, name: "Owner 2" },
  { id: 3, name: "Owner 3" },
  { id: 4, name: "Owner 4" },
  { id: 5, name: "Owner 5" },
  { id: 6, name: "Owner 6" },
  { id: 7, name: "Owner 7" },
  { id: 8, name: "Owner 8" },
  { id: 9, name: "Owner 9" },
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
              className="w-[124px] lg:w-[124px] h-[612px] bg-gray-200 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
