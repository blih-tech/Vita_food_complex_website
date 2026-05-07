require('/root/Vita_food_complex_website/node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('/root/Vita_food_complex_website/node_modules/.pnpm/mongoose@9.3.3/node_modules/mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const LS = new mongoose.Schema({ en: String, am: String }, { _id: false });
const NewsSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: LS, summary: LS, content: LS,
  category: String, coverImage: String, readTime: String,
  publishedAt: Date, isPublished: { type: Boolean, default: false },
}, { timestamps: true });
const News = mongoose.model('News', NewsSchema);

const articles = [
  {
    slug: 'vita-food-complex-expansion-2026',
    title: { en: 'Vita Food Complex Announces Major Expansion in 2026', am: 'ቪታ ፑድ ኮምፕሌክስ በ2026 ትልቅ ማስፋፊያ አስታወቀ' },
    summary: { en: 'Vita Food Complex is set to expand its production capacity by 40%, creating 500 new jobs in Addis Ababa.', am: 'ቪታ ፑድ ኮምፕሌክስ ምርቱን በ40% ሊያስፋፋ ሲሆን 500 አዳዲስ የሥራ ዕድሎች ይፈጥራል።' },
    content: { en: 'Vita Food Complex has announced a significant expansion plan for 2026. The company plans to increase its production capacity by 40%, introducing three new product lines including fortified cereals and organic snacks.\n\nThe expansion project, valued at over 500 million ETB, will create approximately 500 new jobs in the Greater Addis Ababa area. Construction of the new production facility is expected to begin in Q2 2026, with operations commencing by Q4 2026.\n\nThe CEO stated: "This expansion reflects our commitment to feeding Ethiopia and beyond. We are investing in cutting-edge technology to ensure our products meet the highest international quality standards."\n\nThe new facility will be powered by a combination of solar energy and the national grid, reducing the carbon footprint by an estimated 30%. Vita Food Complex has committed to sourcing 95% of its raw materials from local Ethiopian farmers.', am: 'ቪታ ፑድ ኮምፕሌክስ የ2026 ማስፋፊያ እቅዱን አስታወቀ። ኩባንያው ምርቱን በ40% ሊጨምር ሲሆን አዳዲስ የምርት ዓይነቶችን ያስተዋውቃል።\n\nፕሮጀክቱ ከ500 ሚሊዮን ብር በላይ ዋጋ አለው። ወደ 500 አዳዲስ የሥራ ዕድሎች ይፈጠራሉ።\n\nዋና ሥራ አስፈጻሚው ይህ ኢትዮጵያን ለመመገብ ያለንን ቁርጠኝነት የሚያሳይ ነው ብለዋል።' },
    category: 'company-news',
    coverImage: 'https://picsum.photos/1200/800?random=101',
    readTime: '4 min read',
    publishedAt: new Date('2026-03-15'),
    isPublished: true,
  },
  {
    slug: 'new-fortified-flour-launch',
    title: { en: 'Vita Launches Iron-Fortified Flour to Fight Malnutrition', am: 'ቪታ ከብረት ጋር የተጠናከረ ዱቄት አስጀመረ' },
    summary: { en: 'The new Vita Premium Fortified Flour is enriched with iron, folic acid, and vitamin B12 to address nutritional deficiencies across Ethiopia.', am: 'አዲሱ ዱቄት ብረት፣ ፎሊክ አሲድ እና ቫይታሚን B12 የያዘ ነው።' },
    content: { en: 'Vita Food Complex has launched a new line of iron-fortified flour designed to address widespread nutritional deficiencies in Ethiopia. The product, developed in collaboration with the Ethiopian Public Health Institute, contains 100% of the daily recommended iron intake per serving.\n\nNutritional deficiencies, particularly iron-deficiency anemia, affect millions of Ethiopians. Vitamins fortified flour aims to integrate essential nutrients into everyday food, making it easy for families to improve their nutrition without changing their eating habits.\n\nThe flour is available in 1kg, 2kg, and 5kg packaging across all major retailers and Vita distribution points nationwide. The company has committed to keeping the price within 10% of standard flour to ensure affordability.', am: 'ቪታ ፑድ ኮምፕሌክስ አዲስ ከብረት ጋር የተጠናከረ ዱቄት ጀምሯል። ምርቱ ከኢትዮጵያ የህዝብ ጤና ኢንስቲትዩት ጋር በትብብር የተዘጋጀ ነው።\n\nዱቄቱ በሁሉም ዋና ዋና ሱፐርማርኬቶች ይገኛል።' },
    category: 'product-updates',
    coverImage: 'https://picsum.photos/1200/800?random=102',
    readTime: '3 min read',
    publishedAt: new Date('2026-04-01'),
    isPublished: true,
  },
  {
    slug: 'vita-food-expo-2026',
    title: { en: 'Vita Food Complex Wins Best Exhibitor at Ethiopia Food Expo 2026', am: 'ቪታ ፑድ ኮምፕሌክስ ምርጥ ኤግዚቢተር ሆነ' },
    summary: { en: 'Vita Food Complex took home the Best Exhibitor award at the Ethiopia Food and Beverage Expo, showcasing its full product range to over 10,000 visitors.', am: 'ቪታ ፑድ ኮምፕሌክስ ዘንድሮ ኤግዚቢሽን ምርጥ ኤግዚቢተር ሆኗል።' },
    content: { en: 'Vita Food Complex was awarded the Best Exhibitor prize at the 2026 Ethiopia Food and Beverage Expo held in Addis Ababa Exhibition Center. The three-day event attracted over 10,000 visitors and more than 200 exhibitors from across Africa.\n\nVita booth featured interactive cooking demonstrations, nutritional education displays, and live tastings of their complete product range including their new fortified flour and premium biscuit lines.\n\nThe award recognizes outstanding booth design, product innovation, and visitor engagement. This marks the third consecutive year Vita Food Complex has received top honors at the annual expo.', am: 'ቪታ ፑድ ኮምፕሌክስ በ2026 ኤግዚቢሽን ምርጥ ኤግዚቢተር ሆኗል። ሦስት ቀን የዘለቀው ዝግጅት ከ10,000 በላይ ጎብኚዎችን ስቧል።' },
    category: 'news',
    coverImage: 'https://picsum.photos/1200/800?random=103',
    readTime: '3 min read',
    publishedAt: new Date('2026-04-20'),
    isPublished: true,
  },
  {
    slug: 'edible-oil-pricing-q2-2026',
    title: { en: 'Vita Announces Competitive Edible Oil Pricing for Q2 2026', am: 'ቪታ ለ2ኛ ሩብ አመት ተወዳዳሪ ዋጋ አስታወቀ' },
    summary: { en: 'In response to market conditions, Vita Food Complex has announced updated pricing for its edible oil range, remaining committed to affordability.', am: 'ቪታ ፑድ ኮምፕሌክስ ለ2ኛ ሩብ አመት አዲስ ዋጋ አስታወቀ።' },
    content: { en: 'Vita Food Complex has announced its Q2 2026 pricing for its full range of edible oils, maintaining competitive rates while ensuring continued quality. The company has absorbed a significant portion of raw material cost increases to protect consumer affordability.\n\nThe Vita Sunflower Oil 1 litre will remain priced at 185 ETB, while the 5-litre family pack sees only a marginal 3% increase to 875 ETB. Palm oil blends maintain their current pricing structure.\n\nThe Commercial Director said: "We understand the pressure on Ethiopian households. We have worked closely with our suppliers to minimize price increases and continue to offer the best value in the market."', am: 'ቪታ ፑድ ኮምፕሌክስ ለ2ኛ ሩብ አመት የምግብ ዘይት ዋጋ አስታወቀ። ኩባንያው ዋጋ ጭማሪዎችን ሸማቾችን ለመጠበቅ ወስዷል።' },
    category: 'market-insights',
    coverImage: 'https://picsum.photos/1200/800?random=104',
    readTime: '2 min read',
    publishedAt: new Date('2026-04-28'),
    isPublished: true,
  },
  {
    slug: 'vita-sustainability-report-2025',
    title: { en: 'Vita Food Complex Releases 2025 Sustainability Report', am: 'ቪታ ፑድ ኮምፕሌክስ የ2025 ዘላቂነት ሪፖርት አወጣ' },
    summary: { en: 'Vita 2025 sustainability report highlights a 25% reduction in water usage, 30% reduction in waste, and partnerships with 1,200 smallholder farmers.', am: 'ሪፖርቱ 25% የውሃ አጠቃቀም መቀነስ እና ከ1,200 አነስተኛ ገበሬዎች ጋር ትብብርን ያሳያል።' },
    content: { en: 'Vita Food Complex has published its annual sustainability report for 2025, documenting significant progress in environmental and social responsibility initiatives.\n\nKey highlights from the report include a 25% reduction in water consumption through the installation of water recycling systems, a 30% decrease in manufacturing waste through improved production efficiency, and direct partnerships with 1,200 smallholder farmers across the Oromia and Amhara regions.\n\nThe company also established a community nutrition program that has reached over 50,000 school children with fortified breakfast meals. Vita Food Complex is on track to achieve carbon neutrality by 2030, with solar panels now covering 40% of energy needs.', am: 'ቪታ ፑድ ኮምፕሌክስ የ2025 ዘላቂነት ሪፖርቱን አወጣ። ዋና ዋና ስኬቶቹ የውሃ አጠቃቀምን 25% መቀነስ እና ከ1,200 አነስተኛ ገበሬዎች ጋር ቀጥተኛ ትብብርን ያካትታሉ።' },
    category: 'updates',
    coverImage: 'https://picsum.photos/1200/800?random=105',
    readTime: '5 min read',
    publishedAt: new Date('2026-05-01'),
    isPublished: true,
  },
];

mongoose.connect(MONGODB_URI).then(async () => {
  console.log('Connected!');
  for (const a of articles) {
    await News.findOneAndUpdate({ slug: a.slug }, a, { upsert: true });
    console.log('Seeded:', a.title.en);
  }
  console.log('Done — 5 news articles seeded.');
  process.exit(0);
}).catch(function(err) { console.error(err.message); process.exit(1); });
