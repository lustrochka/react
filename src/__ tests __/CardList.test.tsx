import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SearchContext } from '../modules/Context';
import { CardsList } from '../modules/CardsList';
import { responseItem } from '../types';

const searchString = '';
const setSearchString = jest.fn();
const setBeers = jest.fn();

describe('CardList', () => {
  it('renders the specified number of cards', () => {
    const beers: responseItem[] = [
      { name: 'Best', description: 'Lorem ipsum', id: 0 },
      { name: 'Not best', description: 'Lorem ipsum', id: 1 },
    ];
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <SearchContext.Provider
                value={{ searchString, beers, setSearchString, setBeers }}
              >
                <CardsList />
              </SearchContext.Provider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('beer-item').length).toBe(
      beers.length
    );
  });
  it('message is displayed if no cards are present', () => {
    const beers: responseItem[] = [];
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <SearchContext.Provider
                value={{ searchString, beers, setSearchString, setBeers }}
              >
                <CardsList />
              </SearchContext.Provider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/Nothing/)).toBeInTheDocument();
  });
});
