"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { products, Product } from "./data";

const categories = ["All products", "Biscuit", "Flour"];

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      style={{ backgroundColor: product.bgColor }}
    >
      <div className="relative h-64 sm:h-72">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8"
        />
      </div>
      <div className="p-6" style={{ color: product.nameColor }}>
        <h3 className="font-['Funnel_Display'] font-bold text-2xl">
          {product.name}
        </h3>
      </div>
    </div>
  );
}

interface CategoryButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

function CategoryButton({ category, isActive, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-['Outfit'] font-semibold text-lg transition-all duration-300 ${
        isActive
          ? "bg-white text-[#0f4b1f] border-2 border-[#0f4b1f]"
          : "bg-[#5142AD] text-white border-2 border-[#5142AD] hover:bg-[#3d3282]"
      }`}
    >
      {category}
    </button>
  );
}

function ContactCTA() {
  const t = useTranslations("ProductsPage");
  return (
    <section className="relative w-full bg-gradient-to-br from-[#23B349] to-[#1a8f38] px-6 lg:px-24 py-16 overflow-hidden">
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
  );
}

function Newsletter() {
  const t = useTranslations("ProductsPage");
  return (
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
  );
}

interface FooterLinksProps {
  ft: (key: string) => string;
}

function FooterLinks({ ft }: FooterLinksProps) {
  const footerColumns = [
    {
      title: "Biscuits",
      links: [
        "Zoo",
        "Chewata",
        "Marie",
        "Marie Cream",
        "Tafach",
        "Oreo",
        "Bora",
        "Cream",
        "Digestive",
        "Glucose",
        "Tea Biscuit",
      ],
    },
    {
      title: "Flour",
      links: ["All Purpose", "Burger"],
    },
    {
      title: "People & Planet",
      links: [
        "Experiences",
        "Sustainability",
        "Community",
        "Innovation",
        "We Care for All®",
      ],
    },
    {
      title: "Company",
      links: ["Investors", "About Us", "Why Choose Us"],
    },
    {
      title: "Resources",
      links: ["Research", "Media Kit", "FAQs"],
    },
    {
      title: "What's New",
      links: ["News & Articles", "Updates"],
    },
  ];

  return (
    <section className="w-full bg-[#0f4b1f] px-6 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h4 className="font-['Outfit'] font-semibold text-white text-lg">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-['Outfit'] text-white/80 hover:text-white transition-colors text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a
              href="#"
              className="font-['Outfit'] text-white/80 hover:text-white transition-colors text-sm"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-white/80 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-['Outfit'] text-white/80 hover:text-white transition-colors text-sm"
            >
              Legal Notice
            </a>
          </div>
          <p className="font-['Outfit'] text-white/60 text-sm">
            © 2026 Vita Food Complex. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const [activeCategory, setActiveCategory] = useState("All products");

  return (
    <main className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative w-full bg-[#0f4b1f] pt-32 pb-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-['Funnel_Display'] font-bold text-4xl lg:text-6xl text-white mb-4">
            {t("heading")}
          </h1>
          <p className="font-['Outfit'] font-semibold text-lg lg:text-xl text-white/70 max-w-2xl">
            {t("subtext")}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full bg-white px-6 lg:px-24 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full px-6 lg:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer Links */}
      <FooterLinks ft={(key: string) => t(key)} />
    </main>
  );
}
