import { useEffect, useState, useContext } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { CardsList } from './CardsList';
import { Loader } from './Loader';
import { Arrow } from './Arrow';
import { SearchBlock } from './SearchBlock';
import { searchItems, searchPage } from './API/Api';
import { SearchContext } from './Context';
import '../App.scss';

export function Page() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchString, setBeers } = useContext(SearchContext);
  const [isLoaded, setIsloaded] = useState(false);
  const [value, setValue] = useState('10');
  const page = searchParams.get('page') || '1';
  const [isLoading, setIsLoading] = useState(false);
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
          <SearchBlock
            setIsLoading={setIsLoading}
            changeArrow={setIsloaded}
            value={value}
            changeValue={setValue}
          />
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
