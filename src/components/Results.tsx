import APIResponse from '../types/APIResponse';
import Card from './Card';

type ResultsType = {
  data: APIResponse;
};

const Results = ({ data }: ResultsType) => {
  return (
    <div className="results">
      <h2>Books</h2>
      <ul className="books">
        {data.books.map((item) => {
          return <Card book={item} key={item.uid} />;
        })}
      </ul>
    </div>
  );
};

export default Results;
