"use client";

import { useTranslations } from "next-intl";

// Figma assets - pixel-perfect local copies from node 2120-2195
const imgImages1 = "/assets/images/why-choose-vita/qa-image-1.png";
const imgEthiopianAccreditationServiceEas1 = "/assets/images/why-choose-vita/qa-eas.png";
const imgLogoPng1 = "/assets/images/why-choose-vita/qa-logo.png";
const imgIso9001Cmyk1 = "/assets/images/why-choose-vita/qa-iso.png";
const img6798B7Fe93F49D346D6F8Eb7PngwingCom11 = "/assets/images/why-choose-vita/qa-cert.png";

export default function QualityAssuranceSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div 
      className="content-stretch flex flex-col gap-[48px] items-center relative size-full"
      data-node-id="2120:2195" 
      data-name="Quality Assurance"
    >
      {/* Text content container - Node 2120:2196 */}
      <div 
        className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 text-center whitespace-nowrap"
        data-node-id="2120:2196" 
        data-name="Container"
      >
        {/* Subtitle - Node 2120:2197 */}
        <p 
          className="not-italic relative shrink-0"
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontWeight: 500,
            lineHeight: "normal",
            fontSize: "20px",
            color: "#404040",
            letterSpacing: "-0.08px"
          }} 
          data-node-id="2120:2197"
        >
          Uplifting Every Daily Food Moment.
        </p>

        {/* Main headline - Node 2120:2198 */}
        <p 
          className="font-extrabold relative shrink-0"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            lineHeight: "0.9",
            fontSize: "80px",
            color: "#23b349",
            letterSpacing: "-1.6px"
          }} 
          data-node-id="2120:2198"
        >
          Quality is Built Around Us!
        </p>
      </div>

      {/* Image gallery - Node 2120:2199 */}
      <div 
        className="relative shrink-0"
        style={{ height: "250px", width: "1672px" }} 
        data-node-id="2120:2199" 
        data-name="Image Gallery"
      >
        {/* Image 1 - Node 2120:2200 */}
        <div 
          className="absolute"
          style={{
            height: "201.735px",
            left: "calc(50% - 869.3px)",
            transform: "translateX(-50%)",
            width: "201.735px",
            top: "32.09px"
          }} 
          data-node-id="2120:2200" 
          data-name="images 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgImages1}
          />
        </div>

        {/* Image 2 - Node 2120:2201 */}
        <div 
          className="absolute"
          style={{
            height: "151.646px",
            left: "calc(50% + 787.03px)",
            transform: "translateX(-50%)",
            width: "337.219px",
            top: "57.13px"
          }} 
          data-node-id="2120:2201" 
          data-name="ethiopian_accreditation_service_eas 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgEthiopianAccreditationServiceEas1}
          />
        </div>

        {/* Image 3 - Node 2120:2202 */}
        <div 
          className="absolute"
          style={{
            height: "151.647px",
            left: "calc(50% - 428.99px)",
            transform: "translateX(-50%)",
            width: "418.881px",
            top: "57.13px"
          }} 
          data-node-id="2120:2202" 
          data-name="Logo.png 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgLogoPng1}
          />
        </div>

        {/* Image 4 - Node 2120:2203 */}
        <div 
          className="absolute"
          style={{
            height: "266.511px",
            left: "calc(50% + 34.56px)",
            transform: "translateX(-50%)",
            width: "248.232px",
            top: "-0.3px"
          }} 
          data-node-id="2120:2203" 
          data-name="ISO-9001-CMYK 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgIso9001Cmyk1}
          />
        </div>

        {/* Image 5 - Node 2120:2204 */}
        <div 
          className="absolute"
          style={{
            height: "201.735px",
            left: "calc(50% + 388.55px)",
            transform: "translateX(-50%)",
            width: "199.738px",
            top: "32.09px"
          }} 
          data-node-id="2120:2204" 
          data-name="6798b7fe93f49d346d6f8eb7_pngwing.com (1) 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={img6798B7Fe93F49D346D6F8Eb7PngwingCom11}
          />
        </div>
      </div>

      {/* Bottom container - Node 2120:2205 */}
      <div 
        className="content-stretch flex flex-col items-center relative shrink-0"
        data-node-id="2120:2205" 
        data-name="Container"
      >
        {/* Inner container - Node 2120:2206 */}
        <div 
          className="content-stretch flex gap-[24px] items-center relative shrink-0"
          style={{ height: "56px", width: "180px" }} 
          data-node-id="2120:2206" 
          data-name="Container"
        />
      </div>
    </div>
  );
}
