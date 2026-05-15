const mongoose = require('mongoose');

const uri = 'mongodb://vita:R1iBvAPleIUw+vBjtANIao3GneuJfCR9@89.116.22.36:27018/vita-food?authSource=admin';

mongoose.connect(uri).then(async () => {
  const db = mongoose.connection.db;
  
  const page = await db.collection('pages').findOne({ slug: 'home' });
  if (page && page.sections) {
    const hasFeedback = page.sections.some(s => s.type === 'feedback');
    if (!hasFeedback) {
      const feedbackSection = {
        id: "feedback",
        type: "feedback",
        content: {
          en: {
            heading: "Do you have a Feedback or Complain?",
            description: "Share your feedback, report an issue, or send us your concerns. We're committed to providing fast support and better service",
            buttonText: "Contact Customer Care",
            features: [
              {
                title: "12/6 days availability",
                description: "Our customer care team is available 12 hours a day, 6 days a week to assist you with all your needs",
              },
              {
                title: "Customer feedback & complaints",
                description: "We value your input and handle all feedback and complaints with care and priority",
              },
              {
                title: "Reliable distribution network",
                description: "Get support for distribution queries, tracking, and logistics assistance from our dedicated team",
              }
            ]
          },
          am: {
            heading: "አስተያየት ወይም ቅሬታ አለዎት?",
            description: "አስተያየትዎን ያካፍሉ፣ ችግር ሪፖርት ያድርጉ፣ ወይም ስጋቶችዎን ይላኩልን። ፈጣን ድጋፍ እና የተሻለ አገልግሎት ለመስጠት ቆርጠናል",
            buttonText: "የደንበኞች እንክብካቤን ያነጋግሩ",
            features: [
              {
                title: "የ12/6 ቀናት ተገኝነት",
                description: "የደንበኞች እንክብካቤ ቡድናችን በቀን 12 ሰዓት፣ በሳምንት 6 ቀናት ፍላጎቶችዎን ለማሟላት ዝግጁ ነው",
              },
              {
                title: "የደንበኛ አስተያየት እና ቅሬታዎች",
                description: "ለአስተያየትዎ ዋጋ እንሰጣለን እና ሁሉንም ቅሬታዎች በጥንቃቄ እና በቅድሚያ እናስተናግዳለን",
              },
              {
                title: "አስተማማኝ የስርጭት አውታር",
                description: "ለስርጭት ጥያቄዎች፣ ክትትል እና ሎጂስቲክስ እገዛ ከተሰጠው ቡድናችን ድጋፍ ያግኙ",
              }
            ]
          }
        }
      };

      // Insert it after sister-companies
      const sections = page.sections;
      const sisterIdx = sections.findIndex(s => s.type === 'sister-companies');
      
      if (sisterIdx !== -1) {
        sections.splice(sisterIdx + 1, 0, feedbackSection);
      } else {
        sections.push(feedbackSection);
      }

      await db.collection('pages').updateOne(
        { slug: 'home' },
        { $set: { sections: sections } }
      );
      console.log('Successfully injected feedback section into home page DB.');
    } else {
      console.log('Feedback section already exists in the DB.');
    }
  }

  process.exit(0);
}).catch(console.error);
