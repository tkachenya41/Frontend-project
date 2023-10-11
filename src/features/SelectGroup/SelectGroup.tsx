'use client';
import Select, { SingleValue } from 'react-select';
import Style from './Select.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import queryString from 'query-string';
import {
  OptionProps,
  initialState,
  languageOptions,
  pageSizeOptions,
  sortByOptions,
} from './constants';

export default function SelectGroup({
  currentSearchQuery,
}: {
  currentSearchQuery?: string;
}) {
  const router = useRouter();

  const [queryParams, setQueryParams] = useState(initialState);

  const handleChange = (key: string, selectedOption: SingleValue<OptionProps>) => {
    if (selectedOption) {
      setQueryParams((prevParams) => ({
        ...prevParams,
        [key]: selectedOption.value,
      }));
    }
  };

  useEffect(() => {
    const updatedQueryString = queryString.stringify({
      q: currentSearchQuery,
      ...queryParams,
    });

    router.push(`/?${updatedQueryString}`);
  }, [currentSearchQuery, queryParams]);

  return (
    <div className={Style.selectGroup}>
      <Select
        styles={{
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: 'var(--primary-background-color)',
          }),
        }}
        instanceId='languageSort'
        className={Style.selectGroup__select}
        options={languageOptions}
        onChange={(selectedOption) => handleChange('language', selectedOption)}
        placeholder='Language'
      />
      <Select
        styles={{
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: 'var(--primary-background-color)',
          }),
        }}
        instanceId='pageSizeSort'
        className={Style.selectGroup__select}
        options={pageSizeOptions}
        onChange={(selectedOption) => handleChange('pageSize', selectedOption)}
        placeholder='Page size'
      />
      <Select
        styles={{
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: 'var(--primary-background-color)',
          }),
        }}
        instanceId='Sortby'
        className={Style.selectGroup__select}
        options={sortByOptions}
        onChange={(selectedOption) => handleChange('sortBy', selectedOption)}
        placeholder='Sort by'
      />
    </div>
  );
}
