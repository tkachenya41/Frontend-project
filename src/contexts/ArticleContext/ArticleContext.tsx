import { ArticleAPI } from '@/api/Article';
import { createContext, useContext } from 'react';

export interface ArticleContextProps {
  articles: ArticleAPI[];
  setArticles: (articles: ArticleAPI[]) => void;
}

export const ArticleContext = createContext<ArticleContextProps>({
  articles: [],
  setArticles: () => {},
});

export function useArticle(): ArticleContextProps {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
