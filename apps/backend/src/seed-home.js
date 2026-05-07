require('/root/Vita_food_complex_website/node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('/root/Vita_food_complex_website/node_modules/.pnpm/mongoose@9.3.3/node_modules/mongoose');

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

const Page = mongoose.model('Page', PageSchema);

const homePageData = {
  slug: 'home',
  title: { en: 'Home', am: 'መነሻ' },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      content: {
        en: {
          stylishWayPart1: 'A new stylish way of',
          stylishWayPart2: 'connecting',
          description: "Experience the perfect blend of nutrition and flavor with Vita's premium range of biscuits and flour products.",
          cta: 'Our Products',
        },
        am: {
          stylishWayPart1: 'አዲስ እና ዘመናዊ የ',
          stylishWayPart2: 'መገናኛ መንገድ',
          description: 'በቪታ ከፍተኛ ጥራት ያላቸው የቢስኩት እና የዱቄት ምርቶች የተመጣጠነ ምግብ እና ጣዕም ፍጹም ውህደትን ይለማመዱ።',
          cta: 'ምርቶቻችን',
        },
      },
    },
    {
      id: 'hero-video',
      type: 'hero-video',
      content: {
        en: {
          secondaryQuote: 'Nourishing families with every bite, bringing joy to every home.',
          ourClients: 'Our Happy Clients',
        },
        am: {
          secondaryQuote: 'በእያንዳንዱ ንክሻ ቤተሰቦችን መመገብ፣ ለእያንዳንዱ ቤት ደስታን ማምጣት።',
          ourClients: 'ደስተኛ ደንበኞቻችን',
        },
      },
    },
    {
      id: 'products',
      type: 'products',
      content: {},
    },
    {
      id: 'biscuit-brand',
      type: 'biscuit-brand',
      content: {
        en: {
          label: 'Our Brands',
          title: 'A World of Flavor',
          description: 'Discover our range of delicious biscuits made with love.',
          cta: 'Explore Products',
        },
        am: {
          label: 'ብራንዶቻችን',
          title: 'የጣዕም ዓለም',
          description: 'በፍቅር የተሰሩ ጣፋጭ ቢስኩቶቻችንን ያስሱ።',
          cta: 'ምርቶችን ያስሱ',
        },
      },
    },
    {
      id: 'recipes',
      type: 'recipes',
      content: {
        en: {
          label: 'Our Recipes Made Simple',
          heading: 'Mix. Match. Enjoy',
          items: [
            { title: 'Creamy Delights', description: 'Experience the rich, velvety texture of our signature cream biscuits.' },
            { title: 'Oreo Moments', description: 'Perfectly balanced chocolate and cream for your tea time.' },
            { title: 'Sweet Bites', description: 'Small, crunchy treats that bring big smiles to everyone.' },
            { title: 'Morning Fresh', description: 'Start your day with our high-quality wheat flour bakes.' },
            { title: "Baker's Secret", description: 'The secret ingredient to all your favorite home recipes.' },
          ],
        },
        am: {
          label: 'ምግብ አዘገጃጀቶቻችን በቀላሉ',
          heading: 'ይቀላቅሉ:: ያዛምዱ:: ይደሰቱ',
          items: [
            { title: 'ክሬም ደስታ', description: 'የእኛን ልዩ የክሬም ቢስኩቶች የበለፀገ እና ለስላሳ ይዘት ይለማመዱ::' },
            { title: 'የኦሪዮ ጊዜያት', description: 'ለሻይ ሰዓትዎ ፍጹም የተመጣጠነ ቸኮሌት እና ክሬም::' },
            { title: 'ጣፋጭ ንክሻዎች', description: 'ለሁሉም ሰው ትልቅ ፈገግታ የሚያመጡ ትናንሽ እና ጥራጥሬ ጣፋጮች::' },
            { title: 'የጠዋት ትኩስነት', description: 'ቀንዎን በከፍተኛ ጥራት ባለው የስንዴ ዱቄት መጋገሪያዎቻችን ይጀምሩ::' },
            { title: 'የጋጋሪው ምስጢር', description: 'ለሁሉም ተወዳጅ የቤት ውስጥ ምግብ አዘገጃጀቶችዎ ምስጢራዊ ግብዓት::' },
          ],
        },
      },
    },
    {
      id: 'quick-facts',
      type: 'quick-facts',
      content: {
        en: {
          label: 'Quick Fact',
          facts: [
            { id: 'skus', value: '+11', label: 'Unique SKUs' },
            { id: 'flour', value: '60tn', label: 'Flour Production/Day' },
            { id: 'jobs', value: '+200', label: 'Jobs Created' },
            { id: 'biscuits', value: '2tn', label: 'Biscuits/Hour' },
            { id: 'investment', value: '$1.4M', value2: 'Br210M', label: 'Total Investment' },
            { id: 'factorySize', value: '22Km²', label: 'Factory Size' },
          ],
        },
        am: {
          label: 'ፈጣን እውነታ',
          facts: [
            { id: 'skus', value: '+11', label: 'ልዩ ምርቶች' },
            { id: 'flour', value: '60tn', label: 'በቀን የሚመረት የዱቄት መጠን' },
            { id: 'jobs', value: '+200', label: 'የተፈጠሩ የስራ እድሎች' },
            { id: 'biscuits', value: '2tn', label: 'በሰዓት የሚመረቱ ቢስኩቶች' },
            { id: 'investment', value: '$1.4M', value2: 'Br210M', label: 'ጠቅላላ ኢንቨስትመንት' },
            { id: 'factorySize', value: '22Km²', label: 'የፋብሪካው ስፋት' },
          ],
        },
      },
    },
    {
      id: 'merchandise',
      type: 'merchandise',
      content: {
        en: {
          label: 'Merchandise',
          heading: 'Vita Style',
          items: [
            { title: 'Necklace', desc: 'Stylish Vita Necklace' },
            { title: 'Cap', desc: 'Classic Vita Cap' },
            { title: 'T-Shirt', desc: 'Comfortable Vita T-Shirt' },
            { title: 'Sweater', desc: 'Warm Vita Sweater' },
            { title: 'Signature Cap', desc: 'Premium Vita Cap' },
            { title: 'Badge', desc: 'Vita Special Badge' },
          ],
        },
        am: {
          label: 'የመታሰቢያ ዕቃዎች',
          heading: 'የቪታ ስታይል',
          items: [
            { title: 'ሐብል', desc: 'ቆንጆ የቪታ ሐብል' },
            { title: 'ቆብ', desc: 'ክላሲክ የቪታ ቆብ' },
            { title: 'ቲ-ሸርት', desc: 'ምቹ የቪታ ቲ-ሸርት' },
            { title: 'ሹራብ', desc: 'ሞቅ ያለ የቪታ ሹራብ' },
            { title: 'ፊርማ ቆብ', desc: 'ልዩ የቪታ ቆብ' },
            { title: 'ባጅ', desc: 'የቪታ ልዩ ባጅ' },
          ],
        },
      },
    },
    {
      id: 'social-wall',
      type: 'social-wall',
      content: {
        en: {
          label: 'Social Wall',
          heading: 'Join the Conversation',
          cta: 'Explore More',
        },
        am: {
          label: 'ማህበራዊ ግድግዳ',
          heading: 'ውይይቱን ይቀላቀሉ',
          cta: 'ተጨማሪ ያስሱ',
        },
      },
    },
    {
      id: 'partners',
      type: 'partners',
      content: {
        en: {
          subtitle: 'Our Partners',
          heading: 'Trusted by Experts',
        },
        am: {
          subtitle: 'አጋሮቻችን',
          heading: 'በባለሙያዎች የታመነ',
        },
      },
    },
  ],
};

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  console.log('Connected!');
  await Page.deleteOne({ slug: 'home' });
  const page = await new Page(homePageData).save();
  console.log(`Seeded home page with ${page.sections.length} sections.`);
  page.sections.forEach(s => console.log(`  [${s.type}] ${s.id}`));
  process.exit(0);
}).catch(err => { console.error(err.message); process.exit(1); });
