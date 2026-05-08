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

const aboutPageData = {
  slug: 'about',
  title: { en: 'About Us', am: 'ስለ እኛ' },
  sections: [
    {
      id: 'hero',
      type: 'about-hero',
      content: {
        en: {
          headline: 'Sourced with Care,\nShared with Purpose',
          subtitle: 'We are committed to nourishing communities and protecting our planet through sustainable practices and responsible sourcing.',
          heroImage: '',
        },
        am: {
          headline: 'በጥንቃቄ የተገኘ፣\nበዓላማ የተጋራ',
          subtitle: 'በዘላቂ አሰራር እና በኃላፊነት ስሜት ግብዓቶችን በማቅረብ ማህበረሰቦችን ለመመገብ እና ፕላኔታችንን ለመጠበቅ ቆርጠን ተነስተናል።',
          heroImage: '',
        },
      },
    },
    {
      id: 'company',
      type: 'about-company',
      content: {
        en: {
          title: 'Our Company',
          description: 'Vita is a leading food manufacturing company dedicated to providing high-quality, nutritious products to families across Ethiopia.',
        },
        am: {
          title: 'ድርጅታችን',
          description: 'ቪታ በኢትዮጵያ ውስጥ ለሚገኙ ቤተሰቦች ከፍተኛ ጥራት ያላቸውን እና የተመጣጠነ ምርቶችን ለማቅረብ የተቋቋመ ግንባር ቀደም የምግብ አምራች ድርጅት ነው።',
        },
      },
    },
    {
      id: 'sister-companies',
      type: 'about-sister',
      content: {
        en: {
          label: 'Our Network',
          title: 'Sister Companies',
          description: 'We are part of a diverse group of companies working together to drive growth and innovation.',
          cta: 'View Gallery',
          longTeaBlurb: 'Premium tea products sourced from the finest gardens.',
          visitSite: 'Visit Site',
          logos: Array.from({ length: 8 }, () => ({ src: '' })),
        },
        am: {
          label: 'አውታረ መረባችን',
          title: 'እህት ኩባንያዎች',
          description: 'እድገትን እና ፈጠራን ለማምጣት አብረን የምንሰራ የተለያዩ ኩባንያዎች ስብስብ አካል ነን።',
          cta: 'ጋለሪውን ይመልከቱ',
          longTeaBlurb: 'ከምርጥ የአትክልት ስፍራዎች የተገኙ ምርጥ የሻይ ምርቶች።',
          visitSite: 'ድረ-ገጹን ይጎብኙ',
          logos: Array.from({ length: 8 }, () => ({ src: '' })),
        },
      },
    },
    {
      id: 'who-we-are',
      type: 'about-who-we-are',
      content: {
        en: {
          who: 'WHO',
          areWe: 'ARE WE',
          description: 'We are a team of passionate individuals dedicated to making a difference in the food industry.',
          newGenTitle: 'New Generation',
          newGenDesc: 'Empowering the next generation through nutrition and opportunity.',
          portrait: '',
          cards: [
            { label: 'Mission', desc: 'To provide high-quality, nutritious food products that nourish families.' },
            { label: 'Vision',  desc: 'To be the leading food manufacturer in the region.' },
            { label: 'Values',  desc: 'Integrity, Quality, Innovation, and Community.' },
            { label: 'Purpose', desc: 'To create a positive impact on people and the planet.' },
          ],
        },
        am: {
          who: 'እኛ',
          areWe: 'ማን ነን',
          description: 'በምግብ ኢንዱስትሪ ውስጥ ለውጥ ለማምጣት የቆረጥን ጥልቅ ስሜት ያለን ባለሙያዎች ቡድን ነን።',
          newGenTitle: 'አዲሱ ትውልድ',
          newGenDesc: 'በአመጋገብ እና በዕድል አዲሱን ትውልድ ማብቃት።',
          portrait: '',
          cards: [
            { label: 'ተልዕኮ',  desc: 'ቤተሰቦችን የሚመግቡ ከፍተኛ ጥራት ያላቸውን የምግብ ምርቶችን ማቅረብ።' },
            { label: 'ራዕይ',   desc: 'በቀጣናው ግንባር ቀደም የምግብ አምራች መሆን።' },
            { label: 'እሴቶች', desc: 'ታማኝነት፣ ጥራት፣ ፈጠራ እና ማህበረሰብ።' },
            { label: 'ዓላማ',   desc: 'በሰዎች እና በፕላኔታችን ላይ አዎንታዊ ተፅእኖ መፍጠር።' },
          ],
        },
      },
    },
    {
      id: 'process',
      type: 'about-process',
      content: {
        en: {
          steps: [
            { heading: 'Sourcing',    desc: 'We source the finest ingredients from local farmers.',                 label: 'Step 01', captionTitle: 'Quality Ingredients',  captionDesc: 'Only the best for our products.',      image: '' },
            { heading: 'Crafting',    desc: 'Our expert bakers craft each product with care.',                      label: 'Step 02', captionTitle: 'Expert Craftsmanship', captionDesc: 'Tradition meets innovation.',           image: '' },
            { heading: 'Production',  desc: 'State-of-the-art production for consistent quality.',                  label: 'Step 03', captionTitle: 'Modern Production',     captionDesc: 'Efficiency and safety first.',         image: '' },
          ],
        },
        am: {
          steps: [
            { heading: 'ምንጭ',    desc: 'ከአካባቢው አርሶ አደሮች ምርጥ ግብዓቶችን እናገኛለን።',              label: 'ደረጃ 01', captionTitle: 'ጥራት ያላቸው ግብዓቶች',  captionDesc: 'ለጥራት ምርቶቻችን ምርጥ የሆኑት ብቻ።',  image: '' },
            { heading: 'አዘገጃጀት', desc: 'ባለሙያ ጋጋሪዎቻችን እያንዳንዱን ምርት በጥንቃቄ ያዘጋጃሉ።',        label: 'ደረጃ 02', captionTitle: 'የባለሙያ ጥበብ',       captionDesc: 'ባህል ከፈጠራ ጋር ይገናኛል።',           image: '' },
            { heading: 'ምርት',    desc: 'ለተከታታይ ጥራት ዘመናዊ የምርት ሂደት።',                       label: 'ደረጃ 03', captionTitle: 'ዘመናዊ ምርት',         captionDesc: 'ውጤታማነት እና ደህንነት ቅድሚያ ይሰጣቸዋል።', image: '' },
          ],
        },
      },
    },
    {
      id: 'testimonials',
      type: 'about-testimonials',
      content: {
        en: {
          label: 'Testimonials',
          titleLead: 'What People',
          titleAccent: 'Say',
          items: [
            { quote: 'The quality of Vita products is unmatched in the market.', author: 'Abebe Kebede', role: 'Retailer', image: '' },
            { quote: 'My kids love the Zoo biscuits! They are healthy and tasty.', author: 'Sara Tekle',  role: 'Parent',   image: '' },
          ],
        },
        am: {
          label: 'ምስክርነቶች',
          titleLead: 'ሰዎች ምን',
          titleAccent: 'ይላሉ',
          items: [
            { quote: 'የቪታ ምርቶች ጥራት በገበያው ላይ ሊወዳደር አይችልም።', author: 'አበበ ከበደ', role: 'ችርቻሮ ሻጭ', image: '' },
            { quote: 'ልጆቼ ዙ ቢስኩቶቹን ይወዳሉ! ጤናማ እና ጣፋጭ ናቸው።', author: 'ሳራ ተክሌ',   role: 'ወላጅ',     image: '' },
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
    { slug: 'about' },
    { $set: { title: aboutPageData.title, sections: aboutPageData.sections } },
    { new: true, upsert: true },
  );

  console.log(`About page seeded: ${result.sections.length} sections`);
  result.sections.forEach(s => console.log(`  - [${s.type}] id=${s.id}`));
  await mongoose.disconnect();
}

seed().catch(err => { console.error(err); process.exit(1); });
