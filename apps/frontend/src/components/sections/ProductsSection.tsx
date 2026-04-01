'use client';

import { Button } from "../ui/button";

const FOOD_IMG = "/assets/hero/food-bg.jpg";
const PRODUCT_IMG = "/assets/products/bora-chocolate.svg";
const STACKED_IMG = "/assets/hero/biscuit-piece.svg";
const WAVE_SVG = "/assets/decorations/wave.svg";

const stackedImages = [
  { zIndex: 'z-10' },
  { zIndex: 'z-20' },
  { zIndex: 'z-30' },
];

export default function ProductsSection() {
  return (
    <section className="relative w-full bg-[#0f4b1f] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* ── LEFT: product info + CTA + decorative images ── */}
          <div className="order-2 lg:order-1 flex flex-col items-start gap-6 lg:gap-8 w-full lg:w-auto">
            <div className="flex flex-col items-start gap-2">
              <p className="[font-family:'Outfit',Helvetica] font-normal text-white text-base sm:text-xl lg:text-2xl tracking-[0] leading-normal">
                Cream
              </p>
              <h3 className="[font-family:'Funnel_Display',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-[0] leading-normal">
                Bora-Chocolate
              </h3>
            </div>

            <Button className="flex items-center justify-center gap-2.5 bg-[#0f4b1f] rounded-lg overflow-hidden h-auto px-8 sm:px-12 lg:px-20 py-4 lg:py-5 hover:bg-[#0f4b1f]/90 w-full sm:w-auto lg:w-[322px]">
              <span className="[font-family:'Funnel_Display',Helvetica] font-bold text-white text-lg sm:text-2xl lg:text-[32px] tracking-[1.28px] leading-normal">
                View Product
              </span>
            </Button>

        {/* Bottom-left blurred image (hidden on mobile) */}
        <div className="hidden lg:block w-[310px] h-[325px] overflow-hidden rounded-sm blur-[1.5px]">
          <img className="w-full h-full object-cover" alt="Img" src="https://c.animaapp.com/mnen63f6ozOTkE/img/chatgptimageaug22025f01-07-28pm-3.png" />
        </div>
          </div>

          {/* ── CENTER: main product image ── */}
          <div className="order-1 lg:order-2 flex-1 flex items-center justify-center min-h-[260px] sm:min-h-[400px] lg:min-h-0">
            <img
              className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[869px] h-auto object-contain drop-shadow-2xl"
              alt="Bora-Chocolate product"
              src={PRODUCT_IMG}
            />
          </div>

          {/* ── RIGHT: decorative blurred + stacked images (desktop only) ── */}
          <div className="hidden lg:flex flex-col items-end justify-between order-3 lg:w-[320px] xl:w-[420px] shrink-0">
            {/* Large blurred right image */}
            <div className="w-full h-[783px] overflow-hidden rounded-sm blur-[7.25px]">
              <img className="w-full h-full object-cover" alt="Img" src="https://c.animaapp.com/mnen63f6ozOTkE/img/chatgptimageaug22025f01-07-28pm-3.png" />
            </div>

            {/* Stacked images column */}
            <div className="flex flex-col items-start w-[167px] blur-[2px] mt-4">
              {stackedImages.map((img, index) => (
                <img
                  key={`stacked-${index}`}
                  className={`relative w-full h-[153px] ${img.zIndex} object-cover`}
                  alt=""
                  src={STACKED_IMG}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── WAVE DECORATION ── */}
        <img
          className="w-full h-auto mt-8 sm:mt-12 lg:mt-16"
          alt="Frame"
          src={WAVE_SVG}
        />
      </div>
    </section>
  );
}
