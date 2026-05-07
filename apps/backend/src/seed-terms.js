require('/root/Vita_food_complex_website/node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('/root/Vita_food_complex_website/node_modules/.pnpm/mongoose@9.3.3/node_modules/mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const LS = new mongoose.Schema({ en: String, am: String }, { _id: false });
const TermSectionSchema = new mongoose.Schema({
  sectionId: { type: String, required: true, unique: true },
  title: LS,
  body: LS,
  position: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true },
}, { timestamps: true });
const TermSection = mongoose.model('TermSection', TermSectionSchema);

const sections = [
  {
    sectionId: 'acceptance',
    title: { en: '1. Acceptance of Terms', am: '1. የውሎቹን ተቀባይነት' },
    body: {
      en: `<p>Welcome to Vita Food Complex ("we," "our," or "us"). These Terms and Conditions govern your use of our website, products, and services. By accessing our site or purchasing our products, you agree to comply with these terms.</p><p>If you do not agree with any part of these terms, please do not use our services or purchase our products. We reserve the right to update or modify these terms at any time without prior notice.</p><blockquote><p><strong>Important Notice:</strong> By continuing to use our website after changes are posted, you accept the modified Terms and Conditions. We recommend reviewing this page periodically.</p></blockquote>`,
      am: `<p>ወደ ቪታ ፑድ ኮምፕሌክስ ("እኛ") እንኳን ደህና መጡ። እነዚህ ውሎች እና ሁኔታዎች ድህረ ገጻችንን፣ ምርቶቻችንን እና አገልግሎቶቻችንን የምትጠቀሙበትን ሁኔታ ይቆጣጠራሉ።</p><p>ከእነዚህ ውሎች ማንኛውም ክፍል ካልተስማሙ፣ አገልግሎቶቻችንን አይጠቀሙ። እነዚህን ውሎች በማንኛውም ጊዜ ያለ ቅድሚያ ማሳወቂያ የማዘመን መብቱ የተጠበቀ ነው።</p><blockquote><p><strong>አስፈላጊ ማስታወሻ፡</strong> ለውጦቹ ከተለጠፉ በኋላ ድህረ ገጻችንን መጠቀምዎን ከቀጠሉ፣ የተሻሻሉ ውሎቹን ተቀብለዋል።</p></blockquote>`,
    },
    position: 0, isPublished: true,
  },
  {
    sectionId: 'use',
    title: { en: '2. Use of Website', am: '2. ድህረ ገጹን መጠቀም' },
    body: {
      en: `<p>You may use our website for lawful purposes only. You agree not to use our website in any way that could damage, disable, or impair the site, or interfere with any other party's use of the website.</p><ul><li>Do not attempt to gain unauthorized access to any portion of the website</li><li>Do not use automated systems to access the website without permission</li><li>Do not engage in any activity that disrupts or interferes with our services</li><li>Do not upload malicious code or viruses</li></ul>`,
      am: `<p>ድህረ ገጻችንን ለሕጋዊ ዓላማዎች ብቻ መጠቀም ይችላሉ። ድህረ ገጹን ሊጎዳ፣ ሊያሰናክል ወይም ሊያቃውስ በሚችል ማንኛውም መንገድ አለመጠቀም ይስማማሉ።</p><ul><li>ያለ ፈቃድ ወደ ድህረ ገጹ ማንኛውም ክፍል ለመድረስ አትሞክሩ</li><li>ያለ ፈቃድ ድህረ ገጹን ለማግኘት ራስ-ሰር ሥርዓቶችን አይጠቀሙ</li><li>አገልግሎቶቻችንን የሚያውኩ እንቅስቃሴዎችን አታካሂዱ</li><li>ተንኮለኛ ኮድ ወይም ቫይረሶችን አትጫኑ</li></ul>`,
    },
    position: 1, isPublished: true,
  },
  {
    sectionId: 'content',
    title: { en: '3. User Content', am: '3. የተጠቃሚ ይዘት' },
    body: {
      en: `<p>If you submit content to our community platform (such as recipes, reviews, or photos), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content.</p><p>You represent that you own or have the necessary rights to any content you submit, and that it does not violate any third-party rights or applicable laws.</p>`,
      am: `<p>ወደ ማህበረሰብ መድረካችን ይዘት (እንደ ምግብ አሰራሮች፣ ግምገማዎች ወይም ፎቶዎች) ካቀረቡ፣ ያንን ይዘት ለመጠቀም፣ ለማባዛት እና ለማሳየት ሀ-ዓለም አቀፍ ፈቃድ ሰጥተናል።</p><p>ያቀረቡትን ይዘት እንደሚያሸንፉ ወይም አስፈላጊ መብቶች እንዳሏቸው ያረጋግጣሉ።</p>`,
    },
    position: 2, isPublished: true,
  },
  {
    sectionId: 'guidelines',
    title: { en: '4. Community Guidelines', am: '4. የማህበረሰብ መመሪያዎች' },
    body: {
      en: `<p>Our community is built on respect, collaboration, and positivity. When participating in our community features, you agree to:</p><ul><li>Be respectful and kind to other community members</li><li>Share authentic and honest content</li><li>Not post offensive, discriminatory, or inappropriate material</li><li>Not spam or post unauthorized commercial content</li><li>Not impersonate others or create fake accounts</li></ul><p>We reserve the right to remove any content or suspend accounts that violate these guidelines.</p>`,
      am: `<p>ማህበረሰባችን በአክብሮት፣ ትብብር እና አዎንታዊነት ላይ የተገነባ ነው። ሲሳተፉ ይስማማሉ፡</p><ul><li>ለሌሎች አባላት ተቀባዩ እና ደግ ይሁኑ</li><li>ትክክለኛ እና ታማኝ ይዘት ያጋሩ</li><li>አስነዋሪ ወይም ተገቢ ያልሆነ ቁሳቁስ አታቅርቡ</li><li>ስፓም ወይም ያልተፈቀደ የንግድ ይዘት አታቅርቡ</li><li>ሌሎችን አትምሰሉ ወይም ሐሰተኛ መለያዎች አትፍጠሩ</li></ul><p>እነዚህ መመሪያዎችን የሚጥስ ይዘት የማስወገድ ወይም መለያዎችን የማገድ መብቱ የተጠበቀ ነው።</p>`,
    },
    position: 3, isPublished: true,
  },
  {
    sectionId: 'products',
    title: { en: '5. Product Information', am: '5. የምርት መረጃ' },
    body: {
      en: `<p>We strive to ensure that product descriptions, ingredients, and nutritional information on our website are accurate. However, recipes and packaging may change over time.</p><p>We recommend checking the physical packaging of the product upon delivery for the most current information. Product images are for illustration purposes and actual products may vary slightly.</p><blockquote><p><strong>Allergen Information:</strong> If you have food allergies or dietary restrictions, always check the product packaging for detailed allergen information. While we provide general information online, we cannot guarantee it is always up to date.</p></blockquote>`,
      am: `<p>ድህረ ገጻችን ላይ ያሉ የምርት መግለጫዎች፣ ግብዓቶች እና የምግብ ዋጋ መረጃዎች ትክክለኛ መሆናቸውን ለማረጋገጥ እንጥራለን።</p><p>ወቅታዊ መረጃ ለማግኘት ምርቱ ሲደርስ አካላዊ ማሸጊያውን ማረጋገጥ እንመክራለን።</p><blockquote><p><strong>የአለርጂ መረጃ፡</strong> የምግብ አለርጂ ወይም የምግብ ገደቦች ካሉዎት፣ ዝርዝር የአለርጂ መረጃ ለማግኘት ሁልጊዜ የምርቱ ማሸጊያ ያረጋግጡ።</p></blockquote>`,
    },
    position: 4, isPublished: true,
  },
  {
    sectionId: 'orders',
    title: { en: '6. Orders and Purchases', am: '6. ትዕዛዞች እና ግዢዎች' },
    body: {
      en: `<p>When placing an order through our platform, you agree to provide accurate contact and delivery information. We reserve the right to accept or decline any order for any reason, including but not limited to:</p><ul><li>Product availability</li><li>Pricing errors or system malfunctions</li><li>Delivery area restrictions</li><li>Suspected fraudulent activity</li></ul><p>All prices are listed in Ethiopian Birr (ETB) unless otherwise stated. Prices are subject to change without notice but will not affect orders already confirmed.</p><p>Payment must be completed at the time of order. We accept various payment methods as indicated at checkout.</p>`,
      am: `<p>በመድረካችን ላይ ትዕዛዝ ሲያቀርቡ፣ ትክክለኛ ዕውቂያ እና የመላኪያ መረጃ ለመስጠት ይስማማሉ። ማንኛውም ትዕዛዝ ለማቀናጀት ወይም ለማቋረጥ መብቱ የተጠበቀ ነው፡</p><ul><li>የምርት አቅርቦት</li><li>የዋጋ ስህተቶች ወይም የሥርዓት ብልሽቶች</li><li>የመላኪያ አካባቢ ገደቦች</li><li>የሚጠረጠር ማጭበርበር</li></ul><p>ሁሉም ዋጋዎች በኢትዮጵያ ብር (ብር) ተዘርዝረዋል። ዋጋዎች ያለ ቅድሚያ ማሳወቂያ ሊቀየሩ ይችላሉ።</p>`,
    },
    position: 5, isPublished: true,
  },
  {
    sectionId: 'ip',
    title: { en: '7. Intellectual Property', am: '7. አዕምሯዊ ንብረት' },
    body: {
      en: `<p>All content on this website, including but not limited to logos, text, graphics, images, videos, and software, is the property of Vita Hydro-Agro Processing PLC and is protected by copyright and intellectual property laws.</p><p>You may not use, reproduce, distribute, or create derivative works from any content without our express written permission.</p><p>Trademarks, service marks, and trade names displayed on this website are registered and unregistered marks of Vita Food Complex and may not be used without permission.</p>`,
      am: `<p>ዓርማዎችን፣ ጽሑፎችን፣ ስዕሎችን፣ ምስሎችን፣ ቪዲዮዎችን እና ሶፍትዌሮችን ጨምሮ ይህ ድህረ ገጽ ላይ ያሉ ሁሉም ይዘቶች የቪታ ሃይድሮ-አግሮ ፕሮሰሲንግ ፒኤልሲ ንብረት ናቸው።</p><p>ያለ ፍቃዳችን ማንኛውም ይዘት መጠቀም፣ ማባዛት፣ ማሰራጨት ወይም ተዋጽኦ ሥራዎችን መፍጠር አይፈቀድም።</p>`,
    },
    position: 6, isPublished: true,
  },
  {
    sectionId: 'privacy',
    title: { en: '8. Privacy Policy', am: '8. የግላዊነት ፖሊሲ' },
    body: {
      en: `<p>Your privacy is important to us. Information collected through order forms, newsletter signups, or community participation is securely stored and used exclusively for:</p><ul><li>Fulfilling and delivering your orders</li><li>Communicating with you about products and services</li><li>Improving our website and customer experience</li><li>Sending promotional materials (with your consent)</li></ul><p>We do not sell your personal data to third parties. For more detailed information about how we collect, use, and protect your data, please refer to our Privacy Policy page.</p>`,
      am: `<p>ግላዊነትዎ ለኛ ጠቃሚ ነው። የትዕዛዝ ቅጾች፣ ጋዜጣ ምዝገባዎች ወይም ማህበረሰብ ተሳትፎ በኩል የተሰበሰበ መረጃ ለሚከተሉት ብቻ ይጠቅማል፡</p><ul><li>ትዕዛዞችዎን ማሟላት እና ማድረስ</li><li>ስለ ምርቶች እና አገልግሎቶች ማሳወቅ</li><li>ድህረ ገጻችን እና የደንበኛ ልምድ ማሻሻል</li><li>የ ፕሮሞሽን ቁሳቁሶችን መላክ (በፈቃድዎ)</li></ul><p>የግል ውሂብዎን ለሦስተኛ ወገኖች አንሸጥም።</p>`,
    },
    position: 7, isPublished: true,
  },
  {
    sectionId: 'liability',
    title: { en: '9. Limitation of Liability', am: '9. የተጠያቂነት ገደብ' },
    body: {
      en: `<p>To the fullest extent permitted by law, Vita Food Complex shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:</p><ul><li>Your use or inability to use our website or products</li><li>Unauthorized access to or alteration of your data</li><li>Any content, conduct, or communication on our platform</li><li>Any errors or omissions in product information</li></ul><p>Our total liability for any claim arising out of these terms shall not exceed the amount you paid for the product or service in question.</p><blockquote><p><strong>Product Safety:</strong> While we maintain high quality standards, we are not liable for improper storage, handling, or consumption of products after delivery. Always follow storage instructions and check expiration dates.</p></blockquote>`,
      am: `<p>ሕጉ በሚፈቅደው መጠን፣ ቪታ ፑድ ኮምፕሌክስ ከሚከተሉት የሚመነጩ ምንም ዓይነት ጉዳቶችን ተጠያቂ አይሆንም፡</p><ul><li>ድህረ ገጻችን ወይም ምርቶቻችንን መጠቀም ወይም ማይጠቀም</li><li>ያለ ፈቃድ ወደ ውሂብዎ ማግኘት ወይም መቀየር</li><li>ማንኛውም ይዘት፣ ባህሪ ወይም ግንኙነት</li><li>ማንኛውም ስህተቶች ወይም ቸልታዎች</li></ul><blockquote><p><strong>የምርት ደህንነት፡</strong> ምርቶቹ ከደረሱ በኋላ ተገቢ ያልሆነ ማሸጊያ ወይም አጠቃቀምን ተጠያቂ አይደለንም።</p></blockquote>`,
    },
    position: 8, isPublished: true,
  },
  {
    sectionId: 'contact',
    title: { en: '10. Contact Us', am: '10. ያናግሩን' },
    body: {
      en: `<p>If you have any questions about these Terms and Conditions, or need assistance with our products or services, please don't hesitate to contact us.</p><p>You can reach our legal and support team at <strong>legal@vitafoodcomplex.com</strong> or call us at <strong>+251 911 123 456</strong>. Our office is located at <strong>Bole, Addis Ababa, Ethiopia</strong>.</p><p>Our customer service team is available Monday to Friday, 9:00 AM to 6:00 PM (EAT). We typically respond to inquiries within 24–48 hours.</p>`,
      am: `<p>ስለ እነዚህ ውሎች እና ሁኔታዎች ማንኛውም ጥያቄ ካለዎት፣ ወይም ምርቶቻችን ወይም አገልግሎቶቻችን ላይ እርዳታ ከፈለጉ፣ እባክዎ ያናግሩን።</p><p>የሕግ እና ድጋፍ ቡድናችንን በ <strong>legal@vitafoodcomplex.com</strong> ወይም <strong>+251 911 123 456</strong> ማናገር ይችላሉ።</p><p>የደንበኛ አገልግሎት ቡድናችን ከሰኞ እስከ አርብ፣ ከጠዋቱ 9:00 እስከ ከሰዓት 6:00 (EAT) ይገኛል።</p>`,
    },
    position: 9, isPublished: true,
  },
];

mongoose.connect(MONGODB_URI).then(async () => {
  console.log('Connected!');
  for (const s of sections) {
    await TermSection.findOneAndUpdate({ sectionId: s.sectionId }, s, { upsert: true });
    console.log('Seeded:', s.title.en);
  }
  console.log('Done — 10 term sections seeded.');
  process.exit(0);
}).catch((err) => { console.error(err.message); process.exit(1); });
