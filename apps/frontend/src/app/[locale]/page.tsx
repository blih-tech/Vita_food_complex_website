import HeroSection from "@frontend/components/sections/HeroSection";
import ProductsSection from "@frontend/components/products/ProductsSection";
import BiscuitBrandSection from "@frontend/components/sections/BiscuitBrandSection";
import RecipesSection from "@frontend/components/sections/RecipesSection";
import MerchandiseSection from "@frontend/components/sections/MerchandiseSection";
import QuickFactSection from "@frontend/components/sections/QuickFactSection";
import SocialWallSection from "@frontend/components/sections/SocialWallSection";
import PartnerSection from "@frontend/components/sections/PartnerSection";
import CTASection from "@frontend/components/sections/CTASection";
import NewsletterSection from "@frontend/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProductsSection />
      <BiscuitBrandSection />
      <RecipesSection />
      <QuickFactSection />
      <MerchandiseSection />
      <SocialWallSection />
      <PartnerSection />
      <CTASection />
      <NewsletterSection />
    </main>
  );
}
