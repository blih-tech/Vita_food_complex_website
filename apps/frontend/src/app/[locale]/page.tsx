import HeroSection from "@frontend/components/sections/HeroSection";
import HeroVideoSection from "@frontend/components/sections/HeroVideoSection";
import ProductsSection from "@frontend/components/products/ProductsSection";
import BiscuitBrandSection from "@frontend/components/sections/BiscuitBrandSection";
import RecipesSection from "@frontend/components/sections/RecipesSection";
import MerchandiseSection from "@frontend/components/sections/MerchandiseSection";
import QuickFactSection from "@frontend/components/sections/QuickFactSection";
import SocialWallSection from "@frontend/components/sections/SocialWallSection";
import PartnerSection from "@frontend/components/sections/PartnerSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <HeroVideoSection />
      <ProductsSection />
      <BiscuitBrandSection />
      <RecipesSection />
      <QuickFactSection />
      <MerchandiseSection />
      <SocialWallSection />
      <PartnerSection />
    </main>
  );
}
