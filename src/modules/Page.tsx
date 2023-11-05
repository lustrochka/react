import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { BeerList } from './Beer';
import { Loader } from './Loader';
import { Arrow } from './Arrow';
import axios from 'axios';
import { SearchBlock } from './SearchBlock';
import '../App.scss';

export function Page() {
  const BASE_URL = 'https://api.punkapi.com/v2/beers';
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [beers, setBeers] = useState([]);
  const [searchString, setSearchString] = useState(
    localStorage.getItem('searchString') || ''
  );
  const [isLoaded, setIsloaded] = useState(false);
  const [value, setValue] = useState('10');
  const page = searchParams.get('page') || '1';
  const [isLoading, setIsLoading] = useState(false);
  const changePage = (newPage: string) => {
    const url = searchString
      ? `${BASE_URL}?beer_name=${searchString.replace(
          ' ',
          '_'
        )}&page=${newPage}&per_page=${value}`
      : `${BASE_URL}?page=${newPage}&per_page=${value}`;
    if (Number(newPage) > 0)
      axios.get(url).then((res) => {
        if (res.data.length > 0) {
          changeVisibility();
          setSearchParams({ page: newPage });
        }
      });
  };
  const changeSearchString = (newSearchString: string) => {
    setSearchString(newSearchString);
  };
  const changeArrow = (newBoolean: boolean) => {
    setIsloaded(newBoolean);
  };
  const changeValue = (newValue: string) => {
    setValue(newValue);
  };
  const changeVisibility = () => {
    setIsLoading(true);
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
    changeVisibility();
    const url = searchString
      ? `${BASE_URL}?beer_name=${searchString.replace(
          ' ',
          '_'
        )}&page=${page}&per_page=${value}`
      : `${BASE_URL}?page=${page}&per_page=${value}`;
    axios
      .get(url)
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
            searchString={searchString}
            changeSearchString={changeSearchString}
            changeVisibility={changeVisibility}
            changeArrow={changeArrow}
            value={value}
            changeValue={changeValue}
          />
        </div>
        <div className="bottom-section">
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="results">
              <BeerList items={beers} />
            </div>
          )}
          {isLoaded && <Arrow direction="left" change={changePage} />}
          {isLoaded && <Arrow direction="right" change={changePage} />}
        </div>
      </div>
    </>
  );
}
