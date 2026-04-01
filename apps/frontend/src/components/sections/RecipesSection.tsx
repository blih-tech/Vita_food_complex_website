'use client';

import { useTranslations } from 'next-intl';

type Recipe = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
};

const RECIPES: Recipe[] = [
  {
    id: 1,
    tag: 'Biscuit Recipe',
    title: 'Kiyu - Cream With Milk',
    description: 'A delicious creamy biscuit dessert made with Kiyu biscuits, fresh milk, and a drizzle of caramel.',
    image: '/assets/recipes/recipe-1.svg',
  },
  {
    id: 2,
    tag: 'Baking',
    title: 'Bora Chocolate Cake',
    description: 'Indulge in a rich layered chocolate cake topped with crushed Bora biscuits for extra crunch.',
    image: '/assets/recipes/recipe-2.svg',
  },
  {
    id: 3,
    tag: 'Baking',
    title: 'Vita Flour Bread',
    description: 'Classic soft homemade bread baked from premium Vita wheat flour — perfect for every table.',
    image: '/assets/recipes/recipe-3.svg',
  },
];

export default function RecipesSection() {
  const t = useTranslations('Recipes');

  return (
    <section id="recipes" className="py-20 lg:py-28 bg-[#E9F7ED]">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="mb-12 lg:mb-16 space-y-2">
          <span className="font-['Outfit'] font-semibold text-[#23B349] text-2xl uppercase tracking-widest block">
            {t('label')}
          </span>
          <h2
            className="font-['Funnel_Display'] font-bold text-[#333733] leading-none"
            style={{ fontSize: 'clamp(36px, 3.3vw, 64px)' }}
          >
            {t('heading')}
          </h2>
          <p className="font-['Funnel_Display'] font-normal text-[#333733]/60 text-2xl">
            Mix. Match. Enjoy
          </p>
        </div>

        {/* Recipe cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECIPES.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Tag pill */}
                <div className="absolute top-5 left-5">
                  <span className="bg-[#0F4B1F] text-white px-4 py-1.5 rounded-full font-['Funnel_Display'] font-bold text-sm uppercase tracking-wider">
                    {recipe.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-3">
                <h3
                  className="font-['Funnel_Display'] font-bold text-[#333733] group-hover:text-[#23B349] transition-colors leading-snug"
                  style={{ fontSize: 'clamp(22px, 1.6vw, 32px)' }}
                >
                  {recipe.title}
                </h3>
                <p className="font-['Outfit'] text-[#333733]/60 text-base leading-relaxed line-clamp-2">
                  {recipe.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
