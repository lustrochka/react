import imgUrl from '../assets/PIWO.svg';

export function Loader({ className }: { className: string }) {
  return (
    <div className={className}>
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
