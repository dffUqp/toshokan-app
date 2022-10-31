import SeacrhCardsBlock from '@pages/Search/partials/SeacrhCardsBlock';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = (): JSX.Element => {
  const [isVisible, setIsvisible] = useState<boolean>(false);
  let [searchParams] = useSearchParams();
  const searchValue = searchParams.get('q') || '';

  const refreshComponent = () => {
    setIsvisible(false);

    setTimeout(() => {
      setIsvisible(true);
    }, 0);
  };

  useEffect(() => {
    refreshComponent();
  }, [searchParams]);

  return (
    <div className="search">
      {isVisible && <SeacrhCardsBlock searchValue={searchValue} />}
    </div>
  );
};

export default Search;
