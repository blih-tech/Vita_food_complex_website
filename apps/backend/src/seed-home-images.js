/**
 * Uploads all home-page section images to Cloudinary and updates
 * the home page document in MongoDB with their URLs.
 *
 * Run once: node apps/backend/src/seed-home-images.js
 */
require('/root/Vita_food_complex_website/node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv').config({
  path: require('path').join(__dirname, '../.env'),
});

const mongoose  = require('/root/Vita_food_complex_website/node_modules/.pnpm/mongoose@9.3.3/node_modules/mongoose');
const cloudinary = require('/root/Vita_food_complex_website/apps/backend/node_modules/cloudinary').v2;
const fs         = require('fs');
const path       = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ASSETS = path.join(__dirname, '../../frontend/public/assets');

// Images we want to upload, keyed by a logical name
const UPLOADS = {
  // hero-video section
  videoThumbnail: path.join(ASSETS, 'hero/video-family.png'),

  // recipes section (5 cards)
  recipe1: path.join(ASSETS, 'recipes/recipe-1.png'),
  recipe2: path.join(ASSETS, 'recipes/recipe-2.png'),
  recipe3: path.join(ASSETS, 'recipes/recipe-3.png'),
  recipe4: path.join(ASSETS, 'recipes/recipe-4.png'),
  recipe5: path.join(ASSETS, 'recipes/recipe-5.png'),

  // merchandise section (5 items — merch-red.png doesn't exist locally)
  merch1: path.join(ASSETS, 'merchandise/merch-1.png'),
  merch2: path.join(ASSETS, 'merchandise/merch-2.png'),
  merch3: path.join(ASSETS, 'merchandise/merch-3.png'),
  merch4: path.join(ASSETS, 'merchandise/merch-4.png'),
  merch5: path.join(ASSETS, 'merchandise/merch-5.png'),

  // social-wall section (8 images)
  social1: path.join(ASSETS, 'social/social-1.png'),
  social2: path.join(ASSETS, 'social/social-2.png'),
  social3: path.join(ASSETS, 'social/social-3.png'),
  social4: path.join(ASSETS, 'social/social-4.png'),
  social5: path.join(ASSETS, 'social/social-5.png'),
  social6: path.join(ASSETS, 'social/social-6.png'),
  social7: path.join(ASSETS, 'social/social-7.png'),
  social8: path.join(ASSETS, 'social/social-8.png'),

  // partners / certifications section (5 logos)
  certFortified: path.join(ASSETS, 'quality/figma/cert_1.png'),
  certEFDA:      path.join(ASSETS, 'quality/figma/cert_efda.png'),
  certLRQA:      path.join(ASSETS, 'quality/figma/cert_lrqa.png'),
  certISO:       path.join(ASSETS, 'quality/figma/cert_iso.png'),
  certEAS:       path.join(ASSETS, 'quality/figma/cert_eas.png'),
};

async function upload(key, filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`  SKIP [${key}] — file not found: ${filePath}`);
    return null;
  }
  const result = await cloudinary.uploader.upload(filePath, {
    folder:    'vita/home',
    public_id: key,
    overwrite: true,
    resource_type: 'image',
  });
  console.log(`  OK [${key}] → ${result.secure_url}`);
  return result.secure_url;
}

// ── Mongoose ─────────────────────────────────────────────────────────────────
const SectionSchema = new mongoose.Schema({ id: String, type: String, content: mongoose.Schema.Types.Mixed }, { _id: false });
const PageSchema    = new mongoose.Schema({ slug: String, title: Object, sections: [SectionSchema] }, { timestamps: true });
const Page          = mongoose.model('Page', PageSchema);

async function main() {
  console.log('1. Uploading images to Cloudinary…');
  const urls = {};
  for (const [key, filePath] of Object.entries(UPLOADS)) {
    urls[key] = await upload(key, filePath);
  }

  console.log('\n2. Connecting to MongoDB…');
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected!');

  const page = await Page.findOne({ slug: 'home' });
  if (!page) { console.error('Home page not found — run seed-home.js first'); process.exit(1); }

  const update = section => {
    if (!section.content) return section;
    const c = JSON.parse(JSON.stringify(section.content));

    if (section.id === 'hero-video' && urls.videoThumbnail) {
      c.en.videoThumbnail = urls.videoThumbnail;
      c.am.videoThumbnail = urls.videoThumbnail;
    }

    if (section.id === 'recipes') {
      const recipeUrls = [urls.recipe1, urls.recipe2, urls.recipe3, urls.recipe4, urls.recipe5];
      ['en', 'am'].forEach(lang => {
        c[lang].items = c[lang].items.map((item, i) => ({
          ...item,
          image: recipeUrls[i] || item.image || null,
        }));
      });
    }

    if (section.id === 'merchandise') {
      const merchUrls = [urls.merch1, urls.merch2, urls.merch3, urls.merch4, urls.merch5, null];
      ['en', 'am'].forEach(lang => {
        c[lang].items = c[lang].items.map((item, i) => ({
          ...item,
          image: merchUrls[i] || item.image || null,
        }));
      });
    }

    if (section.id === 'social-wall') {
      const socialUrls = [urls.social1, urls.social2, urls.social3, urls.social4,
                          urls.social5, urls.social6, urls.social7, urls.social8].filter(Boolean);
      c.en.images = socialUrls;
      c.am.images = socialUrls;
    }

    if (section.id === 'partners') {
      c.en.logos = [
        { alt: 'Fortified Food', url: urls.certFortified },
        { alt: 'EFDA',           url: urls.certEFDA },
        { alt: 'LRQA',           url: urls.certLRQA },
        { alt: 'ISO 9001',       url: urls.certISO },
        { alt: 'EAS',            url: urls.certEAS },
      ].filter(l => l.url);
      c.am.logos = c.en.logos;
    }

    return { ...section, content: c };
  };

  console.log('\n3. Updating MongoDB sections…');
  for (const section of page.sections) {
    const updated = update(section.toObject ? section.toObject() : section);
    if (JSON.stringify(updated.content) !== JSON.stringify(section.content)) {
      await Page.findOneAndUpdate(
        { slug: 'home', 'sections.id': section.id },
        { $set: { 'sections.$.content': updated.content } },
      );
      console.log(`  Updated: ${section.id}`);
    }
  }

  console.log('\nDone!');
  process.exit(0);
}

main().catch(err => { console.error(err.message); process.exit(1); });
