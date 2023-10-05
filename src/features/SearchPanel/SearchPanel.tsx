'use client';
import SearchStyle from './SearchPanel.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearch } from '@/contexts/SearchContext/SearchContext';
import { DebounceInput } from 'react-debounce-input';

export function SearchPanel({ placeholder }: { placeholder?: string }) {
  const { setSearchQuery } = useSearch();
  const router = useRouter();

  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }: { target: { value: string } }) => {
    setInputValue(value);

    const encodedSearch = encodeURI(value);
    setSearchQuery(encodedSearch);

    router.push(`/?q=${encodedSearch}`);
  };

  return (
    <DebounceInput
      className={SearchStyle.input}
      value={inputValue}
      placeholder={placeholder}
      debounceTimeout={500}
      onChange={(e) => handleChange(e)}
      onBlur={() => setInputValue('')}
    />
  );
}
