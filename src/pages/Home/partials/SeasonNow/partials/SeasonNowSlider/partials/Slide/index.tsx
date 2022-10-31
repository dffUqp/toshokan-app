import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import { IAnime } from '@ts/AnimeInterface';
import { beautifyUrl } from '@utils/beautifyUrl';
import { Link } from 'react-router-dom';

type slideProps = {
  slide: IAnime;
};

const SeasonNowSlide = ({ slide }: slideProps): JSX.Element => {
  return (
    <article>
      <Link
        to={`/${window.locale}/anime/${slide.mal_id}/${beautifyUrl(
          slide.title
        )}`}
        className="flex flex-col items-center justify-center"
      >
        <ImageWithPlaceholder
          src={slide.images.jpg.image_url}
          className="w-[175px] h-[245px] sm:w-[135px] sm:h-[200px] object-cover"
          alt="anime canvas"
        />

        <span className="block whitespace-nowrap overflow-hidden text-ellipsis max-w-[165px] sm:w-[125px] ">
          {slide.title}
        </span>
      </Link>
    </article>
  );
};

export default SeasonNowSlide;
