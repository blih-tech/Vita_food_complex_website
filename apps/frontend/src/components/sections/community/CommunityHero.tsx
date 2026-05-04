import { Link } from "@frontend/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CommunityHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background Image — Figma node 2057:1518 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/community/community-hero-main.png"
          alt="Community Hero"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-[#74FF38]/20 blur-[120px] rounded-full" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#23B349]/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] left-[20%] right-[20%] h-[40%] bg-[#1FD650]/10 blur-[100px] rounded-full" />
      </div>

      <div className="pt-14 relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-12 mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.9] font-['Outfit'] font-extrabold text-[#23B349] tracking-[-0.02em] max-w-4xl mb-8">
          Nourishing Communities.
          <br />
          Empowering Lives
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-[#8A8C8A] font-['Funnel_Display'] font-medium max-w-3xl mb-12 leading-relaxed">
          From cities to countryside, Vita is committed to supporting families,
          uplifting farmers, and building stronger communities across the nation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <Link
            href="#impact"
            className="flex items-center justify-center gap-2 bg-[#23B349] text-white px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[20px] font-medium transition-all hover:bg-[#1f9d40] hover:scale-105"
          >
            See Our Impact
          </Link>
          <Link
            href="#mission"
            className="flex items-center justify-center gap-2 bg-white text-[#23B349] border border-[#23B349] px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[20px] font-medium transition-all hover:bg-[#23B349]/5 hover:scale-105"
          >
            Join the Mission
          </Link>
        </div>
      </div>
    </section>
  );
}
