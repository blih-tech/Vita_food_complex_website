"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12.315 2c2.43 0 2.784.01 3.8.058 1.013.048 1.563.21 1.93.352.483.187.828.412 1.19.773.361.362.586.707.773 1.19.142.367.304.917.352 1.93.048 1.016.059 1.37.059 3.8s-.01 2.784-.059 3.8c-.048 1.013-.21 1.563-.352 1.93-.187.483-.412.828-.773 1.19-.362.361-.707.586-1.19.773-.367.142-.917.304-1.93.352-1.016.048-1.37.059-3.8.059s-2.784-.01-3.8-.059c-1.013-.048-1.563-.21-1.93-.352-.483-.187-.828-.412-1.19-.773-.362-.361-.586-.707-.773-1.19-.142-.367-.304-.917-.352-1.93-.048-1.016-.059-1.37-.059-3.8s.01-2.784.059-3.8c.048-1.013.21-1.563.352-1.93.187-.483.412-.828.773-1.19.362-.361.707-.586 1.19-.773.367-.142.917-.304 1.93-.352 1.016-.048 1.37-.059 3.8-.059zm0 1.8c-2.43 0-2.744.01-3.7.054-.95.044-1.464.204-1.808.337-.456.177-.78.388-1.12.727-.34.339-.55.663-.727 1.12-.133.344-.293.858-.337 1.808-.044.956-.054 1.27-.054 3.7s.01 2.744.054 3.7c.044.95.204 1.464.337 1.808.177.456.388.78.727 1.12.339.34.663.55 1.12.727.344.133.858.293 1.808.337.956.044 1.27.054 3.701.054s2.744-.01 3.7-.054c.95-.044 1.464-.204 1.808-.337.456-.177.78-.388 1.12-.727.339-.339.55-.663.727-1.12.133-.344.293-.858.337-1.808.044-.956.054-1.27.054-3.7s-.01-2.744-.054-3.7c-.044-.95-.204-1.464-.337-1.808-.177-.456-.388-.78-.727-1.12-.339-.34-.663-.55-1.12-.727-.344-.133-.858-.293-1.808-.337-.956-.044-1.27-.054-3.7-.054zM12.315 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 1.8c-1.767 0-3.2 1.433-3.2 3.2s1.433 3.2 3.2 3.2 3.2-1.433 3.2-3.2-1.433-3.2-3.2-3.2zM17.315 6c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  }
];

const footerColumns = [
  {
    key: "products",
    items: ["Bora-Chocolate", "Kiyu Cream", "Super Flour", "Vita Vanilla"],
    links: ["/products", "/products", "/products", "/products"]
  },
  {
    key: "company",
    items: ["About Us", "Careers", "News", "Contact"],
    links: ["/about", "/about", "/about", "/about"]
  },
  {
    key: "recipes",
    items: ["Biscuit Recipes", "Flour Recipes", "Baking Tips", "Blog"],
    links: ["/recipes", "/recipes", "/recipes", "/recipes"]
  }
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative w-full bg-[#000500] pt-24 pb-12 overflow-hidden">
      {/* Top Wave/Pattern Decoration */}
      <div className="absolute top-0 left-0 w-full h-24 z-10 pointer-events-none">
        <Image 
          src="/assets/sections/top-wave.svg" 
          alt="" 
          fill 
          className="object-cover object-bottom opacity-50 brightness-0 invert"
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                <Image 
                  src="/assets/brand/vita-logo.svg" 
                  alt="Vita Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-['Outfit'] font-black text-2xl lg:text-3xl text-white uppercase tracking-tighter">
                Vita Food Complex
              </span>
            </Link>
            
            <p className="font-['Funnel_Display'] font-medium text-white/60 text-lg leading-relaxed max-w-sm">
              {t("tagline")}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 text-white/70 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#23B349]/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="font-['Outfit'] text-base lg:text-lg group-hover:text-white transition-colors">
                  {t("address")}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-white/70 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#23B349]/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="font-['Outfit'] text-base lg:text-lg group-hover:text-white transition-colors">
                  {t("email")}
                </span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {footerColumns.map((col) => (
              <div key={col.key} className="flex flex-col gap-8">
                <h4 className="font-['Outfit'] font-black text-white text-xl uppercase tracking-wider">
                  {t(`columns.${col.key}`)}
                </h4>
                <nav className="flex flex-col gap-4">
                  {col.items.map((item, idx) => (
                    <Link 
                      key={item} 
                      href={col.links[idx]}
                      className="font-['Funnel_Display'] font-medium text-white/50 text-base lg:text-lg hover:text-[#23B349] hover:translate-x-1 transition-all duration-300"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
            
            {/* Social Column */}
            <div className="flex flex-col gap-8">
              <h4 className="font-['Outfit'] font-black text-white text-xl uppercase tracking-wider">
                {t("columns.connect")}
              </h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#23B349] transition-all duration-300 group"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-['Outfit'] text-white/30 text-sm lg:text-base text-center sm:text-left">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="font-['Outfit'] text-white/30 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-['Outfit'] text-white/30 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
