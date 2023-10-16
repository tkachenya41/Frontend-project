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
import SelectGroup from '@/features/SelectGroup/SelectGroup';
import Modal from '@/components/Popup/Popup';
import { AxiosError } from 'axios';

const axiosErrorText =
  'An error occurred while accessing the server. The server is unavailable or the requested resource was not found.';

const commonErrorText = 'An error occurred';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<ArticleAPI[] | null>(null);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorText, setErrorText] = useState('');

  const query = useSearchParams();

  const currentSearchQuery = query.get('q') || '';
  const currentLanguageQuery = query.get('language') || 'en';
  const currentSizeQuery = query.get('pageSize') || '20';
  const currentSortBy = query.get('sortBy') || 'publishedAt';

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        let response;

        if (!currentSearchQuery) {
          response = await fetchNews();
        } else {
          response = await fetchSearch({
            request: currentSearchQuery,
            language: currentLanguageQuery,
            pageSize: currentSizeQuery,
            sortBy: currentSortBy,
          });
        }

        setArticles(response.articles);
      } catch (err) {
        setIsErrorModalOpen(true);
        setErrorText(err instanceof AxiosError ? axiosErrorText : commonErrorText);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentSearchQuery, currentLanguageQuery, currentSizeQuery, currentSortBy]);

  return (
    <main className={Styles.main}>
      <div className={Styles.center}>
        <Modal isOpen={isErrorModalOpen} text={errorText} status='error' />
        {currentSearchQuery && (
          <>
            <SelectGroup currentSearchQuery={currentSearchQuery} />
            <h2>Results of : '{currentSearchQuery}'</h2>
          </>
        )}
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
