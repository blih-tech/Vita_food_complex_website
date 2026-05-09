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

const peoplePlanetPageData = {
  slug: 'people-planet',
  title: { en: 'People & Planet', am: 'ሰዎች እና ፕላኔት' },
  sections: [
    {
      id: 'hero',
      type: 'people-planet-hero',
      content: {
        en: {
          title: 'Nourishing Communities.\nEmpowering Lives',
          description: 'From cities to countryside, Vita is committed to supporting families, uplifting farmers, and building stronger communities across the nation',
          seeImpact: 'See Our Impact',
          joinMission: 'Join the Mission'
        },
        am: {
          title: 'ማህበረሰቦችን መመገብ።\nህይወትን ማብቃት',
          description: 'ከከተማ እስከ ገጠር፣ ቪታ ቤተሰቦችን ለመደገፍ፣ አርሶ አደሮችን ለማንሳት እና በመላ ሀገሪቱ ጠንካራ ማህበረሰቦችን ለመገንባት ቁርጠኛ ነው።',
          seeImpact: 'ተፅእኖአችንን ይመልከቱ',
          joinMission: 'ተልዕኮውን ይቀላቀሉ'
        }
      }
    },
    {
      id: 'commitment',
      type: 'people-planet-commitment',
      content: {
        en: {
          heading: 'Our Commitment',
          text: 'At Vita, we believe that real impact goes beyond <bold>products</bold>. We are dedicated to creating positive change by <bold>supporting communities</bold>, strengthening local livelihoods, and ensuring access to <bold>quality nutrition</bold> for all. Every step we take is guided by our responsibility to people and <bold>the future we share</bold>.',
          learnMore: 'Learn More'
        },
        am: {
          heading: 'ቁርጠኝነታችን',
          text: 'በቪታ፣ እውነተኛ ተፅእኖ ከ<bold>ምርቶች</bold> በላይ እንደሆነ እናምናለን። <bold>ማህበረሰቦችን በመደገፍ</bold>፣ የአካባቢ ኑሮን በማጠናከር እና ለሁሉም <bold>ጥራት ያለው አመጋገብ</bold> ተደራሽነትን በማረጋገጥ አዎንታዊ ለውጥ ለማምጣት ቆርጠን ተነስተናል። የምንወስደው እያንዳንዱ እርምጃ ለሰዎች ባለን ኃላፊነት እና <bold>በምንጋራው የወደፊት ጊዜ</bold> የሚመራ ነው።',
          learnMore: 'ተጨማሪ ያንብቡ'
        }
      }
    },
    {
      id: 'support',
      type: 'people-planet-support',
      content: {
        en: {
          label: 'Our Impact Areas',
          heading: 'Community &\nAgricultural Support',
          description: 'We work hand-hand with farmers and rural communities to create sustainable food systems, improve productivity, and enhance livelihoods across the country.',
          mainImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
          cards: [
            {
              title: 'For the Country Ethiopia 🇪🇹',
              description: 'Driving national growth by creating jobs, supporting local production, and strengthening the economy.',
              isFeatured: true
            },
            { title: 'For the Countryside', isFeatured: false },
            { title: 'For Villagers', isFeatured: false },
            { title: 'For Farmers', isFeatured: false },
            { title: 'For Families', isFeatured: false },
            { title: 'For Sustainability', isFeatured: false }
          ]
        },
        am: {
          label: 'የተፅእኖ ዘርፎቻችን',
          heading: 'ማህበረሰብ እና\nግብርና ድጋፍ',
          description: 'ዘላቂ የምግብ ስርዓቶችን ለመፍጠር፣ ምርታማነትን ለማሻሻል እና በመላ ሀገሪቱ ኑሮን ለማሳደግ ከአርሶ አደሮች እና ከገጠር ማህበረሰቦች ጋር እጅ ለእጅ ተያይዘን እንሰራለን።',
          mainImage: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
          cards: [
            {
              title: 'ለሀገሪቱ ኢትዮጵያ 🇪🇹',
              description: 'ስራ በመፍጠር፣ የአገር ውስጥ ምርትን በመደገፍ እና ኢኮኖሚውን በማጠናከር ሀገራዊ እድገትን ማምጣት።',
              isFeatured: true
            },
            { title: 'ለገጠሩ ክፍል', isFeatured: false },
            { title: 'ለመንደርተኞች', isFeatured: false },
            { title: 'ለአርሶ አደሮች', isFeatured: false },
            { title: 'ለቤተሰቦች', isFeatured: false },
            { title: 'ለዘላቂነት', isFeatured: false }
          ]
        }
      }
    },
    {
      id: 'charity',
      type: 'people-planet-charity',
      content: {
        en: {
          heading: 'Our Charity & Giving\nInitiatives',
          description: 'Making a difference where it matters most',
          initiatives: [
            {
              title: 'Food Donation Programs',
              description: 'Providing essential food support to families in need.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333304/vita-food/sustainability/sustainability/giveback-1.png',
              isFeatured: true
            },
            {
              title: 'School Feeding Support',
              description: 'Helping students stay nourished, focused, and ready to learn.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333307/vita-food/sustainability/sustainability/giveback-2.png',
              isFeatured: false
            },
            {
              title: 'Emergency Relief Support',
              description: 'Responding quickly to crises with food and essential aid.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333308/vita-food/sustainability/sustainability/giveback-3.png',
              isFeatured: false
            },
            {
              title: 'Community Outreach Campaigns',
              description: 'Engaging directly with communities through meaningful programs.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333317/vita-food/sustainability/sustainability/process-farmers.jpg',
              isFeatured: false
            },
            {
              title: 'Health & Nutrition Awareness',
              description: 'Educating families on better nutrition and healthy living.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg',
              isFeatured: false
            },
            {
              title: 'Women & Youth Empowerment',
              description: 'Creating opportunities for growth, skills, and independence.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
              isFeatured: false
            },
            {
              title: 'Rural Development Projects',
              description: 'Supporting long-term development in underserved areas.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
              isFeatured: false
            },
            {
              title: 'Local Partnerships',
              description: 'Working with organizations to maximize community impact.',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333321/vita-food/sustainability/sustainability/process-reuse.jpg',
              isFeatured: false
            }
          ]
        },
        am: {
          heading: 'የበጎ አድራጎት እና የመስጠት\nተነሳሽነቶቻችን',
          description: 'በጣም አስፈላጊ በሆነበት ቦታ ለውጥ ማምጣት',
          initiatives: [
            {
              title: 'የምግብ ልገሳ ፕሮግራሞች',
              description: 'ችግር ላለባቸው ቤተሰቦች አስፈላጊውን የምግብ ድጋፍ መስጠት።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333304/vita-food/sustainability/sustainability/giveback-1.png',
              isFeatured: true
            },
            {
              title: 'የትምህርት ቤት አመጋገብ ድጋፍ',
              description: 'ተማሪዎች እንዲመገቡ፣ ትኩረት እንዲያደርጉ እና ለመማር ዝግጁ እንዲሆኑ መርዳት።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333307/vita-food/sustainability/sustainability/giveback-2.png',
              isFeatured: false
            },
            {
              title: 'የአደጋ ጊዜ እርዳታ ድጋፍ',
              description: 'ለችግሮች በምግብ እና አስፈላጊ እርዳታ በፍጥነት ምላሽ መስጠት።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333308/vita-food/sustainability/sustainability/giveback-3.png',
              isFeatured: false
            },
            {
              title: 'የማህበረሰብ ተደራሽነት ዘመቻዎች',
              description: 'ትርጉም ባላቸው ፕሮግራሞች አማካኝነት በቀጥታ ከማህበረሰቦች ጋር መሳተፍ።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333317/vita-food/sustainability/sustainability/process-farmers.jpg',
              isFeatured: false
            },
            {
              title: 'የጤና እና የተመጣጠነ ምግብ ግንዛቤ',
              description: 'ቤተሰቦችን ስለተሻለ አመጋገብ እና ጤናማ አኗኗር ማስተማር።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg',
              isFeatured: false
            },
            {
              title: 'የሴቶች እና የወጣቶች ማብቃት',
              description: 'ለእድገት፣ ለክህሎት እና ለነፃነት እድሎችን መፍጠር።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333316/vita-food/sustainability/sustainability/process-distribution.png',
              isFeatured: false
            },
            {
              title: 'የገጠር ልማት ፕሮጀክቶች',
              description: 'ባልተሟሉ አካባቢዎች የረጅም ጊዜ ልማትን መደገፍ።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333314/vita-food/sustainability/sustainability/hero-bg.png',
              isFeatured: false
            },
            {
              title: 'የአካባቢ ሽርክናዎች',
              description: 'የማህበረሰብ ተፅእኖን ከፍ ለማድረግ ከድርጅቶች ጋር መስራት።',
              image: 'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333321/vita-food/sustainability/sustainability/process-reuse.jpg',
              isFeatured: false
            }
          ]
        }
      }
    },
    {
      id: 'impact',
      type: 'people-planet-impact',
      content: {
        en: {
          label: 'Take Action',
          heading: 'Make an Impact Today',
          description: 'Every contribution matters. Support communities through donations and help us reach more families, farmers, and those in need.',
          donateMoney: 'Donate Money',
          donateInKind: 'Donate In Kind',
          galleryImages: [
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333304/vita-food/sustainability/sustainability/giveback-1.png',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333307/vita-food/sustainability/sustainability/giveback-2.png',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333308/vita-food/sustainability/sustainability/giveback-3.png',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333317/vita-food/sustainability/sustainability/process-farmers.jpg',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg'
          ]
        },
        am: {
          label: 'እርምጃ ይውሰዱ',
          heading: 'ዛሬ ተፅእኖ ይፍጠሩ',
          description: 'እያንዳንዱ አስተዋፅኦ አስፈላጊ ነው። በልገሳ ማህበረሰቦችን ይደግፉ እና ብዙ ቤተሰቦችን፣ አርሶ አደሮችን እና እርዳታ የሚፈልጉትን እንድንደርስ ይርዱን።',
          donateMoney: 'ገንዘብ ይለግሱ',
          donateInKind: 'በዓይነት ይለግሱ',
          galleryImages: [
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333304/vita-food/sustainability/sustainability/giveback-1.png',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333307/vita-food/sustainability/sustainability/giveback-2.png',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333308/vita-food/sustainability/sustainability/giveback-3.png',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333317/vita-food/sustainability/sustainability/process-farmers.jpg',
            'https://res.cloudinary.com/dd4haxhgy/image/upload/v1778333318/vita-food/sustainability/sustainability/process-processing.jpg'
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
    { slug: 'people-planet' },
    { $set: { title: peoplePlanetPageData.title, sections: peoplePlanetPageData.sections } },
    { new: true, upsert: true },
  );

  console.log(`People & Planet page seeded: ${result.sections.length} sections`);
  await mongoose.disconnect();
}

seed().catch(err => { console.error(err); process.exit(1); });
