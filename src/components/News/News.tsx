'use client';
import Styles from '@/app/page.module.scss';
import { useEffect, useState } from 'react';
import { Articles } from '@/features/Articles/Articles';
import { ArticleAPI } from '@/api/Article';
import Image from 'next/image';
import Loader from '@/components/Loader/Loader';
import { ResponseAPI } from '@/api/constants';

export default function News({ fetchFunc }: { fetchFunc: Promise<ResponseAPI> }) {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<ArticleAPI[] | null>(null);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const response = await fetchFunc;

        setArticles(response.articles);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <main className={Styles.main}>
      <div className={Styles.center}>
        <Loader isLoading={isLoading} />
        {articles?.length === 0 && (
          <div className={Styles.nothing}>
            <Image width={200} height={200} alt='No svg' src={'/sadSmile.svg'}></Image>
            <h2>
              Not Found... <hr /> Try again later
            </h2>
          </div>
        )}
        <Articles articles={articles}></Articles>
      </div>
    </main>
  );
}
