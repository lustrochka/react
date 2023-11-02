export function Arrow({
  direction,
  page,
  change,
  changeVisibility,
}: {
  direction: string;
  page: number;
  change: (newPage: number) => void;
  changeVisibility: () => void;
}) {
  return (
    <div
      className="arrow"
      onClick={() => {
        direction == 'left' ? change(page - 1) : change(page + 1);
        changeVisibility();
      }}
    >
      {direction == 'left' ? '🠘' : '🠚'}
    </div>
  );
}
