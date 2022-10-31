import { useAnime } from '@pages/Anime';
import CharcPreview from './partials/CharcPreview';
import GalleryPreview from './partials/GalleryPreview';
import StaffPreview from './partials/StaffPreview';

const Overview = (): JSX.Element => {
  const { charactersData, galleryData, staffData } = useAnime();

  return (
    <div className="flex flex-col w-full max-w-[950px] mx-auto gap-y-10">
      <GalleryPreview gallery={galleryData?.data} />
      <CharcPreview character={charactersData?.data} />
      <StaffPreview staff={staffData?.data} />
    </div>
  );
};

export default Overview;
