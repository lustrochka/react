import { useEffect, useState, useContext } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { CardsList } from './CardsList';
import { Loader } from './Loader';
import { Arrow } from './Arrow';
import { SearchBlock } from './SearchBlock';
import { searchItems, searchPage } from './API/Api';
import { SearchContext } from './Context';
import { useSelector } from 'react-redux';
import '../App.scss';
import { RootState } from '../store/store';

export function Page() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setBeers } = useContext(SearchContext);
  const [isLoaded, setIsloaded] = useState(false);
  const value = useSelector((state: RootState) => state.value.value);
  const page = searchParams.get('page') || '1';
  const [isLoading, setIsLoading] = useState(false);
  const searchString = useSelector(
    (state: RootState) => state.search.searchString
  );
  const changePage = (newPage: string) => {
    if (Number(newPage) > 0) {
      const response = searchPage(searchString, newPage, value);
      response.then((res) => {
        if (res.data.length > 0) {
          setIsLoading(true);
          setSearchParams({ page: newPage });
        }
      });
    }
  };
  const changeUrl = () => {
    if (searchParams.get('details')) {
      searchParams.delete('details');
      setSearchParams(searchParams);
    }
  };
  useEffect(() => {
    search();
  }, [location]);
  function search() {
    setIsLoading(true);
    const result = searchItems(searchString, page, value);
    result
      .then((res) => {
        setIsLoading(false);
        setBeers(res.data);
        if (res.data.length > 0) setIsloaded(true);
      })
      .catch(() => setSearchParams({ page: '1' }));
  }
  return (
    <>
      <div className="main-page" onClick={changeUrl}>
        <div className="top-section">
          <SearchBlock setIsLoading={setIsLoading} changeArrow={setIsloaded} />
        </div>
        <div className="bottom-section">
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="results">
              <CardsList />
            </div>
          )}
          {isLoaded && <Arrow direction="left" change={changePage} />}
          {isLoaded && <Arrow direction="right" change={changePage} />}
        </div>
      </div>
    </>
  );
}
