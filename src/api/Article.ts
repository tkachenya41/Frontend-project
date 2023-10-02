import { z } from 'zod';

export const schemaArticleAPI = z.object({
  source: z.object({ name: z.string() }),
  author: z.string(),
  title: z.string(),
  description: z.string(),
  urlToImage: z.string(),
  id: z.string(),
});

export type ArticleAPI = z.infer<typeof schemaArticleAPI>;
