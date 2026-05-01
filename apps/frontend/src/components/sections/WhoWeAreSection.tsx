"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

// Figma assets - pixel-perfect local copies from node 486-2897
const imgACleanModernVectorIllustrationOfAnElegant1 = "/assets/images/why-choose-vita/card-image-1.jpg";
const imgACleanModernVectorIllustrationOfAnElegant2 = "/assets/images/why-choose-vita/card-image-2.jpg";
const imgACleanModernVectorIllustrationOfAnElegant3 = "/assets/images/why-choose-vita/card-image-3.jpg";
const imgLine1 = "/assets/images/why-choose-vita/section-line.png";

export default function WhoWeAreSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative size-full" data-node-id="486:2897" data-name="Who we are section">
      {/* Who we are text content - Node 364:3320 */}
      <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" style={{ width: '1296px' }} data-node-id="364:3320" data-name="Who we are text">
        {/* Section header - Node 364:3321 */}
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="364:3321" data-name="Section Header">
          {/* "Who" text - Node 364:3322 */}
          <p 
            className="font-bold not-italic relative shrink-0"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              lineHeight: '0',
              fontSize: '0px',
              color: '#404040',
              letterSpacing: '-3px',
              width: '354px',
              fontVariationSettings: "'opsz' 14, 'wdth' 100"
            }} 
            data-node-id="364:3322"
          >
            <span style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 700, lineHeight: 'normal', color: '#404040', fontSize: '150px' }}>Who</span>
            <span style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 700, lineHeight: 'normal', fontSize: '150px' }}>{` `}</span>
          </p>

          {/* Line separator - Node 364:3323 */}
          <div 
            className="relative shrink-0" 
            style={{ height: '0px', width: '123.809px' }} 
            data-node-id="364:3323"
          >
            <div className="absolute inset-[-5px_-4.04%]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>

          {/* "Are We" text - Node 364:3324 */}
          <p 
            className="not-italic relative shrink-0"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 800,
              lineHeight: '0.9',
              fontSize: '150px',
              color: '#23b349',
              letterSpacing: '-3px',
              width: '518px'
            }} 
            data-node-id="364:3324"
          >
            Are We
          </p>
        </div>

        {/* Section description - Node 364:3325 */}
        <div className="content-stretch flex flex-col gap-[78px] items-center relative shrink-0 w-full" data-node-id="364:3325" data-name="Section Description">
          {/* Description text - Node 364:3326 */}
          <p 
            className="font-normal min-w-full relative shrink-0 text-center"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              lineHeight: 'normal',
              fontSize: '32px',
              color: 'rgba(16,15,15,0.9)',
              letterSpacing: '-0.128px',
              width: 'min-content'
            }} 
            data-node-id="364:3326"
          >
            Vita Food Complex is a modern FMCG company built to lead the future of everyday food in Ethiopia. We produce strategically designed biscuit and flour products tailored to multiple consumer moments—from children's snacks and youth lifestyle choices to family tea-time and professional bakery needs
          </p>

          {/* CTA button - Node 364:3327 */}
          <Link
            href="/about"
            className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 text-white whitespace-nowrap"
            style={{
              backgroundColor: '#23b349',
              height: '56px',
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingTop: '16px',
              paddingBottom: '16px',
              borderRadius: '999px'
            }} 
            data-node-id="364:3327"
          >
            <p 
              className="not-italic relative shrink-0"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 500,
                lineHeight: 'normal',
                fontSize: '24px',
                letterSpacing: '-0.096px',
                color: '#ffffff'
              }} 
              data-node-id="I364:3327;18:1725"
            >
              More About Vita
            </p>
          </Link>
        </div>
      </div>

      {/* Who we are cards - Node 364:3329 */}
      <div 
        className="relative shrink-0 w-full" 
        style={{ height: '540px' }} 
        data-node-id="364:3329" 
        data-name="who we are card"
      >
        {/* Card 1 - Quality You Can Trust - Node 364:3330 */}
        <div className="absolute contents" style={{ left: '0px', top: '0px' }} data-node-id="364:3330" data-name="Card">
          {/* Card background - Node 364:3331 */}
          <div 
            className="absolute"
            style={{
              backdropFilter: 'blur(8.285px)',
              backgroundColor: '#f3f3f3',
              height: '540px',
              left: '0px',
              borderRadius: '24px',
              top: '0px',
              width: '404px'
            }} 
            data-node-id="364:3331" 
            data-name="Card Background" 
          />
          
          {/* Card image - Node 364:3332 */}
          <div 
            className="absolute"
            style={{
              height: '354px',
              left: 'calc(50% - 630px)',
              transform: 'translateX(-50%)',
              borderRadius: '16px',
              top: '18px',
              width: '372px'
            }} 
            data-node-id="364:3332" 
            data-name="a-clean--modern-vector-illustration-of-an-elegant- (1)"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
              src={imgACleanModernVectorIllustrationOfAnElegant1}
            />
          </div>
          
          {/* Card content - Node 364:3333 */}
          <div 
            className="absolute content-stretch flex flex-col items-center text-center"
            style={{
              lineHeight: '1.443',
              left: 'calc(50% - 630px)',
              transform: 'translateX(-50%)',
              borderRadius: '24px',
              color: '#272726',
              top: '393px',
              width: '358px'
            }} 
            data-node-id="364:3333" 
            data-name="Card Content"
          >
            <p 
              className="not-italic relative shrink-0 w-full"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: "28px"
              }} 
              data-node-id="364:3334"
            >
              Quality You Can Trust
            </p>
            <p 
              className="font-normal relative shrink-0 w-full"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "22px"
              }} 
              data-node-id="364:3335"
            >
              Produced with strict standards to ensure consistency, freshness, and satisfaction
            </p>
          </div>
        </div>

        {/* Card 2 - Reliable Supply - Node 364:3336 */}
        <div className="absolute contents" style={{ left: '420px', top: '60px' }} data-node-id="364:3336" data-name="Card">
          {/* Card background - Node 364:3337 */}
          <div 
            className="absolute"
            style={{
              backdropFilter: 'blur(8.285px)',
              backgroundColor: '#f3f3f3',
              height: '547px',
              left: '420px',
              borderRadius: '24px',
              top: '60px',
              width: '404px'
            }} 
            data-node-id="364:3337" 
            data-name="Card Background" 
          />
          
          {/* Card image - Node 364:3338 */}
          <div 
            className="absolute"
            style={{
              height: '354px',
              left: 'calc(50% - 210px)',
              transform: 'translateX(-50%)',
              borderRadius: '16px',
              top: '78px',
              width: '372px'
            }} 
            data-node-id="364:3338" 
            data-name="a-clean--modern-vector-illustration-of-an-elegant- (1)"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
              src={imgACleanModernVectorIllustrationOfAnElegant2}
            />
          </div>
          
          {/* Card content - Node 364:3339 */}
          <div 
            className="absolute content-stretch flex flex-col items-center text-center"
            style={{
              lineHeight: '1.443',
              left: 'calc(50% - 210px)',
              transform: 'translateX(-50%)',
              borderRadius: '24px',
              color: '#272726',
              top: '453px',
              width: '358px'
            }} 
            data-node-id="364:3339" 
            data-name="Card Content"
          >
            <p 
              className="not-italic relative shrink-0 w-full"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: "28px"
              }} 
              data-node-id="364:3340"
            >
              Reliable Supply
            </p>
            <p 
              className="font-normal relative shrink-0 w-full"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "22px"
              }} 
              data-node-id="364:3341"
            >
              Strong manufacturing and distribution systems that keep products available
            </p>
          </div>
        </div>

        {/* Card 3 - Innovation Driven - Node 364:3342 */}
        <div className="absolute contents" style={{ left: '840px', top: '0px' }} data-node-id="364:3342" data-name="Card">
          {/* Card background - Node 364:3343 */}
          <div 
            className="absolute"
            style={{
              backdropFilter: 'blur(8.285px)',
              backgroundColor: '#f3f3f3',
              height: '540px',
              left: '840px',
              borderRadius: '24px',
              top: '0px',
              width: '404px'
            }} 
            data-node-id="364:3343" 
            data-name="Card Background" 
          />
          
          {/* Card image - Node 364:3344 */}
          <div 
            className="absolute"
            style={{
              height: '354px',
              left: 'calc(50% + 210px)',
              transform: 'translateX(-50%)',
              borderRadius: '16px',
              top: '18px',
              width: '372px'
            }} 
            data-node-id="364:3344" 
            data-name="a-clean--modern-vector-illustration-of-an-elegant- (1)"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
              src={imgACleanModernVectorIllustrationOfAnElegant3}
            />
          </div>
          
          {/* Card content - Node 364:3345 */}
          <div 
            className="absolute content-stretch flex flex-col items-center text-center"
            style={{
              lineHeight: '1.443',
              left: 'calc(50% + 210px)',
              transform: 'translateX(-50%)',
              borderRadius: '24px',
              color: '#272726',
              top: '393px',
              width: '358px'
            }} 
            data-node-id="364:3345" 
            data-name="Card Content"
          >
            <p 
              className="not-italic relative shrink-0 w-full"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: "28px"
              }} 
              data-node-id="364:3346"
            >
              Innovation Driven
            </p>
            <p 
              className="font-normal relative shrink-0 w-full"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "22px"
              }} 
              data-node-id="364:3347"
            >
              Modern packaging, new product ideas, and evolving solutions for future markets
            </p>
          </div>
        </div>

        {/* Card 4 - Community Impact - Node 364:3348 */}
        <div className="absolute contents" style={{ left: '1260px', top: '60px' }} data-node-id="364:3348" data-name="Card">
          {/* Card background - Node 364:3349 */}
          <div 
            className="absolute"
            style={{
              backdropFilter: 'blur(8.285px)',
              backgroundColor: '#f3f3f3',
              height: '547px',
              left: '1260px',
              borderRadius: '24px',
              top: '60px',
              width: '404px'
            }} 
            data-node-id="364:3349" 
            data-name="Card Background" 
          />
          
          {/* Card image - Node 364:3350 */}
          <div 
            className="absolute"
            style={{
              height: '354px',
              left: 'calc(50% + 630px)',
              transform: 'translateX(-50%)',
              borderRadius: '16px',
              top: '78px',
              width: '372px'
            }} 
            data-node-id="364:3350" 
            data-name="a-clean--modern-vector-illustration-of-an-elegant- (1)"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
              src={imgACleanModernVectorIllustrationOfAnElegant3}
            />
          </div>
          
          {/* Card content - Node 364:3351 */}
          <div 
            className="absolute content-stretch flex flex-col items-center text-center"
            style={{
              lineHeight: '1.443',
              left: 'calc(50% + 630px)',
              transform: 'translateX(-50%)',
              borderRadius: '24px',
              color: '#272726',
              top: '453px',
              width: '358px'
            }} 
            data-node-id="364:3351" 
            data-name="Card Content"
          >
            <p 
              className="min-w-full not-italic relative shrink-0"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                width: "min-content"
              }} 
              data-node-id="364:3352"
            >
              Community Impact
            </p>
            <p 
              className="font-normal relative shrink-0"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "22px",
                width: "334px"
              }} 
              data-node-id="364:3353"
            >
              Creating jobs, supporting farmers, and contributing to national growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
