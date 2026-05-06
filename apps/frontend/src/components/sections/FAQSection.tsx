"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const [openId, setOpenId] = useState<number | null>(0);
  
  const faqs = t.raw("items") as { question: string; answer: string }[];

  return (
    <section className="flex flex-col items-center w-full max-w-[1380px] mx-auto gap-12 lg:gap-[72px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 lg:gap-[34px] text-center max-w-[1302px]">
        <h1 className="font-['Outfit'] font-extrabold text-[40px] md:text-[60px] lg:text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349]">
          {t("heading")}
        </h1>
        <p className="font-['Funnel_Display'] font-light text-[18px] md:text-[24px] lg:text-[28px] leading-tight tracking-[-0.004em] text-[#444444]">
          {t("subtext")}
        </p>
      </div>

      {/* Accordions */}
      <div className="flex flex-col w-full gap-6 lg:gap-[36px]">
        {faqs.map((faq, index) => {
          const isOpen = openId === index;

          return (
            <div
              key={index}
              className={`w-full flex flex-col justify-start items-start px-6 py-8 lg:px-[35px] lg:py-[44px] rounded-[24px] md:rounded-[48px] overflow-hidden ${
                isOpen ? "bg-[#23B349] text-white border border-[#23B349]" : "bg-white text-[#666666] border border-black"
              }`}
              style={{
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              <div className="flex flex-row w-full justify-between items-start gap-4">
                {/* Question Wrapper to allow expansion */}
                <div className="flex flex-col w-full max-w-[1037px]">
                  <h3
                    className={`font-['Funnel_Display'] text-[22px] md:text-[28px] lg:text-[32px] leading-[153%] capitalize cursor-pointer ${
                      isOpen ? "font-medium" : "font-normal"
                    }`}
                    onClick={() => setOpenId(isOpen ? null : index)}
                  >
                    {faq.question}
                  </h3>

                  {isOpen && (
                      <div
                        className="flex flex-col gap-[30px] lg:gap-[52px] mt-[30px] lg:mt-[52px]"
                      >
                        <p className="font-['Outfit'] font-medium text-[20px] md:text-[26px] lg:text-[32px] leading-[150%] lg:leading-[186%] capitalize">
                          {faq.answer}
                        </p>

                        {/* Feedback Box */}
                        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 md:px-[52px] md:py-[36px] gap-6 bg-white/5 border border-white/70 rounded-[24px] w-full">
                          <span className="font-['Funnel_Display'] font-medium text-[18px] md:text-[24px] leading-none tracking-[-0.004em]">
                            {t("feedback")}
                          </span>
                          <div className="flex items-center gap-[30px] md:gap-[52px]">
                            <button className="hover:opacity-80 transition-opacity">
                              <ThumbsUp className="w-[30px] h-[30px] md:w-[42px] md:h-[42px]" />
                            </button>
                            <button className="hover:opacity-80 transition-opacity">
                              <ThumbsDown className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] opacity-50" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => setOpenId(isOpen ? null : index)}
                  className={`flex flex-col justify-center items-center w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] rounded-full shrink-0 transition-colors mt-[-4px] lg:mt-[0px] ${
                    isOpen ? "bg-white text-black" : "bg-[#23B349] text-white"
                  }`}
                >
                  <span className="font-['Poppins'] text-[20px] lg:text-[28px] leading-none mb-[2px]">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
