import { z } from 'zod';

export const schemaArticleAPI = z.object({
  source: z.object({ name: z.string() }),
  author: z.string().nullable(),
  title: z.string(),
  description: z.string(),
  urlToImage: z.string().nullable(),
  id: z.string(),
  publishedAt: z.string().nullable(),
  content: z.string(),
  url: z.string(),
});

export type ArticleAPI = z.infer<typeof schemaArticleAPI>;
