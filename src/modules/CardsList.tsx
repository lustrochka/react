import { responseItem } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useSearchParams } from 'react-router-dom';
import { Card } from './Card';
import { useGetBeersQuery } from './API/Api';

export function CardsList() {
  const [searchParams] = useSearchParams();
  const value = useSelector((state: RootState) => state.value.value);
  const page = searchParams.get('page') || '1';
  const searchString = useSelector(
    (state: RootState) => state.search.searchString
  );
  const { data = [] } = useGetBeersQuery({ searchString, page, value });
  return (
    <div className="beer-container">
      {data.length == 0 && <div className="notfound">Nothing found:(</div>}
      {data.map((item: responseItem) => (
        <Card item={item} key={item.id.toString()}></Card>
      ))}
    </div>
  );
}
