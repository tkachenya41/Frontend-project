'use client';
import SearchStyle from './SearchPanel.module.scss';
import { SearchState } from './Search.types';
import { PropsWithChildren, useState } from 'react';
import { getDefaultFormValues } from './Search.utils';
import Image from 'next/image';

export function SearchPanel({
  setSearchQuery,
  placeholder,
}: {
  setSearchQuery: (query: string) => void;
  placeholder?: string;
}) {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const encodedSearch = encodeURI(formState.request);
    setSearchQuery(encodedSearch);
    setFormState(getDefaultFormValues);
  };
  const [formState, setFormState] = useState<SearchState>(
    getDefaultFormValues(),
  );

  return (
    <form className={SearchStyle.form} onSubmit={handleSubmit}>
      <input
        className={SearchStyle.input}
        value={formState.request}
        placeholder={placeholder}
        onChange={({ target: { value } }) => {
          setFormState({ request: value });
        }}
      />
      <button className={SearchStyle.submit} type='submit'>
        <Image src='/search.svg' alt='search' width={20} height={20} />
      </button>
    </form>
  );
}
