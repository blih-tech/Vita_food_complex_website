"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

/** Figma 2765:13271 — order, anchors, and raster/SVG exports from node tree */
const SISTER_COMPANY_ROWS: readonly {
  readonly key:
    | "longTea"
    | "belayabMotors"
    | "belayabCable"
    | "belayabFoods"
    | "goldenTulip"
    | "belayabDelivery"
    | "aradaCoffee"
    | "lionstone"
    | "belayabPharmaceuticals"
    | "huajiaInternationalTrade"
    | "belayabPoultryAndFeed"
    | "belayabGeepas"
    | "lewisRetailsSupermarket";
  readonly href: string;
  readonly logoSrc: string;
}[][] = [
  [
    {
      key: "longTea",
      href: "/sister-companies#long-tea",
      logoSrc: "/assets/sister/long-tea-logo.png",
    },
    {
      key: "belayabMotors",
      href: "/sister-companies#belayab-motors",
      logoSrc: "/assets/sister/belayab-motors.png",
    },
    {
      key: "belayabCable",
      href: "/sister-companies#belayab-cable",
      logoSrc: "/assets/sister/cables.png",
    },
  ],
  [
    {
      key: "belayabFoods",
      href: "/sister-companies#belayab-foods",
      logoSrc: "/assets/sister/foods.png",
    },
    {
      key: "goldenTulip",
      href: "/sister-companies#golden-tulip",
      logoSrc: "/assets/sister/golden-tulip.png",
    },
    {
      key: "belayabDelivery",
      href: "/sister-companies#belayab-delivery",
      logoSrc: "/assets/sister/belayab-delivery-logo.png",
    },
  ],
  [
    {
      key: "aradaCoffee",
      href: "/sister-companies#arada-coffee",
      logoSrc: "/assets/sister/arada-coffee-logo.png",
    },
    {
      key: "lionstone",
      href: "/sister-companies#lionstone",
      logoSrc: "/assets/sister/linestone-logo.png",
    },
    {
      key: "belayabPharmaceuticals",
      href: "/sister-companies#belayab-pharmaceuticals",
      logoSrc: "/assets/sister/belayab-pharma-logo.png",
    },
  ],
  [
    {
      key: "huajiaInternationalTrade",
      href: "/sister-companies#huajia-international-trade",
      logoSrc: "/assets/sister/huajia-trade-logo.png",
    },
    {
      key: "belayabPoultryAndFeed",
      href: "/sister-companies#belayab-poultry-and-feed",
      logoSrc: "/assets/sister/belayab-poultry-logo.png",
    },
    {
      key: "belayabGeepas",
      href: "/sister-companies#belayab-geepas",
      logoSrc: "/assets/sister/belayab-geepas-logo.png",
    },
  ],
  [
    {
      key: "lewisRetailsSupermarket",
      href: "/sister-companies#lewis-retails-supermarket",
      logoSrc: "/assets/sister/lewis-logo.png",
    },
  ],
];

export default function SisterCompanySection() {
  const t = useTranslations("WhyChooseVita.sisterCompanies");

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1664px] overflow-hidden rounded-[48px]">
        {/* Figma fill_Z2S0KX: rgba(55,255,0,0.4) over background image — sister-inner-bg export (2765:13272) */}
        <div
          className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-[73px] lg:py-[128px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(55, 255, 0, 0.4), rgba(55, 255, 0, 0.4)), url(/assets/sister/sister-inner-bg.png)",
          }}
        >
          <div className="relative z-[1] flex w-full max-w-[1566px] flex-col items-center gap-16 lg:gap-[128px]">
            <h2 className="w-full max-w-[604px] text-center font-[family-name:var(--font-outfit)] text-[40px] font-extrabold leading-[90%] tracking-[-0.02em] text-white sm:text-[56px] md:text-[68px] lg:text-[80px]">
              {t("title")}
            </h2>

            <div className="flex w-full flex-col items-center gap-[72px]">
              {SISTER_COMPANY_ROWS.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className={
                    row.length === 1
                      ? "flex w-full max-w-[1566px] justify-center gap-12"
                      : "grid w-full max-w-[1566px] grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0"
                  }
                >
                  {row.map((company) => (
                    <SisterCompanyCard
                      key={company.key}
                      company={company}
                      name={t(`companies.${company.key}.name`)}
                      category={t(`companies.${company.key}.category`)}
                      description={t(`companies.${company.key}.description`)}
                      seeMore={t("seeMore")}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SisterCompanyCard({
  company,
  name,
  category,
  description,
  seeMore,
}: {
  company: (typeof SISTER_COMPANY_ROWS)[number][number];
  name: string;
  category: string;
  description: string;
  seeMore: string;
}) {
  return (
    <Link
      href={company.href}
      className="mx-auto flex w-full max-w-[490px] shrink-0 flex-col rounded-[24.5px] bg-white px-[47.65px] pt-[47.65px] pb-0 outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#23B349] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <div className="flex flex-col gap-[35.737918854px]">
        {/* Figma layout_X0W1NV — logo well */}
        <div className="relative mx-auto box-border h-[238.25px] w-full max-w-[394.7px] overflow-hidden rounded-[12.25px] border border-[#E8E8E8] bg-white px-6 py-[35.737895966px] sm:px-12 md:px-[119.126304626px]">
          <Image
            src={company.logoSrc}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 395px"
            className="object-contain"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-[35.737918854px] pb-[47.65px]">
          <span className="inline-flex w-fit items-center justify-center rounded-[74.454px] bg-[#F3F3F3] px-[12px] py-[6px] font-[family-name:var(--font-inter)] text-[20.8471px] font-semibold leading-[29.78px] text-[#23B349]">
            {category}
          </span>

          <h3 className="font-[family-name:var(--font-inter)] text-[30px] font-bold leading-[47.65px] text-black">
            {name}
          </h3>

          <p className="font-[family-name:var(--font-inter)] text-[23.8253px] font-normal leading-[38.72px] text-[#333733]">
            {description}
          </p>

          <span className="flex items-center gap-[11.912641525px] font-[family-name:var(--font-inter)] text-[23.8253px] font-semibold leading-[35.74px] text-[#23B349]">
            <span>{seeMore}</span>
            <span aria-hidden className="inline-block translate-y-px">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
