require('dotenv').config({ path: 'apps/backend/.env' });
const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  id: String,
  type: String,
  content: mongoose.Schema.Types.Mixed,
}, { _id: false });

const PageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { en: String, am: String },
  sections: [SectionSchema],
}, { timestamps: true });

const Page = mongoose.model('Page', PageSchema, 'pages');

const innovationPageData = {
  slug: 'innovation',
  title: { en: 'Innovation', am: 'ፈጠራ' },
  sections: [
    {
      id: 'hero',
      type: 'innovation-hero',
      content: {
        en: {
          headline: 'Shaping the Future of Food\nThrough Innovation',
          subtitle: 'From product creation to community impact, we innovate to nourish better, smarter, and more sustainably.',
          heroImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
        },
        am: {
          headline: 'የምግብ የወደፊት ሁኔታን\nበፈጠራ መቅረጽ',
          subtitle: 'ከምርት ፈጠራ እስከ ማህበረሰብ ተፅእኖ፣ የተሻለ፣ ብልህ እና የበለጠ ዘላቂነት ያለው አመጋገብ ለማቅረብ አዳዲስ ነገሮችን እንፈጥራለን።',
          heroImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
        },
      },
    },
    {
      id: 'approach',
      type: 'innovation-approach',
      content: {
        en: {
          label: 'OUR APPROACH',
          textPart1: 'At Vita, innovation is at the heart of everything we do. ',
          bold1: 'From developing high-quality food products to creating',
          textPart2: ' meaningful consumer experiences, we continuously ',
          bold2: 'push',
          textPart3: ' boundaries to meet the ',
          bold3: 'evolving needs of our communities.',
          cta: 'Download Logo',
          mainImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
        },
        am: {
          label: 'አቀራረባችን',
          textPart1: 'በቪታ፣ ፈጠራ በምናደርገው ነገር ሁሉ እምብርት ነው። ',
          bold1: 'ከፍተኛ ጥራት ያላቸውን የምግብ ምርቶች ከማልማት ጀምሮ ትርጉም ያላቸውን',
          textPart2: ' የሸማቾች ተሞክሮዎችን እስከ መፍጠር ድረስ፣ የማህበረሰባችንን ',
          bold2: 'እየተሻሻሉ ያሉ ፍላጎቶች',
          textPart3: ' ለማሟላት ያለማቋረጥ ',
          bold3: 'ወሰኖችን እንገፋለን።',
          cta: 'ሎጎ አውርድ',
          mainImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
        },
      },
    },
    {
      id: 'diverse',
      type: 'innovation-diverse',
      content: {
        en: {
          title: 'Our Diverse Business Ecosystem',
          description: 'Over the past two decades, Vita food complex Group has ventured into a spectrum of ventures, upholding a strong innovative vision since its establishment.',
          cards: [
            {
              id: 'products',
              title: 'Next-Generation Food Products',
              desc: 'Developing diverse, high-quality products tailored to different lifestyles and needs.',
              cta: 'Learn More',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
            },
            {
              id: 'packaging',
              title: 'Smart & Modern Packaging',
              desc: 'Designing visually engaging, functional, and sustainable packaging that connects with consumers.',
              cta: 'Learn More',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg',
            },
            {
              id: 'experience',
              title: 'Consumer Experience',
              desc: 'Creating engaging brand experiences through campaigns, activations, and digital interaction.',
              cta: 'Learn More',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
            }
          ]
        },
        am: {
          title: 'የእኛ የተለያየ የንግድ ሥነ-ምህዳር',
          description: 'ባለፉት ሁለት አስርት ዓመታት ውስጥ የቪታ ፉድ ኮምፕሌክስ ግሩፕ ከተመሰረተበት ጊዜ ጀምሮ ጠንካራ የፈጠራ ራዕይን በመያዝ ወደ ተለያዩ ስራዎች ገብቷል።',
          cards: [
            {
              id: 'products',
              title: 'ቀጣይ ትውልድ የምግብ ምርቶች',
              desc: 'ከተለያዩ የአኗኗር ዘይቤዎች እና ፍላጎቶች ጋር የተጣጣሙ የተለያዩ እና ከፍተኛ ጥራት ያላቸውን ምርቶች ማልማት።',
              cta: 'ተጨማሪ ያንብቡ',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
            },
            {
              id: 'packaging',
              title: 'ብልህ እና ዘመናዊ ማሸጊያ',
              desc: 'ከሸማቾች ጋር የሚገናኙ በእይታ የሚስቡ፣ ተግባራዊ እና ዘላቂ ማሸጊያዎችን መንደፍ።',
              cta: 'ተጨማሪ ያንብቡ',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg',
            },
            {
              id: 'experience',
              title: 'የሸማቾች ተሞክሮ',
              desc: 'በዘመቻዎች፣ በማነቃቂያዎች እና በዲጂታል መስተጋብር አማካኝነት አሳታፊ የምርት ስም ተሞክሮዎችን መፍጠር።',
              cta: 'ተጨማሪ ያንብቡ',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
            }
          ]
        }
      }
    }
  ]
};

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  const result = await Page.findOneAndUpdate(
    { slug: 'innovation' },
    { $set: { title: innovationPageData.title, sections: innovationPageData.sections } },
    { new: true, upsert: true },
  );

  console.log(`Innovation page seeded: ${result.sections.length} sections`);
  await mongoose.disconnect();
}

seed().catch(err => { console.error(err); process.exit(1); });
