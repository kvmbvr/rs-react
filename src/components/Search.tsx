import { FormEvent, useState } from 'react';

type SearchProps = {
  setLocalStorageValue: (query: string) => void;
  localStorageValue: string;
};

const Search = ({ setLocalStorageValue, localStorageValue }: SearchProps) => {
  const [value, setValue] = useState(localStorageValue || '');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleClick = () => {
    setLocalStorageValue(value);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Type something"
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
};

export default Search;
