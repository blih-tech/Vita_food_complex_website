"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { products, Product } from "./data";

const categories = ["All products", "Biscuit", "Flour"];

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const [activeCategory, setActiveCategory] = useState("All products");

  const filteredProducts = products.filter((p) => {
    if (activeCategory === "All products") return true;
    return p.category === activeCategory;
  });

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-[#23B349] pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/assets/pattern.png')] bg-cover bg-no-repeat" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between">
          <div className="text-left">
            <h1 className="font-['Funnel_Display'] font-black text-6xl md:text-8xl text-white mb-2 drop-shadow-md">
              Products
            </h1>
            <p className="font-['Outfit'] font-bold text-xl text-white/90">
              Vita Food Complex
            </p>
          </div>
          <div className="relative w-[300px] md:w-[500px] h-[200px] md:h-[300px] mt-8 md:mt-0">
             <Image 
               src="/assets/products/figma/figma_prod_12.png" 
               alt="Products Display" 
               fill 
               className="object-contain drop-shadow-2xl z-10 rotate-12" 
             />
          </div>
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-10 left-[40%] w-16 h-16 opacity-60">
                <Image src="/assets/products/biscuit-piece.png" alt="Cookie" fill className="object-contain rotate-45" />
            </div>
            <div className="absolute bottom-40 left-10 w-24 h-24 opacity-80">
                <Image src="/assets/products/biscuit-scatter.png" alt="Cookie" fill className="object-contain -rotate-12" />
            </div>
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

      {/* Scattered Cookies Row (Decorative) */}
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center px-4 -mt-16 relative z-20 mb-10 h-24">
        {["/assets/products/figma/figma_prod_13.png", "/assets/products/figma/figma_prod_14.png", "/assets/products/figma/figma_prod_9.png"].map((src, i) => (
          <div key={i} className={`relative w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300 drop-shadow-lg ${i % 2 === 0 ? 'mt-8' : '-mt-8'}`}>
            <Image src={src} alt="Cookie" fill className="object-contain rounded-full bg-white/10 backdrop-blur-sm p-1" />
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <section className="w-full bg-white px-6 lg:px-24 pb-12">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="bg-gray-100 p-1.5 rounded-full flex gap-2 overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-['Outfit'] font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#23B349] text-white shadow-md"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full px-4 md:px-8 lg:px-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative rounded-[32px] overflow-hidden cursor-pointer h-[280px] md:h-[320px] transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border border-black/5"
                style={{ backgroundColor: product.bgColor }}
              >
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/20 blur-3xl rounded-full pointer-events-none z-0" />
                
                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-8 pb-16 z-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                  />
                </div>

                {/* Bottom Bar: Logo & Name */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between z-20 bg-gradient-to-t from-black/20 to-transparent">
                  {/* Brand Logo Placeholder */}
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm">
                     <span className="font-['Outfit'] font-black text-[10px] uppercase" style={{ color: product.nameColor || 'white' }}>
                       VITA
                     </span>
                  </div>
                  {/* Product Name */}
                  <h3 
                    className="font-['Funnel_Display'] font-black text-2xl tracking-wide drop-shadow-sm" 
                    style={{ color: product.nameColor || 'white' }}
                  >
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="w-full bg-white px-6 lg:px-24 py-16 pb-24 flex justify-center relative z-10">
        <div className="w-full max-w-4xl bg-[#23B349] rounded-[40px] p-8 md:p-16 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl text-white mb-4 relative z-10">
            Give US Your Feedback
          </h2>
          <p className="font-['Outfit'] text-white/90 mb-10 max-w-lg relative z-10">
            Your opinion matters! Please share your thoughts and ideas to help us improve our service.
          </p>

          <form className="w-full max-w-2xl flex flex-col gap-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-6 py-4 rounded-full font-['Outfit'] text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all placeholder:text-gray-400"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-full font-['Outfit'] text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <textarea 
                placeholder="Write your comment or ideas that helps us to improve our service..." 
                className="w-full px-6 py-4 rounded-[32px] font-['Outfit'] text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/30 min-h-[140px] resize-none transition-all placeholder:text-gray-400 pb-16"
              ></textarea>
              <button 
                type="button" 
                className="absolute bottom-3 right-3 bg-black text-white px-8 py-3 rounded-full font-['Outfit'] font-bold text-sm hover:bg-gray-800 transition-colors shadow-md"
              >
                APPLY
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quality Certifications Section */}
      <section className="w-full bg-white px-6 lg:px-24 pt-8 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="font-['Outfit'] font-medium text-sm text-gray-600 mb-2">
            Uplifting Every Daily Food Moment.
          </p>
          <h2 className="font-['Funnel_Display'] font-black text-4xl md:text-5xl text-[#23B349] mb-16">
            Quality is Built Around Us!
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 w-full">
            <div className="relative h-20 w-20 md:h-28 md:w-28 transition-transform duration-300 hover:scale-105 cursor-pointer">
               <Image src="/assets/quality/figma/cert_1.png" alt="Certification" fill className="object-contain" />
            </div>
            <div className="relative h-20 w-40 md:h-28 md:w-48 transition-transform duration-300 hover:scale-105 cursor-pointer">
               <Image src="/assets/quality/figma/cert_efda.png" alt="EFDA" fill className="object-contain" />
            </div>
            <div className="relative h-20 w-28 md:h-28 md:w-36 transition-transform duration-300 hover:scale-105 cursor-pointer">
               <Image src="/assets/quality/figma/cert_lrqa.png" alt="LRQA" fill className="object-contain" />
            </div>
            <div className="relative h-24 w-24 md:h-32 md:w-32 transition-transform duration-300 hover:scale-105 cursor-pointer">
               <Image src="/assets/quality/figma/cert_iso.png" alt="ISO 9001" fill className="object-contain" />
            </div>
            <div className="relative h-16 w-40 md:h-24 md:w-56 transition-transform duration-300 hover:scale-105 cursor-pointer">
               <Image src="/assets/quality/figma/cert_eas.png" alt="EAS" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
