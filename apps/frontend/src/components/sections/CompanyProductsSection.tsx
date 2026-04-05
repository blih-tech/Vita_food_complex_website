"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const PRODUCTS = [
  {
    name: "Bora-Chocolate",
    category: "Cream",
    image: "/assets/products/product-1.png",
  },
  {
    name: "Kiyu Cream With Milk",
    category: "Cream",
    image: "/assets/products/product-2.png",
  },
  {
    name: "Vita Wheat Flour",
    category: "Flour",
    image: "/assets/products/product-3.png",
  },
];

const TOTAL_PRODUCTS = 11;

export default function CompanyProductsSection() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);

  const product = PRODUCTS[currentIndex % PRODUCTS.length];

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? TOTAL_PRODUCTS - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i + 1) % TOTAL_PRODUCTS);

  return (
    <div className="relative w-full">
      <section
        id="company"
        className="relative bg-[#E9F7ED] overflow-visible z-[1]"
      >
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] pt-24 lg:pt-32 pb-24 lg:pb-40">
          <div className="w-full lg:max-w-[50%] flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-semibold text-[#333733] font-['Outfit']">
                {t("home.company.label")}
              </p>

              <div className="flex flex-col font-['Funnel_Display'] font-bold leading-[1.1]">
                <h2 className="text-[120px] md:text-[180px] lg:text-[200px] text-[#23B349]">
                  Our
                </h2>
                <h2 className="text-[100px] md:text-[150px] lg:text-[180px] text-[#23B349] -mt-4">
                  Company
                </h2>
              </div>
            </div>

            <p className="font-['Outfit'] font-normal text-[#333733] text-2xl leading-[1.26] tracking-[0.96px] max-w-3xl">
              {t("home.company.body")}
            </p>

            <div className="flex">
              <button className="px-[80px] py-[20px] bg-[#0F4B1F] text-white rounded-[8px] font-['Funnel_Display'] font-bold text-[32px] leading-10 tracking-[1.28px] hover:bg-[#1a6b2e] transition-colors shadow-lg">
                {t("home.company.cta")}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute hidden lg:flex z-[30] pointer-events-none right-0 bottom-[-20%] w-[48%] h-[800px] items-end justify-end">
          <div className="relative w-full h-full">
            <div className="absolute left-[0%] top-[15%] w-[55%] h-auto -rotate-6">
              <Image
                src="/assets/products/bridge-product-2.png"
                className="w-full h-auto object-contain drop-shadow-2xl"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="absolute left-[35%] top-[25%] w-[45%] h-auto z-10">
              <Image
                src="/assets/products/bridge-product-3.png"
                className="w-full h-auto object-contain drop-shadow-2xl"
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className="absolute right-[-5%] top-[10%] w-[50%] h-auto rotate-[12deg] z-0">
              <Image
                src="/assets/products/bridge-product-1.png"
                className="w-full h-auto object-contain drop-shadow-2xl"
                alt=""
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="relative w-full h-[2083px] overflow-visible bg-transparent"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/assets/sections/products-full-bg.svg"
            className="w-full h-full object-fill"
            alt=""
            fill
          />
        </div>

        <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto">
          <div className="absolute top-[567px] left-[360px] w-[1200px] h-[1200px] rounded-full opacity-30 border-[10px] border-[#20A342]" />

          <div className="absolute top-[638px] left-[129px] right-[129px] flex flex-row items-end justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-[#333733] text-[24px] font-semibold font-['Outfit'] leading-[30.24px] opacity-80">
                About
              </p>
              <h2 className="text-white text-[96px] font-semibold font-['Funnel_Display'] leading-[120px]">
                Our Products
              </h2>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-[96px] leading-[120.96px] tabular-nums">
              {currentIndex + 1}/{TOTAL_PRODUCTS}
            </span>
          </div>

          <div className="absolute top-[1136px] left-[129px] flex flex-col gap-8 z-20">
            <div className="flex flex-col gap-2">
              <p className="text-white text-[24px] font-normal font-['Outfit'] leading-[30.24px]">
                {product.category}
              </p>
              <h3 className="text-white text-[48px] font-bold font-['Funnel_Display'] leading-[60px]">
                {product.name}
              </h3>
            </div>
            <button className="bg-[#0F4B1F] text-white px-[80px] py-[20px] rounded-[8px] font-['Funnel_Display'] font-bold text-[32px] leading-[40px] tracking-[1.28px] transition-all hover:bg-[#1a6b2e] shadow-xl">
              {t("home.products.viewProduct")}
            </button>
          </div>

          <div className="absolute top-[759px] left-[514px] w-[868px] h-[784px]">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute left-[170px] top-[464px] w-[599px] h-[103px] bg-[#000500] rounded-full blur-[51px] opacity-40" />
            </div>
          </div>

          <div className="absolute top-[821px] left-[809px] w-[125px] h-[152px] overflow-hidden blur-[4px] opacity-80">
            <Image
              src="/assets/products/biscuit-scatter.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-[1107px] left-[514px] w-[303px] h-[318px] overflow-hidden blur-[3px] opacity-70">
            <Image
              src="/assets/products/biscuit-piece.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-[701px] left-[1307px] w-[718px] h-[753px] overflow-hidden blur-[14.5px] opacity-60">
            <Image
              src="/assets/products/biscuit-large.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-[1431px] left-[126px] right-[126px] flex items-center justify-between">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-[100px] h-[100px] rounded-full border-[5px] border-white/40 flex items-center justify-center text-white text-5xl hover:bg-white hover:text-[#0F4B1F] transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-[100px] h-[100px] rounded-full border-[5px] border-white/40 flex items-center justify-center text-white text-5xl hover:bg-white hover:text-[#0F4B1F] transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
