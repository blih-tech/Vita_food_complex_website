"use client";

import { use } from "react";
import { usePage } from "@/hooks/usePage";
import HeroSection from "@frontend/components/sections/HeroSection";
import HeroVideoSection from "@frontend/components/sections/HeroVideoSection";
import ProductsSection from "@frontend/components/products/ProductsSection";
import BiscuitBrandSection from "@frontend/components/sections/BiscuitBrandSection";
import RecipesSection from "@frontend/components/sections/RecipesSection";
import MerchandiseSection from "@frontend/components/sections/MerchandiseSection";
import QuickFactSection from "@frontend/components/sections/QuickFactSection";
import SocialWallSection from "@frontend/components/sections/SocialWallSection";
import PartnerSection from "@frontend/components/sections/PartnerSection";
import SisterCompaniesSection from "@frontend/components/sections/SisterCompaniesSection";

const SECTION_COMPONENTS: Record<string, any> = {
  // kebab-case keys matching DB section types
  hero: HeroSection,
  "hero-video": HeroVideoSection,
  products: ProductsSection,
  "biscuit-brand": BiscuitBrandSection,
  recipes: RecipesSection,
  "quick-facts": QuickFactSection,
  merchandise: MerchandiseSection,
  "social-wall": SocialWallSection,
  partners: PartnerSection,
  "sister-companies": SisterCompaniesSection,
  // PascalCase fallback keys
  HeroSection,
  HeroVideoSection,
  ProductsSection,
  BiscuitBrandSection,
  RecipesSection,
  MerchandiseSection,
  QuickFactSection,
  SocialWallSection,
  PartnerSection,
  SisterCompaniesSection,
};

export default function Home({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = use(paramsPromise);
  const { locale } = params;
  const { page, loading } = usePage("home");

  // If loading or no dynamic page content, render the static version as fallback
  if (loading || !page || !page.sections || page.sections.length === 0) {
    return (
      <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <HeroSection />
        <HeroVideoSection />
        <ProductsSection />
        <BiscuitBrandSection />
        <RecipesSection />
        <SisterCompaniesSection />
        <QuickFactSection />
        <MerchandiseSection />
        <SocialWallSection />
        <PartnerSection />
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {page.sections.map((section: any, index: number) => {
        const Component = SECTION_COMPONENTS[section.type];
        if (!Component) return null;

        return (
          <div key={section.id} className="relative">
            <Component content={section.content} locale={locale} />
          </div>
        );
      })}
    </main>
  );
}
