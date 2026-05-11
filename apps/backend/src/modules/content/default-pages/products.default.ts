/**
 * CMS content for the public /products page (hero section).
 * Product cards are managed via standalone products CRUD/API.
 */
export const productsPageDefault = {
  slug: 'products',
  title: {
    en: 'Products',
    am: 'ምርቶች',
  },
  sections: [
    {
      id: 'hero',
      type: 'products-hero',
      content: {
        en: {
          title: 'Products',
          subtitle: 'Brand Biscuit Products',
        },
        am: {
          title: 'ምርቶች',
          subtitle: 'የብራንድ ቢስኩት ምርቶች',
        },
      },
    },
  ],
};
