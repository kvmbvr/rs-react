import { Component, FormEvent } from 'react';

type SearchState = {
  inputValue: string;
};

class Search extends Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { inputValue: '' };
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

  handleClick(): void {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Type something"
        />
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;
