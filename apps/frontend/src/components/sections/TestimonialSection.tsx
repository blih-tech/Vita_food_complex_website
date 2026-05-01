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
      style={{ background: "#232323" }}
    >
      {/* Blurred green bg — same pattern as WhoAreWe, Figma fill_W0K03X */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-[60%]"
          style={{
            opacity: 0.5,
            filter: "blur(30px)",
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
        style={{ maxWidth: 1981, paddingTop: 80, paddingBottom: 80 }}
      >
        {/* Header — Figma: "Partner Testimonials" label + "Our client" large text */}
        <div className="mb-12">
          {/* label — Subtitle 2: Funnel Display 500, 20px, 1.25em lh, #FFFFFF */}
          <span
            className="block mb-4"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "1.25em",
              letterSpacing: "-0.08px",
              color: "#FFFFFF",
            }}
          >
            {t("testimonials.label")}
          </span>

          {/* "Our client" — style_HKWSHV: Funnel Display 700, 183px, 1.25em lh, -2% ls, #FFFFFF */}
          <h2
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(64px, 14vw, 183px)",
              lineHeight: "1.25em",
              letterSpacing: "-3.66px",
              color: "#FFFFFF",
            }}
          >
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Testimonial Cards — horizontal scroll, each card has image left + text right */}
        {/* layout_LBJM0O: row, center, gap:256px (overflow carousel) */}
        <div
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {TESTIMONIALS.map((tm) => (
            <div
              key={tm.id}
              className="flex-shrink-0 flex overflow-hidden rounded-[48px]"
              style={{
                minWidth: "min(1040px, 90vw)",
                height: 340,
                background: "rgba(255,255,255,0.05)",
                scrollSnapAlign: "start",
              }}
            >
              {/* Person Image — layout_4J9ISU: 314.56 × 339.72, fill_VX4H2S */}
              <div
                className="relative flex-shrink-0"
                style={{ width: "30%", minWidth: 160 }}
              >
                <Image
                  src={tm.image}
                  alt={tm.author}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Text block — layout_6YN0YI: x=359.17, y=28.6, 680.58 × 220.44 */}
              <div
                className="flex flex-col justify-between p-8 flex-1"
              >
                <div>
                  {/* Quote — style_OK5XSG: Funnel Display 400, 32px, 1em lh, -0.4% ls, #FFFFFF */}
                  <p
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(16px, 2vw, 32px)",
                      lineHeight: "1em",
                      letterSpacing: "-0.128px",
                      color: "#FFFFFF",
                    }}
                  >
                    {tm.quote}
                  </p>
                </div>

                <div>
                  {/* Divider */}
                  <div
                    className="mb-4"
                    style={{ height: 1, background: "#777777" }}
                  />

                  {/* Author — style_U0YIOM: Outfit 400, 18px, 1.26em, #EAEAEA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 400,
                          fontSize: 18,
                          lineHeight: "1.26em",
                          letterSpacing: "-0.073px",
                          color: "#EAEAEA",
                        }}
                      >
                        {tm.author}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 400,
                          fontSize: 18,
                          lineHeight: "1.26em",
                          letterSpacing: "-0.073px",
                          color: "rgba(234,234,234,0.6)",
                        }}
                      >
                        {tm.role}
                      </p>
                    </div>

                    {/* Arrow icon */}
                    <div
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        width: 44,
                        height: 44,
                        background: "#23B349",
                      }}
                    >
                      <span style={{ color: "#FFFFFF", fontSize: 20 }}>→</span>
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
