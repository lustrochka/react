import { useSearchParams } from 'react-router-dom';

export function Arrow({
  direction,
  setNewPage,
}: {
  direction: string;
  setNewPage: (newPage: string) => void;
}) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  return (
    <div
      className="arrow"
      onClick={() => {
        direction == 'left'
          ? setNewPage((Number(page) - 1).toString())
          : setNewPage((Number(page) + 1).toString());
      }}
    >
      {direction == 'left' ? '🠘' : '🠚'}
    </div>
  );
}
