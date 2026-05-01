"use client";

import { useTranslations } from "next-intl";

// Figma assets - pixel-perfect local copies from node 2116-1586
const imgSisterComapny = "/assets/images/why-choose-vita/sister-company-bg.jpg";
const imgVector = "/assets/images/why-choose-vita/arrow-icon.png";

export default function SisterCompanySection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div 
      className="content-stretch flex flex-col items-start relative size-full"
      style={{
        paddingLeft: "73px",
        paddingRight: "73px",
        paddingTop: "128px",
        paddingBottom: "128px",
        borderRadius: "48px"
      }} 
      data-node-id="2116:1586" 
      data-name="sister comapny"
    >
      {/* Background effects */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ borderRadius: "48px" }}>
        <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "48px" }}>
          <img
            alt=""
            className="absolute max-w-none"
            src={imgSisterComapny}
            style={{
              position: "absolute",
              height: "-193.75%",
              left: "101.26%",
              top: "154.74%",
              width: "-110.38%"
            }}
          />
        </div>
        <div 
          className="absolute inset-0 mix-blend-soft-light pointer-events-none" 
          style={{ 
            backgroundColor: "rgba(55,255,0,0.4)",
            borderRadius: "48px"
          }} 
        />
      </div>

      {/* Content container - Node 2116:1585 */}
      <div 
        className="content-stretch flex flex-col gap-[96px] items-center relative shrink-0"
        data-node-id="2116:1585" 
        data-name="Container"
      >
        {/* Section title - Node 2111:1555 */}
        <p 
          className="font-extrabold relative shrink-0 text-center text-white"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            lineHeight: "0.9",
            fontSize: "80px",
            letterSpacing: "-1.6px",
            width: "604px"
          }} 
          data-node-id="2111:1555"
        >
          Meet Our Sister Company's
        </p>

        {/* Companies list - Node 2209:8526 */}
        <div 
          className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0"
          data-node-id="2209:8526" 
          data-name="List"
        >
          {/* Company 1: Belayab Foods - Node 2209:8451 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2209:8451" 
            data-name="Component 25"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2209:8451;2209:8441;2209:8436" 
            />
            
            {/* Number 01 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2209:8451;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2209:8451;2209:8445;2206:8282"
              >
                01
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2209:8451;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2209:8451;2209:8443;2206:8281"
              >
                Belayab foods
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2209:8451;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 2: Arada Coffee - Node 2209:8486 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2209:8486" 
            data-name="Component 28"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2209:8486;2209:8441;2209:8436" 
            />
            
            {/* Number 02 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2209:8486;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2209:8486;2209:8445;2206:8282"
              >
                02
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2209:8486;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2209:8486;2209:8443;2206:8281"
              >
                Arada Coffee
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2209:8486;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 3: Long Tea - Node 2209:8494 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2209:8494" 
            data-name="Component 29"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2209:8494;2209:8441;2209:8436" 
            />
            
            {/* Number 03 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2209:8494;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2209:8494;2209:8445;2206:8282"
              >
                03
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2209:8494;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2209:8494;2209:8443;2206:8281"
              >
                long tea
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2209:8494;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 4: Belayab Motors - Node 2209:8502 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2209:8502" 
            data-name="Component 30"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2209:8502;2209:8441;2209:8436" 
            />
            
            {/* Number 04 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2209:8502;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2209:8502;2209:8445;2206:8282"
              >
                04
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2209:8502;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2209:8502;2209:8443;2206:8281"
              >
                Belayab Motors
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2209:8502;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 5: Belayab Geepas - Node 2209:8550 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2209:8550" 
            data-name="Component 34"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2209:8550;2209:8441;2209:8436" 
            />
            
            {/* Number 05 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2209:8550;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2209:8550;2209:8445;2206:8282"
              >
                05
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2209:8550;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2209:8550;2209:8443;2206:8281"
              >
                {`Belayab Geepas `}
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2209:8550;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 6: Belayab Cabel - Node 2209:8542 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2209:8542" 
            data-name="Component 33"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2209:8542;2209:8441;2209:8436" 
            />
            
            {/* Number 09 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2209:8542;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2209:8542;2209:8445;2206:8282"
              >
                09
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2209:8542;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2209:8542;2209:8443;2206:8281"
              >
                Belayab Cabel
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2209:8542;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 7: Lionstone Distribution - Node 2209:8559 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2209:8559" 
            data-name="Component 35"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2209:8559;2209:8441;2209:8436" 
            />
            
            {/* Number 10 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2209:8559;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2209:8559;2209:8445;2206:8282"
              >
                10
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2209:8559;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2209:8559;2209:8443;2206:8281"
              >
                Lionstone Distribution
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2209:8559;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 8: HUAJIA international trade - Node 2212:8568 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2212:8568" 
            data-name="Component 36"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2212:8568;2209:8441;2209:8436" 
            />
            
            {/* Number 11 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2212:8568;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2212:8568;2209:8445;2206:8282"
              >
                11
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2212:8568;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2212:8568;2209:8443;2206:8281"
              >
                HUAJIA international trade
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2212:8568;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company 9: Lewis Retails - Node 2212:8576 */}
          <div 
            className="relative shrink-0"
            style={{ height: "264px", width: "1518px" }} 
            data-node-id="2212:8576" 
            data-name="Component 37"
          >
            <div 
              className="absolute border border-solid inset-0 pointer-events-none"
              style={{ 
                borderColor: "#23b349",
                borderRadius: "48px"
              }} 
              data-node-id="I2212:8576;2209:8441;2209:8436" 
            />
            
            {/* Number 12 */}
            <div 
              className="absolute"
              style={{ inset: "40.91% 92.69% 40.91% 3.69%" }} 
              data-node-id="I2212:8576;2209:8445" 
              data-name="20250821"
            >
              <p 
                className="absolute inset-0 leading-none not-italic text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#e8e8e8",
                  letterSpacing: "-0.48px"
                }} 
                data-node-id="I2212:8576;2209:8445;2206:8282"
              >
                12
              </p>
            </div>
            
            {/* Company name */}
            <div 
              className="absolute"
              style={{ inset: "38.26% 60.8% 38.64% 11.73%" }} 
              data-node-id="I2212:8576;2209:8443" 
              data-name="Belay ab foods"
            >
              <p 
                className="absolute inset-0 text-center whitespace-nowrap"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  lineHeight: "0.96",
                  fontSize: "64px",
                  color: "#e8e8e8",
                  letterSpacing: "-1.28px",
                  fontFeatureSettings: "'liga' 0"
                }} 
                data-node-id="I2212:8576;2209:8443;2206:8281"
              >
                Lewis Retails
              </p>
            </div>
            
            {/* Arrow icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                aspectRatio: "58.666656494140625 / 58.66667556762695",
                left: "90.25%",
                right: "5.53%",
                top: "calc(50% + 8px)",
                transform: "translateY(-50%)",
                containerType: "size"
              }}
            >
              <div className="flex-none -scale-x-100" style={{ height: "100cqh", width: "100cqw" }}>
                <div className="relative size-full" data-node-id="I2212:8576;2209:8447" data-name="Vector">
                  <div className="absolute inset-[-7.81%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
