import HeroSection from "@frontend/components/sections/HeroSection";
import CompanyProductsSection from "@frontend/components/sections/CompanyProductsSection";
import SocialWallSection from "@frontend/components/sections/SocialWallSection";
import RecipesSection from "@frontend/components/sections/RecipesSection";
import MerchandiseSection from "@frontend/components/sections/MerchandiseSection";
import WhyChooseSection from "@frontend/components/sections/WhyChooseSection";
import CTASection from "@frontend/components/sections/CTASection";
import Footer from "@frontend/components/layout/Footer";
import Navbar from "@frontend/components/layout/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <CompanyProductsSection />
      <SocialWallSection />
      <RecipesSection />
      <MerchandiseSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </main>
  );
}
