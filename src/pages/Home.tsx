import Results from '../components/Results';
import Search from '../components/Search';
import useSearchQuery from '../hooks/useSearchQuery';

function Home() {
  const [localStorageValue, setLocalStorageValue] = useSearchQuery(
    'inputValue',
    ''
  );

  return (
    <>
      <Search setQuery={setLocalStorageValue} />
      <Results query={localStorageValue} />
    </>
  );
}

export default Home;
