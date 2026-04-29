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
  <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-20" preserveAspectRatio="none">
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

  // Related products
  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full pt-16 pb-40 flex flex-col items-center overflow-hidden"
        style={{ backgroundColor: product.bgColor }}
      >
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          {/* Title & Weight */}
          <div className="flex items-end justify-center gap-4 mb-8">
            <h1
              className="font-['Outfit'] font-black text-6xl md:text-8xl lg:text-[100px] tracking-tight leading-none drop-shadow-lg"
              style={{ color: product.nameColor }}
            >
              {product.name}
              {product.name.toLowerCase() === 'oreo' ? ' Cream' : ''}
            </h1>
            <span 
              className="font-['Outfit'] font-bold text-2xl md:text-3xl mb-2 opacity-90"
              style={{ color: product.nameColor }}
            >
              120g
            </span>
          </div>

          {/* Product Image */}
          <div className="relative w-[300px] md:w-[500px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[350px] mb-8 z-20">
             <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
          </div>

          {/* Subtext */}
          <p
            className="font-['Outfit'] text-lg md:text-xl max-w-2xl text-center mx-auto"
            style={{ color: product.nameColor }}
          >
            Delicious cookies inside and cream outside, making your day happy and enjoyable.
          </p>
        </div>

        {/* Bottom Curve Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] lg:h-[180px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-white px-4 md:px-8 lg:px-24 py-12 pb-24 z-10 -mt-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          
          {/* Nutrition Facts */}
          <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1648B5] py-3 px-6">
                <h2 className="font-['Outfit'] font-bold text-white text-xl">
                  Nutrition Facts
                </h2>
              </div>
              <div className="p-0">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-6 font-['Outfit'] font-semibold text-gray-800">Nutritional details</th>
                      <th className="py-4 px-6 font-['Outfit'] font-semibold text-gray-800 text-center">Per 100g</th>
                      <th className="py-4 px-6 font-['Outfit'] font-semibold text-gray-800 text-center">Per biscuit</th>
                    </tr>
                  </thead>
                  <tbody className="font-['Outfit'] text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6 font-bold text-black">CALORIES/ENERGY</td>
                      <td className="py-3 px-6 text-center"></td>
                      <td className="py-3 px-6 text-center"></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6 pl-10">Fat</td>
                      <td className="py-3 px-6 text-center">-</td>
                      <td className="py-3 px-6 text-center">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6 pl-10">Saturated Fat</td>
                      <td className="py-3 px-6 text-center">-</td>
                      <td className="py-3 px-6 text-center">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6">Protein</td>
                      <td className="py-3 px-6 text-center">8.2g</td>
                      <td className="py-3 px-6 text-center">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6">Carbohydrate</td>
                      <td className="py-3 px-6 text-center">85.4g</td>
                      <td className="py-3 px-6 text-center">11g</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6 pl-10">Sugar</td>
                      <td className="py-3 px-6 text-center">12.2g</td>
                      <td className="py-3 px-6 text-center">1.2g</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6">Dietary Fiber</td>
                      <td className="py-3 px-6 text-center">150mg</td>
                      <td className="py-3 px-6 text-center">6%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-6">Sodium</td>
                      <td className="py-3 px-6 text-center">20mg</td>
                      <td className="py-3 px-6 text-center">1%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6">Iron</td>
                      <td className="py-3 px-6 text-center">20mg</td>
                      <td className="py-3 px-6 text-center">1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Badges */}
            <div className="flex flex-row lg:flex-col gap-6 justify-center items-center p-4">
               {/* Replace with actual badges from Figma if available, using simple circles for now */}
               <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <div className="font-['Outfit'] text-[10px] text-center font-bold">HALAL<br/>CERTIFIED</div>
               </div>
               <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <div className="font-['Outfit'] text-[10px] text-center font-bold">ISO<br/>9001</div>
               </div>
               <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <div className="font-['Outfit'] text-[10px] text-center font-bold">PREMIUM<br/>QUALITY</div>
               </div>
            </div>
          </div>

          {/* Ingredients / Allergy Info */}
          <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#1648B5] py-3 px-6">
              <h2 className="font-['Outfit'] font-bold text-white text-xl">
                Ingredients/Allergy info
              </h2>
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-6 font-['Outfit'] text-gray-700 leading-relaxed">
              <p>
                Ingredients: Wheat Flour, Sugar, Vegetable Oil (Palm Oil), Cocoa Powder, Fructose Syrup, Raising Agents (Sodium Bicarbonate, Ammonium Bicarbonate), Corn Starch, Salt, Emulsifier (Soy Lecithin), Artificial Flavors (Vanilla, Chocolate).
              </p>
              <p className="font-semibold text-black">
                Allergy information: Contains wheat (gluten) and soy.<br/>
                May contain traces of milk, eggs, peanuts, and tree nuts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Related Products */}
      <section className="w-full bg-white px-4 md:px-8 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group relative flex flex-col items-center w-[180px] md:w-[220px]"
              >
                {/* Background Starburst effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0 scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Starburst color={relatedProduct.bgColor} />
                </div>
                
                {/* Product Image */}
                <div className="relative w-full h-[120px] md:h-[150px] z-10 flex items-center justify-center mb-6">
                  <Image
                    src={relatedProduct.image}
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
          <p className="font-['Outfit'] text-white/80 text-sm tracking-widest uppercase mb-2">Testimonials</p>
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
                  "I love the Vita products! They are my go-to snack every day. The quality is consistently high and the taste is unparalleled. My family enjoys them as much as I do."
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                </div>
                <p className="font-['Outfit'] font-bold text-white">Yohannes T.</p>
                <p className="font-['Outfit'] text-white/70 text-sm">Loyal Customer</p>
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
                  "I love the Vita products! They are my go-to snack every day. The quality is consistently high and the taste is unparalleled. My family enjoys them as much as I do."
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                </div>
                <p className="font-['Outfit'] font-bold text-white">Abeba M.</p>
                <p className="font-['Outfit'] text-white/70 text-sm">Loyal Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
