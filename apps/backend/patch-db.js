const mongoose = require('mongoose');

const uri = 'mongodb://vita:R1iBvAPleIUw+vBjtANIao3GneuJfCR9@89.116.22.36:27018/vita-food?authSource=admin';

const allLogos = [
  { alt: "Belayab Food & Feed", src: "/assets/sister/foods.svg", width: 234, height: 234 },
  { alt: "Golden Tulip", src: "/assets/sister/golden-tulip.svg", width: 240, height: 240 },
  { alt: "Long Tea", src: "/assets/sister/long-tea-logo.png", width: 400, height: 132 },
  { alt: "Lewis Retails", src: "/assets/sister/lewis.svg", width: 500, height: 178 },
  { alt: "Belayab Motors", src: "/assets/sister/motors.svg", width: 234, height: 234 },
  { alt: "Belayab Cables", src: "/assets/sister/cables.svg", width: 234, height: 234 },
  { alt: "Limestone", src: "/assets/sister/limestone.svg", width: 205, height: 250 },
  { alt: "Arada Coffee", src: "/assets/sister/arada-coffee-logo.png", width: 200, height: 200 },
  { alt: "Belayab Delivery", src: "/assets/sister/belayab-delivery-logo.png", width: 200, height: 200 },
  { alt: "Belayab Geepas", src: "/assets/sister/belayab-geepas-logo.png", width: 200, height: 200 },
  { alt: "Belayab Pharma", src: "/assets/sister/belayab-pharma-logo.png", width: 200, height: 200 },
  { alt: "Belayab Poultry", src: "/assets/sister/belayab-poultry-logo.png", width: 200, height: 200 },
  { alt: "Huajia Trade", src: "/assets/sister/huajia-trade-logo.png", width: 200, height: 200 },
];

mongoose.connect(uri).then(async () => {
  const db = mongoose.connection.db;
  
  // Update both home and about pages
  const slugs = ['home', 'about'];
  
  for (const slug of slugs) {
    const page = await db.collection('pages').findOne({ slug });
    if (page) {
      const hasSister = page.sections.some(s => s.id === 'sister-companies');
      if (hasSister) {
        await db.collection('pages').updateOne(
          { slug, 'sections.id': 'sister-companies' },
          { 
            $set: { 
              'sections.$.content.en.logos': allLogos,
              'sections.$.content.am.logos': allLogos,
            } 
          }
        );
        console.log(`Updated sister-companies logos successfully for page: ${slug}`);
      } else {
        // If it doesn't have it, maybe push it? The user might just want it updated if it exists.
        console.log(`Page ${slug} does not have sister-companies section`);
      }
    } else {
      console.log(`Page ${slug} not found`);
    }
  }

  process.exit(0);
}).catch(console.error);
