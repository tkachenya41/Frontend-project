'use client';
import Styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { Articles } from '@/features/Articles/Articles';
import { ArticleAPI } from '@/api/Article';
import { fetchNews } from '@/api/fetchNews';
import { fetchSearch } from '@/api/fetchSearch';
import { SearchPanel } from '@/components/SearchPanel/SearchPanel';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

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
          const articlesWithId = response.articles.map((article) => ({
            ...article,
            id: uuidv4(),
          }));
          setArticles(articlesWithId);
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
        const articlesWithId = response.articles.map((article) => ({
          ...article,
          id: uuidv4(),
        }));
        setArticles(articlesWithId);
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
        {currentSearchQuery && (
          <button className={Styles.home}>
            <Link href={'/'}>Go home</Link>
          </button>
        )}
        <SearchPanel
          setSearchQuery={setSearchQuery}
          placeholder='Search news ...'
        />
        {currentSearchQuery && <h2>Results of : '{searchQuery}'</h2>}
        {isLoading ? (
          <Image
            width={300}
            height={300}
            src='/loading.gif'
            alt='Loading'
            className={Styles.spinner}
          />
        ) : null}
        {articles?.length === 0 && (
          <div className={Styles.nothing}>
            <Image
              width={200}
              height={200}
              alt='No svg'
              src={'/sadSmile.svg'}></Image>
            <h2>
              Not Found... <hr /> Try again later
            </h2>
          </div>
        )}
        {articles && <Articles articles={articles}></Articles>}
      </div>
    </main>
  );
}
