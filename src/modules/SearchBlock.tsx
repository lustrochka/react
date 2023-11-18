import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../store/slices/SearchStringSlice';
import { setValue } from '../store/slices/ItemsPerPageSlice';
import { RootState } from '../store/store';
import { useState } from 'react';
import { setIsLoaded } from '../store/slices/flagsSlice';

export function SearchBlock() {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const searchString = useSelector(
    (state: RootState) => state.search.searchString
  );
  const [inputValue, setInputValue] = useState(searchString);
  const value = useSelector((state: RootState) => state.value.value);
  return (
    <div className="search-block">
      <div>
        <div>Find beer</div>
        <div className="search">
          <input
            type="search"
            value={inputValue}
            className="search-input"
            onChange={(event) => setInputValue(event.target.value.trim())}
          ></input>
          <div
            className="loupe"
            onClick={() => {
              setSearchParams({ page: '1' });
              dispatch(setSearchString(inputValue));
              dispatch(setIsLoaded(false));
              localStorage.setItem('searchString', searchString);
            }}
          ></div>
        </div>
      </div>
      <select
        className="per-page-input"
        value={value}
        onChange={(e) => {
          dispatch(setValue(e.target.value));
          setSearchParams({ page: '1' });
          dispatch(setIsLoaded(false));
        }}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
      <span> per page</span>
    </div>
  );
}
