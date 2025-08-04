import { z } from 'zod';

export const Post = z.object({
  title: z.string(),
  summary: z.string(),
  slug: z.string(),
  content: z.string(),
  tags: z
    .array(z.string())
    .default([])
    .transform((tags) => tags.toSorted()),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Post = z.infer<typeof Post>;
