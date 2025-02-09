type PaginationProps = {
  currentPage: number;
  next: number | null;
  previous: number | null;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  next,
  previous,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="pagination-buttons">
      <button
        onClick={() => previous && onPageChange(previous)}
        disabled={!previous}
      >
        Previous
      </button>
      <p>{currentPage}</p>
      <button onClick={() => next && onPageChange(next)} disabled={!next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
