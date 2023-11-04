import imgUrl from '../assets/PIWO.svg';

export function Loader() {
  return (
    <div className="loading">
      <div>
        <img src={imgUrl} className="bubble"></img>
      </div>
      <div>
        <img src={imgUrl} className="bubble"></img>
      </div>
      <div>
        <img src={imgUrl} className="bubble"></img>
      </div>
      <div>
        <img src={imgUrl} className="bubble"></img>
      </div>
      <div>
        <img src={imgUrl} className="bubble"></img>
      </div>
    </div>
  );
}
