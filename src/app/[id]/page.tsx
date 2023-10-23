'use client';
import Article from '@/features/Articles/Article/Article';
import Style from './page.module.scss';
import { useArticle } from '@/contexts/ArticleContext/ArticleContext';
import { redirect } from 'next/navigation';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { articles } = useArticle();

  const article = articles?.find((article) => article.id === params.id);

  if (!article) {
    return redirect('/');
  }

  return (
    <main className={Style.main}>
      <Article articles={articles} params={params} article={article} />
    </main>
  );
}
