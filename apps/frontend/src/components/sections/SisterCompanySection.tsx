"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import { ArrowUpRight } from "lucide-react";

const sisterCompanies = [
  { id: "01", name: "Belayab foods" },
  { id: "02", name: "Arada Coffee" },
  { id: "03", name: "long tea" },
  { id: "04", name: "Belayab Motors" },
  { id: "05", name: "Belayab Delivery" },
  { id: "06", name: "Golden Tulip" },
  { id: "07", name: "Belayab Poultry and feed" },
  { id: "08", name: "Belayab Geepas" },
  { id: "09", name: "Belayab Cabel" },
  { id: "10", name: "Lionstone Distribution" },
  { id: "11", name: "HUAJIA international trade" },
  { id: "12", name: "Lewis Retails" },
];

export default function SisterCompanySection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1400px]">
        {/* Headline */}
        <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-[40px] md:text-[60px] lg:text-[80px] text-[#404040] text-center leading-[1] mb-16 md:mb-24">
          Meet Our Sister <br className="hidden md:block" /> Company&apos;s
        </h2>

        {/* Green List Container */}
        <div className="bg-[#0D3B1F] rounded-[40px] md:rounded-[80px] p-6 md:p-12 lg:p-16 flex flex-col gap-6 md:gap-10 shadow-2xl">
          {sisterCompanies.map((company) => (
            <Link
              key={company.id}
              href={`/sister-companies#${company.id}`}
              className="group relative flex items-center justify-between border-b border-white/10 pb-8 transition-all hover:bg-white/5"
            >
              {/* Left Side: Number + Name */}
              <div className="flex items-center gap-6 md:gap-12 lg:gap-20">
                <span className="font-[family-name:var(--font-funnel-display)] font-light text-[24px] md:text-[40px] lg:text-[48px] text-white/40">
                  {company.id}
                </span>
                <h3 className="font-[family-name:var(--font-outfit)] font-bold text-[24px] md:text-[44px] lg:text-[64px] text-white tracking-tight">
                  {company.name}
                </h3>
              </div>

              {/* Right Side: Arrow Icon */}
              <div className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center text-white/40 group-hover:text-white group-hover:rotate-45 transition-all">
                <ArrowUpRight strokeWidth={1} className="w-full h-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
