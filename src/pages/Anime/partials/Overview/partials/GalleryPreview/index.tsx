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
      <div className="flex flex-wrap gap-1">
        {gallery.map((item, index) => (
          <ImageWithPlaceholder
            key={index}
            src={item.jpg.image_url}
            alt="anime"
            className="w-[75px] h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
