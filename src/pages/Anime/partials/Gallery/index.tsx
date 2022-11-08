import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import { useAnime } from '@pages/Anime';

const Gallery = (): JSX.Element => {
  const { galleryData } = useAnime();

  if (!galleryData?.data || galleryData?.data.length === 0) {
    return <div>Nothing Found</div>;
  }

  return (
    <div className="flex flex-wrap gap-5 max-w-[1100px] w-full mx-auto md:justify-center content-start">
      {galleryData.data.map((item, index) => (
        <ImageWithPlaceholder
          key={index}
          src={item.jpg.large_image_url}
          alt="anime"
          className="w-[200px] max-h-[315px]"
        />
      ))}
    </div>
  );
};

export default Gallery;
