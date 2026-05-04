"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { ArrowUpRight } from "lucide-react";

export default function OurProductSection() {
  const t = useTranslations("WhyChooseVita");

  const products = [
    {
      title: "Biscuit Products",
      desc: "Reliable quality for everyday cooking",
      image: "/assets/images/why-choose-vita/products-image-1.png",
      href: "/products#biscuits"
    },
    {
      title: "Flour Products",
      desc: "Reliable quality for everyday cooking",
      image: "/assets/images/why-choose-vita/products-image-2.png",
      href: "/products#flour"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1400px]">
        {/* Headline */}
        <h2 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#23B349] text-center mb-16">
          Our Products
        </h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <Link 
              key={i} 
              href={p.href}
              className="group relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-xl"
            >
              {/* Product Image */}
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Arrow Icon */}
              <div className="absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16 bg-[#23B349] rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                 <ArrowUpRight strokeWidth={2} />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <h3 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[48px] lg:text-[60px] leading-tight mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="font-[family-name:var(--font-funnel-display)] text-[16px] md:text-[20px] lg:text-[24px] opacity-80">
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
