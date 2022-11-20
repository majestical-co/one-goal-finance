export type Collection = {
  slug: string;
  name: string;
  order: number;
  icon: string;
  description: string;
  created_at: number;
  updated_at: number;
};
export const collections: Collection[] = [
  {
    slug: 'getting-started',
    name: 'Getting Started with One Goal',
    order: 0,
    created_at: 1575350937,
    updated_at: 1575380551,
    description: 'Collection of articles to get you started using One Goal the right way',
    icon: 'info-check',
  },
  {
    slug: 'tips-and-tricks',
    name: 'Tips and Tricks',
    order: 3,
    created_at: 1584068024,
    updated_at: 1584070917,
    description: 'Tips to get the most out of One Goal!',
    icon: 'book-bookmark',
  },
  {
    slug: 'features',
    name: 'One Goal Features',
    order: 4,
    created_at: 1595892279,
    updated_at: 1595892284,
    description: "See an rundown of One Goal's most popular features",
    icon: 'book-bookmark',
  },
  {
    slug: 'blog',
    name: 'Blog',
    order: 5,
    created_at: 1614486240,
    updated_at: 1614486258,
    description: null,
    icon: 'book-library',
  },
];
