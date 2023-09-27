'use client';
import Styles from './page.module.scss';

import { useEffect, useState } from 'react';
import { ArticleAPI } from '@/entities/Article';

import { Articles } from '@/features/Articles/Articles';

import { fetchNews } from './api/fetchNews';
import { fetchSearch } from './api/fetchSearch';
import { SearchPanel } from '@/components/SearchPanel/SearchPanel';
import Image from 'next/image';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<ArticleAPI[]>([]);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [isSearchPerformed, setIsSearchPerformed] =
    useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetchNews();
        setArticles(response.articles);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function performSearch() {
      if (searchQuery) {
        setIsLoading(true);
        try {
          const response = await fetchSearch({
            request: searchQuery,
          });
          setArticles(response.articles);
          setIsLoading(false);
          setIsSearchPerformed(true);
        } catch (err) {
          setIsLoading(false);
          console.error(err);
        }
      }
    }
    performSearch();
  }, [searchQuery]);

  return (
    <main className={Styles.main}>
      <div className={Styles.center}>
        <SearchPanel
          setSearchQuery={setSearchQuery}
          placeholder='Search news ...'></SearchPanel>
        {searchQuery && <h2>Results of : '{searchQuery}'</h2>}
        {isLoading ? (
          <Image
            width={300}
            height={300}
            src='/loading.gif'
            alt='Loading'
            className={Styles.spinner}
          />
        ) : null}
        {isSearchPerformed && articles.length < 1 && (
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
        <Articles articles={articles}></Articles>
      </div>
    </main>
  );
}
