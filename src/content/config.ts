import { defineCollection, z } from 'astro:content';

// La colección es para todas las categorías
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.enum(['reseñas', 'opiniones', 'noticias']),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};