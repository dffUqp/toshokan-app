import { IAnime } from '@ts/AnimeInterface';
import { useIsMd } from '@hooks/useCurrentBreakpoints';
import { useState, useEffect } from 'react';
import AnimeNavigation from './partials/AnimeNavigation';
import ImageWithPlaceholder from '@components/ImageWithPlaceholder';

type MainInfoProps = {
  anime: IAnime;
};

const MainInfo = ({ anime }: MainInfoProps): JSX.Element => {
  const [formatedSinopsis, setFormatedSinopsis] = useState<string>(
    anime?.synopsis ?? ''
  );

  const isMd = useIsMd();

  const descriptionLengthToggle = () => {
    if (isMd || !(formatedSinopsis.length > 833)) {
      setFormatedSinopsis(anime?.synopsis ?? '');
    } else {
      setFormatedSinopsis(anime?.synopsis.substring(0, 830) + '...');
    }
  };

  useEffect(() => {
    descriptionLengthToggle();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMd]);

  return (
    <div className="flex md:flex-col gap-5 md:items-center">
      <ImageWithPlaceholder
        src={anime?.images.jpg.image_url}
        className="max-w-[230px] h-[320px]"
        alt="anime canvas"
      />
      <div className="flex flex-col bg-light-gray-opacity p-3 w-full">
        <h1 className="text-lg">{anime?.title}</h1>

        <p className="text-base text-contrast-gray my-3 notMobilehover:hover:text-white duration-300 md:text-md">
          {formatedSinopsis}
        </p>
        {formatedSinopsis.length === 833 && (
          <div
            onClick={() => descriptionLengthToggle()}
            className="flex justify-center py-1 h-full bg-gray-opacity duration-300 opacity-0 mt-[-35px] hover:opacity-100 cursor-pointer"
          >
            Read More
          </div>
        )}

        <AnimeNavigation />
      </div>
    </div>
  );
};

export default MainInfo;
