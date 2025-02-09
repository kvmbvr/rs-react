import Results from '../components/Results';
import Search from '../components/Search';
import useSearchQuery from '../hooks/useSearchQuery';

function Home() {
  const [localStorageValue] = useSearchQuery('inputValue', '');
  return (
    <>
      <Search />
      <Results query={localStorageValue} />
    </>
  );
}

export default Home;
