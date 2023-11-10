import { useEffect, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import './details.scss';
import { Loader } from '../Loader';
import { searchItem } from '../API/Api';

export function DetailedPage() {
  const [id]: [id: string] = useOutletContext();
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [abv, setAbv] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const changeUrl = () => {
    searchParams.delete('details');
    setSearchParams(searchParams);
  };
  useEffect(() => {
    search(id);
  });
  function search(id: string) {
    const result = searchItem(id);
    result
      .then((res) => {
        setIsLoading(false);
        const data = res.data[0];
        setName(data.name);
        setImgUrl(data.image_url);
        setDescription(data.description);
        setAbv(`Alcohol: ${data.abv}%`);
      })
      .catch(() => {
        throw new Error('Wrong item number');
      });
  }
  return (
    <div className="details">
      <div className="close-button" onClick={changeUrl}>
        ✖
      </div>
      <div className="details-item">
        {isLoading && <Loader />}
        <h2>{name}</h2>
        <img src={imgUrl} className="beer-image"></img>
        <div>{description}</div>
        <div>{abv}</div>
      </div>
    </div>
  );
}
