import { use } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import { products, Product } from "../data";
import ProductTestimonials from "@frontend/components/sections/ProductTestimonials";
import ProductHeroSection from "@frontend/components/sections/ProductHeroSection";
import ProductNutritionSection from "@frontend/components/sections/ProductNutritionSection";
import ProductRelatedSection from "@frontend/components/sections/ProductRelatedSection";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Starburst component moved to ProductRelatedSection
export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);
  const t = useTranslations("ProductsPage");
  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <main className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="font-['Funnel_Display'] text-3xl text-[#0f4b1f]">
          Product not found
        </h1>
        <Link href="/products" className="mt-4 text-[#23B349] hover:underline">
          {t("backToProducts")}
        </Link>
      </main>
    );
  }

  // Related products (from data.ts or fallback to first 4 others)
  const relatedProductIds = product.relatedProducts || [];
  let relatedProducts = relatedProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);

  if (relatedProducts.length === 0) {
    relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <ProductHeroSection product={product} />

      {/* Main Content Area (Nutrition Facts & Ingredients) */}
      <ProductNutritionSection product={product} />

      {/* Related Products */}
      <ProductRelatedSection relatedProducts={relatedProducts} />

      {/* Testimonials */}
      <ProductTestimonials />
    </main>
  );
}
