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

// Inline SVG for the starburst background used in related products
const Starburst = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full absolute inset-0 opacity-20"
    preserveAspectRatio="none"
  >
    <path
      fill={color}
      d="M50 0L58.8 15.4L75 8.7L76.5 25.8L93.3 26.5L86.6 42.7L100 50L86.6 57.3L93.3 73.5L76.5 74.2L75 91.3L58.8 84.6L50 100L41.2 84.6L25 91.3L23.5 74.2L6.7 73.5L13.4 57.3L0 50L13.4 42.7L6.7 26.5L23.5 25.8L25 8.7L41.2 15.4L50 0Z"
    />
  </svg>
);

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

  // Extract gradient colors for SVG
  const gradientMatch = product.ui.bgColor.match(/#([A-Fa-f0-9]{6})/g);
  const color1 =
    gradientMatch && gradientMatch.length > 0 ? gradientMatch[0] : "#23B349";
  const color2 =
    gradientMatch && gradientMatch.length > 1 ? gradientMatch[1] : "#126723";

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-32 md:pb-48 lg:pb-64 flex flex-col items-center">
        {/* Background with wave mask */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            background: product.ui.bgColor,
            maskImage: `url('/wave.svg')`,
            WebkitMaskImage: `url('/wave.svg')`,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskPosition: "bottom center",
            WebkitMaskPosition: "bottom center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10 w-full flex flex-col items-center text-center px-4 pt-12 md:pt-24 max-w-[1400px] mx-auto">
          {/* Faint Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-10 pointer-events-none z-0">
             <div className="w-full h-full bg-white rounded-full blur-3xl"></div>
          </div>

          {/* HUGE Background Text & Net WT */}
          <div className="relative w-full flex justify-center items-center pointer-events-none select-none z-0">
            <div className="relative inline-block">
              <h1
                className="font-['Funnel_Display'] font-black text-[100px] md:text-[180px] lg:text-[250px] tracking-tight leading-none text-center whitespace-nowrap drop-shadow-md"
                style={{ color: product.ui.nameColor }}
              >
                {product.name}
                {product.name.toLowerCase() === "oreo" ? " Cream" : ""}
              </h1>
              
              {/* Net Weight Badge */}
              <div 
                className="absolute top-[60%] -translate-y-1/2 -left-4 md:-left-16 lg:-left-24 text-left"
                style={{ color: product.ui.nameColor }}
              >
                <span className="font-['Outfit'] font-bold text-[10px] md:text-sm lg:text-base opacity-90 block leading-none tracking-[0.2em]">NET WT.</span>
                <span className="font-['Outfit'] font-black text-xl md:text-3xl lg:text-5xl block mt-1 tracking-tighter">120<span className="text-sm md:text-xl lg:text-3xl">g</span></span>
              </div>
            </div>
          </div>

          {/* Product Image (Overlapping the huge text) */}
          <div className="relative w-[300px] md:w-[600px] lg:w-[850px] h-[200px] md:h-[350px] lg:h-[450px] z-20 -mt-[60px] md:-mt-[120px] lg:-mt-[180px]">
            <Image
              src={product.media.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl hover:-translate-y-4 transition-transform duration-500"
              priority
            />
          </div>

          {/* Subtext */}
          <p
            className="relative font-['Outfit'] font-medium text-lg md:text-2xl lg:text-[26px] max-w-[800px] text-center mx-auto leading-tight mt-6 md:mt-12 z-20"
            style={{ color: product.ui.nameColor }}
          >
            {product.content?.description ||
              "Delicious chocolate biscuits filled with smooth, creamy goodness made for everyday enjoyment"}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-white px-4 md:px-8 lg:px-24 py-12 pb-24 z-10 -mt-24">
        <div className="max-w-[1664px] mx-auto flex flex-col gap-24">
          {/* Nutrition Facts */}
          <div className="w-full border border-[#E8E8E8] rounded-[24px] overflow-hidden shadow-sm flex flex-col bg-white">
            <div
              className="py-4 px-7"
              style={{ backgroundColor: product.ui.bgColor }}
            >
              <h2 className="font-['Funnel_Display'] font-bold text-white text-3xl">
                Nutritional Facts
              </h2>
            </div>

            <div className="p-8 lg:p-12 flex flex-col lg:flex-row gap-12">
              {/* Left Side: Table */}
              <div className="flex-1 flex flex-col gap-6 lg:gap-12">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-['Outfit'] font-bold text-2xl lg:text-[32px] text-black">
                    Nutritional Details
                  </span>
                  <div className="flex gap-8 lg:gap-24">
                    <span className="font-['Outfit'] text-lg lg:text-2xl text-black">
                      {product.content?.nutrition?.servingSize}
                    </span>
                    <span className="font-['Outfit'] text-lg lg:text-2xl text-black">
                      % Daily Value
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="flex justify-between items-center">
                    <span className="font-['Outfit'] font-black text-2xl lg:text-[32px] uppercase text-black">
                      CALORIES {product.content?.nutrition?.calories}
                    </span>
                  </div>

                  {(product.content?.nutrition?.items || []).map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="font-['Outfit'] font-medium text-lg lg:text-[28px] text-black leading-none">
                        {item.name}
                      </span>
                      <div className="flex gap-8 lg:gap-24 justify-end items-center">
                        <span className="font-['Inter'] font-medium text-lg lg:text-[26px] text-black w-16 lg:w-[100px] text-right leading-none">
                          {item.value} {item.unit}
                        </span>
                        <span className="font-['Inter'] font-medium text-lg lg:text-[26px] text-black w-12 lg:w-[60px] text-right leading-none">
                          {item.dailyValue ? `${item.dailyValue} %` : ""}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Badges */}
              <div className="lg:w-[387px] shrink-0 flex flex-wrap justify-center items-center gap-6">
                {product.content?.certifications?.map((cert, i) => (
                  <Image
                    key={i}
                    src={cert.image}
                    alt={cert.name}
                    width={102}
                    height={102}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients & Allergens */}
          <div className="w-full border border-[#E8E8E8] rounded-[24px] overflow-hidden shadow-sm flex flex-col bg-white">
            <div
              className="py-4 px-7"
              style={{ backgroundColor: product.ui.bgColor }}
            >
              <h2 className="font-['Funnel_Display'] font-bold text-white text-3xl">
                Ingredients & Allergens
              </h2>
            </div>
            <div className="p-8 lg:p-12 flex flex-col gap-6">
              <p className="font-['Outfit'] font-medium text-lg lg:text-xl leading-relaxed text-black">
                Ingredients:{" "}
                {product.content?.ingredients?.list
                  .map((i) => i.name)
                  .join(", ")}
                .
              </p>
              <p className="font-['Outfit'] font-medium text-lg lg:text-xl leading-relaxed text-black">
                {product.content?.ingredients?.contains &&
                  product.content.ingredients.contains.length > 0 && (
                    <>
                      Contains:{" "}
                      {product.content.ingredients.contains.join(", ")}.<br />
                    </>
                  )}
                {product.content?.ingredients?.mayContain &&
                  product.content.ingredients.mayContain.length > 0 && (
                    <>
                      May Contain:{" "}
                      {product.content.ingredients.mayContain.join(", ")}.
                    </>
                  )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full bg-white px-4 md:px-8 lg:px-24 py-16">
        <div className="max-w-[1664px] mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group relative flex flex-col items-center w-[180px] md:w-[220px]"
              >
                {/* Background Starburst effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Starburst color={relatedProduct.ui.bgColor} />
                </div>

                {/* Product Image */}
                <div className="relative w-full h-[120px] md:h-[150px] z-10 flex items-center justify-center mb-6">
                  <Image
                    src={relatedProduct.media.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-xl"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-gradient-to-b from-[#1FA03B] to-[#126723] px-4 md:px-8 lg:px-24 py-24 pb-48 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border-4 border-white"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <p className="font-['Outfit'] text-white/80 text-sm tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="font-['Outfit'] font-black text-white text-5xl md:text-7xl mb-16">
            Our client
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-transparent flex flex-col md:flex-row items-center md:items-start text-left gap-6 max-w-xl mx-auto">
              <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden shrink-0 border-4 border-white/20">
                <div className="w-full h-full bg-[#E5D5B8] flex items-end justify-center">
                  {/* Fallback image if client-1 doesn't exist */}
                  <Image
                    src="/assets/hero/client-1.png"
                    alt="Client"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-white">
                <p className="font-['Outfit'] text-lg italic mb-4 leading-relaxed">
                  "I love the Vita products! They are my go-to snack every day.
                  The quality is consistently high and the taste is
                  unparalleled. My family enjoys them as much as I do."
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                </div>
                <p className="font-['Outfit'] font-bold text-white">
                  Yohannes T.
                </p>
                <p className="font-['Outfit'] text-white/70 text-sm">
                  Loyal Customer
                </p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-transparent flex flex-col md:flex-row items-center md:items-start text-left gap-6 max-w-xl mx-auto hidden lg:flex">
              <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden shrink-0 border-4 border-white/20">
                <div className="w-full h-full bg-[#E5D5B8] flex items-end justify-center">
                  <Image
                    src="/assets/hero/client-2.png"
                    alt="Client"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-white">
                <p className="font-['Outfit'] text-lg italic mb-4 leading-relaxed">
                  "I love the Vita products! They are my go-to snack every day.
                  The quality is consistently high and the taste is
                  unparalleled. My family enjoys them as much as I do."
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                </div>
                <p className="font-['Outfit'] font-bold text-white">Abeba M.</p>
                <p className="font-['Outfit'] text-white/70 text-sm">
                  Loyal Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
