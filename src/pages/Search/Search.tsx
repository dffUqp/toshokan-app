import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchCardsBlock from './partials/SearchCardsBlock';

const Search = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let [searchParams] = useSearchParams();
  const searchValue = searchParams.get('q') || '';

  const refreshComponent = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  };

  useEffect(() => {
    refreshComponent();
  }, [searchParams]);

  return (
    <div className="search">
      {isVisible && <SearchCardsBlock searchValue={searchValue} />}
    </div>
  );
};

export default Search;
