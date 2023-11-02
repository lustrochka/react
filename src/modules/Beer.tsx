import { responseItem } from '../types';

export function BeerList({ items }: { items: responseItem[] }) {
  return (
    <div className="beer-container">
      {items.map((item: responseItem) => (
        <div className="beer-item" key={item.id.toString()}>
          <h3>{item.name}</h3>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
}
