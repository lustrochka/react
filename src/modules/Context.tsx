import { createContext } from 'react';
import { responseItem } from '../types';

interface SearchContextValue {
  searchString: string;
  setSearchString: (string: string) => void;
}

export interface ListContextValue {
  beers: responseItem[];
  setBeers: React.Dispatch<React.SetStateAction<responseItem[]>>;
}

export const SearchContext = createContext<SearchContextValue>({
  searchString: '',
  setSearchString: () => '',
});
export const ListContext = createContext<ListContextValue>({
  beers: [],
  setBeers: () => [],
});
