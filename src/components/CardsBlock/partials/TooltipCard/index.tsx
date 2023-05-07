import { IAnime } from '@ts/AnimeInterface';
import { Link } from 'react-router-dom';
import styles from './TooltipCard.module.scss';

const TooltipCard = (card: IAnime): JSX.Element => {
  const genresNotFound = (
    <span className="text-contrast-gray text-base">genres not found</span>
  );
  const themesNotFound = (
    <span className="text-contrast-gray text-base">themes not found</span>
  );

  return (
    <div className="p-4 flex flex-col gap-y-2">
      <Link to="#" className={styles.title}>
        {card.title}
      </Link>

      <p className={styles.desc}>{card.synopsis}</p>

      <ul className={styles['content-list']}>
        <span>Type:</span>

        {card.type && (
          <li className="relative">
            <span className={styles.link}>{card.type}</span>
          </li>
        )}
        {card.year && (
          <li className="relative">
            <span className={styles.link}>{card.year}</span>
          </li>
        )}
        {card.status && (
          <li className="relative">
            <span className={styles.link}>{card.status}</span>
          </li>
        )}
      </ul>

      <ul className={styles['content-list']}>
        <span>Genres:</span>

        {card.genres.length
          ? card.genres.map((item) => (
              <li key={item.mal_id} className="relative">
                <span className={styles.link}>{item.name}</span>
              </li>
            ))
          : genresNotFound}
      </ul>

      <ul className={styles['content-list']}>
        <span>Themes:</span>

        {card.themes.length
          ? card.themes.map((item) => (
              <li key={item.mal_id} className="relative">
                <span className={styles.link}>{item.name}</span>
              </li>
            ))
          : themesNotFound}
      </ul>
    </div>
  );
};

export default TooltipCard;
