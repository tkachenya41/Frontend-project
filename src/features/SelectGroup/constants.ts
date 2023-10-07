export interface OptionProps {
  value: string;
  label: string;
}

export const initialState = {
  language: 'en',
  pageSize: '10',
  sortBy: 'piblishedAt',
};

export const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
  { value: 'de', label: 'Deutsch' },
];

export const pageSizeOptions = [
  { value: '20', label: '20' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
];

export const sortByOptions = [
  { value: 'relevancy', label: 'Relevancy' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'publishedAt', label: 'Newest' },
];
