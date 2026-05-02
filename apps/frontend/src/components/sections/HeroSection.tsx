"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center bg-white min-h-[100vh]"
      style={{ paddingTop: '267.71px' }}
    >
      {/* ── Background Elements ── */}
      <div className="absolute top-0 left-0 w-full h-[1180.918px] pointer-events-none z-0 overflow-hidden">

        {/* Left blurred green rectangle */}
        <div 
          className="absolute blur-[13.55px] h-[1125.277px] left-[-33.02px] top-[-1px] w-[425.017px]"
          style={{
            background: 'linear-gradient(73.61deg, rgba(255, 255, 255, 0) 31.925%, rgb(255, 255, 255) 73.82%)',
            backgroundColor: '#23b349',
            mixBlendMode: 'screen'
          }}
        />

        {/* Right decorative rectangle */}
        <div className="absolute flex h-[1180.918px] items-center justify-center left-[1196.2px] top-[-1px] w-[723.803px]">
          <div className="flex-none rotate-180">
            <div className="h-[1180.918px] relative w-[723.803px] overflow-hidden">
              <Image
                src="/assets/hero/wave.svg"
                alt=""
                fill
                className="object-cover"
                style={{
                  transform: 'translate(-59.07%, 158.67%) scale(3.3286, 2.0114)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Text Container (1024px centered) ── */}
      <div 
        className="relative z-20 mx-auto flex flex-col items-center gap-[48px]"
        style={{ width: '1024px', maxWidth: '90vw' }}
      >

        {/* Doctor Duck - Left Side */}
        <div className="absolute left-[-50px] top-0 w-[150px] h-[150px] z-10 lg:left-[-100px] lg:w-[200px] lg:h-[200px]">
          <Image
            src="/assets/hero/doctor-duck.png"
            alt="Doctor Duck"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Biscuit Stack - Right Side */}
        <div className="absolute right-[-50px] top-0 w-[140px] h-[140px] z-10 lg:right-[-100px] lg:w-[180px] lg:h-[180px]">
          <Image
            src="/assets/hero/biscuit-stack.png"
            alt="Biscuit Stack"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Blurred Yellow/Orange Circle - Top Left */}
        <div className="absolute left-[-30px] top-[-20px] w-[80px] h-[80px] bg-[#FFEC19] rounded-full opacity-20 blur-xl z-5 lg:left-[-50px] lg:top-[-30px] lg:w-[120px] lg:h-[120px]" />


        {/* Main Heading Group */}
        <div className="flex flex-col items-center text-center relative w-full" style={{ height: '326.885px' }}>

          {/* "A new stylish way of" heading */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 font-[family-name:var(--font-outfit)] font-extrabold text-[96px] text-[#404040] text-center leading-[0.88] tracking-[-0.384px] whitespace-nowrap">
            <p className="mb-0 leading-[0.88] whitespace-pre">A new stylish </p>
            <p className="leading-[0.88] whitespace-pre">way of</p>
          </div>

          {/* "Connecting!" main text */}
          <div className="absolute left-1/2 top-[157.89px] -translate-x-1/2 w-[1024px]" style={{ height: '169px' }}>
            <p className="font-[family-name:var(--font-outfit)] font-extrabold text-[192px] text-[#23b349] text-center leading-[0.88] tracking-[-5.76px] whitespace-nowrap">
              Connecting!
            </p>
          </div>

          {/* Strawberry - right */}
          <div className="absolute left-[708.48px] top-[84.25px] w-[81.73px] h-[81.73px]">
            <Image
              src="/assets/hero/strawberry.png"
              alt="Strawberry"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Cookie - left */}
          <div className="absolute left-[224.6px] top-[86.42px] w-[108px] h-[108px] flex items-center justify-center">
            <div className="flex-none rotate-[18.96deg]">
              <div className="relative w-[84.994px] h-[84.994px]">
                <Image
                  src="/assets/hero/cookie.png"
                  alt="Cookie"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] text-center mt-6 sm:mt-8">
          <p className="font-[family-name:var(--font-funnel-display)] font-medium text-[20px] text-[#404040] text-center leading-[normal] tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[normal] mb-0 whitespace-pre">From everyday baking to special treats, Vita brings </p>
            <p className="leading-[normal] whitespace-pre">joy, taste, and quality to your table.</p>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-[24px] items-center">

          {/* Primary — filled green */}
          <Link
            href="/products"
            className="bg-[#23b349] text-white flex gap-[16px] items-center justify-center px-[32px] py-[16px] rounded-[999px] h-[56px] whitespace-nowrap"
          >
            <span className="font-[family-name:var(--font-funnel-display)] font-medium text-[24px] tracking-[-0.096px]">
              Our Products
            </span>
            <span className="font-[family-name:var(--font-outfit)] font-normal text-[20px] tracking-[-0.08px]">
              →
            </span>
          </Link>

          {/* Secondary — white with green border */}
          <Link
            href="/about"
            className="border border-[#1fd650] border-solid flex gap-[16px] items-center justify-center px-[32px] py-[16px] rounded-[999px] h-[56px] whitespace-nowrap"
          >
            <span className="font-[family-name:var(--font-funnel-display)] font-medium text-[24px] text-[#000000] tracking-[-0.096px]">
              <span className="text-[24px]">Why Vita</span>
              <span className="font-['Outfit'] font-normal text-[20px] tracking-[-0.08px]">®</span>
            </span>
          </Link>
        </div>
      </div>

      {/* ── Green Middle Section ── */}
      <div className="relative w-full z-30 bg-[#23b349] px-4 py-16">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-8">
          {/* Quote */}
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[32px] md:text-[42px] lg:text-[52px] text-white leading-[1.1] tracking-[-0.01em] max-w-[900px] text-center">
            "As a modern multi-category food complex, Vita balances industrial excellence with deep emotional connection by housing a diverse portfolio of brands tailored to every moments."
          </h3>

          {/* Client Avatars */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              <div className="relative w-12 h-12 rounded-full border-3 border-white bg-[#BDBDBD] overflow-hidden z-30">
                <Image src="/assets/hero/client-1.png" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-12 h-12 rounded-full border-3 border-white overflow-hidden z-20" style={{ background: "#b0b0b0" }}>
                <Image src="/assets/hero/client-2.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="relative w-12 h-12 rounded-full border-3 border-white overflow-hidden z-10" style={{ background: "#c0c0c0" }}>
                <Image src="/assets/hero/client-3.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="w-12 h-12 rounded-full border-3 border-white bg-[#BDBDBD] flex items-center justify-center text-white font-[family-name:var(--font-outfit)] font-semibold text-[14px] z-0">
                +3
              </div>
            </div>
            <span className="font-[family-name:var(--font-outfit)] font-semibold text-white text-[16px] tracking-wide">
              Our Clients
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom Video Section ── */}
      <div className="relative w-full bg-white px-4 py-16">
        <div className="max-w-[900px] mx-auto relative">
          {/* Family Video Frame */}
          <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden shadow-2xl border-[8px] border-white">
            <Image
              src="/assets/hero/family-video.png"
              alt="Family enjoying Vita products"
              fill
              className="object-cover"
              priority
            />
            
            {/* Sound Mute Icon */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border-2 border-white/20">
              <Image
                src="/assets/hero/sound-mute.svg"
                alt="Mute"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>

          {/* Complex VITA Badge */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#FFEC19] flex items-center justify-center shadow-2xl rotate-12 border-4 border-white">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFEC19] to-[#F4D03F]" />
              <div className="absolute inset-2 rounded-full bg-white opacity-30" />
              <div className="relative text-[#DB4426] font-[family-name:var(--font-funnel-display)] font-extrabold text-[20px] lg:text-[24px] uppercase tracking-tight z-10">
                VITA
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
