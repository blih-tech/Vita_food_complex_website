'use client';

import { useTranslations } from 'next-intl';

const recipes = [
    {
        id: 1,
        tag: 'Kiyu - Cream With Milk',
        title: 'Creamy Milk Biscuit Cake',
        description: 'A simple and delicious cake made with Kiyu biscuits and fresh milk.',
        image: '/assets/recipes/recipe-1.svg'
    },
    {
        id: 2,
        tag: 'Bora - Chocolate',
        title: 'Double Chocolate Brownies',
        description: 'Rich chocolate brownies with crushed Bora biscuits for extra crunch.',
        image: '/assets/recipes/recipe-2.svg'
    },
    {
        id: 3,
        tag: 'Super Flour',
        title: 'Traditional Wheat Bread',
        description: 'Healthy and fluffy bread made from our premium Super Flour.',
        image: '/assets/recipes/recipe-3.svg'
    }
];

export default function RecipesSection() {
  const t = useTranslations('Recipes');

  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-6 mb-16 space-y-4">
        <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            {t('label')}
        </span>
        <h2 className="heading-section">
            {t('heading')}
        </h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-zinc-900 shadow-sm uppercase tracking-wider">
                    {recipe.tag}
                </div>
            </div>
            <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-primary transition-colors" style={{ color: 'var(--color-primary-dark)' }}>
                    {recipe.title}
                </h3>
                <p className="text-zinc-500 line-clamp-2">
                    {recipe.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
