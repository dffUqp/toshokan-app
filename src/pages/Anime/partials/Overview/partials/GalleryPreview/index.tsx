import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import { Link } from 'react-router-dom';
import { IAnimeGallery } from '@ts/AnimeInterface';

type GalleryPreviewProps = {
  gallery: IAnimeGallery[] | undefined;
};

const GalleryPreview = ({
  gallery,
}: GalleryPreviewProps): JSX.Element | null => {
  if (!gallery || gallery?.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-2">
      <Link to="gallery" className="text-lg capitalize">
        Gallery
      </Link>
      <div className="grid grid-cols-[repeat(auto-fit,_75px)] gap-1 sm:justify-center">
        {gallery.map((item, index) => (
          <ImageWithPlaceholder
            key={index}
            src={item.jpg.image_url}
            alt="anime"
            className="w-full h-[111px]"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
