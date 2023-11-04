import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import './details.scss';
import { Loader } from '../Loader';

export function DetailedPage() {
  const [id]: [id: string] = useOutletContext();
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  //const [ingredients, setIngredients] = useState({});
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
    const BASE_URL = 'https://api.punkapi.com/v2/beers';
    const url = `${BASE_URL}/${id}`;
    axios.get(url).then((res) => {
      setIsLoading(false);
      const data = res.data[0];
      setName(data.name);
      setImgUrl(data.image_url);
      setDescription(data.description);
      //setIngredients(data.ingredients);
      setAbv(`Alcohol: ${data.abv}%`);
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
