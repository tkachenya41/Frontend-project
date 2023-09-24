import { ArticleAPI, schemaArticleAPI } from "@/entities/Article";
import { z } from "zod";

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const schemaResponseAPI = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: z.array(schemaArticleAPI),
});

export type ResponseAPI = z.infer<typeof schemaResponseAPI>;
