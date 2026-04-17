"use client";

import { useTranslations } from "next-intl";

export default function ProductsSection() {
  const t = useTranslations("Products");

  return (
    <section id="products" className="relative w-full">
      {/* Product One - Chewata */}
      <div className="relative bg-[#d6f7d7] h-[1006px] overflow-hidden w-full">
        {/* Background highlights and effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-[345.521px] bg-gradient-to-t from-[rgba(0,0,0,0.29)] via-[rgba(0,0,0,0)] to-transparent mix-blend-overlay opacity-50" />
          <div className="absolute left-1/2 top-[calc(50%+598.5px)] -translate-x-1/2 -translate-y-1/2 w-[1485.033px] h-[1887.395px] mix-blend-soft-light">
            <img
              src="https://www.figma.com/api/mcp/asset/c1665c71-9594-40f1-86f6-5f6d7780a31f"
              alt=""
              className="absolute inset-0 max-w-none"
            />
          </div>
          <div className="absolute left-1/2 top-[745.37px] -translate-x-1/2 w-[1867.351px] h-[224.989px] mix-blend-soft-light">
            <div className="-scale-y-100 w-full h-full">
              <img
                src="https://www.figma.com/api/mcp/asset/fcc100d8-8481-44e2-8476-31e8725719b0"
                alt=""
                className="absolute inset-[-73.78%_-8.89%] max-w-none"
              />
            </div>
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-[345.521px] mix-blend-overlay">
            <div className="-scale-y-100 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.29)] via-[rgba(0,0,0,0)] to-transparent opacity-40" />
          </div>
        </div>

        {/* Main product image */}
        <div className="absolute left-[512px] top-[62px] w-[1088.362px] h-[790.598px]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="rotate-[-4.33deg] w-full h-full">
              <img
                src="https://www.figma.com/api/mcp/asset/55a5318d-3e8e-484d-8729-411f1cc6634a"
                alt="Chewata Product"
                className="absolute h-[96.26%] left-[5.23%] max-w-none top-[-6.78%] w-[97.57%]"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-[-80.56px] top-[410.9px] w-[639.11px] h-[464.076px]">
          <div className="rotate-[2.9deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/e206edc8-60e8-48da-bf04-dfc3b19f28a5"
              alt="Chewata Background"
              className="w-[618px] h-[433.403px] opacity-80 object-cover"
            />
          </div>
        </div>

        {/* Vector decorations */}
        <div className="absolute right-[-43px] top-[751.47px] w-[462.126px] h-[207.037px] mix-blend-color-burn">
          <div className="rotate-[12.8deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/13b264db-d39e-460e-8988-1efb0faf0610"
              alt=""
              className="w-[448.828px] h-[110.368px] absolute inset-[-46.3%_-11.39%]"
            />
          </div>
        </div>

        <div className="absolute left-[463.44px] top-[631.02px] w-[1174.422px] h-[401.654px] mix-blend-color-burn">
          <div className="rotate-[10.47deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/5d058fc3-d7e3-4f0a-8e5f-d14eed147f10"
              alt=""
              className="w-[1158.387px] h-[194.373px] absolute inset-[-33.34%_-5.59%]"
            />
          </div>
        </div>

        {/* Cookie decorations */}
        <div className="absolute left-[743.03px] top-[366.52px] w-[443.259px] h-[365.183px]">
          <div className="rotate-6 w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/9e3ead6d-82dc-4c21-894b-32df9d29da7a"
              alt="Cookie decoration"
              className="w-[411.648px] h-[323.919px] absolute h-[96.87%] left-0 top-[-0.57%] w-full"
            />
          </div>
        </div>

        <div className="absolute left-[1473.2px] top-[493.21px] w-[577.641px] h-[417.769px]">
          <div className="-scale-y-100 rotate-[177.49deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/823aa194-4ab7-41cf-be1e-c492b6eb603d"
              alt="Cookie decoration"
              className="w-[560.957px] h-[393.601px] object-cover"
            />
          </div>
        </div>

        <div className="absolute left-[87.53px] top-[-1.76px] w-[745.885px] h-[856.757px]">
          <div className="-scale-y-100 rotate-[66.51deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/e3916f07-7c8f-48e3-86e1-ce924cf4c9df"
              alt="Background decoration"
              className="w-[715.946px] h-[502.092px] object-cover"
            />
          </div>
        </div>

        {/* Product title and description */}
        <div className="absolute left-[128px] top-[827.97px] w-[404px]">
          <div className="flex flex-col gap-6 items-start text-black whitespace-nowrap">
            <h3 className="font-['Funnel_Display'] font-normal text-[48px] tracking-[-0.48px] leading-none">
              Vita Chewata {">"}
            </h3>
            <p className="font-['Funnel_Display'] font-medium text-[24px] tracking-[-0.096px] leading-none">
              Soft Cream Biscuit
            </p>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="absolute left-1/2 top-[calc(50%-281.5px)] -translate-x-1/2 font-['Funnel_Display'] font-extrabold text-[446px] text-white leading-[0.88] tracking-[-24.084px] text-center uppercase whitespace-nowrap">
          Chewata
        </h2>
      </div>

      {/* Product Two - Oreo */}
      <div className="relative bg-[#1648b5] h-[1006px] overflow-hidden w-full">
        {/* Background highlights */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-[345.521px] bg-gradient-to-t from-[rgba(0,0,0,0.29)] via-[rgba(0,0,0,0)] to-transparent mix-blend-overlay opacity-50" />
          <div className="absolute left-1/2 top-[calc(50%+598.5px)] -translate-x-1/2 -translate-y-1/2 w-[1485.033px] h-[1887.395px] mix-blend-soft-light">
            <img
              src="https://www.figma.com/api/mcp/asset/3ac95b6d-2e0d-493f-8efe-fd060be4a120"
              alt=""
              className="absolute inset-0 max-w-none"
            />
          </div>
          <div className="absolute left-1/2 top-[745.37px] -translate-x-1/2 w-[1867.351px] h-[224.989px] mix-blend-soft-light">
            <div className="-scale-y-100 w-full h-full">
              <img
                src="https://www.figma.com/api/mcp/asset/0dd2f30b-b243-45f3-89c1-018acb8a9a87"
                alt=""
                className="absolute inset-[-73.78%_-8.89%] max-w-none"
              />
            </div>
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-[345.521px] mix-blend-overlay">
            <div className="-scale-y-100 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.29)] via-[rgba(0,0,0,0)] to-transparent opacity-40" />
          </div>
        </div>

        {/* Oreo product image */}
        <div className="absolute left-[438px] top-[145px] w-[1187.869px] h-[689.621px]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="rotate-[7.79deg] w-full h-full">
              <img
                src="https://www.figma.com/api/mcp/asset/a3179fd3-6f7f-4a13-a2ce-40f6c57d1910"
                alt="Oreo Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main product images */}
        <div className="absolute left-[960px] top-[497.77px] w-[1091.456px] h-[1098.097px]">
          <div className="rotate-[33.91deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/305c2e9b-4887-46e8-b0d0-dcebf2f98528"
              alt="Oreo Main Product"
              className="w-[776.646px] h-[801.061px] opacity-90 absolute h-[144.75%] left-[0.23%] max-w-none top-[-22.38%] w-[99.55%]"
            />
          </div>
        </div>

        <div className="absolute left-[251.24px] top-[381.41px] w-[446.031px] h-[529.269px]">
          <div className="rotate-[21.88deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/de0ad5b3-fea0-45e3-96a0-4b58943f0d94"
              alt="Oreo Side Product"
              className="w-[299.959px] h-[449.883px] object-cover"
            />
          </div>
        </div>

        {/* Vector decorations */}
        <div className="absolute left-[224.74px] top-[740.91px] w-[462.126px] h-[207.037px] mix-blend-multiply">
          <div className="-scale-y-100 rotate-[167.2deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/5779a5a8-3f30-4f11-aec1-51a42b624bdc"
              alt=""
              className="w-[448.828px] h-[110.368px] absolute inset-[-46.3%_-11.39%]"
            />
          </div>
        </div>

        <div className="absolute left-[537.28px] top-[678.64px] w-[930.922px] h-[294.85px] mix-blend-multiply">
          <div className="-scale-y-100 rotate-[169.53deg] w-full h-full">
            <img
              src="https://www.figma.com/api/mcp/asset/0b19c17d-0486-4ce2-b7f0-1485dbbe4d66"
              alt=""
              className="w-[922.79px] h-[129.301px] absolute inset-[-50.12%_-7.02%]"
            />
          </div>
        </div>

        {/* Product title and description */}
        <div className="absolute left-[128px] top-[827.97px] w-[404px]">
          <div className="flex flex-col gap-6 items-start text-white whitespace-nowrap">
            <h3 className="font-['Funnel_Display'] font-normal text-[48px] tracking-[-0.48px] leading-none">
              Vita Oreo {">"}
            </h3>
            <p className="font-['Funnel_Display'] font-medium text-[24px] tracking-[-0.096px] leading-none">
              Soft Cream Biscuit
            </p>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="absolute left-1/2 top-[116.57px] -translate-x-1/2 font-['Funnel_Display'] font-extrabold text-[725px] text-white leading-[0.88] tracking-[-39.15px] text-center uppercase whitespace-nowrap">
          Oreo
        </h2>
      </div>
    </section>
  );
}
