import HeroSection from '@frontend/components/sections/HeroSection';
import CompanySection from '@frontend/components/sections/CompanySection';
import ProductsSection from '@frontend/components/sections/ProductsSection';
import SocialWallSection from '@frontend/components/sections/SocialWallSection';
import RecipesSection from '@frontend/components/sections/RecipesSection';
import MerchandiseSection from '@frontend/components/sections/MerchandiseSection';
import WhyChooseSection from '@frontend/components/sections/WhyChooseSection';
import CTASection from '@frontend/components/sections/CTASection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CompanySection />
      <ProductsSection />
      <SocialWallSection />
      <RecipesSection />
      <MerchandiseSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
