import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const initiatives = [
  {
    title: "Food Donation Programs",
    description: "Providing essential food support to families in need.",
    image: "/assets/community/charity-1.png",
    isFeatured: true,
  },
  {
    title: "School Feeding Support",
    description: "Helping students stay nourished, focused, and ready to learn.",
    image: "/assets/community/charity-2.png",
    isFeatured: false,
  },
  {
    title: "Emergency Relief Support",
    description: "Responding quickly to crises with food and essential aid.",
    image: "/assets/community/charity-3.png",
    isFeatured: false,
  },
  {
    title: "Community Outreach Campaigns",
    description: "Engaging directly with communities through meaningful programs.",
    image: "/assets/community/charity-4.png",
    isFeatured: false,
  },
  {
    title: "Health & Nutrition Awareness",
    description: "Educating families on better nutrition and healthy living.",
    image: "/assets/community/charity-5.png",
    isFeatured: false,
  },
  {
    title: "Women & Youth Empowerment",
    description: "Creating opportunities for growth, skills, and independence.",
    image: "/assets/community/charity-6.png",
    isFeatured: false,
  },
  {
    title: "Rural Development Projects",
    description: "Supporting long-term development in underserved areas.",
    image: "/assets/community/charity-7.png",
    isFeatured: false,
  },
  {
    title: "Local Partnerships",
    description: "Working with organizations to maximize community impact.",
    image: "/assets/community/charity-8.png",
    isFeatured: false,
  },
];

export default function CharityInitiatives() {
  return (
    <section className="w-full bg-[#FFFBF6] py-24 lg:py-32 relative overflow-hidden">
      {/* Top Background glow */}
      <div className="absolute top-[-20%] left-0 right-0 h-[60%] bg-[#36B570]/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1664px] relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-['Outfit'] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#36B570] to-[#23B349] mb-4">
            Our Charity & Giving
            <br />
            Initiatives
          </h2>
          <p className="text-xl text-[#404040]/80 font-['Funnel_Display'] font-medium">
            Making a difference where it matters most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {initiatives.map((item, index) => (
            <div key={index} className="relative group rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-auto md:h-[380px] shadow-sm hover:shadow-xl transition-all cursor-pointer">
              {/* Image Background */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
              </div>

              {/* Bottom Label Box */}
              <div className="absolute bottom-6 left-6 right-6">
                <div 
                  className={`backdrop-blur-md rounded-[16px] p-4 flex flex-col gap-2 shadow-lg transition-colors ${
                    item.isFeatured 
                      ? "bg-[#23B349]/90 border border-white/30" 
                      : "bg-white/95 border border-white/50 group-hover:bg-[#FFFBF6]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 shrink-0 rounded-md flex items-center justify-center ${
                      item.isFeatured ? "bg-white" : "bg-[#23B349]"
                    }`}>
                      <ArrowUpRight className={`w-5 h-5 ${item.isFeatured ? "text-[#23B349]" : "text-white"}`} />
                    </div>
                    <h3 className={`font-['Funnel_Display'] text-[18px] sm:text-[20px] font-semibold leading-tight ${
                      item.isFeatured ? "text-white" : "text-[#23B349]"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  {item.isFeatured && (
                    <p className="text-white/90 font-['Outfit'] text-[14px] leading-snug mt-1 pl-11">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
