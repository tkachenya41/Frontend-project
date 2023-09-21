export interface ArticleAPI {
  source: Record<"name", string | null>;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
}
