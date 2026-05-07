// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27018/vitafood';

const { Schema, model } = mongoose;
const LocalizedStringSchema = new Schema({ en: String, am: String }, { _id: false });

const JobSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: LocalizedStringSchema,
  location: LocalizedStringSchema,
  type: LocalizedStringSchema,
  department: LocalizedStringSchema,
  reportsTo: LocalizedStringSchema,
  summary: LocalizedStringSchema,
  responsibilities: [LocalizedStringSchema],
  requirements: [LocalizedStringSchema],
  benefits: [LocalizedStringSchema],
  active: { type: Boolean, default: true },
}, { timestamps: true });

const Job = model('Job', JobSchema);

const jobs = [
  {
    id: 'production-manager',
    title: { en: 'Production Manager', am: 'የምርት አስተዳዳሪ' },
    location: { en: 'Addis Ababa, Ethiopia', am: 'አዲስ አበባ፣ ኢትዮጵያ' },
    type: { en: 'Full-Time', am: 'ሙሉ ጊዜ' },
    department: { en: 'Operations', am: 'ስራ አስኪያጅ' },
    reportsTo: { en: 'General Manager', am: 'ዋና ሥራ አስኪያጅ' },
    summary: {
      en: 'Lead and oversee all production activities at our Addis Ababa facility, ensuring quality standards and operational efficiency across food processing lines.',
      am: 'በአዲስ አበባ ፋብሪካችን ሁሉንም የምርት ስራዎችን ይምሩ እና ይቆጣጠሩ፣ የምግብ ማቀናበሪያ ላይን ላይ የጥራት ደረጃዎችን እና ስራ ቅልጥፍናን ያረጋግጡ።',
    },
    responsibilities: [
      { en: 'Plan and manage daily production schedules', am: 'ዕለታዊ የምርት መርሃ ግብሮችን ያቅዱ እና ያስተዳድሩ' },
      { en: 'Ensure compliance with food safety and ISO 22000 standards', am: 'የምግብ ደህንነት እና ISO 22000 ደረጃዎች መሟላቱን ያረጋግጡ' },
      { en: 'Manage a team of 30+ production staff', am: 'ከ30 በላይ የምርት ሠራተኞችን ቡድን ያስተዳድሩ' },
      { en: 'Monitor KPIs and drive continuous improvement', am: 'KPIs ይቆጣጠሩ እና ቀጣይ ማሻሻያዎችን ይምሩ' },
    ],
    requirements: [
      { en: "Bachelor's degree in Food Science, Engineering, or related field", am: 'በምግብ ሳይንስ፣ ምህንድስና ወይም ተዛማጅ መስክ የባሽለር ዲግሪ' },
      { en: 'Minimum 5 years of production management experience', am: 'ቢያንስ 5 ዓመት የምርት ስራ አስተዳዳሪ ልምድ' },
      { en: 'Strong knowledge of GMP and HACCP', am: 'የGMP እና HACCP ጠንካራ እውቀት' },
      { en: 'Excellent leadership and communication skills', am: 'ምሩጥ የአመራር እና ግንኙነት ክህሎቶች' },
    ],
    benefits: [
      { en: 'Competitive salary and performance bonus', am: 'ተወዳዳሪ ደሞዝ እና የአፈጻጸም ቦነስ' },
      { en: 'Health insurance coverage', am: 'የጤና ኢንሹራንስ ሽፋን' },
      { en: 'Professional development opportunities', am: 'ሙያዊ ልማት እድሎች' },
    ],
    active: true,
  },
  {
    id: 'quality-assurance-officer',
    title: { en: 'Quality Assurance Officer', am: 'የጥራት ማረጋገጫ ኦፊሰር' },
    location: { en: 'Addis Ababa, Ethiopia', am: 'አዲስ አበባ፣ ኢትዮጵያ' },
    type: { en: 'Full-Time', am: 'ሙሉ ጊዜ' },
    department: { en: 'Quality Control', am: 'የጥራት ቁጥጥር' },
    reportsTo: { en: 'Production Manager', am: 'የምርት አስተዳዳሪ' },
    summary: {
      en: 'Maintain and improve food safety and quality management systems, ensuring all products meet regulatory and company standards before reaching consumers.',
      am: 'የምግብ ደህንነት እና የጥራት አስተዳዳሪ ስርዓቶችን ይጠብቁ እና ያሻሽሉ፣ ሁሉም ምርቶች ለሸማቾች ከመድረሳቸው በፊት የቁጥጥር እና የኩባንያ ደረጃዎችን ማሟላታቸውን ያረጋግጡ።',
    },
    responsibilities: [
      { en: 'Conduct daily quality inspections on production lines', am: 'በምርት ላይኖች ላይ ዕለታዊ የጥራት ምርመራዎችን ያካሂዱ' },
      { en: 'Maintain HACCP and GMP documentation', am: 'የHACCP እና GMP ሰነዶችን ይጠብቁ' },
      { en: 'Train staff on quality standards and procedures', am: 'ሠራተኞችን በጥራት ደረጃዎች እና ሂደቶች ላይ ያሠልጥኑ' },
      { en: 'Investigate non-conformances and implement corrective actions', am: 'ያልተስማሙ ጉዳዮችን ይመርምሩ እና የማስተካከያ እርምጃዎችን ይተግብሩ' },
    ],
    requirements: [
      { en: "Bachelor's degree in Food Science or Microbiology", am: 'በምግብ ሳይንስ ወይም ማይክሮባዮሎጂ ውስጥ የባሽለር ዲግሪ' },
      { en: '2+ years QA experience in a food manufacturing environment', am: 'ከ2 ዓመት በላይ በምግብ ማምረቻ አካባቢ ውስጥ የQA ልምድ' },
      { en: 'Familiarity with ISO 22000 and FSSC 22000', am: 'ከISO 22000 እና FSSC 22000 ጋር ምቹነት' },
    ],
    benefits: [
      { en: 'Competitive salary package', am: 'ተወዳዳሪ የደሞዝ ጥቅል' },
      { en: 'Health and medical coverage', am: 'የጤና እና ህክምና ሽፋን' },
      { en: 'Transport allowance', am: 'የትራንስፖርት አበል' },
    ],
    active: true,
  },
  {
    id: 'sales-marketing-executive',
    title: { en: 'Sales & Marketing Executive', am: 'የሽያጭ እና ማርኬቲንግ ሥራ አስፈጻሚ' },
    location: { en: 'Addis Ababa, Ethiopia', am: 'አዲስ አበባ፣ ኢትዮጵያ' },
    type: { en: 'Full-Time', am: 'ሙሉ ጊዜ' },
    department: { en: 'Sales & Marketing', am: 'ሽያጭ እና ማርኬቲንግ' },
    reportsTo: { en: 'Commercial Director', am: 'ንግዳዊ ዳይሬክተር' },
    summary: {
      en: 'Drive sales growth and brand awareness for Vita Food Complex products across Ethiopia, building strong distributor and retail partnerships.',
      am: 'በኢትዮጵያ ውስጥ ለቪታ ፑድ ኮምፕሌክስ ምርቶች የሽያጭ ዕድገት እና የምርት ስም ግንዛቤን ያሳድጉ፣ ጠንካራ የአከፋፋይ እና የችርቻሮ ሽርክናዎችን ይገንቡ።',
    },
    responsibilities: [
      { en: 'Develop and execute sales strategies for assigned territories', am: 'ለተሰጡ ቦታዎች የሽያጭ ስልቶችን ያዘጋጁ እና ይፈጽሙ' },
      { en: 'Build and maintain relationships with distributors and retailers', am: 'ከአከፋፋዮች እና ችርቻሮዎች ጋር ግንኙነቶችን ይገንቡ እና ይጠብቁ' },
      { en: 'Achieve monthly and quarterly sales targets', am: 'ወርሃዊ እና ሩብ ዓመታዊ የሽያጭ ዒላማዎችን ያሳኩ' },
      { en: 'Conduct market research and competitor analysis', am: 'የገበያ ምርምር እና የተወዳዳሪ ትንተና ያካሂዱ' },
    ],
    requirements: [
      { en: "Bachelor's degree in Marketing, Business, or related field", am: 'በማርኬቲንግ፣ ንግድ ወይም ተዛማጅ መስክ የባሽለር ዲግሪ' },
      { en: '3+ years of FMCG sales experience', am: 'ከ3 ዓመት በላይ የFMCG ሽያጭ ልምድ' },
      { en: 'Strong negotiation and communication skills', am: 'ጠንካራ የድርድር እና ግንኙነት ክህሎቶች' },
      { en: 'Valid driving license', am: 'ትክክለኛ የመኪና ፍቃድ' },
    ],
    benefits: [
      { en: 'Base salary + commission structure', am: 'መሠረት ደሞዝ + የኮሚሽን መዋቅር' },
      { en: 'Company vehicle or transport allowance', am: 'የኩባንያ ተሽከርካሪ ወይም የትራንስፖርት አበል' },
      { en: 'Annual bonus based on performance', am: 'በአፈጻጸም ላይ የተመሠረተ ዓመታዊ ቦነስ' },
    ],
    active: true,
  },
];

async function seed() {
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  for (const job of jobs) {
    await Job.findOneAndUpdate({ id: job.id }, job, { upsert: true, new: true });
    console.log(`✓ Seeded: ${job.title.en}`);
  }

  console.log('\nDone! 3 jobs seeded.');
  await mongoose.disconnect();
}

seed().catch((err) => { console.error(err); process.exit(1); });
