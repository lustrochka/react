import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../store/slices/SearchStringSlice';
import { RootState } from '../store/store';

export function SearchBlock({
  setIsLoading,
  changeArrow,
  value,
  changeValue,
}: {
  setIsLoading: (isLoading: boolean) => void;
  changeArrow: (newBoolean: boolean) => void;
  value: string;
  changeValue: (newValue: string) => void;
}) {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const searchString = useSelector(
    (state: RootState) => state.search.searchString
  );
  return (
    <div className="search-block">
      <div>
        <div>Find beer</div>
        <div className="search">
          <input
            type="search"
            value={searchString}
            className="search-input"
            onChange={(event) =>
              dispatch(setSearchString(event.target.value.trim()))
            }
          ></input>
          <div
            className="loupe"
            onClick={() => {
              setIsLoading(true);
              setSearchParams({ page: '1' });
              changeArrow(false);
              dispatch(setSearchString(searchString));
              localStorage.setItem('searchString', searchString);
            }}
          ></div>
        </div>
      </div>
      <select
        className="per-page-input"
        value={value}
        onChange={(e) => {
          setIsLoading(true);
          changeValue(e.target.value);
          setSearchParams({ page: '1' });
          changeArrow(false);
          localStorage.setItem('per-page', e.target.value);
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
