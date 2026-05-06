import { Link } from "@frontend/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CommunityHero() {
  const t = useTranslations("PeoplePlanet.hero");

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Left decorative image — Figma node 408:5780 */}
      <div className="absolute left-0 bottom-0 w-[28%] h-[85%] z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/community/community-hero-left.png"
          alt=""
          fill
          className="object-cover blur-[8px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#23B349]/30 via-white/60 to-white" />
      </div>

      {/* Right decorative image — Figma node 408:5779 */}
      <div className="absolute right-0 top-0 w-[38%] h-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/community/community-hero-right.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white" />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[50%] h-[60%] bg-[#74FF38]/15 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] left-[20%] right-[20%] h-[40%] bg-[#1FD650]/08 blur-[100px] rounded-full" />
      </div>

      <div className="pt-14 relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-12 mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.9] font-['Outfit'] font-extrabold text-[#23B349] tracking-[-0.02em] max-w-4xl mb-8 whitespace-pre-line">
          {t("title")}
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-[#8A8C8A] font-['Funnel_Display'] font-medium max-w-3xl mb-12 leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <Link
            href="#impact"
            className="flex items-center justify-center gap-2 bg-[#23B349] text-white px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[20px] font-medium transition-all hover:bg-[#1f9d40] hover:scale-105"
          >
            {t("seeImpact")}
          </Link>
          <Link
            href="#mission"
            className="flex items-center justify-center gap-2 bg-white text-[#23B349] border border-[#23B349] px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[20px] font-medium transition-all hover:bg-[#23B349]/5 hover:scale-105"
          >
            {t("joinMission")}
          </Link>
        </div>
      </div>
    </section>
  );
}
