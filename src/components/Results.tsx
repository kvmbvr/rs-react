import { useEffect, useState } from 'react';
import APIResponse from '../types/APIResponse';
import Card from './Card';
import Spinner from './Spinner';

type ResultsProps = {
  query: string;
};

const Results = ({ query }: ResultsProps) => {
  const [data, setData] = useState<APIResponse>({
    page: {
      pageNumber: 0,
      pageSize: 0,
      numberOfElements: 0,
      totalElements: 0,
      totalPages: 0,
      firstPage: false,
      lastPage: false,
    },
    sort: {},
    books: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `https://stapi.co/api/v2/rest/book/search?pageNumber=1&pageSize=10`;

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) return <Spinner />;

  return (
    <div className="results">
      <h2>Books</h2>
      <ul className="books">
        {data.books.map((item) => (
          <Card book={item} key={item.uid} />
        ))}
      </ul>
    </div>
  );
};

export default Results;
