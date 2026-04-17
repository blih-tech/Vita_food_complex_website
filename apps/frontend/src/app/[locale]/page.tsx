import HeroSection from "@frontend/components/sections/HeroSection";
import ProductsSection from "@frontend/components/sections/ProductsSection";
import BiscuitBrandSection from "@frontend/components/sections/BiscuitBrandSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProductsSection />
      <BiscuitBrandSection />
    </main>
  );
}
