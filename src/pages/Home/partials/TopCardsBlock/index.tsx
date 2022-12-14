import CardsBlock from '@components/CardsBlock';
import MyButton from '@components/UI/Buttons/MainButton';
import { IError, IAnime, IDataPagination } from '@ts/AnimeInterface';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import TitlesService from '@services/AnimeService';
import Spinner from '@components/UI/Loaders/Spinner';

const TopBlock = (): JSX.Element => {
  const [topTitles, setTopTitles] = useState<IAnime[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<IDataPagination>();

  const { t } = useTranslation();

  const { isLoading, isRefetching } = useQuery(
    ['top anime', page],
    () => TitlesService.getTopAnime(page),
    {
      onSuccess: ({ data, pagination }) => {
        setTopTitles([...topTitles, ...data]);
        setPagination(pagination);
      },
      onError: (error: IError) => {
        alert(error.message);
      },
    }
  );

  return (
    <div className="container flex flex-col items-center">
      <h1 className="flex text-xxl pb-4 font-bold self-start">
        {t('top_block.title')}
      </h1>

      <CardsBlock data={topTitles} isLoading={isRefetching || isLoading} />
      {pagination?.has_next_page && (
        <MyButton
          purple
          onClick={() => {
            setPage(page + 1);
          }}
          className="my-10 px-30 py-10 rounded-md sm:px-25 sm:py-3"
        >
          {isLoading ? <Spinner /> : <span>{t('topBlock.btnLoader')}</span>}
        </MyButton>
      )}
    </div>
  );
};

export default TopBlock;
