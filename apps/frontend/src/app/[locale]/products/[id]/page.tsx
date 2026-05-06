import { getTranslations } from "next-intl/server";
import { Link } from "@frontend/navigation";
import { products, Product } from "../data";
import { routing } from "@frontend/routing";
import ProductTestimonials from "@frontend/components/products/ProductTestimonials";
import ProductHeroSection from "@frontend/components/products/ProductDetailsHeroSection";
import ProductNutritionSection from "@frontend/components/products/ProductNutritionSection";
import ProductRelatedSection from "@frontend/components/products/ProductRelatedSection";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({ locale, id: product.id }))
  );
}

// Starburst component moved to ProductRelatedSection
export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProductsPage" });

  if (!id) {
    return null;
  }

  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <main className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="font-['Funnel_Display'] text-3xl text-[#0f4b1f]">
          {t("productNotFound")}
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
