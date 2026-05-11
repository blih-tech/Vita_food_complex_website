/**
 * Default recipe rows for CMS seeding. Copy matches `Recipes.items` in
 * apps/frontend/messages/en.json and am.json; card colors follow the fallback
 * grid on the recipes page (`recipeImages`), extended for five cards.
 */

export type RecipeSeedRow = {
  slug: string;
  title: { en: string; am: string };
  description: { en: string; am: string };
  /** Public path under apps/frontend/public */
  imageWebPath: string;
  bgColor: string;
  sortOrder: number;
  published?: boolean;
};

export const recipeSeedRows: RecipeSeedRow[] = [
  {
    slug: "creamy-delights",
    sortOrder: 0,
    title: {
      en: "Creamy Delights",
      am: "ክሬም ደስታ",
    },
    description: {
      en: "Experience the rich, velvety texture of our signature cream biscuits.",
      am: "የእኛን ልዩ የክሬም ቢስኩቶች የበለፀገ እና ለስላሳ ይዘት ይለማመዱ::",
    },
    imageWebPath: "/assets/recipes/recipe-1.png",
    bgColor: "#4B2C19",
    published: true,
  },
  {
    slug: "oreo-moments",
    sortOrder: 1,
    title: {
      en: "Oreo Moments",
      am: "የኦሪዮ ጊዜያት",
    },
    description: {
      en: "Perfectly balanced chocolate and cream for your tea time.",
      am: "ለሻይ ሰዓትዎ ፍጹም የተመጣጠነ ቸኮሌት እና ክሬም::",
    },
    imageWebPath: "/assets/recipes/recipe-1.png",
    bgColor: "#DCA519",
    published: true,
  },
  {
    slug: "sweet-bites",
    sortOrder: 2,
    title: {
      en: "Sweet Bites",
      am: "ጣፋጭ ንክሻዎች",
    },
    description: {
      en: "Small, crunchy treats that bring big smiles to everyone.",
      am: "ለሁሉም ሰው ትልቅ ፈገግታ የሚያመጡ ትናንሽ እና ጥራጥሬ ጣፋጮች::",
    },
    imageWebPath: "/assets/recipes/recipe-1.png",
    bgColor: "#005A40",
    published: true,
  },
  {
    slug: "morning-fresh",
    sortOrder: 3,
    title: {
      en: "Morning Fresh",
      am: "የጠዋት ትኩስነት",
    },
    description: {
      en: "Start your day with our high-quality wheat flour bakes.",
      am: "ቀንዎን በከፍተኛ ጥራት ባለው የስንዴ ዱቄት መጋገሪያዎቻችን ይጀምሩ::",
    },
    imageWebPath: "/assets/recipes/recipe-1.png",
    bgColor: "#23B349",
    published: true,
  },
  {
    slug: "bakers-secret",
    sortOrder: 4,
    title: {
      en: "Baker's Secret",
      am: "የጋጋሪው ምስጢር",
    },
    description: {
      en: "The secret ingredient to all your favorite home recipes.",
      am: "ለሁሉም ተወዳጅ የቤት ውስጥ ምግብ አዘገጃጀቶችዎ ምስጢራዊ ግብዓት::",
    },
    imageWebPath: "/assets/recipes/recipe-1.png",
    bgColor: "#333733",
    published: true,
  },
];
