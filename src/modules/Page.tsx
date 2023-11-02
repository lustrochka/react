import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BeerList } from './Beer';
import { Loader } from './Loader';
import { Arrow } from './Arrow';
import axios from 'axios';
import { SearchBlock } from './SearchBlock';
import '../App.scss';

export function Page() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [beers, setBeers] = useState([]);
  const [searchString, setSearchString] = useState(
    localStorage.getItem('searchString') || ''
  );
  const [loadingClass, setLoadingClass] = useState('loading');
  const [resClass, setResClass] = useState('results hiding');
  const [nothingClass, setNothingClass] = useState('not-found hiding');
  const [page, setPage] = useState(1);
  const changePage = (newPage: number) => {
    setPage(newPage);
  };
  const changeSearchString = (newSearchString: string) => {
    setSearchString(newSearchString);
  };
  const changeVisibility = () => {
    setLoadingClass('loading');
    setResClass('results hiding');
    setNothingClass('not-found hiding');
  };
  const changeUrl = () => {
    if (searchParams.get('details')) {
      searchParams.delete('details');
      setSearchParams(searchParams);
    }
  };
  useEffect(() => {
    search();
    setSearchParams({ page: page.toString() });
  }, [page, resClass]);
  function search() {
    const BASE_URL = 'https://api.punkapi.com/v2/beers';
    const url = searchString
      ? `${BASE_URL}?beer_name=${searchString.replace(
          ' ',
          '_'
        )}&page=${page}&per_page=10`
      : `${BASE_URL}?page=${page}&per_page=10`;
    axios.get(url).then((res) => {
      if (res.data.length > 0) {
        setLoadingClass('loading hiding');
        setResClass('results');
        setNothingClass('not-found hiding');
        setBeers(res.data);
      } else {
        setLoadingClass('loading hiding');
        setNothingClass('not-found');
      }
    });
  }
  return (
    <>
      <div className="main-page" onClick={changeUrl}>
        <div className="top-section">
          <SearchBlock
            changePage={changePage}
            changeVisibility={changeVisibility}
            search={search}
            searchString={searchString}
            changeSearchString={changeSearchString}
          />
        </div>
        <div className="bottom-section">
          <Loader className={loadingClass} /> {/*???*/}
          <h2 className={nothingClass}>Nothing found :(</h2>
          <div className={resClass}>
            <BeerList items={beers} />
          </div>
          <Arrow
            direction="left"
            page={page}
            change={changePage}
            changeVisibility={changeVisibility}
          />
          <Arrow
            direction="right"
            page={page}
            change={changePage}
            changeVisibility={changeVisibility}
          />
        </div>
      </div>
    </>
  );
}
