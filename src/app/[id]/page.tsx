'use client';
import Article from '@/features/Articles/Article/Article';
import Style from './page.module.scss';
import { useArticle } from '@/contexts/ArticleContext/ArticleContext';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { articles } = useArticle();

  return (
    <main className={Style.main}>
      <Article params={params} articles={articles} />
    </main>
  );
}
