"use client";

import { useTranslations } from "next-intl";

// Figma assets from MCP
const imgSisterComapny = "https://www.figma.com/api/mcp/asset/e9156c87-ac2a-421d-a687-1467f08f4267";
const imgVector = "https://www.figma.com/api/mcp/asset/4bc0dda0-d0d4-4f09-92d9-ffabc43156a4";

// Sister company data from Figma
const sisterCompanies = [
  { id: "01", name: "Belayab foods" },
  { id: "02", name: "Arada Coffee" },
  { id: "03", name: "long tea" },
  { id: "04", name: "Belayab Motors" },
  { id: "05", name: "Belayab Geepas" },
  { id: "06", name: "Belayab Cabel" },
  { id: "07", name: "Lionstone Distribution" },
  { id: "08", name: "HUAJIA international trade" },
  { id: "09", name: "Lewis Retails" },
];

export default function SisterCompanySection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div 
      className="content-stretch flex flex-col items-start relative w-full lg:px-[73px] md:px-[48px] sm:px-[24px] lg:py-[128px] md:py-[96px] sm:py-[64px] rounded-[48px]" 
      data-node-id="2116:1586" 
      data-name="sister comapny"
    >
      {/* Background effects - Responsive */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[48px]">
        <div className="absolute inset-0 overflow-hidden rounded-[48px]">
          <img
            alt=""
            className="absolute lg:h-[-193.75%] lg:left-[101.26%] lg:max-w-none lg:top-[154.74%] lg:w-[-110.38%] md:h-[-150%] md:left-[90%] md:max-w-none md:top-[120%] md:w-[-80%] sm:h-[-100%] sm:left-[80%] sm:max-w-none sm:top-[100%] sm:w-[-60%]"
            src={imgSisterComapny}
          />
        </div>
        <div className="absolute bg-[rgba(55,255,0,0.4)] inset-0 mix-blend-soft-light rounded-[48px]" />
      </div>

      {/* Content container - Responsive */}
      <div className="content-stretch flex flex-col gap-[96px] items-center relative shrink-0 w-full lg:gap-[96px] md:gap-[72px] sm:gap-[48px]" data-node-id="2116:1585" data-name="Container">
        
        {/* Section headline - Responsive */}
        <p 
          className="font-['Outfit'] font-extrabold leading-[0.9] relative shrink-0 text-center text-white lg:text-[80px] lg:tracking-[-1.6px] lg:w-[604px] md:text-[60px] md:tracking-[-1.2px] md:w-[500px] sm:text-[40px] sm:tracking-[-0.8px] sm:w-[300px]" 
          data-node-id="2111:1555"
        >
          <span className="lg:block md:block sm:block">Meet Our</span>
          <span className="lg:block md:block sm:block">Sister Company's</span>
        </p>

        {/* Companies list - Responsive */}
        <div className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0 w-full lg:gap-[96px] md:gap-[72px] sm:gap-[48px]" data-node-id="2209:8526" data-name="List">
          
          {sisterCompanies.map((company, index) => (
            <div 
              key={company.id}
              className="relative shrink-0 w-full lg:h-[264px] lg:w-[1518px] md:h-[200px] md:w-[100%] sm:h-[160px] sm:w-[100%]" 
              data-node-id={`2209:${8451 + index * 35}`} 
              data-name={`Component ${25 + index}`}
            >
              {/* Border container - Responsive */}
              <div 
                className="absolute border border-[#23b349] border-solid inset-0 rounded-[48px] lg:rounded-[48px] md:rounded-[36px] sm:rounded-[24px]" 
                data-node-id={`I2209:${8451 + index * 35};2209:8441;2209:8436`} 
              />

              {/* Company number - Responsive */}
              <div 
                className="absolute lg:inset-[40.91%_92.69%_40.91%_3.69%] md:inset-[35%_90%_35%_5%] sm:inset-[30%_85%_30%_7%]" 
                data-node-id={`I2209:${8451 + index * 35};2209:8445`} 
                data-name={company.id}
              >
                <p 
                  className="font-['Funnel_Display'] font-light leading-none not-italic text-[#e8e8e8] whitespace-nowrap lg:text-[48px] lg:tracking-[-0.48px] md:text-[36px] md:tracking-[-0.36px] sm:text-[24px] sm:tracking-[-0.24px]" 
                  data-node-id={`I2209:${8451 + index * 35};2209:8445;2206:8282`}
                >
                  {company.id}
                </p>
              </div>

              {/* Company name - Responsive */}
              <div 
                className="absolute lg:inset-[38.26%_60.8%_38.64%_11.73%] md:inset-[25%_20%_25%_15%] sm:inset-[20%_15%_20%_20%]" 
                data-node-id={`I2209:${8451 + index * 35};2209:8443`} 
                data-name={company.name}
              >
                <p 
                  className="font-['Outfit'] font-bold leading-[0.96] text-[#e8e8e8] whitespace-nowrap lg:text-[64px] lg:tracking-[-1.28px] md:text-[48px] md:tracking-[-0.96px] sm:text-[32px] sm:tracking-[-0.64px]" 
                  style={{ fontFeatureSettings: "'liga' 0" }}
                  data-node-id={`I2209:${8451 + index * 35};2209:8443;2206:8281`}
                >
                  {company.name}
                </p>
              </div>

              {/* Arrow icon - Responsive */}
              <div 
                className="-translate-y-1/2 absolute flex items-center justify-center lg:left-[90.25%] lg:right-[5.53%] lg:top-[calc(50%+8px)] md:left-[85%] md:right-[10%] md:top-[calc(50%+6px)] sm:left-[80%] sm:right-[15%] sm:top-[calc(50%+4px)]" 
                style={{ 
                  containerType: "size",
                  aspectRatio: "58.666656494140625 / 58.66667556762695"
                }}
              >
                <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div 
                    className="relative size-full" 
                    data-node-id={`I2209:${8451 + index * 35};2209:8447`} 
                    data-name="Vector"
                  >
                    <div className="absolute inset-[-7.81%]">
                      <img 
                        alt="" 
                        className="block max-w-none size-full" 
                        src={imgVector} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
