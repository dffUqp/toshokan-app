import CardsBlock from '@components/CardsBlock';
import { IDataPagination, IError, IAnime } from '@ts/AnimeInterface';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import TitlesService from '@services/AnimeService';

type SearchCardsBlockProps = {
  searchValue: string;
};

const SearchCardsBlock = ({
  searchValue,
}: SearchCardsBlockProps): JSX.Element => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState<IAnime[]>([]);
  const [pages, setPages] = useState<IDataPagination | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { ref: observerRef, inView: myElemVisible } = useInView({
    rootMargin: '0px 0px 130px 0px',
  });

  useEffect(() => {
    setCurrentPage((currentPage) =>
      myElemVisible ? currentPage + 1 : currentPage
    );
  }, [myElemVisible]);

  const { isLoading, isFetching } = useQuery(
    ['top anime', currentPage],
    () => TitlesService.getSearchedTitles(searchValue, currentPage),
    {
      onSuccess: ({ data, pagination }) => {
        if (pages) {
          setSearchData((searchData) => [...searchData, ...data]);
        } else {
          setSearchData([...data]);
        }
        setPages(pagination);
      },
      onError: (error: IError) => {
        alert(error.message);
      },
    }
  );

  return (
    <div className="container">
      <div className="pb-4 flex gap-1 items-center">
        <h1 className="text-xxl font-bold lessMd:text-lg">
          {t('search_block.title')}
        </h1>
        <div className="w-[50px] m-w-[75px] h-full bg-purple rounded-full flex items-center justify-center text-white text-base">
          {pages?.items.total}
        </div>
      </div>
      {pages?.items.total === 0 ? (
        <div className="text-contrast-gray">{t('search_block.notfound')}</div>
      ) : (
        <>
          <CardsBlock data={searchData} isLoading={isLoading || isFetching} />
          {!pages?.has_next_page || isLoading ? null : (
            <div ref={observerRef} className="w-full h-[20px]" />
          )}
        </>
      )}
    </div>
  );
};

export default SearchCardsBlock;
