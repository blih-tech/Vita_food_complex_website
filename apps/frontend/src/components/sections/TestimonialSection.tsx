"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Partnering with Vita Food Complex Distributor made our corporate gala effortless and smooth. Their meticulous planning and perfect execution went beyond what we hoped for. Highly recommended!",
    author: "Mulugeta Bekele",
    role: "CEO, EthioTech Solutions",
    image: ABOUT_ASSETS.testimonials.person1,
  },
  {
    id: 2,
    quote:
      "The Standard Event made our corporate gala seamless and stress-free. Their attention to detail and flawless execution exceeded our expectations. I can't recommend them enough!",
    author: "Selamawit Tadesse",
    role: "Director, Addis Business Group",
    image: ABOUT_ASSETS.testimonials.person2,
  },
  {
    id: 3,
    quote:
      "Partnering with Vita Food Complex Distributor made our corporate gala effortless and smooth. Their meticulous planning and perfect execution went beyond what we hoped for. Highly recommended!",
    author: "Biruk Alemu",
    role: "Operations Manager, Horizon Bakery",
    image: ABOUT_ASSETS.testimonials.person3,
  },
];

export default function TestimonialSection() {
  const t = useTranslations("About");

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#1a1a1a", paddingTop: 120, paddingBottom: 120 }}
    >
      {/* Blurred green bg — same pattern as WhoAreWe, Figma fill_W0K03X */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute right-[-10%] top-[-10%] h-[120%] w-[70%]"
          style={{
            opacity: 0.4,
            filter: "blur(100px)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={ABOUT_ASSETS.hero.backgroundFrame}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-[128px]"
        style={{ maxWidth: 1664 }}
      >
        {/* Header — Figma: "Partner Testimonials" label + "Our client" large text */}
        <div className="mb-20">
          {/* label — Subtitle 2: Funnel Display 500, 20px, 1.25em lh, #FFFFFF */}
          <span
            className="block mb-6 uppercase tracking-wider"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: "1.25em",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            {t("testimonials.label")}
          </span>

          {/* "Our client" — style_HKWSHV: Funnel Display 700, 183px, 1.25em lh, -2% ls, #FFFFFF */}
          <h2
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(64px, 12vw, 160px)",
              lineHeight: "1em",
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
            }}
          >
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Testimonial Cards — horizontal scroll, each card has image left + text right */}
        <div
          className="flex gap-10 overflow-x-auto pb-10 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {TESTIMONIALS.map((tm) => (
            <div
              key={tm.id}
              className="flex-shrink-0 flex flex-col md:flex-row overflow-hidden rounded-[40px]"
              style={{
                width: "min(1100px, 95vw)",
                minHeight: 420,
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px)",
                scrollSnapAlign: "center",
              }}
            >
              {/* Person Image */}
              <div
                className="relative flex-shrink-0 w-full md:w-[350px] h-[300px] md:h-auto"
              >
                <Image
                  src={tm.image}
                  alt={tm.author}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text block */}
              <div
                className="flex flex-col justify-between p-10 md:p-14 flex-1"
              >
                <div className="mb-10">
                  {/* Quote — style_OK5XSG: Funnel Display 400, 32px, 1em lh, -0.4% ls, #FFFFFF */}
                  <p
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(20px, 2.5vw, 32px)",
                      lineHeight: "1.4em",
                      letterSpacing: "-0.02em",
                      color: "#FFFFFF",
                    }}
                  >
                    "{tm.quote}"
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Divider */}
                  <div
                    className="mb-8"
                    style={{ height: 1, background: "rgba(255, 255, 255, 0.1)" }}
                  />

                  {/* Author — style_U0YIOM: Outfit 400, 18px, 1.26em, #EAEAEA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="mb-1"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          fontSize: 22,
                          color: "#FFFFFF",
                        }}
                      >
                        {tm.author}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 400,
                          fontSize: 16,
                          color: "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        {tm.role}
                      </p>
                    </div>

                    {/* Arrow icon */}
                    <div
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        width: 56,
                        height: 56,
                        background: "#23B349",
                        boxShadow: "0 4px 20px rgba(35, 179, 73, 0.3)",
                      }}
                    >
                      <span className="text-white text-2xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
