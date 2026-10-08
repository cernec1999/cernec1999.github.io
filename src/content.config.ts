import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const shelves = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shelves' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    blurb: z.string(),
    accent: z.string().default('#7dd3fc'),
    order: z.number().default(99),
  }),
});

export const collections = { blog, shelves };
