const mongoose = require('mongoose');

const uri = 'mongodb://vita:R1iBvAPleIUw+vBjtANIao3GneuJfCR9@89.116.22.36:27018/vita-food?authSource=admin';

mongoose.connect(uri).then(async () => {
  const db = mongoose.connection.db;
  
  // Re-order home page sections: move 'sister-companies' to be before 'recipes'
  const page = await db.collection('pages').findOne({ slug: 'home' });
  if (page && page.sections) {
    const sections = page.sections;
    const sisterIdx = sections.findIndex(s => s.id === 'sister-companies');
    const recipesIdx = sections.findIndex(s => s.id === 'recipes');
    
    if (sisterIdx !== -1 && recipesIdx !== -1) {
      // Remove sister-companies from current position
      const [sisterSection] = sections.splice(sisterIdx, 1);
      
      // Find the new index of recipes after the removal
      const newRecipesIdx = sections.findIndex(s => s.id === 'recipes');
      
      // Insert sister-companies right before recipes
      sections.splice(newRecipesIdx, 0, sisterSection);
      
      await db.collection('pages').updateOne(
        { slug: 'home' },
        { $set: { sections: sections } }
      );
      console.log('Successfully re-ordered sister-companies before recipes on home page.');
    } else {
      console.log('Could not find both sister-companies and recipes sections on home page.');
    }
  }

  process.exit(0);
}).catch(console.error);
