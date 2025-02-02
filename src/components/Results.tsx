import { Component } from 'react';
import APIResponse from '../types/APIResponse';

type ResultsType = {
  data: APIResponse;
};

class Results extends Component<ResultsType> {
  render() {
    return (
      <div className="results">
        <h2>Books</h2>
        <ul className="books">
          {this.props.data.books.map((item, index) => {
            return (
              <li className="book" key={index}>
                <p className="title">{item.title}</p>
                <p className="year">{item.publishedYear}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Results;
