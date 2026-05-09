/**
 * Seed script: inserts (or replaces) the why-choose-vita CMS page.
 * Run from repo root: node apps/backend/src/seed-why-choose-vita.js
 */

const mongoose = require("mongoose");
require("dotenv").config({ path: "apps/backend/.env" });

const URI = process.env.MONGODB_URI;
if (!URI) {
  console.error("MONGODB_URI not set");
  process.exit(1);
}

const PageSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { en: String, am: String },
    sections: [{ id: String, type: String, content: mongoose.Schema.Types.Mixed }],
  },
  { timestamps: true }
);
const Page = mongoose.model("Page", PageSchema);

const PAGE = {
  slug: "why-choose-vita",
  title: { en: "Why Choose Vita", am: "ለምን ቪታ" },
  sections: [
    {
      id: "wcv-hero",
      type: "wcv-hero",
      content: {
        en: {
          title: "A Better Choice\nfor Every Table",
          description:
            "Vita is committed to providing high-quality, nutritious food products that nourish families and support local communities.",
          exploreProducts: "Explore products",
          contactUs: "Contact US",
        },
        am: {
          title: "ለእያንዳንዱ ማዕድ\nየተሻለ ምርጫ",
          description:
            "ቪታ ቤተሰቦችን የሚመግቡ och የአካባቢ ማህበረሰቦችን የሚደግፉ ከፍተኛ ጥራት ያላቸው och የተመጣጠነ የምግብ ምርቶችን ለማቅረብ ቁርጠኛ ነው።",
          exploreProducts: "ምርቶችን ያስሱ",
          contactUs: "ያግኙን",
        },
      },
    },
    {
      id: "wcv-video",
      type: "wcv-video",
      content: {},
    },
    {
      id: "wcv-who-are-we",
      type: "wcv-who-are-we",
      content: {
        en: {
          headlineWho: "WHO",
          headlineAreWe: "ARE WE",
          fmcgIntro:
            "Vita is a leading FMCG company in Ethiopia, dedicated to producing high-quality food products that meet the needs of our diverse consumers.",
          moreAboutCta: "More About Vita",
          featureCards: [
            {
              title: "Built on Trust",
              description:
                "We have earned the trust of millions of families through our commitment to quality and safety.",
            },
            {
              title: "Reliable Supply",
              description:
                "Our robust supply chain ensures that our products are always available when you need them.",
            },
            {
              title: "Continuous Innovation",
              description:
                "We are constantly innovating to bring you new and exciting food products.",
            },
            {
              title: "Community Focused",
              description:
                "We are dedicated to supporting the communities we serve through various social initiatives.",
            },
          ],
        },
        am: {
          headlineWho: "እኛ",
          headlineAreWe: "ማን ነን",
          fmcgIntro:
            "ቪታ በኢትዮጵያ ውስጥ ግንባር ቀደም የፍጆታ ምርቶች አምራች ድርጅት ሲሆን፣ የተለያዩ ሸማቾቻችንን ፍላጎት የሚያሟሉ ከፍተኛ ጥራት ያላቸው የምግብ ምርቶችን ለማምረት የተቋቋመ ነው።",
          moreAboutCta: "ስለ ቪታ ተጨማሪ",
          featureCards: [
            {
              title: "በእምነት ላይ የተገነባ",
              description:
                "ለጥራት och ለደህንነት ባለን ቁርጠኝነት በሚሊዮኖች የሚቆጠሩ ቤተሰቦችን እምነት አትርፈናል።",
            },
            {
              title: "አስተማማኝ አቅርቦት",
              description:
                "የእኛ ጠንካራ የአቅርቦት ሰንሰለት ምርቶቻችንን በሚፈልጉበት ጊዜ ሁሉ ጊዜ መገኘቱን ያረጋግጣል።",
            },
            {
              title: "ቀጣይነት ያለው ፈጠራ",
              description:
                "አዲስ och አስደሳሽ የምግብ ምርቶችን ለእርስዎ ለማቅረብ ዘወትር አዲስ ፈጠራዎችን እንሰራለን።",
            },
            {
              title: "ማህበረሰብ ተኮር",
              description:
                "በተለያዩ ማህበራዊ ተነሳሽነቶች የምናገለግላቸውን ማህበረሰቦች ለመደገፍ ቆርጠን ተነስተናል።",
            },
          ],
        },
      },
    },
    {
      id: "wcv-sister-companies",
      type: "wcv-sister-companies",
      content: {
        en: {
          title: "Our Sister Companies",
          seeMore: "See More",
          companies: {
            longTea: { name: "Long Tea", category: "Beverages", description: "Premium tea products sourced from the finest tea gardens." },
            belayabMotors: { name: "Belayab Motors", category: "Automotive", description: "Leading automotive distributor and assembler in Ethiopia." },
            belayabCable: { name: "Belayab Cable", category: "Manufacturing", description: "High-quality electrical and telecommunication cables." },
            belayabFoods: { name: "Belayab Foods", category: "Food & Beverage", description: "Diverse range of food products for the Ethiopian market." },
            goldenTulip: { name: "Golden Tulip", category: "Hospitality", description: "World-class hospitality and hotel services." },
            belayabDelivery: { name: "Belayab Delivery", category: "Logistics", description: "Efficient and reliable delivery services across the nation." },
            aradaCoffee: { name: "Arada Coffee", category: "Beverages", description: "Authentic Ethiopian coffee experience." },
            lionstone: { name: "Lionstone", category: "Real Estate", description: "Innovative real estate development projects." },
            belayabPharmaceuticals: { name: "Belayab Pharmaceuticals", category: "Healthcare", description: "Essential pharmaceutical products and medical supplies." },
            huajiaInternationalTrade: { name: "Huajia International Trade", category: "Trade", description: "Global trading and import-export services." },
            belayabPoultryAndFeed: { name: "Belayab Poultry and Feed", category: "Agriculture", description: "Sustainable poultry farming and high-quality animal feed." },
            belayabGeepas: { name: "Belayab Geepas", category: "Electronics", description: "Wide range of household electronics and appliances." },
            lewisRetailsSupermarket: { name: "Lewis Retails Supermarket", category: "Retail", description: "Premium retail experience with a wide selection of products." },
          },
        },
        am: {
          title: "እህት ኩባንያዎቻችን",
          seeMore: "ተጨማሪ ይመልከቱ",
          companies: {
            longTea: { name: "ሎንግ ቲ", category: "መጠጦች", description: "ከምርጥ የሻይ አትክልት ስፍራዎች የተገኙ ምርጥ የሻይ ምርቶች።" },
            belayabMotors: { name: "በላያብ ሞተርስ", category: "አውቶሞቲቭ", description: "በኢትዮጵያ ውስጥ ግንባር ቀደም የአውቶሞቢል አከፋፋይ och ገጣሚ።" },
            belayabCable: { name: "በላያብ ኬብል", category: "ማምረት", description: "ከፍተኛ ጥራት ያላቸው የኤሌክትሪክ och የቴሌኮሙኒኬሽን ኬብሎች።" },
            belayabFoods: { name: "በላያብ ፑድስ", category: "ምግብ och መጠጥ", description: "ለኢትዮጵያ ገበያ የሚቀርቡ የተለያዩ የምግብ ምርቶች።" },
            goldenTulip: { name: "ጎልደን ቱሊፕ", category: "ሆስፒታሊቲ", description: "ዓለም አቀፍ ደረጃ የሚጠብቅ የሆቴል och የእንግዳ ተቀባይነት አገልግሎቶች።" },
            belayabDelivery: { name: "በላያብ ዴሊቬሪ", category: "ሎጂስቲክስ", description: "በመላ ሀገሪቱ ቀልጣፋ och አስተማማኝ የማድረስ አገልግሎቶች።" },
            aradaCoffee: { name: "አራዳ ኮፊ", category: "መጠጦች", description: "እውነተኛ የኢትዮጵያ ቡና ተሞክሮ።" },
            lionstone: { name: "ላይን ስቶን", category: "ሪል እስቴት", description: "አዲስ የሪል እስቴት ልማት ፕሮጀክቶች።" },
            belayabPharmaceuticals: { name: "በላያብ ፋርማሲዩቲካልስ", category: "ጤና ጥበቃ", description: "አስፈላጊ የመድሃኒት ምርቶች och የሕክምና አቅርቦቶች።" },
            huajiaInternationalTrade: { name: "ሁዋጂያ ኢንተርናሽናል ትሬድ", category: "ንግድ", description: "ዓለም አቀፍ የንግድ och የወጪ ንግድ አገልግሎቶች።" },
            belayabPoultryAndFeed: { name: "በላያብ ፖልትሪ እንድ ፊድ", category: "ግብርና", description: "ዘላቂ የዶሮ እርባታ och ከፍተኛ ጥራት ያለው የእንስሳት መኖ።" },
            belayabGeepas: { name: "በላያብ ጊፓስ", category: "ኤሌክትሮኒክስ", description: "የተለያዩ የቤት ውስጥ ኤሌክትሮኒክስ och መሳሪያዎች።" },
            lewisRetailsSupermarket: { name: "ሌዊስ ሪቴይልስ ሱፐርማርኬት", category: "ችርቻሮ", description: "ሰፊ የምርት ምርጫ ያለው ምርጥ የችርቻሮ ተሞክሮ።" },
          },
        },
      },
    },
    {
      id: "wcv-qa",
      type: "wcv-qa",
      content: {
        en: {
          caption: "Uplifting Every Daily Food Moment.",
          title: "Quality is Built Around Us!",
        },
        am: {
          caption: "የዕለት ተዕለት የምግብ ጊዜዎችን ማሳደግ።",
          title: "ጥራት በዙሪያዎቻችን ተገንብቷል!",
        },
      },
    },
    {
      id: "wcv-products",
      type: "wcv-products",
      content: {
        en: {
          title: "Our Products",
          products: [
            {
              title: "Biscuits",
              description: "Delicious and crunchy biscuits for every occasion.",
              image: "/assets/images/why-choose-vita/products-image-1.png",
              href: "/products#biscuits",
            },
            {
              title: "Flour",
              description: "Premium quality flour for all your baking needs.",
              image: "/assets/images/why-choose-vita/products-image-2.png",
              href: "/products#flour",
            },
          ],
        },
        am: {
          title: "ምርቶቻችን",
          products: [
            {
              title: "ቢስኩቶች",
              description: "ለማንኛውም አጋጣሚ የሚሆኑ ጣፋጭ och ጥርሳሳ ቢስኩቶች።",
              image: "/assets/images/why-choose-vita/products-image-1.png",
              href: "/products#biscuits",
            },
            {
              title: "ዱቄት",
              description: "ለማንኛውም የምጋገሪያ ፍላጎቶ ከፍተኛ ጥራት ያለው ዱቄት።",
              image: "/assets/images/why-choose-vita/products-image-2.png",
              href: "/products#flour",
            },
          ],
        },
      },
    },
  ],
};

async function run() {
  await mongoose.connect(URI);
  console.log("Connected to MongoDB");

  await Page.findOneAndUpdate(
    { slug: PAGE.slug },
    { $set: { title: PAGE.title, sections: PAGE.sections } },
    { upsert: true, new: true }
  );

  console.log(`✅  why-choose-vita page seeded (${PAGE.sections.length} sections)`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
