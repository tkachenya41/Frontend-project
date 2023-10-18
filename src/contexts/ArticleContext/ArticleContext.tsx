import { ArticleAPI } from '@/api/Article';
import { createContext, useContext } from 'react';

export interface ArticleContextProps {
  articles: ArticleAPI[] | null;
  setArticles: (articles: ArticleAPI[]) => void;
}

export const ArticleContext = createContext<ArticleContextProps | null>(null);

export function useArticle(): ArticleContextProps {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
