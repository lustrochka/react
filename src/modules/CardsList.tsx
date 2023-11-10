import { responseItem } from '../types';
import { useContext } from 'react';
import { SearchContext } from './Context';
import { Card } from './Card';

export function CardsList() {
  const { beers } = useContext(SearchContext);
  return (
    <div className="beer-container">
      {beers.map((item: responseItem) => (
        <Card item={item} key={item.id.toString()}></Card>
      ))}
    </div>
  );
}
