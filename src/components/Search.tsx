import { Component, FormEvent } from 'react';
import Results from './Results';
import APIResponse from '../types/APIResponse';
import Spinner from './Spinner';

type SearchState = {
  inputValue: string;
  loading: boolean;
  data: APIResponse;
};

class Search extends Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      inputValue: '',
      loading: false,
      data: {
        page: {
          pageNumber: 0,
          pageSize: 0,
          numberOfElements: 0,
          totalElements: 0,
          totalPages: 0,
          firstPage: false,
          lastPage: false,
        },
        sort: {
          clauses: [],
        },
        books: [],
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(): void {
    try {
      const inputValue: string | undefined = localStorage
        .getItem('inputValue')
        ?.toString();
      if (inputValue) {
        this.setState({ inputValue: inputValue });
      }
    } catch (error) {
      console.error('Error reading from localStorage', error);
    }
  }

  handleChange(e: FormEvent<HTMLInputElement>): void {
    this.setState({ inputValue: e.currentTarget.value });
  }

  async handleClick(): Promise<void> {
    this.setState({ loading: true });
    localStorage.setItem('inputValue', this.state.inputValue);
    try {
      const response = await fetch(
        `https://stapi.co/api/v2/rest/book/search?pageNumber=1&pageSize=10`
      );
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      this.setState({ data: data, loading: false });
    } catch (error) {
      console.error('API Error:', error);
    }
  }

  render() {
    return (
      <>
        <div className="search">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something"
          />
          <button onClick={this.handleClick}>Search</button>
        </div>

        {this.state.loading ? <Spinner /> : <Results data={this.state.data} />}
      </>
    );
  }
}

export default Search;
