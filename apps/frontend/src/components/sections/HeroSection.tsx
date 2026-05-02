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
      {/* ── Green Semicircle Background ── */}
      <div className="absolute left-1/2 -translate-x-1/2 h-[800px] top-[200px] w-full max-w-[1400px] z-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#23B349] rounded-t-[50%] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#23B349] to-[#1FD650] rounded-t-[50%] opacity-60" />
        </div>
      </div>
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

        {/* Doctor Duck - Left Side on Semicircle */}
        <div className="absolute left-[-100px] top-[100px] w-[200px] h-[200px] z-10 lg:left-[-150px] lg:top-[120px] lg:w-[250px] lg:h-[250px]">
          <Image
            src="/assets/hero/doctor-duck.png"
            alt="Doctor Duck"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Biscuit Stack - Right Side on Semicircle */}
        <div className="absolute right-[-100px] top-[80px] w-[180px] h-[180px] z-10 lg:right-[-150px] lg:top-[100px] lg:w-[220px] lg:h-[220px]">
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
        {/* Flat Rectangle Background */}
        <div className="absolute inset-0 bg-[#23b349] size-full" />
        
        <div className="relative max-w-[1000px] mx-auto flex flex-col items-center gap-8">
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
        <div className="max-w-[1400px] mx-auto relative">
          
          {/* Diagonal Background Layers */}
          {/* Dark Grey Background Layer */}
          <div className="absolute left-1/2 -translate-x-1/2 flex h-[322.73px] items-center justify-center top-[148.3px] w-full max-w-[2052.554px] z-0">
            <div className="flex-none rotate-[-6.1deg] w-full h-[105.185px] bg-[#404040] shadow-xl" />
          </div>
          
          {/* Yellow Text Tape Layer with Animation */}
          <div className="absolute left-1/2 -translate-x-1/2 flex h-[290.888px] items-center justify-center top-[161.1px] w-full max-w-[2054.879px] z-0">
            <div className="flex-none rotate-[-5.02deg] w-full h-[111.526px] bg-[#FFEC19] overflow-hidden shadow-xl animate-pulse">
              <div className="relative h-full w-full">
                {/* Animated Marquee Text */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="flex whitespace-nowrap animate-marquee">
                    <div className="font-[family-name:var(--font-funnel-display)] font-extrabold text-[96px] text-[#DB4426] leading-[0.88] tracking-[-0.384px] whitespace-nowrap px-8">
                      A new stylish way of Connecting!
                    </div>
                    <div className="font-[family-name:var(--font-funnel-display)] font-extrabold text-[96px] text-[#DB4426] leading-[0.88] tracking-[-0.384px] whitespace-nowrap px-8">
                      A new stylish way of Connecting!
                    </div>
                    <div className="font-[family-name:var(--font-funnel-display)] font-extrabold text-[96px] text-[#DB4426] leading-[0.88] tracking-[-0.384px] whitespace-nowrap px-8">
                      A new stylish way of Connecting!
                    </div>
                  </div>
                </div>
                
                {/* Static positioned text from Figma */}
                <div className="absolute font-[family-name:var(--font-funnel-display)] font-extrabold text-[96px] text-[#DB4426] leading-[0.88] tracking-[-0.384px] whitespace-nowrap">
                  <p className="absolute left-[643.46px] top-[calc(50%-51.4px)] -translate-x-1/2">
                    A new stylish way of Connecting!
                  </p>
                  <p className="absolute left-[1325.75px] top-[calc(50%-47.63px)] -translate-x-1/2">
                    A new stylish way of Connecting!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Video Frame */}
          <div className="relative left-1/2 -translate-x-1/2 border-4 border-white border-solid h-[647px] rounded-[48px] top-0 w-full max-w-[1380px] overflow-hidden z-10">
            {/* Video Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#74E648] via-[#4ADE80] to-[#1FD650]" />
            
            {/* Family Video Image */}
            <div className="absolute left-1/2 -translate-x-1/2 h-[768px] top-[-64.5px] w-full max-w-[1408px]">
              <Image
                src="/assets/hero/video-family.png"
                alt="Family enjoying Vita products"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Sound Mute Icon */}
            <div className="absolute left-[calc(50%-631.5px)] top-[calc(50%-262px)] w-[63px] h-[63px] z-20">
              <Image
                src="/assets/hero/sound-mute-video.svg"
                alt="Mute"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Complex VITA Badge */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#FFEC19] flex items-center justify-center shadow-2xl rotate-12 border-4 border-white overflow-hidden">
            <div className="relative w-full h-full">
              {/* Background Layer */}
              <div className="absolute inset-0 rounded-full bg-[#FFEC19]" />
              
              {/* Complex Badge Layers from Figma */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%]">
                  {/* Layer 1 */}
                  <div className="absolute inset-[14.21%_15.42%_13.32%_15.41%]">
                    <Image
                      src="/assets/hero/badge-layer1.svg"
                      alt="Badge Layer 1"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Layer 2 */}
                  <div className="absolute inset-[0_6.76%_79.9%_6.08%]">
                    <Image
                      src="/assets/hero/badge-layer2.svg"
                      alt="Badge Layer 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Layer 3 */}
                  <div className="absolute inset-[75.03%_9.07%_0_9.35%]">
                    <Image
                      src="/assets/hero/badge-layer3.svg"
                      alt="Badge Layer 3"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Layer 4 */}
                  <div className="absolute inset-[51.54%_0.57%_27.98%_0.57%]">
                    <Image
                      src="/assets/hero/badge-layer4.svg"
                      alt="Badge Layer 4"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Union Layer */}
                  <div className="absolute inset-[23.9%_25.4%_24.41%_25.91%]">
                    <Image
                      src="/assets/hero/badge-union.svg"
                      alt="Badge Union"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* VITA Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative text-[#DB4426] font-[family-name:var(--font-funnel-display)] font-extrabold text-[20px] lg:text-[24px] uppercase tracking-tight z-10">
                  VITA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

{/* Animation Styles */}
<style jsx>{`
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.9;
    }
  }
  
  .animate-marquee {
    animation: marquee 15s linear infinite;
  }
  
  .animate-pulse {
    animation: pulse 3s ease-in-out infinite;
  }
`}</style>
