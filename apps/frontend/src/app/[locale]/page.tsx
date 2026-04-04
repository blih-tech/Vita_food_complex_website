import HeroSection from '@frontend/components/sections/HeroSection';
import CompanyProductsSection from '@frontend/components/sections/CompanyProductsSection';
import SocialWallSection from '@frontend/components/sections/SocialWallSection';
import RecipesSection from '@frontend/components/sections/RecipesSection';
import MerchandiseSection from '@frontend/components/sections/MerchandiseSection';
import WhyChooseSection from '@frontend/components/sections/WhyChooseSection';
import CTASection from '@frontend/components/sections/CTASection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CompanyProductsSection />
      <SocialWallSection />
      <RecipesSection />
      <MerchandiseSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
