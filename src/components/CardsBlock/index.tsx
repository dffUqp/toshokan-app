import Card from './partials/Card';
import styles from './CardsBlock.module.scss';
import { IAnime } from '@ts/AnimeInterface';
import { useIsMobileMd, useIsXl } from '@hooks/useCurrentBreakpoints';
import MobileSkeleton from './partials/Skeletons/MobileSkeleton';
import DescTabletSkeleton from './partials/Skeletons/DescTabletSkeleton';

type cardsBlockProps = {
  data: IAnime[];
  isLoading: boolean;
};

const CardsBlock = ({ data, isLoading }: cardsBlockProps): JSX.Element => {
  const xl = useIsXl();
  const mobileMd = useIsMobileMd();

  return (
    <div className="w-full">
      <div className={styles['cards-block']}>
        {data?.map((item: IAnime, index) => (
          <Card key={index} disabled={xl} card={item} />
        ))}
        {isLoading &&
          [...new Array(10)].map((_, index) =>
            mobileMd ? (
              <MobileSkeleton key={index} />
            ) : (
              <DescTabletSkeleton key={index} />
            )
          )}
      </div>
    </div>
  );
};

export default CardsBlock;
