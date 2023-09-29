import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

export const schemaArticleAPI = z.object({
  source: z.object({ name: z.string() }),
  author: z.string(),
  title: z.string(),
  description: z.string(),
  urlToImage: z.string(),
  id: z.string(),
});

export type ArticleAPI = z.infer<typeof schemaArticleAPI>;
