require('/root/Vita_food_complex_website/node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('/root/Vita_food_complex_website/node_modules/.pnpm/mongoose@9.3.3/node_modules/mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const LS = new mongoose.Schema({ en: String, am: String }, { _id: false });
const FAQSchema = new mongoose.Schema({
  question: LS, answer: LS,
  position: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true },
}, { timestamps: true });
const FAQ = mongoose.model('FAQ', FAQSchema);

const faqs = [
  {
    question: {
      en: 'Where can I buy Vita products?',
      am: 'የቪታ ምርቶችን የት መግዛት እችላለሁ?',
    },
    answer: {
      en: 'Vita products are available in major supermarkets and shops across Ethiopia.',
      am: 'የቪታ ምርቶች በመላው ኢትዮጵያ በሚገኙ ዋና ዋና ሱፐርማርኬቶች ውስጥ ይገኛሉ።',
    },
    position: 0, isPublished: true,
  },
  {
    question: {
      en: 'Are Vita products healthy?',
      am: 'የቪታ ምርቶች ጤናማ ናቸው?',
    },
    answer: {
      en: 'Yes, our products are made with high-quality ingredients and are fortified with essential nutrients.',
      am: 'አዎ፣ ምርቶቻችን ከፍተኛ ጥራት ካላቸው ግብዓቶች የተሰሩ ሲሆን አስፈላጊ በሆኑ ንጥረ ነገሮች የበለፀጉ ናቸው።',
    },
    position: 1, isPublished: true,
  },
  {
    question: {
      en: 'How can I become a distributor?',
      am: 'እንዴት አከፋፋይ መሆን እችላለሁ?',
    },
    answer: {
      en: 'You can apply through our "Become a Distributor" page or contact our sales team directly.',
      am: 'በ"አከፋፋይ ይሁኑ" ገጻችን ማመልከት ወይም የሽያጭ ቡድናችንን ቀጥታ ማነጋገር ይችላሉ።',
    },
    position: 2, isPublished: true,
  },
  {
    question: {
      en: 'What types of products does Vita offer?',
      am: 'ቪታ ምን ዓይነት ምርቶችን ያቀርባል?',
    },
    answer: {
      en: 'Vita offers a wide range of products including edible oils, wheat flour, biscuits, and fortified food products designed to meet everyday nutritional needs.',
      am: 'ቪታ የምግብ ዘይቶችን፣ የስንዴ ዱቄቶችን፣ ቢስኪቶችን እና የዕለት ዕለት የሚያስፈልጉ ንጥረ ምግቦችን ያካተቱ ምርቶችን ያቀርባል።',
    },
    position: 3, isPublished: true,
  },
  {
    question: {
      en: 'Are Vita products certified and regulated?',
      am: 'የቪታ ምርቶች የምስክር ወረቀት አላቸውን?',
    },
    answer: {
      en: 'Yes, all Vita products meet the quality and safety standards set by the Ethiopian Food and Drug Authority (EFDA) and are produced in certified facilities.',
      am: 'አዎ፣ ሁሉም የቪታ ምርቶች በኢትዮጵያ ምግብና መድኃኒት ባለሥልጣን (EFDA) የተቀመጡ የጥራትና ደህንነት መስፈርቶችን ያሟላሉ።',
    },
    position: 4, isPublished: true,
  },
  {
    question: {
      en: 'How can I contact Vita Food Complex for bulk orders?',
      am: 'ለጅምላ ትዕዛዝ ቪታ ፑድ ኮምፕሌክስን እንዴት ማናገር እችላለሁ?',
    },
    answer: {
      en: 'For bulk orders and wholesale inquiries, please reach us through the Contact page on our website or call our corporate sales line.',
      am: 'ለጅምላ ትዕዛዝ እና የጅምላ ሽያጭ ጥያቄዎች፣ እባክዎ በድህረ ገጻችን ላይ ባለው የእውቂያ ገጽ አድርሰን ያናግሩን።',
    },
    position: 5, isPublished: true,
  },
  {
    question: {
      en: 'Does Vita support local farmers?',
      am: 'ቪታ የሀገር ውስጥ ገበሬዎችን ይደግፋልን?',
    },
    answer: {
      en: 'Yes, Vita Food Complex sources 95% of its raw materials from local Ethiopian farmers, supporting rural livelihoods and strengthening the national agricultural sector.',
      am: 'አዎ፣ ቪታ ፑድ ኮምፕሌክስ ጥሬ ዕቃዎቹን 95% ከሀገር ውስጥ ኢትዮጵያ ገበሬዎች ያቀርባል።',
    },
    position: 6, isPublished: true,
  },
  {
    question: {
      en: 'What is Vita\'s commitment to sustainability?',
      am: 'ቪታ ለዘላቂነት ያለው ቁርጠኝነት ምንድን ነው?',
    },
    answer: {
      en: 'Vita is committed to reducing its environmental footprint. We have implemented water recycling systems, reduced manufacturing waste by 30%, and are on track to achieve carbon neutrality by 2030 with solar panels covering 40% of energy needs.',
      am: 'ቪታ አካባቢያዊ ተፅዕኖውን ለመቀነስ ቁርጠኛ ነው። የውሃ ዑደት ሥርዓቶችን ተግባራዊ አድርገናል እና እስከ 2030 ካርበን ኒውትራሊቲ ለማሳካት በመንገድ ላይ ነን።',
    },
    position: 7, isPublished: true,
  },
];

mongoose.connect(MONGODB_URI).then(async () => {
  console.log('Connected!');
  for (const faq of faqs) {
    await FAQ.findOneAndUpdate(
      { 'question.en': faq.question.en },
      faq,
      { upsert: true },
    );
    console.log('Seeded:', faq.question.en);
  }
  console.log('Done — 8 FAQs seeded.');
  process.exit(0);
}).catch((err) => { console.error(err.message); process.exit(1); });
