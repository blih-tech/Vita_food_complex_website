"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

// Figma assets
const imgImage = "https://www.figma.com/api/mcp/asset/b5b7823f-9e81-4434-ae18-517095403d5f";
const imgImage1 = "https://www.figma.com/api/mcp/asset/f057c027-434f-4798-b046-ddf64391a6dd";

// Product data
const products = [
  {
    id: 1,
    name: "Premium Biscuits",
    description: "Delicious, crunchy biscuits made with the finest ingredients for perfect snacking moments.",
    image: imgImage,
    features: ["High-quality ingredients", "Perfect crunch", "Family favorites"],
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Classic Cookies",
    description: "Traditional cookie recipes passed down through generations, now with modern quality standards.",
    image: imgImage1,
    features: ["Traditional recipes", "Modern quality", "Fresh daily"],
    badge: "New"
  },
  {
    id: 3,
    name: "Chocolate Delights",
    description: "Rich, indulgent chocolate treats that satisfy your sweet cravings with every bite.",
    image: imgImage,
    features: ["Rich chocolate", "Premium cocoa", "Artisanal process"],
    badge: "Premium"
  },
  {
    id: 4,
    name: "Wellness Snacks",
    description: "Healthy, nutritious snacks that don't compromise on taste or quality.",
    image: imgImage1,
    features: ["Natural ingredients", "Low sugar", "High fiber"],
    badge: "Healthy"
  }
];

export default function OurProductSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="w-full lg:px-[128px] md:px-[64px] sm:px-[32px] lg:py-[96px] md:py-[64px] sm:py-[48px] bg-gray-50">
      <div className="max-w-[1664px] mx-auto">
        {/* Section Header - Responsive */}
        <div className="text-center lg:mb-[120px] md:mb-[80px] sm:mb-[60px]">
          <h2 className="font-['Outfit'] font-bold leading-[0.96] tracking-[-2px] text-[#1a1a1a] lg:text-[64px] md:text-[48px] sm:text-[32px] lg:tracking-[-2px] md:tracking-[-1.5px] sm:tracking-[-1px]">
            <span className="lg:block md:block sm:block">Our Premium</span>
            <span className="lg:block md:block sm:block">Product Range</span>
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[#404040] mt-4 lg:text-[24px] md:text-[20px] sm:text-[16px] lg:tracking-[-0.4px] md:tracking-[-0.32px] sm:tracking-[-0.24px] lg:px-0 md:px-8 sm:px-4">
            Discover our complete range of high-quality food products
          </p>
        </div>

        {/* Product Cards Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-[24px] md:gap-[20px] sm:gap-[16px]">
          
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-[24px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image - Responsive */}
              <div className="relative lg:h-[400px] md:h-[300px] sm:h-[200px] overflow-hidden">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover"
                  src={product.image}
                />
                
                {/* Badge - Responsive */}
                <div className="absolute top-4 right-4 bg-[#23b349] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.badge}
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Content - Responsive */}
              <div className="p-6 lg:p-8 md:p-6 sm:p-4">
                {/* Product Name - Responsive */}
                <h3 className="font-['Outfit'] font-bold text-[#1a1a1a] mb-3 lg:text-[28px] md:text-[24px] sm:text-[20px]">
                  {product.name}
                </h3>

                {/* Product Description - Responsive */}
                <p className="font-['Funnel_Display'] font-medium text-[#666] mb-4 lg:text-[16px] md:text-[14px] sm:text-[12px] leading-[1.5]">
                  {product.description}
                </p>

                {/* Product Features - Responsive */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-[#f0f9f0] text-[#23b349] px-3 py-1 rounded-full text-sm font-medium lg:text-[14px] md:text-[12px] sm:text-[10px]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button - Responsive */}
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#23b349] text-white px-6 py-3 rounded-[999px] font-['Funnel_Display'] font-medium hover:bg-[#1a9a3a] transition-colors lg:px-[24px] lg:py-[12px] lg:text-[16px] md:px-[20px] md:py-[10px] md:text-[14px] sm:px-[16px] sm:py-[8px] sm:text-[12px]"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA Section - Responsive */}
        <div className="mt-16 text-center lg:mt-[120px] md:mt-[80px] sm:mt-[60px]">
          <div className="bg-white rounded-[32px] shadow-lg p-8 lg:p-12 md:p-8 sm:p-6">
            <h3 className="font-['Outfit'] font-bold text-[#1a1a1a] mb-4 lg:text-[36px] md:text-[28px] sm:text-[20px]">
              Ready to Experience Quality?
            </h3>
            <p className="font-['Funnel_Display'] font-medium text-[#666] mb-6 lg:text-[18px] md:text-[16px] sm:text-[14px] lg:px-0 md:px-8 sm:px-4">
              Explore our complete product catalog and find the perfect items for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#23b349] text-white px-8 py-4 rounded-[999px] font-['Funnel_Display'] font-medium hover:bg-[#1a9a3a] transition-colors lg:px-[32px] lg:py-[16px] lg:text-[18px] md:px-[24px] md:py-[12px] md:text-[16px] sm:px-[20px] sm:py-[10px] sm:text-[14px]"
              >
                View All Products
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#23b349] border-2 border-[#23b349] px-8 py-4 rounded-[999px] font-['Funnel_Display'] font-medium hover:bg-[#23b349] hover:text-white transition-colors lg:px-[32px] lg:py-[16px] lg:text-[18px] md:px-[24px] md:py-[12px] md:text-[16px] sm:px-[20px] sm:py-[10px] sm:text-[14px]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
