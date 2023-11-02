import searchUrl from '../assets/drawing-2.svg';

export function SearchBlock({
  changePage,
  changeVisibility,
  search,
  searchString,
  changeSearchString,
}: {
  changePage: (newPage: number) => void;
  changeVisibility: () => void;
  search: () => void;
  searchString: string;
  changeSearchString: (newSearchString: string) => void;
}) {
  return (
    <div className="search-block">
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
            changePage(1);
            localStorage.setItem('searchString', searchString);
            search();
          }}
        >
          <img src={searchUrl}></img>
        </div>
      </div>
    </div>
  );
}
