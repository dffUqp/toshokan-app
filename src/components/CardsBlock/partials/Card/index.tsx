import { IAnime } from '@ts/AnimeInterface';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import styles from './Card.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import { beautifyUrl } from '@utils/beautifyUrl';

import TooltipCard from '../TooltipCard';

type cardProps = {
  card: IAnime;
  disabled: boolean;
};

const Card = ({ card, disabled }: cardProps): JSX.Element => {
  const locale = window.locale;

  return (
    <article
      tabIndex={card.mal_id}
      className=" lessMd:w-full lessMd:h-full w-[190px] h-[348px]"
    >
      <Tippy
        placement="right"
        arrow={false}
        delay={[400, 200]}
        offset={[-25, 10]}
        content={<TooltipCard {...card} />}
        disabled={disabled}
      >
        <Link
          className="mobileMd:flex w-full"
          to={`/${locale}/anime/${card.mal_id}/${beautifyUrl(card.title)}`}
        >
          <ImageWithPlaceholder
            src={card.images.jpg.image_url}
            className={styles['card-img']}
            alt="anime canvas"
          />

          <div className={styles['block-card-info']}>
            <span className={styles['card-title']}>{card.title}</span>

            <span className={styles['card-desc']}>{card.synopsis}</span>

            <span className={styles['card-fold-desc']}>{card.synopsis}</span>

            <div className={styles['card-section-score-type-year']}>
              <div className="mobileMd:flex mobileMd:gap-2 items-center">
                <span className={styles['card-section-first-span']}>Type:</span>
                <span className="m-sm-:text-md mb-2">{card.type}</span>
              </div>

              <div className="flex gap-2 items-center">
                <BsFillStarFill className="fill-orange mobileMd:hidden" />
                <div className="mobileMd:flex mobileMd:gap-2">
                  <span className={styles['card-section-first-span']}>
                    Score:
                  </span>
                  <span className="m-sm-:text-md mb-2">{card.score}</span>
                </div>
              </div>

              <div className="mobileMd:flex mobileMd:gap-2">
                <span className={styles['card-section-first-span']}>Year:</span>
                <span className="m-sm-:text-md mb-2">
                  {card.year === null ? 'unknown' : card.year}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Tippy>
    </article>
  );
};

export default Card;
