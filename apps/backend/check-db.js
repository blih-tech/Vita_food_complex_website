const mongoose = require('mongoose');

const uri = 'mongodb://vita:R1iBvAPleIUw+vBjtANIao3GneuJfCR9@89.116.22.36:27018/vita-food?authSource=admin';

mongoose.connect(uri).then(async () => {
  const db = mongoose.connection.db;
  const page = await db.collection('pages').findOne({ slug: 'home' });
  
  if (page && page.sections) {
    const feedback = page.sections.find(s => s.type === 'feedback');
    console.log("Feedback section in DB:", JSON.stringify(feedback, null, 2));
  } else {
    console.log("No home page or sections found.");
  }
  process.exit(0);
}).catch(console.error);
