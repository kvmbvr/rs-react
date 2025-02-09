import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import APIResponse from '../types/APIResponse';
import Card from './Card';
import Spinner from './Spinner';
import Pagination from './Pagination';

type ResultsProps = {
  query: string;
};

const Results = ({ query }: ResultsProps) => {
  const [data, setData] = useState<APIResponse>({
    count: 0,
    next: '',
    previous: '',
    results: [],
    created: '',
    edited: '',
    url: '',
  });

  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [page, setPage] = useState(
    parseInt(searchParams.get('page') || '1', 10)
  );

  const url = `https://swapi.dev/api/people/?search=${query}&page=${page}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, url]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    setPage(newPage);
  };

  if (loading) return <Spinner />;

  if (data.results && data.results.length <= 0)
    return <p>No items that for this query</p>;
  if (error) return <p>No items that for this query</p>;

  return (
    <div className="results">
      <div className="search-results">
        <h2>Search results</h2>
        <ul className="results-list">
          {data.results.map((item) => (
            <Link to={`/person/${encodeURIComponent(item.url)}`} key={item.url}>
              <Card person={item} />
            </Link>
          ))}
        </ul>
        <Pagination
          currentPage={page}
          next={data?.next ? page + 1 : null}
          previous={data?.previous ? page - 1 : null}
          onPageChange={handlePageChange}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Results;
