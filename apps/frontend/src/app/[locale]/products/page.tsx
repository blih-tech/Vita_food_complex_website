"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { products, Product } from "./data";
import { ProductCard } from "@frontend/components/ui/ProductCard";
import { FeedbackSection } from "@frontend/components/sections/FeedbackSection";
import { QualitySection } from "@frontend/components/sections/QualitySection";

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
      <section className="relative w-full pb-40 md:pb-52 overflow-hidden bg-[url('/product-hero.svg')] bg-cover bg-bottom bg-no-repeat">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-[70%] bg-[url('/assets/pattern.png')] bg-cover bg-no-repeat" />
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
               priority
             />
          </div>
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-10 left-[40%] w-16 h-16 opacity-60">
                <Image src="/assets/products/biscuit-piece.png" alt="Cookie" fill sizes="(max-width: 768px) 30vw, 15vw" className="object-contain rotate-45" />
            </div>
            <div className="absolute bottom-40 left-10 w-24 h-24 opacity-80">
                <Image src="/assets/products/biscuit-scatter.png" alt="Cookie" fill sizes="(max-width: 768px) 30vw, 15vw" className="object-contain -rotate-12" />
            </div>
        </div>
      </section>

      {/* Scattered Cookies Row (Decorative) */}
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center px-4 -mt-16 relative z-20 mb-10 h-24">
        {["/assets/products/figma/figma_prod_13.png", "/assets/products/figma/figma_prod_14.png", "/assets/products/figma/figma_prod_9.png"].map((src, i) => (
          <div key={i} className={`relative w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300 drop-shadow-lg ${i % 2 === 0 ? 'mt-8' : '-mt-8'}`}>
            <Image src={src} alt="Cookie" fill sizes="(max-width: 768px) 30vw, 15vw" className="object-contain rounded-full bg-white/10 backdrop-blur-sm p-1" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 lg:gap-y-32 xl:gap-x-8 justify-items-center pt-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                media={product.media}
                ui={product.ui}
              />
            ))}
          </div>
        </div>
      </section>

      <FeedbackSection />
      <QualitySection />
    </main>
  );
}
