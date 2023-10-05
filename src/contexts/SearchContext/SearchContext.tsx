import { createContext, useContext } from 'react';

export interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export function useSearch(): SearchContextProps {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
