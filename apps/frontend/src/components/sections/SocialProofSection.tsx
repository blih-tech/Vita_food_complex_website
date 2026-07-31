"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface CustomerBrand {
  key: string;
  ariaLabel: string;
  logoMark: ReactNode;
}

// ── ABSTRACT SVG MARKS ──
const AddisMarketMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const GreenBasketMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const SunriseSupermarketMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const BlueNileRetailMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const UnityHotelsMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18M9 21V9a3 3 0 00-6 0v12m18 0V5a2 2 0 00-2-2H9m12 18H9m4-14h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z" />
  </svg>
);

const FreshChoiceMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const MetroFoodsMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" />
    <path d="M9 9h6v6H9z" />
  </svg>
);

const HabeshaMartMark = () => (
  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#23B349] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2Z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const CUSTOMERS: CustomerBrand[] = [
  { key: "addisMarket", ariaLabel: "Addis Market - Demo Retail Partner", logoMark: <AddisMarketMark /> },
  { key: "greenBasket", ariaLabel: "Green Basket - Demo Organic Partner", logoMark: <GreenBasketMark /> },
  { key: "sunriseSupermarket", ariaLabel: "Sunrise Supermarket - Demo Grocery Partner", logoMark: <SunriseSupermarketMark /> },
  { key: "blueNileRetail", ariaLabel: "Blue Nile Retail - Demo Retail Partner", logoMark: <BlueNileRetailMark /> },
  { key: "unityHotels", ariaLabel: "Unity Hotels - Demo Hospitality Partner", logoMark: <UnityHotelsMark /> },
  { key: "freshChoice", ariaLabel: "Fresh Choice - Demo Grocery Partner", logoMark: <FreshChoiceMark /> },
  { key: "metroFoods", ariaLabel: "Metro Foods - Demo Food Distributor Partner", logoMark: <MetroFoodsMark /> },
  { key: "habeshaMart", ariaLabel: "Habesha Mart - Demo Market Partner", logoMark: <HabeshaMartMark /> },
];

export default function SocialProofSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("SocialProof");

  return (
    <section
      id="customer-social-proof"
      className="relative w-full bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-[#23B349]/10"
      aria-label="Customer Social Proof"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-12 sm:mb-16">
          <span className="font-['Funnel_Display'] font-semibold text-[#23B349] uppercase tracking-wider text-xs sm:text-sm mb-3">
            {t("eyebrow")}
          </span>
          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#404040] leading-tight mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="font-['Outfit'] text-base sm:text-lg text-[#404040]/70 leading-relaxed max-w-[660px]">
            {t("description")}
          </p>
        </div>

        {/* Responsive Grid: 2 on Mobile/Tablet, 4 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10">
          {CUSTOMERS.map((customer) => (
            <div
              key={customer.key}
              aria-label={customer.ariaLabel}
              className="relative flex flex-col items-center justify-center p-6 sm:p-8 bg-white border border-[#23B349]/10 rounded-2xl aspect-[3/2] transition-all duration-300 hover:scale-105 hover:bg-white hover:border-[#23B349]/30 hover:shadow-[0_8px_30px_rgb(35,179,73,0.04)] group select-none"
            >
              {/* Demo Label badge inside card */}
              <span className="absolute top-2 right-3 text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-neutral-400/50 group-hover:text-[#23B349]/50 transition-colors duration-300">
                {t("demoLabel")}
              </span>

              {/* Logo Mark + Text wrapper */}
              <div className="flex flex-col items-center gap-3">
                <div className="transform group-hover:scale-110 transition-transform duration-300 opacity-60 group-hover:opacity-100">
                  {customer.logoMark}
                </div>
                <span className="font-['Outfit'] font-bold text-sm sm:text-base text-neutral-500 group-hover:text-[#23B349] transition-colors duration-300">
                  {t(`customers.${customer.key}`)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Subtle Notice */}
        <div className="text-center">
          <p className="font-['Outfit'] text-[10px] sm:text-[11px] text-neutral-400 tracking-wide font-medium italic">
            {t("demoDisclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
