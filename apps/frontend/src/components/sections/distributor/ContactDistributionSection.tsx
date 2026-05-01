"use client";

import { useTranslations } from "next-intl";
import { Building2, Phone, MapPin } from "lucide-react";

interface OfficeContactProps {
  officeName: string;
  phone: string;
  address: string;
  coverage: string;
}

function OfficeContactCard({ officeName, phone, address, coverage }: OfficeContactProps) {
  return (
    <div className="flex flex-col gap-3" style={{ borderBottom: "1px solid #E8E8E8", paddingBottom: 24 }}>
      {/* Office name */}
      <div className="flex items-center gap-3">
        <Building2 size={20} color="#333733" strokeWidth={1.5} />
        <span
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "1",
            letterSpacing: "-0.004em",
            color: "#333733",
          }}
        >
          {officeName}
        </span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3">
        <Phone size={20} color="#23B349" strokeWidth={1.5} />
        <span
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "1",
            letterSpacing: "-0.004em",
            color: "#23B349",
          }}
        >
          {phone}
        </span>
      </div>

      {/* Address */}
      <div className="flex items-center gap-3">
        <MapPin size={20} color="#333733" strokeWidth={1.5} />
        <span
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "1",
            letterSpacing: "-0.004em",
            color: "#666",
          }}
        >
          {address}
        </span>
      </div>

      {/* Coverage */}
      <div className="flex items-center gap-3">
        <MapPin size={20} color="#333733" strokeWidth={1.5} />
        <span
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "1",
            letterSpacing: "-0.004em",
            color: "#666",
          }}
        >
          {coverage}
        </span>
      </div>
    </div>
  );
}

export default function ContactDistributionSection() {
  const t = useTranslations("Distributor");

  const offices = [
    {
      officeName: t("contact.offices.0.name"),
      phone: t("contact.offices.0.phone"),
      address: t("contact.offices.0.address"),
      coverage: t("contact.offices.0.coverage"),
    },
    {
      officeName: t("contact.offices.1.name"),
      phone: t("contact.offices.1.phone"),
      address: t("contact.offices.1.address"),
      coverage: t("contact.offices.1.coverage"),
    },
    {
      officeName: t("contact.offices.2.name"),
      phone: t("contact.offices.2.phone"),
      address: t("contact.offices.2.address"),
      coverage: t("contact.offices.2.coverage"),
    },
  ];

  return (
    <section
      id="contact-form"
      className="w-full bg-white scroll-mt-20"
      style={{ padding: "80px 0" }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1114, padding: "0 24px" }}
      >
        {/* Card container */}
        <div
          className="relative overflow-hidden rounded-[48px]"
          style={{
            background: "#FDFDFD",
            border: "1px solid #23B349",
            boxShadow: "0px 0px 65px 33px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left green panel */}
            <div
              className="relative flex flex-col items-start justify-center gap-6 overflow-hidden"
              style={{
                background:
                  "linear-gradient(170.79deg, #23B349 46.23%, rgba(35, 179, 73, 0.37) 101.23%)",
                borderRadius: 48,
                padding: "64px 40px",
                minWidth: 457,
                minHeight: 500,
              }}
            >
              {/* Dot pattern overlay */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Title */}
              <h3
                className="relative z-10"
                style={{
                  fontFamily:
                    "var(--font-funnel-display), 'Funnel Display', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 3.5vw, 48px)",
                  lineHeight: "1",
                  letterSpacing: "-0.01em",
                  color: "#FFFFFF",
                  maxWidth: 400,
                }}
              >
                {t("contact.title")}
              </h3>

              {/* Description */}
              <p
                className="relative z-10"
                style={{
                  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.5vw, 24px)",
                  lineHeight: "1",
                  letterSpacing: "-0.004em",
                  color: "#E8E8E8",
                  maxWidth: 400,
                }}
              >
                {t("contact.description")}
              </p>
            </div>

            {/* Right contact list */}
            <div
              className="flex flex-col justify-center gap-8"
              style={{ padding: "48px 40px", flex: 1 }}
            >
              {offices.map((office, idx) => (
                <OfficeContactCard key={idx} {...office} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
