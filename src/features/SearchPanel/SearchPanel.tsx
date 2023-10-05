'use client';
import SearchStyle from './SearchPanel.module.scss';
import { SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/contexts/SearchContext/SearchContext';

export function SearchPanel({ placeholder }: { placeholder?: string }) {
  const { setSearchQuery } = useSearch();
  const router = useRouter();

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const encodedSearch = encodeURI(inputValue);
    setSearchQuery(encodedSearch);

    router.push(`/?q=${encodedSearch}`);
    setInputValue('');
  };

  return (
    <form className={SearchStyle.form} onSubmit={handleSubmit}>
      <input
        className={SearchStyle.form__input}
        value={inputValue}
        placeholder={placeholder}
        onChange={({ target: { value } }) => {
          setInputValue(value);
        }}
      />
      <button className={SearchStyle.form__submit} type='submit'>
        <Image src='/search.svg' alt='search' width={20} height={20} />
      </button>
    </form>
  );
}
