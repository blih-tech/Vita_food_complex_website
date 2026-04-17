"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full bg-[#E9F7ED] overflow-hidden pt-[100px] sm:pt-[110px] lg:pt-[120px]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left decorative background */}
        <div className="absolute left-0 top-0 w-[723.803px] h-[1180.918px] rotate-180">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://www.figma.com/api/mcp/asset/f014081b-90e5-4c96-85f4-665ed7363c92"
              alt=""
              className="absolute h-[-201.14%] left-[59.07%] max-w-none top-[158.67%] w-[-332.86%]"
            />
          </div>
        </div>
        
        {/* Right blurred background */}
        <div className="absolute left-[-33.02px] top-[-1px] w-[425.017px] h-[1125.277px] blur-[13.55px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://www.figma.com/api/mcp/asset/e615e642-7573-4144-80ed-63b62546c544"
              alt=""
              className="absolute h-[202.84%] left-[-45.74%] max-w-none top-[-21.68%] w-[230.77%]"
            />
          </div>
          <div className="absolute inset-0 bg-[#23b349] mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white" />
        </div>
      </div>

      {/* Bottom vector decoration */}
      <div className="absolute left-1/2 top-[934.79px] -translate-x-1/2 w-[7210.039px] h-[2286.921px]">
        <img
          src="https://www.figma.com/api/mcp/asset/355ad25c-3d30-4642-a9dd-b06c50af9109"
          alt=""
          className="absolute inset-0 max-w-none size-full"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-[267.71px] px-4">
        {/* Main heading with decorative elements */}
        <div className="relative w-full max-w-[1024px] h-[326.885px] mb-12">
          {/* "A new stylish way of" */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 text-center">
            <h2 className="font-['Outfit'] font-extrabold text-[96px] text-[#404040] leading-[0.88] tracking-[-0.384px] whitespace-nowrap">
              <span className="block leading-[0.88]">A new stylish</span>
              <span className="block leading-[0.88]">way of</span>
            </h2>
          </div>
          
          {/* "Connecting!" */}
          <div className="absolute left-1/2 top-[157.89px] -translate-x-1/2 w-[1024px] h-[169px]">
            <h1 className="font-['Outfit'] font-extrabold text-[192px] text-[#23b349] leading-[0.88] tracking-[-5.76px] text-center whitespace-nowrap">
              Connecting!
            </h1>
          </div>
          
          {/* Decorative strawberry */}
          <div className="absolute left-[708.48px] top-[84.25px] w-[81.73px] h-[81.73px]">
            <img
              src="https://www.figma.com/api/mcp/asset/747ed7be-c464-4ee2-b7a1-2edae395fe48"
              alt=""
              className="absolute inset-0 max-w-none object-cover"
            />
          </div>
          
          {/* Decorative gemini image */}
          <div className="absolute left-[224.6px] top-[86.42px] w-[108px] h-[108px] flex items-center justify-center">
            <div className="rotate-[18.96deg]">
              <img
                src="https://www.figma.com/api/mcp/asset/d88bb1a8-1891-47e2-a355-84602aef28c1"
                alt=""
                className="w-[84.994px] h-[84.994px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-['Funnel_Display'] font-medium text-[20px] text-[#404040] text-center tracking-[-0.08px] mb-12 max-w-2xl">
          <span className="block leading-normal">From everyday baking to special treats, Vita brings</span>
          <span className="block leading-normal">joy, taste, and quality to your table.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex gap-6 items-center flex-wrap justify-center">
          {/* Primary button */}
          <Link
            href="/products"
            className="bg-[#23b349] text-white px-8 py-4 rounded-full flex items-center gap-4 hover:bg-[#1a8c3a] transition-colors"
          >
            <span className="font-['Funnel_Display'] font-medium text-[24px] tracking-[-0.096px]">Our Products</span>
            <span className="font-['Outfit'] font-normal text-[20px] tracking-[-0.08px]">{">"}</span>
          </Link>
          
          {/* Secondary button */}
          <Link
            href="/about"
            className="border border-[#1fd650] px-8 py-4 rounded-full flex items-center gap-4 hover:bg-[#1fd650] hover:bg-opacity-10 transition-colors"
          >
            <span className="font-['Funnel_Display'] font-medium text-[24px] tracking-[-0.096px] text-black">Why Vita</span>
            <span className="font-['Outfit'] font-normal text-[20px] tracking-[-0.08px]">®</span>
          </Link>
        </div>
      </div>

      {/* Hero images */}
      <div className="absolute left-[-432.14px] top-[3.87px] w-[2000px] h-[1200px]">
        {/* Product images */}
        <div className="absolute left-[1386px] top-[548px] w-[685px] h-[612px]">
          <img
            src="https://www.figma.com/api/mcp/asset/8778bea3-e4df-4803-a52b-d224628ab180"
            alt="Tiramisu"
            className="absolute left-[114.77px] top-[341.56px] w-[250.296px] h-[250.296px] object-cover mix-blend-multiply"
          />
          <img
            src="https://www.figma.com/api/mcp/asset/610b451a-8077-49a3-8ccc-e19fb5b419f8"
            alt="Doctor Duck Delight"
            className="absolute left-[0px] top-[0px] w-[425.017px] h-[425.017px] object-cover"
          />
          <img
            src="https://www.figma.com/api/mcp/asset/debfc2d4-51f5-4599-94fc-ebe3f0892b15"
            alt="ChatGPT Image"
            className="absolute left-[341.56px] top-[114.77px] w-[250.296px] h-[250.296px] object-cover mix-blend-multiply"
          />
        </div>
        
        {/* Badge */}
        <div className="absolute left-[1489.22px] top-[1705.96px] w-[249.646px] h-[249.646px] flex items-center justify-center">
          <div className="rotate-[10.21deg] w-[214.946px] h-[214.946px] rounded-full relative">
            <img
              src="https://www.figma.com/api/mcp/asset/fe5f63c6-f8ce-4523-9557-af07af98572d"
              alt=""
              className="absolute inset-0 max-w-none"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/a274e6df-a00d-4695-9589-0701a8c89720"
              alt=""
              className="absolute inset-0 max-w-none"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/e59ab274-4905-46ac-bf58-45f58a005316"
              alt=""
              className="absolute inset-[21.93%_21.96%] max-w-none"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/163de7b9-a47c-4479-8f66-988e6aa12fbd"
              alt=""
              className="absolute inset-[14.21%_15.42%_13.32%_15.41%] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
