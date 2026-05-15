const mongoose = require('mongoose');

const uri = 'mongodb://vita:R1iBvAPleIUw+vBjtANIao3GneuJfCR9@89.116.22.36:27018/vita-food?authSource=admin';

mongoose.connect(uri).then(async () => {
  const db = mongoose.connection.db;
  
  const page = await db.collection('pages').findOne({ slug: 'home' });
  if (page && page.sections) {
    const sections = page.sections;
    
    // Find the feedback section
    const feedbackIdx = sections.findIndex(s => s.type === 'feedback');
    if (feedbackIdx !== -1) {
      // Remove it from current position
      const [feedbackSection] = sections.splice(feedbackIdx, 1);
      
      // Find the partner section index to place it right after
      const partnerIdx = sections.findIndex(s => s.type === 'partners');
      
      if (partnerIdx !== -1) {
        sections.splice(partnerIdx + 1, 0, feedbackSection);
      } else {
        // If no partners section, just put it at the very end
        sections.push(feedbackSection);
      }
      
      await db.collection('pages').updateOne(
        { slug: 'home' },
        { $set: { sections: sections } }
      );
      console.log('Successfully re-ordered feedback section below partners in DB.');
    } else {
      console.log('Feedback section not found in DB.');
    }
  }

  process.exit(0);
}).catch(console.error);
