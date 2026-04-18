"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

// Local component for social links to ensure clean JSX
const socialLinks = [
  { name: "Facebook", href: "#", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  { name: "Instagram", href: "#", path: "M12.315 2c2.43 0 2.784.01 3.8.058 1.013.048 1.563.21 1.93.352.483.187.828.412 1.19.773.361.362.586.707.773 1.19.142.367.304.917.352 1.93.048 1.016.059 1.37.059 3.8s-.01 2.784-.059 3.8c-.048 1.013-.21 1.563-.352 1.93-.187.483-.412.828-.773 1.19-.362.361-.707.586-1.19.773-.367.142-.917.304-1.93.352-1.016.048-1.37.059-3.8.059s-2.784-.01-3.8-.059c-1.013-.048-1.563-.21-1.93-.352-.483-.187-.828-.412-1.19-.773-.362-.361-.586-.707-.773-1.19-.142-.367-.304-.917-.352-1.93-.048-1.016-.059-1.37-.059-3.8s.01-2.784.059-3.8c.048-1.013.21-1.563.352-1.93.187-.483.412-.828.773-1.19.362-.361.707-.586 1.19-.773.367-.142.917-.304 1.93-.352 1.016-.048 1.37-.059 3.8-.059zm0 1.8c-2.43 0-2.744.01-3.7.054-.95.044-1.464.204-1.808.337-.456.177-.78.388-1.12.727-.34.339-.55.663-.727 1.12-.133.344-.293.858-.337 1.808-.044.956-.054 1.27-.054 3.7s.01 2.744.054 3.7c.044.95.204 1.464.337 1.808.177.456.388.78.727 1.12.339.34.663.55 1.12.727.344.133.858.293 1.808.337.956.044 1.27.054 3.701.054s2.744-.01 3.7-.054c.95-.044 1.464-.204 1.808-.337.456-.177.78-.388 1.12-.727.339-.339.55-.663.727-1.12.133-.344.293-.858.337-1.808.044-.956.054-1.27.054-3.7s-.01-2.744-.054-3.7c-.044-.95-.204-1.464-.337-1.808-.177-.456-.388-.78-.727-1.12-.339-.34-.663-.55-1.12-.727-.344-.133-.858-.293-1.808-.337-.956-.044-1.27-.054-3.7-.054zM12.315 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 1.8c-1.767 0-3.2 1.433-3.2 3.2s1.433 3.2 3.2 3.2 3.2-1.433 3.2-3.2-1.433-3.2-3.2-3.2zM17.315 6c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" },
  { name: "LinkedIn", href: "#", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative w-full bg-[#000500] overflow-hidden">
      {/* ── 1. Integrated CTA Section ── */}
      <div className="relative px-6 sm:px-12 lg:px-32 pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="relative rounded-[32px] sm:rounded-[48px] bg-[#90D152] overflow-visible min-h-[400px] flex flex-col">
          <div className="flex flex-col lg:flex-row lg:items-end px-8 sm:px-12 lg:px-16 pt-12 lg:pt-16 pb-12 lg:pb-20">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-[800px] z-10">
              <h2 className="font-['Outfit'] font-black text-[#404040] text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.9] tracking-tighter uppercase">
                Let's Work <br /> Together
              </h2>
              <p className="font-['Funnel_Display'] font-medium text-[#404040]/80 text-[18px] sm:text-[20px] lg:text-[24px] max-w-[500px] leading-relaxed">
                Have a question, business inquiry, or partnership idea? Our team is ready to connect and support you.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full self-start hover:scale-105 transition-all duration-300 shadow-xl shadow-black/5"
              >
                <span className="font-['Funnel_Display'] font-bold text-[#23B349] text-[20px] lg:text-[24px]">Connect With Us</span>
                <div className="w-8 h-8 rounded-full bg-[#23B349]/10 flex items-center justify-center">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#23B349" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                </div>
              </Link>
            </div>

            {/* Floating Image Component */}
            <div className="hidden lg:block absolute right-12 bottom-[-40px] w-[450px] h-[580px] z-20">
               <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl">
                 <Image 
                  src="/assets/cta/cta-main.png" 
                  alt="" 
                  fill 
                  className="object-cover object-top scale-110"
                />
               </div>
            </div>
          </div>

          {/* Integrated Newsletter Strip */}
          <div className="mt-auto w-full bg-white rounded-b-[32px] sm:rounded-b-[48px] px-8 sm:px-12 lg:px-16 py-8 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="font-['Outfit'] font-black text-[#23B349] text-[32px] sm:text-[42px] lg:text-[56px] leading-none uppercase tracking-tighter">
              Get In Touch
            </h3>
            <div className="flex w-full md:w-auto items-center gap-4">
              <div className="flex-1 md:w-[400px] relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full h-14 sm:h-16 rounded-full border-2 border-gray-100 px-8 font-['Funnel_Display'] text-[18px] focus:border-[#23B349] outline-none transition-colors"
                />
              </div>
              <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#23B349] flex items-center justify-center text-white hover:rotate-45 transition-all duration-500 shadow-lg shadow-green-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Navigation & Branding Grid ── */}
      <div className="px-6 sm:px-12 lg:px-32 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                <Image src="/assets/brand/vita-logo.svg" alt="Vita Logo" fill className="object-contain" />
              </div>
              <span className="font-['Outfit'] font-black text-[24px] lg:text-[32px] text-white uppercase tracking-tighter leading-none">
                Vita Food <br /> Complex
              </span>
            </div>
            
            <p className="font-['Funnel_Display'] font-medium text-white/50 text-[18px] leading-relaxed max-w-[320px]">
              Quality food for a better life. Bringing joy and taste to every table across Ethiopia.
            </p>

            <div className="flex flex-col gap-6 mt-4">
               <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#23B349] group-hover:text-white transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 </div>
                 <span className="font-['Outfit'] font-medium text-white/80">+251 911 234 567</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#23B349] group-hover:text-white transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                 </div>
                 <span className="font-['Outfit'] font-medium text-white/80">info@vitahydro.com</span>
               </div>
            </div>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#23B349] transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={social.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-4">
            <div className="flex flex-col gap-8">
              <h4 className="font-['Outfit'] font-black text-[#23B349] text-[20px] uppercase tracking-wider">Products</h4>
              <nav className="flex flex-col gap-4">
                {["Biscuits", "Flour", "New Arrivals", "Best Sellers"].map((item) => (
                  <Link key={item} href="/products" className="font-['Funnel_Display'] text-white/40 hover:text-white hover:translate-x-1 transition-all duration-300">{item}</Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-['Outfit'] font-black text-[#23B349] text-[20px] uppercase tracking-wider">Company</h4>
              <nav className="flex flex-col gap-4">
                {["About Us", "Our Story", "Sustainability", "Investors"].map((item) => (
                  <Link key={item} href="/about" className="font-['Funnel_Display'] text-white/40 hover:text-white hover:translate-x-1 transition-all duration-300">{item}</Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-['Outfit'] font-black text-[#23B349] text-[20px] uppercase tracking-wider">Resources</h4>
              <nav className="flex flex-col gap-4">
                {["Recipes", "Media Kit", "FAQs", "Contact"].map((item) => (
                  <Link key={item} href="/resources" className="font-['Funnel_Display'] text-white/40 hover:text-white hover:translate-x-1 transition-all duration-300">{item}</Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Stylized Watermark & Legal ── */}
      <div className="relative mt-8">
        {/* Large Decorative VITA Background */}
        <div className="px-6 sm:px-12 lg:px-32 pb-12 lg:pb-0 pointer-events-none select-none">
          <span className="font-['Outfit'] font-black text-[120px] sm:text-[200px] lg:text-[300px] leading-none text-[#C0FF85] opacity-20 block">
            VITA
          </span>
        </div>

        {/* Floating Product Decorations (Large Screen Only) */}
        <div className="hidden lg:block absolute right-0 top-[-100px] w-[600px] h-[400px] pointer-events-none opacity-60">
           <div className="absolute right-[320px] top-[100px] w-[180px] h-[150px] rotate-[-12deg] shadow-2xl rounded-2xl overflow-hidden animate-float">
             <Image src="/assets/products/product-2.png" alt="" fill className="object-cover" />
           </div>
           <div className="absolute right-[120px] top-0 w-[240px] h-[240px] rotate-[8deg] shadow-2xl rounded-3xl overflow-hidden animate-float-delayed">
             <Image src="/assets/products/product-1.png" alt="" fill className="object-cover" />
           </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="bg-white px-6 sm:px-12 lg:px-32 py-8 relative z-30">
          <div className="border-t-2 border-[#23B349] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8 lg:gap-16">
              {["Privacy Policy", "Terms of Service", "Legal Notice"].map((item) => (
                <Link key={item} href="#" className="font-['Outfit'] font-medium text-[#404040] text-[14px] hover:text-[#23B349] transition-colors">{item}</Link>
              ))}
            </div>
            <p className="font-['Outfit'] font-medium text-[#404040] text-[14px]">
              © 2026 Vita Hydro Agro-Processing PLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}
