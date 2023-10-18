'use client';
import { ReactNode, useState } from 'react';
import { ArticleContext } from './ArticleContext';
import { ArticleAPI } from '@/api/Article';

export function ArticlesProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<ArticleAPI[] | null>(null);

  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticleContext.Provider>
  );
}
