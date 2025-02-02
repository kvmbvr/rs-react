import { Component } from 'react';
import APIResponse from '../types/APIResponse';

type ResultsType = {
  data: APIResponse;
};

class Results extends Component<ResultsType> {
  render() {
    return (
      <div className="results">
        <h2>Items</h2>
        <ul>
          {this.props.data.books.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Results;
