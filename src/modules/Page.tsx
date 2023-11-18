import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { CardsList } from './CardsList';
import { Loader } from './Loader';
import { Arrow } from './Arrow';
import { SearchBlock } from './SearchBlock';
import { useGetBeersQuery, useCheckPageQuery } from './API/Api';
import { useDispatch, useSelector } from 'react-redux';
import '../App.scss';
import { RootState } from '../store/store';
import { setIsLoaded } from '../store/slices/flagsSlice';

export function Page() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const value = useSelector((state: RootState) => state.value.value);
  const page = searchParams.get('page') || '1';
  const [newPage, setNewPage] = useState(page);
  const searchString = useSelector(
    (state: RootState) => state.search.searchString
  );
  const isLoaded = useSelector((state: RootState) => state.flags.isLoaded);
  const { isLoading, error, isSuccess } = useGetBeersQuery({
    searchString,
    page,
    value,
  });
  const { data = [] } = useCheckPageQuery({ searchString, newPage, value });

  const changeUrl = () => {
    if (searchParams.get('details')) {
      searchParams.delete('details');
      setSearchParams(searchParams);
    }
  };
  useEffect(() => {
    if (newPage != page && Number(newPage) > 0 && data.length > 0) {
      setSearchParams({ page: newPage });
    }
    if (error) setSearchParams({ page: '1' });
    if (isSuccess) dispatch(setIsLoaded(true));
  });
  return (
    <>
      <div className="main-page" onClick={changeUrl}>
        <div className="top-section">
          <SearchBlock />
        </div>
        <div className="bottom-section">
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="results">
              <CardsList />
            </div>
          )}
          {isLoaded && <Arrow direction="left" setNewPage={setNewPage} />}
          {isLoaded && <Arrow direction="right" setNewPage={setNewPage} />}
        </div>
      </div>
    </>
  );
}
