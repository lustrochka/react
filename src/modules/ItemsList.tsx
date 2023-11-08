import { responseItem } from '../types';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ListContext } from './Context';

export function BeerList() {
  const { beers } = useContext(ListContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const goToItem = (id: number) => {
    navigate({
      pathname: '/',
      search: `?page=${searchParams.get('page')}&details=${id}`,
    });
  };
  return (
    <div className="beer-container">
      {beers.map((item: responseItem) => (
        <div
          className="beer-item"
          key={item.id.toString()}
          onClick={() => goToItem(item.id)}
        >
          <h3>{item.name}</h3>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
}
