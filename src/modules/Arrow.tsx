import { useSearchParams } from 'react-router-dom';
export function Arrow({
  direction,
  change,
}: {
  direction: string;
  change: (newPage: string) => void;
}) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  return (
    <div
      className="arrow"
      onClick={() => {
        direction == 'left'
          ? change((Number(page) - 1).toString())
          : change((Number(page) + 1).toString());
      }}
    >
      {direction == 'left' ? '🠘' : '🠚'}
    </div>
  );
}
