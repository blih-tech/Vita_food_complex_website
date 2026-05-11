/**
 * CMS content for the public /recipes page (hero + intro).
 * Recipe cards are managed separately via the recipes API.
 */
export const recipesPageDefault = {
  slug: 'recipes',
  title: {
    en: 'Recipes',
    am: 'ምግብ አዘገጃጀቶች',
  },
  sections: [
    {
      id: 'hero',
      type: 'recipes-hero',
      content: {
        en: {
          title: 'Delicious Ideas, Made Simple',
          image: '/assets/recipes/hero.png',
        },
        am: {
          title: 'ጣፋጭ ሀሳቦች፣ በቀላሉ የተሰሩ',
          image: '/assets/recipes/hero.png',
        },
      },
    },
    {
      id: 'header',
      type: 'recipes-header',
      content: {
        en: {
          label: 'Our Recipes Made Simple',
          title: 'Explore Recipes',
          heading: 'Mix. Match.',
          headingAccent: 'Enjoy',
          description: 'Simple, tasty, and made for everyday life',
        },
        am: {
          label: 'ምግብ አዘገጃጀቶቻችን በቀላሉ',
          title: 'ምግብ አዘገጃጀቶችን ያስሱ',
          heading: 'ይቀላቅሉ:: ያዛምዱ::',
          headingAccent: 'ይደሰቱ',
          description: 'ቀላል፣ ጣፋጭ och ለዕለት ተዕለት ኑሮ የተሰሩ',
        },
      },
    },
  ],
};
