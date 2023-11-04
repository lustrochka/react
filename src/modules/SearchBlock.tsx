import { useSearchParams } from 'react-router-dom';
import searchUrl from '../assets/drawing-2.svg';

export function SearchBlock({
  changeVisibility,
  searchString,
  changeSearchString,
  changeArrow,
  value,
  changeValue,
}: {
  changeVisibility: () => void;
  searchString: string;
  changeSearchString: (newSearchString: string) => void;
  changeArrow: (newBoolean: boolean) => void;
  value: string;
  changeValue: (newValue: string) => void;
}) {
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="search-block">
      <div>
        <div>Find beer</div>
        <div className="search">
          <input
            type="search"
            value={searchString}
            className="search-input"
            onChange={(event) => changeSearchString(event.target.value.trim())}
          ></input>
          <div
            className="loupe"
            onClick={() => {
              changeVisibility();
              setSearchParams({ page: '1' });
              changeArrow(false);
              localStorage.setItem('searchString', searchString);
            }}
          >
            <img src={searchUrl}></img>
          </div>
        </div>
      </div>
      <select
        value={value}
        onChange={(e) => {
          changeVisibility();
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
    </div>
  );
}
