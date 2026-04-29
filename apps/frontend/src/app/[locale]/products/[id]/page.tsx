import { use } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { products, Product } from "../data";

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

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: product.bgColor }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-black blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span
                  className="px-4 py-1 bg-white/20 rounded-full font-['Outfit'] text-sm font-semibold"
                  style={{ color: product.nameColor }}
                >
                  Premium
                </span>
              </div>
              <h1
                className="font-['Funnel_Display'] font-bold text-5xl lg:text-7xl"
                style={{ color: product.nameColor }}
              >
                {product.name}
              </h1>
              <p
                className="font-['Outfit'] text-xl lg:text-2xl max-w-md"
                style={{ color: product.nameColor, opacity: 0.8 }}
              >
                {t(`productDescription.${product.id}`)}
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  className="px-8 py-4 rounded-full font-['Funnel_Display'] font-bold text-lg transition-all hover:scale-105"
                  style={{ backgroundColor: "#0f4b1f", color: "white" }}
                >
                  {t("orderNow")}
                </button>
                <button
                  className="px-8 py-4 rounded-full font-['Funnel_Display'] font-bold text-lg border-2 transition-all hover:bg-white/10"
                  style={{
                    borderColor: product.nameColor,
                    color: product.nameColor,
                  }}
                >
                  {t("downloadBrochure")}
                </button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="w-full bg-white px-6 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Funnel_Display'] font-bold text-3xl lg:text-4xl text-[#0f4b1f] mb-12 text-center">
            {t("productFeatures")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌾",
                title: t("featureNatural"),
                desc: t("featureNaturalDesc"),
              },
              {
                icon: "✨",
                title: t("featureQuality"),
                desc: t("featureQualityDesc"),
              },
              {
                icon: "❤️",
                title: t("featureHeart"),
                desc: t("featureHeartDesc"),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="font-['Funnel_Display'] font-bold text-xl text-[#0f4b1f] mb-2">
                  {feature.title}
                </h3>
                <p className="font-['Outfit'] text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Info */}
      <section className="w-full bg-gray-50 px-6 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Funnel_Display'] font-bold text-3xl lg:text-4xl text-[#0f4b1f] mb-12 text-center">
            {t("nutritionInfo")}
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: t("servingSize"), value: "30g" },
                { label: t("calories"), value: "140" },
                { label: t("protein"), value: "2g" },
                { label: t("fat"), value: "7g" },
                { label: t("carbs"), value: "18g" },
                { label: t("sugar"), value: "10g" },
                { label: t("sodium"), value: "95mg" },
                { label: t("fiber"), value: "1g" },
              ].map((nutrient, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 border border-gray-100 rounded-xl"
                >
                  <span className="font-['Outfit'] text-2xl font-bold text-[#0f4b1f]">
                    {nutrient.value}
                  </span>
                  <span className="font-['Outfit'] text-sm text-gray-500">
                    {nutrient.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full bg-white px-6 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Funnel_Display'] font-bold text-3xl lg:text-4xl text-[#0f4b1f] mb-12">
            {t("relatedProducts")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p: Product) => p.id !== id)
              .slice(0, 4)
              .map((relatedProduct: Product) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{ backgroundColor: relatedProduct.bgColor }}
                >
                  <div className="relative h-40">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div
                    className="p-4"
                    style={{ color: relatedProduct.nameColor }}
                  >
                    <h3 className="font-['Funnel_Display'] font-bold text-lg">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-gradient-to-br from-[#23B349] to-[#1a8f38] px-6 lg:px-24 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/assets/pattern.png')] bg-cover bg-no-repeat" />
        </div>
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-2xl">
            <h2 className="font-['Funnel_Display'] font-bold text-3xl lg:text-5xl mb-4">
              {t("ctaHeading")}
            </h2>
            <p className="font-['Outfit'] font-semibold text-lg text-white/80">
              {t("ctaSubtext")}
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full font-['Funnel_Display'] font-bold text-lg text-[#0f4b1f] hover:bg-gray-100 transition-colors"
          >
            {t("ctaButton")}
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-[#1648B5] px-6 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-['Funnel_Display'] font-bold text-2xl lg:text-4xl mb-2">
              {t("newsletterHeading")}
            </h2>
            <p className="font-['Outfit'] font-medium text-white/70">
              {t("newsletterSubtext")}
            </p>
          </div>
          <form className="flex w-full max-w-md gap-4">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white font-['Outfit']"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white rounded-full font-['Funnel_Display'] font-bold text-lg text-[#1648B5] hover:bg-gray-100 transition-colors"
            >
              →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
