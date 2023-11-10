import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SearchBlock } from '../modules/SearchBlock';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SearchContext, SearchProvider } from '../modules/Context';
import userEvent from '@testing-library/user-event';

const setIsLoading = jest.fn();
const setIsLoaded = jest.fn();
const setValue = jest.fn();

function makeStorage() {
  const store: {
    [key: string]: string;
  } = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },
  };
}

const localStorageMock = makeStorage();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Search', () => {
  it('sets search string into localStorage', async () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <SearchProvider>
                <SearchBlock
                  setIsLoading={setIsLoading}
                  changeArrow={setIsLoaded}
                  value="10"
                  changeValue={setValue}
                />
              </SearchProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
    const spyLoStoRemove = jest.spyOn(localStorage, 'setItem');
    await userEvent.type(screen.getByRole('searchbox'), 'ipa');
    await userEvent.click(container.getElementsByClassName('loupe')[0]);
    expect(spyLoStoRemove).toHaveBeenCalled();
    expect(localStorageMock.getItem('searchString')).toEqual('ipa');
  });

  it('gets search string from localStorage', async () => {
    localStorageMock.setItem('searchString', 'death');
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <SearchProvider>
                <SearchBlock
                  setIsLoading={setIsLoading}
                  changeArrow={setIsLoaded}
                  value="10"
                  changeValue={setValue}
                />
              </SearchProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByRole('searchbox')).toHaveValue('death');
  });
});
