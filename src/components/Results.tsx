import { useEffect, useState } from 'react';
import APIResponse from '../types/APIResponse';
import Card from './Card';
import Spinner from './Spinner';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `https://swapi.dev/api/people/?search=${query}`;
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

  if (data.results.length <= 0) return <p>No items that for this query</p>;

  return (
    <div className="results">
      <h2>Books</h2>
      <ul className="books">
        {data.results.map((item) => (
          <Card person={item} key={item.url} />
        ))}
      </ul>
    </div>
  );
};

export default Results;
