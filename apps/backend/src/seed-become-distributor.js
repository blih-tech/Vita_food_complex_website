const path = require("path");
const fs = require("fs");

function loadEnvFromFileIfPresent() {
  const envPath = path.join(__dirname, "../.env");
  if (!fs.existsSync(envPath)) return;

  const content = fs.readFileSync(envPath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) continue;

    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

try {
  // Optional: load .env when dotenv is available.
  // This keeps the script runnable in environments where dotenv is not installed.
  // eslint-disable-next-line global-require
  require("dotenv").config({ path: path.join(__dirname, "../.env") });
} catch {
  loadEnvFromFileIfPresent();
}
const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema(
  {
    id: String,
    type: String,
    content: mongoose.Schema.Types.Mixed,
  },
  { _id: false },
);

const PageSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { en: String, am: String },
    sections: [SectionSchema],
  },
  { timestamps: true },
);

const Page = mongoose.model("Page", PageSchema);

const distributorPageData = {
  slug: "become-distributor",
  title: {
    en: "Become a Distributor",
    am: "አከፋፋይ ይሁኑ",
  },
  sections: [
    {
      id: "hero",
      type: "distributor-hero",
      content: {
        en: {
          label: "Partner with Vita",
          headline: "Become a Vita Distributor",
          subtitle: "Grow your business with trusted products and consistent market demand.",
          cta: "Contact Distribution Team",
          heroImage: "/assets/distributor/hero-bg.png",
        },
        am: {
          label: "ከቪታ ጋር አጋርነት ይፍጠሩ",
          headline: "የቪታ አከፋፋይ ይሁኑ",
          subtitle: "በታመኑ ምርቶች እና ቀጣይ የገበያ ፍላጎት ንግድዎን ያሳድጉ።",
          cta: "የስርጭት ቡድኑን ያነጋግሩ",
          heroImage: "/assets/distributor/hero-bg.png",
        },
      },
    },
    {
      id: "why-work",
      type: "distributor-why-work",
      content: {
        en: {
          title: "Why Work with Vita?",
          description:
            "Join a fast-moving FMCG network with strong brand visibility, reliable supply, and support built for long-term growth.",
          cards: {
            demand: "High Product Demand",
            supply: "Reliable Supply Chain",
            brand: "Trusted National Brand",
            margins: "Attractive Margins",
          },
        },
        am: {
          title: "ለምን ከቪታ ጋር መስራት?",
          description:
            "ጠንካራ የብራንድ ታይነት፣ የተረጋጋ አቅርቦት እና ረጅም ጊዜ እድገትን የሚደግፍ የ FMCG አውታረ መረብ ውስጥ ይቀላቀሉ።",
          cards: {
            demand: "ከፍተኛ የምርት ፍላጎት",
            supply: "የተረጋጋ የአቅርቦት ሰንሰለት",
            brand: "ታማኝ የሀገር አቀፍ ብራንድ",
            margins: "አመቺ የትርፍ መጠን",
          },
        },
      },
    },
    {
      id: "who-can-partner",
      type: "distributor-who-can-partner",
      content: {
        en: {
          sectionTitle: "Who Can Become a Distributor?",
          title: "Ideal Distribution Partners",
          description:
            "We are looking for committed partners who can expand availability and deliver consistent service across regions.",
          image: "/assets/distributor/delivery-van.png",
          items: [
            "Licensed business with valid trade documents",
            "Strong regional market access and retailer network",
            "Storage and logistics capacity for FMCG operations",
            "Dedicated sales and route coverage team",
            "Commitment to quality, compliance, and reporting",
          ],
        },
        am: {
          sectionTitle: "አከፋፋይ ማን ሊሆን ይችላል?",
          title: "ተስማሚ የስርጭት አጋሮች",
          description:
            "ምርት ተደራሽነትን ለማስፋፋት እና በክልሎች ውስጥ ቀጣይ አገልግሎት ለመስጠት የተሰናዱ አጋሮችን እንፈልጋለን።",
          image: "/assets/distributor/delivery-van.png",
          items: [
            "ህጋዊ የንግድ ፈቃድ እና ሰነዶች ያሉት ድርጅት",
            "ጠንካራ የክልል ገበያ ድረስ እና የቸርቻሪ ኔትወርክ",
            "ለ FMCG ስራ የሚበቃ የመጋዘን እና ሎጂስቲክስ አቅም",
            "የተመደበ የሽያጭ ቡድን እና የመስመር ሽፋን",
            "ለጥራት፣ ህጋዊነት እና ሪፖርት ቁርጠኝነት",
          ],
        },
      },
    },
    {
      id: "easy-steps",
      type: "distributor-easy-steps",
      content: {
        en: {
          title: "Start in 3 Easy Steps",
          subtitle: "Simple onboarding from first contact to launch.",
          steps: {
            call: {
              title: "Call Us",
              description: "Share your region and business profile with our team.",
            },
            discussion: {
              title: "Business Discussion",
              description: "Review territory potential, terms, and distribution plan.",
            },
            started: {
              title: "Get Started",
              description: "Sign agreement and begin distribution with activation support.",
            },
          },
        },
        am: {
          title: "በ3 ቀላል ደረጃዎች ይጀምሩ",
          subtitle: "ከመጀመሪያ ግንኙነት እስከ ሥራ ጅማሮ ቀላል ሂደት።",
          steps: {
            call: {
              title: "ይደውሉ",
              description: "ክልልዎን እና የንግድ መረጃዎን ለቡድናችን ያጋሩ።",
            },
            discussion: {
              title: "የንግድ ውይይት",
              description: "የክልል ዕድል፣ ውሎች እና የስርጭት እቅድ እንገምግማለን።",
            },
            started: {
              title: "ይጀምሩ",
              description: "ውል ይፈርሙ እና በቅርብ ድጋፍ ስርጭት ይጀምሩ።",
            },
          },
        },
      },
    },
    {
      id: "contact",
      type: "distributor-contact",
      content: {
        en: {
          title: "Contact Our Distribution Team",
          description:
            "Reach the nearest office and our team will guide you through onboarding and launch.",
          offices: [
            {
              name: "Addis Ababa Office",
              phone: "+251 911 123 456",
              address: "Bole, Addis Ababa",
              coverage: "Central and East Ethiopia",
            },
            {
              name: "Adama Office",
              phone: "+251 922 222 333",
              address: "Adama, Oromia",
              coverage: "Oromia and surrounding zones",
            },
            {
              name: "Bahir Dar Office",
              phone: "+251 933 444 555",
              address: "Bahir Dar, Amhara",
              coverage: "Amhara and North-West Ethiopia",
            },
          ],
        },
        am: {
          title: "የስርጭት ቡድናችንን ያነጋግሩ",
          description: "ቅርብ ቢሮአችንን ያግኙ እና ቡድናችን በሙሉ ሂደቱ ይመራዎታል።",
          offices: [
            {
              name: "አዲስ አበባ ቢሮ",
              phone: "+251 911 123 456",
              address: "ቦሌ፣ አዲስ አበባ",
              coverage: "ማዕከላዊ እና ምስራቅ ኢትዮጵያ",
            },
            {
              name: "አዳማ ቢሮ",
              phone: "+251 922 222 333",
              address: "አዳማ፣ ኦሮሚያ",
              coverage: "ኦሮሚያ እና አቅራቢያ ዞኖች",
            },
            {
              name: "ባህር ዳር ቢሮ",
              phone: "+251 933 444 555",
              address: "ባህር ዳር፣ አማራ",
              coverage: "አማራ እና ሰሜን ምዕራብ ኢትዮጵያ",
            },
          ],
        },
      },
    },
  ],
};

async function seed() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not set. Provide it in environment or .env.");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  const result = await Page.findOneAndUpdate(
    { slug: "become-distributor" },
    {
      $set: {
        title: distributorPageData.title,
        sections: distributorPageData.sections,
      },
    },
    { upsert: true, new: true },
  );

  console.log(`Become-distributor page seeded: ${result.sections.length} sections`);
  result.sections.forEach((section) => {
    console.log(`  - [${section.type}] id=${section.id}`);
  });

  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
