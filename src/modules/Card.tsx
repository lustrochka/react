import { useSearchParams, useNavigate } from 'react-router-dom';
import { responseItem } from '../types';

export function Card({ item }: { item: responseItem }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const goToItem = (id: number) => {
    navigate({
      pathname: '/',
      search: `?page=${searchParams.get('page')}&details=${id}`,
    });
  };
  return (
    <div className="beer-item" onClick={() => goToItem(item.id)}>
      <h3>{item.name}</h3>
      <div>{item.description}</div>
    </div>
  );
}
