import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CommunitySupport() {
  return (
    <section className="w-full bg-gradient-to-b from-[#2a9d4a] to-[#36B570] py-24 lg:py-32" id="impact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1664px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className="lg:w-1/2">
            <h4 className="text-white/80 font-['Outfit'] text-[16px] sm:text-[18px] uppercase tracking-wider mb-4">
              Our Impact Areas
            </h4>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-['Outfit'] text-white font-extrabold tracking-tight">
              Community &<br />
              Agricultural Support
            </h2>
          </div>
          <div className="lg:w-[45%] flex items-end">
            <p className="text-xl sm:text-2xl text-white/90 font-['Funnel_Display'] font-light leading-relaxed max-w-2xl">
              We work hand-in-hand with farmers and rural communities to create sustainable food systems, improve productivity, and enhance livelihoods across the country.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Large Image — Figma node 408:5824 */}
          <div className="w-full lg:w-[40%] rounded-[32px] overflow-hidden relative aspect-[3/4] lg:aspect-auto">
            <Image
              src="/assets/community/community-support.png"
              alt="Agricultural Support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Right Cards Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Featured Card */}
            <div className="bg-[#23B349] rounded-[24px] p-8 flex flex-col justify-between h-full min-h-[220px] group cursor-pointer hover:bg-[#1f9d40] transition-colors relative overflow-hidden">
              <div>
                <h3 className="text-white font-['Funnel_Display'] text-2xl font-bold mb-4 flex items-center gap-2">
                  For the Country Ethiopia 🇪🇹
                </h3>
                <p className="text-white/90 font-['Outfit'] text-[16px] leading-relaxed max-w-sm">
                  Driving national growth by creating jobs, supporting local production, and strengthening the economy.
                </p>
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-[#23B349] w-5 h-5" />
              </div>
            </div>

            {/* Normal Cards */}
            <div className="bg-[#FFF8ED] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer hover:shadow-lg transition-all relative">
              <h3 className="text-[#23B349] font-['Funnel_Display'] text-2xl font-bold">
                For the Countryside
              </h3>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#23B349] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>

            <div className="bg-[#FFF8ED] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer hover:shadow-lg transition-all relative">
              <h3 className="text-[#23B349] font-['Funnel_Display'] text-2xl font-bold">
                For Villagers
              </h3>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#23B349] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>

            <div className="bg-[#FFF8ED] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer hover:shadow-lg transition-all relative">
              <h3 className="text-[#23B349] font-['Funnel_Display'] text-2xl font-bold">
                For Farmers
              </h3>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#23B349] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>

            <div className="bg-[#FFF8ED] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer hover:shadow-lg transition-all relative">
              <h3 className="text-[#23B349] font-['Funnel_Display'] text-2xl font-bold">
                For Families
              </h3>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#23B349] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>

            <div className="bg-[#FFF8ED] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer hover:shadow-lg transition-all relative">
              <h3 className="text-[#23B349] font-['Funnel_Display'] text-2xl font-bold">
                For Sustainability
              </h3>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#23B349] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
