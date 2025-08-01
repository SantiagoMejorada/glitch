import { defineCollection, z } from 'astro:content';
import { CATEGORIES } from '../constants';

// La colección es para todas las categorías
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.enum([CATEGORIES.REVIEWS.key, CATEGORIES.OPINIONS.key, CATEGORIES.NEWS.key]),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};