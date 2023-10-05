'use client';
import Styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { Articles } from '@/features/Articles/Articles';
import { ArticleAPI } from '@/api/Article';
import { fetchNews } from '@/api/fetchNews';
import { fetchSearch } from '@/api/fetchSearch';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Loader from '@/components/Loader/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<ArticleAPI[] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const search = useSearchParams();
  const currentSearchQuery = search.get('q');

  useEffect(() => {
    if (!currentSearchQuery) {
      (async function () {
        setIsLoading(true);
        try {
          const response = await fetchNews();
          setArticles(response.articles);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      })();
    } else {
      setSearchQuery(currentSearchQuery);
    }
  }, [currentSearchQuery]);

  useEffect(() => {
    (async function () {
      if (!searchQuery) return;
      setIsLoading(true);
      try {
        const response = await fetchSearch({
          request: searchQuery,
        });
        setArticles(response.articles);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  return (
    <main className={Styles.main}>
      <div className={Styles.center}>
        {currentSearchQuery && <h2>Results of : '{searchQuery}'</h2>}
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
