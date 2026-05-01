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

  const formSections = [
    {
      key: "personal",
      titleKey: "form.personal.title",
      descKey: "form.personal.desc",
      fields: [
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
        {
          labelKey: "form.fields.address",
          placeholderKey: "form.fields.addressPlaceholder",
          type: "text",
          full: true,
        },
      ],
    },
    {
      key: "professional",
      titleKey: "form.professional.title",
      descKey: "form.professional.desc",
      fields: [
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
        {
          labelKey: "form.fields.skills",
          placeholderKey: "form.fields.skillsPlaceholder",
          type: "text",
          full: true,
        },
      ],
    },
    {
      key: "education",
      titleKey: "form.education.title",
      descKey: "form.education.desc",
      fields: [
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
        {
          labelKey: "form.fields.fieldOfStudy",
          placeholderKey: "form.fields.fieldOfStudyPlaceholder",
          type: "text",
        },
      ],
    },
    {
      key: "resume",
      titleKey: "form.resume.title",
      descKey: "form.resume.desc",
      fields: [
        { labelKey: "form.fields.resume", type: "file", full: true },
        {
          labelKey: "form.fields.coverLetter",
          placeholderKey: "form.fields.coverLetterPlaceholder",
          type: "textarea",
          full: true,
        },
      ],
    },
    {
      key: "additional",
      titleKey: "form.additional.title",
      descKey: "form.additional.desc",
      fields: [
        {
          labelKey: "form.fields.additionalInfo",
          placeholderKey: "form.fields.additionalInfoPlaceholder",
          type: "textarea",
          full: true,
        },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 152, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 964 }}>
        {/* Form Header — Figma node 2586:12838 */}
        <div className="mb-8">
          {/* "Job Application Form" — Funnel Display Medium 30px, lh 45.19px, #23B349 */}
          <h1
            className="mb-3"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(24px, 3vw, 30px)",
              lineHeight: "45.19px",
              letterSpacing: "0px",
              color: "#23B349",
            }}
          >
            {t("form.title")}
          </h1>

          {/* Subtitle — Outfit Regular 20px, lh 25.2px, ls -0.08px, #4A5565 */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "25.2px",
              letterSpacing: "-0.08px",
              color: "#4A5565",
            }}
          >
            {t("form.subtitle")}
          </p>
        </div>

        {/* Form Cards — Figma node 2586:12843 */}
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {formSections.map((section, i) => (
            <div
              key={section.key}
              className="rounded-[24px] p-8 md:p-10"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E5E5",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.8s ease-out ${i * 0.1}s`,
              }}
            >
              {/* Section Title — Funnel Display Medium 20px, lh 25px, #000500 */}
              <h2
                className="mb-2"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: "25px",
                  letterSpacing: "-0.08px",
                  color: "#000500",
                }}
              >
                {t(section.titleKey)}
              </h2>

              {/* Section Description — Outfit Light 20px, lh 25.2px, ls -0.08px, #717182 */}
              <p
                className="mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: 20,
                  lineHeight: "25.2px",
                  letterSpacing: "-0.08px",
                  color: "#717182",
                }}
              >
                {t(section.descKey)}
              </p>

              {/* Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {section.fields.map((field, j) => (
                  <div key={j} className={field.full ? "sm:col-span-2" : ""}>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#333733",
                      }}
                    >
                      {t(field.labelKey)}
                    </label>

                    {field.type === "file" ? (
                      <div
                        className="rounded-[16px] border-2 border-dashed p-8 text-center cursor-pointer hover:border-[#23B349] transition-colors"
                        style={{ borderColor: "#E5E5E5" }}
                      >
                        <div className="text-[#23B349] text-3xl mb-3">📎</div>
                        <p
                          className="font-['Outfit'] font-medium"
                          style={{ fontSize: 16, color: "#333733" }}
                        >
                          {t("form.fields.uploadLabel")}
                        </p>
                        <p
                          className="font-['Outfit']"
                          style={{ fontSize: 14, color: "#717182" }}
                        >
                          {t("form.fields.uploadHint")}
                        </p>
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        className="w-full rounded-[16px] px-5 py-4 border resize-none"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 16,
                          color: "#333733",
                          borderColor: "#E5E5E5",
                          minHeight: 120,
                        }}
                        placeholder={t(field.placeholderKey || "")}
                      />
                    ) : (
                      <input
                        type={field.type}
                        className="w-full rounded-[16px] px-5 py-4 border"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 16,
                          color: "#333733",
                          borderColor: "#E5E5E5",
                        }}
                        placeholder={t(field.placeholderKey || "")}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Submit Button — Inter Medium 17.57px, lh 25.1px, white on green pill */}
          <button
            type="submit"
            className="w-full rounded-full py-4 transition-all hover:shadow-lg"
            style={{
              background: "#23B349",
              boxShadow: "0 4px 12px rgba(0,72,21,0.5)",
            }}
          >
            <span
              className="font-['Inter'] font-medium text-white"
              style={{
                fontSize: 18,
                lineHeight: "25.1px",
                letterSpacing: "0px",
              }}
            >
              {t("form.submit")}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
