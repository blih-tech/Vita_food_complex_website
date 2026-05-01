"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";

export default function JobApplicationForm() {
  const t = useTranslations("Careers");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* Card sections matching Figma node structure */
  interface FormField {
    labelKey: string;
    placeholderKey?: string;
    type: string;
    full?: boolean;
  }

  const formSections: {
    key: string;
    titleKey: string;
    descKey: string;
    rows: FormField[][];
  }[] = [
    {
      key: "personal",
      titleKey: "form.personal.title",
      descKey: "form.personal.desc",
      rows: [
        [
          {
            labelKey: "form.fields.firstName",
            placeholderKey: "form.fields.firstNamePlaceholder",
            type: "text",
          },
          {
            labelKey: "form.fields.lastName",
            placeholderKey: "form.fields.lastNamePlaceholder",
            type: "text",
          },
        ],
        [
          {
            labelKey: "form.fields.email",
            placeholderKey: "form.fields.emailPlaceholder",
            type: "email",
          },
          {
            labelKey: "form.fields.phone",
            placeholderKey: "form.fields.phonePlaceholder",
            type: "tel",
          },
        ],
        [
          {
            labelKey: "form.fields.address",
            placeholderKey: "form.fields.addressPlaceholder",
            type: "text",
            full: true,
          },
        ],
      ],
    },
    {
      key: "professional",
      titleKey: "form.professional.title",
      descKey: "form.professional.desc",
      rows: [
        [
          {
            labelKey: "form.fields.currentRole",
            placeholderKey: "form.fields.currentRolePlaceholder",
            type: "text",
          },
          {
            labelKey: "form.fields.yearsExperience",
            placeholderKey: "form.fields.yearsExperiencePlaceholder",
            type: "text",
          },
        ],
      ],
    },
    {
      key: "education",
      titleKey: "form.education.title",
      descKey: "form.education.desc",
      rows: [
        [
          {
            labelKey: "form.fields.highestEducation",
            placeholderKey: "form.fields.highestEducationPlaceholder",
            type: "text",
          },
          {
            labelKey: "form.fields.institution",
            placeholderKey: "form.fields.institutionPlaceholder",
            type: "text",
          },
        ],
        [
          {
            labelKey: "form.fields.fieldOfStudy",
            placeholderKey: "form.fields.fieldOfStudyPlaceholder",
            type: "text",
          },
        ],
      ],
    },
    {
      key: "resume",
      titleKey: "form.resume.title",
      descKey: "form.resume.desc",
      rows: [
        [{ labelKey: "form.fields.resume", type: "file", full: true }],
        [
          {
            labelKey: "form.fields.skills",
            placeholderKey: "form.fields.skillsPlaceholder",
            type: "textarea",
            full: true,
          },
        ],
        [
          {
            labelKey: "form.fields.coverLetter",
            placeholderKey: "form.fields.coverLetterPlaceholder",
            type: "textarea",
            full: true,
          },
        ],
      ],
    },
    {
      key: "additional",
      titleKey: "form.additional.title",
      descKey: "form.additional.desc",
      rows: [
        [
          {
            labelKey: "form.fields.additionalInfo",
            placeholderKey: "form.fields.additionalInfoPlaceholder",
            type: "textarea",
            full: true,
          },
        ],
      ],
    },
  ];

  /* Shared input style — layout_8I6MOZ: padding:5.02px 15.06px, radius:10px */
  /* fill_J2KVTC: transparent, fill_M0FZ88: rgba(0,0,0,0.2) border 1px */
  /* style_IPDQ4Z: Outfit 300, 16px, 1.26em lh, #8A8C8A */
  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "1.26em",
    letterSpacing: "-0.064px",
    color: "#8A8C8A",
    padding: "5.02px 15.06px",
    borderRadius: 10.04,
    border: "1px solid rgba(0,0,0,0.2)",
    background: "transparent",
    outline: "none",
  };

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 196, paddingBottom: 80 }}
    >
      {/* layout_0V3ABA: column, stretch, gap:40px, width:964px */}
      <div className="mx-auto flex flex-col" style={{ maxWidth: 964, gap: 40 }}>
        {/* Form Header — layout_GSX3OS: column, stretch, gap:10px */}
        <div className="flex flex-col items-center" style={{ gap: 10.04 }}>
          {/* "Job Application Form" — style_GOGAIG: Funnel Display 500, 30px, 1.506em lh, CENTER, #23B349 */}
          <h1
            className="text-center"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(22px, 2.5vw, 30px)",
              lineHeight: "1.506em",
              color: "#23B349",
            }}
          >
            {t("form.title")}
          </h1>

          {/* Subtitle — style_VTE07G: Outfit 400, 20px, 1.26em lh, -0.4% ls, CENTER, #4A5565 */}
          <p
            className="text-center"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "1.26em",
              letterSpacing: "-0.08px",
              color: "#4A5565",
            }}
          >
            {t("form.subtitle")}
          </p>
        </div>

        {/* Form Cards — layout_EP464A: column, stretch, gap:30.13px */}
        <form
          className="flex flex-col"
          style={{ gap: 30.13 }}
          onSubmit={(e) => e.preventDefault()}
        >
          {formSections.map((section, i) => (
            /* Card — layout_PT690O/EWN631: column, gap:30px, radius:24px */
            /* fill_T3NGMJ: rgba(0,0,0,0.1) border 1px, fill_1MVHTJ: white */
            <div
              key={section.key}
              className="flex flex-col"
              style={{
                borderRadius: 24,
                border: "1px solid rgba(0,0,0,0.1)",
                background: "#FFFFFF",
                gap: 30,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.8s ease-out ${i * 0.08}s`,
                overflow: "hidden",
              }}
            >
              {/* CardHeader — layout_IYMVZQ: height:87.86px, padding-left:30.13px, padding-top:27.36px */}
              <div
                style={{
                  paddingLeft: 30.13,
                  paddingRight: 30.13,
                  paddingTop: 27.36,
                }}
              >
                {/* Section title — Subtitle 2: Funnel Display 500, 20px, 1.25em lh, -0.4% ls, #000500 */}
                <p
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "1.25em",
                    letterSpacing: "-0.08px",
                    color: "#000500",
                    marginBottom: 4,
                  }}
                >
                  {t(section.titleKey)}
                </p>

                {/* Section description — style_UU1RIR: Outfit 300, 20px, 1.26em lh, -0.4% ls, #717182 */}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                    fontSize: 20,
                    lineHeight: "1.26em",
                    letterSpacing: "-0.08px",
                    color: "#717182",
                  }}
                >
                  {t(section.descKey)}
                </p>
              </div>

              {/* CardContent — layout_7N4GLL/BRT6BV/6DHZS1: column, stretch, gap:20px, padding:0px 30px */}
              <div
                className="flex flex-col"
                style={{ gap: 20.08, padding: "0px 30.13px 30.13px" }}
              >
                {section.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className={`flex ${row.length > 1 ? "flex-col sm:flex-row" : "flex-col"}`}
                    style={{ gap: 20.08 }}
                  >
                    {row.map((field, fi) => (
                      <div
                        key={fi}
                        className="flex flex-col"
                        style={{
                          gap: 10.04,
                          flex: field.full ? "1 1 100%" : "1 1 0",
                        }}
                      >
                        {/* Label — style_SEFZ0E: Outfit 400, 18px, 1em lh, -0.4% ls, #000500 */}
                        <label
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 400,
                            fontSize: 18,
                            lineHeight: "1em",
                            letterSpacing: "-0.072px",
                            color: "#000500",
                          }}
                        >
                          {t(field.labelKey)}
                        </label>

                        {field.type === "file" ? (
                          /* Upload area — layout_SU1CR6: height:139.58px, dashed border #D1D5DC 2px, radius:12.55px */
                          <div
                            className="flex flex-col items-center justify-center cursor-pointer"
                            style={{
                              height: 139.58,
                              borderRadius: 12.55,
                              border: "2px dashed #D1D5DC",
                              background: "transparent",
                            }}
                          >
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                d="M20 8v16M12 16l8-8 8 8"
                                stroke="#23B349"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 28h24v4H8v-4z"
                                fill="#23B349"
                                opacity="0.3"
                              />
                            </svg>
                            <p
                              className="mt-2"
                              style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 300,
                                fontSize: 16,
                                lineHeight: "1.26em",
                                color: "#4A5565",
                                textAlign: "center",
                              }}
                            >
                              {t("form.fields.uploadLabel")}
                            </p>
                            <p
                              style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 300,
                                fontSize: 14,
                                color: "#8A8C8A",
                                textAlign: "center",
                              }}
                            >
                              {t("form.fields.uploadHint")}
                            </p>
                          </div>
                        ) : field.type === "textarea" ? (
                          <textarea
                            style={{
                              ...inputStyle,
                              minHeight: 108,
                              resize: "vertical",
                              padding: "10px 15.06px",
                            }}
                            placeholder={t(field.placeholderKey ?? "")}
                          />
                        ) : (
                          <input
                            type={field.type}
                            style={inputStyle}
                            placeholder={t(field.placeholderKey ?? "")}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Submit container — layout_B0SUJ0: row, flex-end */}
          <div className="flex justify-end">
            {/* Submit button — layout_6OAAVD: row, center, gap:10px, padding:10px 20px, w:251px, h:45.19px, radius:24px, #23B349 */}
            {/* style_SHGHM3: Inter 500, 17.57px, 1.43em lh, white */}
            <button
              type="submit"
              className="inline-flex items-center justify-center transition-all hover:shadow-lg"
              style={{
                gap: 10,
                padding: "10px 20px",
                width: 251,
                height: 45.19,
                borderRadius: 24,
                background: "#23B349",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 17.57,
                lineHeight: "1.43em",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t("form.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
