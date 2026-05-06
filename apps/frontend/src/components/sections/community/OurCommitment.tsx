import { Link } from "@frontend/navigation";
import { useTranslations } from "next-intl";

export default function OurCommitment() {
  const t = useTranslations("PeoplePlanet.commitment");

  return (
    <section className="w-full bg-white py-24 lg:py-32" id="mission">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1664px]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-['Funnel_Display'] text-[#23B349] font-medium tracking-tight sticky top-32">
              {t("heading")}
            </h2>
          </div>
          
          <div className="lg:w-2/3 flex flex-col items-start gap-8">
            <p className="text-2xl md:text-3xl lg:text-[32px] leading-[1.4] font-['Outfit'] text-[#23B349] font-light">
              {t.rich("text", {
                bold: (chunks) => <span className="font-bold text-[#1A1A1A]">{chunks}</span>,
              })}
            </p>
            
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-[#23B349] text-white px-8 py-4 rounded-[999px] font-['Funnel_Display'] text-[20px] font-medium transition-all hover:bg-[#1f9d40] hover:scale-105 mt-4"
            >
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
