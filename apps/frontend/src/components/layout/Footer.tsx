'use client';

import { Button } from "../ui/button";

const useCasesLinks = [
  "Web Design",
  "UI/UX Design", 
  "Mobile Apps",
  "Branding",
  "Development"
];

const companyLinks = [
  "About Us",
  "Careers",
  "Press",
  "Blog",
  "Contact"
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/mnenh57wcZ8d2C/img/facebook-1.svg",
    alt: "Facebook",
    className: "w-6 h-6 sm:w-8 sm:h-8"
  },
  {
    src: "https://c.animaapp.com/mnenh57wcZ8d2C/img/instagram-1.svg", 
    alt: "Instagram",
    className: "w-6 h-6 sm:w-8 sm:h-8"
  },
  {
    src: "https://c.animaapp.com/mnenh57wcZ8d2C/img/x-1.svg",
    alt: "X (Twitter)",
    className: "w-6 h-6 sm:w-8 sm:h-8"
  },
  {
    src: "https://c.animaapp.com/mnenh57wcZ8d2C/img/linkedin-1.svg",
    alt: "LinkedIn", 
    className: "w-6 h-6 sm:w-8 sm:h-8"
  }
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top section with CTA */}
      <section className="relative w-full bg-[#0f4b1f] overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-24">
          <h2 className="[font-family:'Funnel_Display',Helvetica] font-bold text-white text-2xl sm:text-3xl lg:text-[40px] text-center mb-6">
            Ready to Get Started?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-white/80 text-base sm:text-lg text-center mb-8 max-w-2xl">
            Join us in creating amazing food experiences that bring joy to every table.
          </p>
          <div className="w-full sm:w-auto lg:w-[500px]">
            <Button 
              className="w-full h-auto py-3 sm:py-4 lg:py-[22px] px-6 sm:px-10 bg-[#e9f7ed] hover:bg-[#d4eeda] rounded-lg overflow-hidden [font-family:'Funnel_Display',Helvetica] font-bold text-[#0f4b1f] text-lg sm:text-2xl lg:text-[32px] tracking-[0] leading-[normal]"
              variant="ghost"
            >
              Connect With US
            </Button>
          </div>
        </div>
        
        {/* Decorative images — hidden on mobile, visible from md up */}
        <img 
          className="hidden md:block absolute top-0 left-[40%] w-[50%] lg:w-[843px] h-full object-cover opacity-20"
          alt="Element fun"
          src="https://c.animaapp.com/mnenh57wcZ8d2C/img/20250820-1714-fun-bajaj-adventure-remix-01k33x5hxfem7bnz7j4svshc.png"
        />
        <img 
          className="hidden lg:block absolute top-0 left-[calc(50%+50px)] xl:left-[1034px] w-[786px] h-full object-cover opacity-20"
          alt="Element"
          src="https://c.animaapp.com/mnenh57wcZ8d2C/img/20250821-1017-animated-animals-playing-soccer-remix-01k35qr1z3eg.png"
        />
      </section>
      
      {/* Bottom dark footer */}
      <section className="w-full bg-[#050505] py-10 sm:py-14 lg:py-[98px]">
        <div className="flex flex-col sm:flex-row flex-wrap items-start gap-8 sm:gap-10 lg:gap-[159px] px-4 sm:px-8 lg:px-16 xl:px-[127px]">
          {/* Brand column */}
          <div className="flex flex-col w-full sm:w-[200px] lg:w-[404px] items-start gap-3">
            <div className="flex items-center gap-2.5">
              <img 
                className="w-8 h-8 lg:w-10 lg:h-10"
                alt="Color primary"
                src="/assets/brand/vita-logo.svg"
              />
              <span className="[font-family:'Funnel_Display',Helvetica] font-light text-white text-xl sm:text-2xl lg:text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                Vita Food Complex
              </span>
            </div>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-white/80 text-sm tracking-[0] leading-normal">
              High level experience in web design and development knowledge, producing quality work.
            </p>
          </div>
          
          {/* Use Cases column */}
          <div className="flex flex-col items-start gap-3 w-[140px] sm:w-[160px] lg:w-[262px]">
            <h3 className="[font-family:'Funnel_Display',Helvetica] font-bold text-white text-base lg:text-xl tracking-[0] leading-[normal]">
              Use Cases
            </h3>
            <nav className="flex flex-col gap-2">
              {useCasesLinks.map((link) => (
                <a key={link} href="#" className="[font-family:'Outfit',Helvetica] font-normal text-white/60 text-sm lg:text-base tracking-[0] leading-normal hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Company column */}
          <div className="flex flex-col items-start gap-3 w-[140px] sm:w-[160px] lg:w-[261px]">
            <h3 className="[font-family:'Funnel_Display',Helvetica] font-bold text-white text-base lg:text-xl tracking-[0] leading-[normal]">
              Company
            </h3>
            <nav className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <a key={link} href="#" className="[font-family:'Outfit',Helvetica] font-normal text-white/60 text-sm lg:text-base tracking-[0] leading-normal hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Follow us column */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
            <h3 className="[font-family:'Funnel_Display',Helvetica] font-bold text-white text-base lg:text-xl tracking-[0] leading-[normal]">
              Follow us
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {socialIcons.map((icon, index) => (
                <img key={index} className={`${icon.className} object-contain hover:opacity-80 transition-opacity cursor-pointer`} alt={icon.alt} src={icon.src} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
