import HeroSection from "@frontend/components/sections/HeroSection";
import ProductsSection from "@frontend/components/sections/ProductsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProductsSection />
    </main>
  );
}
