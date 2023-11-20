import { createContext, useState } from 'react';
import { responseItem } from '../types';

interface SearchContextValue {
  searchString: string;
  setSearchString: (string: string) => void;
  beers: responseItem[];
  setBeers: React.Dispatch<React.SetStateAction<responseItem[]>>;
}

export const SearchContext = createContext<SearchContextValue>({
  searchString: '',
  setSearchString: () => '',
  beers: [],
  setBeers: () => [],
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchString, setSearchString] = useState(
    localStorage.getItem('searchString') || ''
  );
  const [beers, setBeers] = useState<responseItem[]>([]);

  return (
    <SearchContext.Provider
      value={{ searchString, setSearchString, beers, setBeers }}
    >
      {children}
    </SearchContext.Provider>
  );
};
