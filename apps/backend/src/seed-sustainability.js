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

const sustainabilityPageData = {
  slug: 'sustainability',
  title: { en: 'Sustainability', am: 'ዘላቂነት' },
  sections: [
    {
      id: 'hero',
      type: 'sustainability-hero',
      content: {
        en: {
          headline: 'Sourced with Care,\nShared with Purpose',
          subtitle: 'We are committed to nourishing communities and protecting our planet through sustainable practices and responsible sourcing.',
          heroImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
        },
        am: {
          headline: 'በጥንቃቄ የተገኘ፣\nበዓላማ የተጋራ',
          subtitle: 'በዘላቂ አሰራር እና በኃላፊነት ስሜት ግብዓቶችን በማቅረብ ማህበረሰቦችን ለመመገብ እና ፕላኔታችንን ለመጠበቅ ቆርጠን ተነስተናል።',
          heroImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
        },
      },
    },
    {
      id: 'commitment',
      type: 'sustainability-commitment',
      content: {
        en: {
          description: 'Our commitment to sustainability is at the heart of everything we do. From sourcing ingredients to our manufacturing processes, we prioritize the well-being of our people and the planet.',
          title: 'Our Commitment',
          commitments: [
            {
              title: 'Local Sourcing',
              items: [
                'Prioritizing local farmers for ingredients',
                'Supporting sustainable farming practices',
                'Reducing carbon footprint in logistics',
                'Ensuring fair trade and pricing'
              ]
            },
            {
              title: 'Community Impact',
              items: [
                'Creating local employment opportunities',
                'Supporting educational initiatives',
                'Providing nutritious food accessibility',
                'Engaging in community development'
              ]
            },
            {
              title: 'Responsible Production',
              items: [
                'Minimizing waste in manufacturing',
                'Optimizing energy consumption',
                'Ensuring product safety and quality',
                'Implementing eco-friendly packaging'
              ]
            }
          ],
          stats: {
            skus: { value: '+11', label: 'Unique SKUs for Everyone.' },
            biscuits: { value: '2tn', label: 'Biscuits Produced/Hour' },
            flour: { value: '60tn', label: 'Tones of Flour Production/Day' },
            quickFact: 'Quick Fact',
            jobs: { value: '+200', label: 'Jobs Created' },
            factory: { value: '22Km²', label: 'Factory Size in Square Kilometer' },
            investment: { value: 'Br210M', label: 'Total Investment' },
            export: { value: '$1.4M' }
          }
        },
        am: {
          description: 'የዘላቂነት ቁርጠኝነታችን በምናደርገው ነገር ሁሉ እምብርት ነው። ግብዓቶችን ከማቅረብ ጀምሮ እስከ ማምረት ሂደታችን ድረስ ለሰዎቻችን እና ለፕላኔታችን ደህንነት ቅድሚያ እንሰጣለን።',
          title: 'ቁርጠኝነታችን',
          commitments: [
            {
              title: 'የአገር ውስጥ ግብዓት',
              items: [
                'ለግብዓቶች ለአካባቢው አርሶ አደሮች ቅድሚያ መስጠት',
                'ዘላቂ የግብርና አሰራሮችን መደገፍ',
                'በሎጂስቲክስ ውስጥ የካርቦን አሻራን መቀነስ',
                'ፍትሃዊ ንግድ እና ዋጋን ማረጋገጥ'
              ]
            },
            {
              title: 'የማህበረሰብ ተፅእኖ',
              items: [
                'የአካባቢ የሥራ ዕድሎችን መፍጠር',
                'የትምህርት ተነሳሽነቶችን መደገፍ',
                'የተመጣጠነ ምግብ ተደራሽነትን ማቅረብ',
                'በማህበረሰብ ልማት ውስጥ መሳተፍ'
              ]
            },
            {
              title: 'ኃላፊነት የተሞላበት ምርት',
              items: [
                'በማምረት ሂደት ውስጥ ቆሻሻን መቀነስ',
                'የኃይል አጠቃቀምን ማመቻቸት',
                'የምርት ደህንነትን እና ጥራትን ማረጋገጥ',
                'ለአካባቢ ተስማሚ የሆኑ ማሸጊያዎችን መጠቀም'
              ]
            }
          ],
          stats: {
            skus: { value: '+11', label: 'ለእያንዳንዱ ልዩ SKUs' },
            biscuits: { value: '2tn', label: 'በሰዓት የሚመረቱ ቢስኩቶች' },
            flour: { value: '60tn', label: 'በቀን የዱቄት ምርት ቶን' },
            quickFact: 'ፈጣን እውነታ',
            jobs: { value: '+200', label: 'የተፈጠሩ ስራዎች' },
            factory: { value: '22Km²', label: 'የፋብሪካ መጠን በካሬ ኪሎሜትር' },
            investment: { value: 'Br210M', label: 'ጠቅላላ ኢንቨስትመንት' },
            export: { value: '$1.4M' }
          }
        },
      },
    },
    {
      id: 'process',
      type: 'sustainability-process',
      content: {
        en: {
          sublabel: 'OUR PROCESS',
          title: 'Sustainability Process',
          steps: [
            {
              heading: 'Farmers',
              desc: 'We work closely with local farmers to ensure sustainable and high-quality ingredient sourcing.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333317/vita-food/sustainability/sustainability/process-farmers.jpg',
            },
            {
              heading: 'Processing',
              desc: 'Our state-of-the-art facilities process ingredients with minimal waste and maximum efficiency.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg',
            },
            {
              heading: 'Distribution',
              desc: 'We optimize our distribution network to reduce environmental impact while reaching every corner.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
            },
            {
              heading: 'Reuse',
              desc: 'We implement circular economy principles by reusing materials and reducing waste throughout our cycle.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333321/vita-food/sustainability/sustainability/process-reuse.jpg',
            }
          ],
        },
        am: {
          sublabel: 'ሂደታችን',
          title: 'የዘላቂነት ሂደት',
          steps: [
            {
              heading: 'አርሶ አደሮች',
              desc: 'ዘላቂ እና ጥራት ያለው የግብዓት አቅርቦትን ለማረጋገጥ ከአካባቢው አርሶ አደሮች ጋር በቅርበት እንሰራለን።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333317/vita-food/sustainability/sustainability/process-farmers.jpg',
            },
            {
              heading: 'ማቀነባበር',
              desc: 'የእኛ ዘመናዊ ተቋማት ግብዓቶችን በትንሹ ቆሻሻ እና በከፍተኛ ብቃት ያቀነባብራሉ።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg',
            },
            {
              heading: 'ስርጭት',
              desc: 'ሁሉንም ቦታዎች እየደረስን የአካባቢ ተፅእኖን ለመቀነስ የስርጭት አውታራችንን እናመቻቻለን።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
            },
            {
              heading: 'እንደገና መጠቀም',
              desc: 'በሂደታችን ሁሉ ቁሳቁሶችን እንደገና በመጠቀም እና ቆሻሻን በመቀነስ የክብ ኢኮኖሚ መርሆዎችን ተግባራዊ እናደርጋለን።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333321/vita-food/sustainability/sustainability/process-reuse.jpg',
            }
          ],
        },
      },
    },
    {
      id: 'give-back',
      type: 'sustainability-give-back',
      content: {
        en: {
          title: 'How We Give Back',
          description: 'At Vita, we believe that our success is intertwined with the well-being of our community. We are dedicated to creating positive social impact through various initiatives.',
          cards: [
            {
              heading: 'Supporting Farmers',
              desc: 'Empowering local farmers through training, fair pricing, and sustainable agricultural practices.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333304/vita-food/sustainability/sustainability/giveback-1.png',
            },
            {
              heading: 'Employment',
              desc: 'Creating stable jobs and career growth opportunities for over 200 local community members.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333307/vita-food/sustainability/sustainability/giveback-2.png',
            },
            {
              heading: 'Accessibility',
              desc: 'Ensuring that high-quality, nutritious food products are accessible and affordable for all families.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333308/vita-food/sustainability/sustainability/giveback-3.png',
            }
          ],
        },
        am: {
          title: 'እንዴት እንደምንመልስ',
          description: 'በቪታ፣ ስኬታችን ከማህበረሰባችን ደህንነት ጋር የተቆራኘ መሆኑን እናምናለን። በተለያዩ ተነሳሽነቶች አዎንታዊ ማህበራዊ ተፅእኖ ለመፍጠር ቆርጠን ተነስተናል።',
          cards: [
            {
              heading: 'አርሶ አደሮችን መደገፍ',
              desc: 'በስልጠና፣ በፍትሃዊ ዋጋ እና በዘላቂ የግብርና አሰራር የአገር ውስጥ አርሶ አደሮችን ማብቃት።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333304/vita-food/sustainability/sustainability/giveback-1.png',
            },
            {
              heading: 'የስራ ዕድል',
              desc: 'ከ200 ለሚበልጡ የአካባቢው ማህበረሰብ አባላት የተረጋጋ ስራ እና የሙያ እድገት እድሎችን መፍጠር።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333307/vita-food/sustainability/sustainability/giveback-2.png',
            },
            {
              heading: 'ተደራሽነት',
              desc: 'ከፍተኛ ጥራት ያላቸው እና የተመጣጠነ የምግብ ምርቶች ለሁሉም ቤተሰቦች ተደራሽ እና ተመጣጣኝ መሆናቸውን ማረጋገጥ።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333308/vita-food/sustainability/sustainability/giveback-3.png',
            }
          ],
        },
      },
    },
  ],
};

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  const result = await Page.findOneAndUpdate(
    { slug: 'sustainability' },
    { $set: { title: sustainabilityPageData.title, sections: sustainabilityPageData.sections } },
    { new: true, upsert: true },
  );

  console.log(`Sustainability page seeded: ${result.sections.length} sections`);
  await mongoose.disconnect();
}

seed().catch(err => { console.error(err); process.exit(1); });
