"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

export default function BiscuitBrandSection() {
  const t = useTranslations("BiscuitBrand");

  return (
    <section id="biscuit-brand" className="relative w-full bg-[#E9F7ED] overflow-hidden">
      {/* Background vector decoration */}
      <div className="absolute left-1/2 top-[3939px] -translate-x-1/2 w-[1274.517px] h-[1340.771px]">
        <img
          src="https://www.figma.com/api/mcp/asset/d794b2a2-19ff-465f-aa18-e8f63b24493c"
          alt=""
          className="absolute inset-0 max-w-none size-full"
        />
      </div>

      {/* Main content */}
      <div className="relative left-1/2 top-[4045px] -translate-x-1/2 w-[1024px] flex flex-col items-center gap-12">
        {/* Text content */}
        <div className="flex flex-col items-center gap-12 text-center whitespace-nowrap">
          <p className="font-['Funnel_Display'] font-medium text-[20px] text-[#404040] tracking-[-0.08px] leading-normal">
            Brand Biscuit Products
          </p>
          
          <h2 className="font-['Outfit'] font-extrabold text-[80px] text-[#23b349] tracking-[-1.6px] leading-[0.9]">
            <span className="block leading-[0.9]">A Mouthful of</span>
            <span className="block leading-[0.9]">True Biscuit Taste!</span>
          </h2>
        </div>

        {/* Product images scroll */}
        <div className="relative w-[1926px] h-[549px]">
          {/* Product images with positioning */}
          <div className="absolute h-[385.818px] left-[-2440px] top-[69.53px] w-[511px]">
            <img
              src="https://www.figma.com/api/mcp/asset/7afed644-c96b-48c2-95a5-d9dfe0a35213"
              alt="Product 1"
              className="absolute inset-0 max-w-none object-cover"
            />
          </div>
          
          <div className="absolute h-[369.941px] left-[-1492px] top-[103.71px] w-[721px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://www.figma.com/api/mcp/asset/82b964b9-c659-4691-8782-0b1b48e7353f"
                alt="Product 2"
                className="absolute h-[118.34%] left-0 max-w-none top-[-18.34%] w-full"
              />
            </div>
          </div>
          
          <div className="absolute h-[352.46px] left-[-334px] top-[94.73px] w-[521px]">
            <img
              src="https://www.figma.com/api/mcp/asset/ff8b7662-9fd0-4792-8eda-e5b6990735f5"
              alt="Product 3"
              className="absolute inset-0 max-w-none object-cover"
            />
          </div>
          
          <div className="absolute h-[426.268px] left-[534px] top-[61.22px] w-[818px]">
            <img
              src="https://www.figma.com/api/mcp/asset/c0e2f6c0-ee69-482b-b6c8-15e00a078368"
              alt="Product 4"
              className="absolute inset-0 max-w-none object-cover"
            />
          </div>
          
          <div className="absolute h-[301.424px] left-[1662px] top-[134.29px] w-[551px]">
            <img
              src="https://www.figma.com/api/mcp/asset/e954abd0-ad70-4263-804a-1749ae1a26e9"
              alt="Product 5"
              className="absolute inset-0 max-w-none object-cover"
            />
          </div>
          
          <div className="absolute h-[312.179px] left-[2650px] top-[129.97px] w-[581px]">
            <img
              src="https://www.figma.com/api/mcp/asset/aa3cbabd-7c94-4a21-80b4-cc2ba91c5a4c"
              alt="Product 6"
              className="absolute inset-0 max-w-none object-cover"
            />
          </div>
          
          <div className="absolute h-[278.603px] left-[3668px] top-[159.32px] w-[661px]">
            <img
              src="https://www.figma.com/api/mcp/asset/b85ea315-72eb-4e03-a606-1ef7edee68eb"
              alt="Product 7"
              className="absolute inset-0 max-w-none object-cover"
            />
          </div>
        </div>

        {/* Text and CTA */}
        <div className="flex flex-col items-center gap-12">
          <p className="font-['Funnel_Display'] font-medium text-[20px] text-[#404040] text-center tracking-[-0.08px] leading-none whitespace-nowrap">
            <span className="block leading-normal">From everyday baking to special treats, Vita brings</span>
            <span className="block leading-normal">joy, taste, and quality to your table.</span>
          </p>
          
          <div className="flex items-center gap-6">
            <Link
              href="/products"
              className="bg-[#23b349] text-white px-8 py-4 rounded-full flex items-center gap-4 hover:bg-[#1a8c3a] transition-colors"
            >
              <span className="font-['Funnel_Display'] font-medium text-[24px] tracking-[-0.096px] leading-normal">
                View Products
              </span>
              <span className="font-['Outfit'] font-normal text-[20px] tracking-[-0.08px] leading-none">
                {">"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
