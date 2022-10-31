import { useState } from 'react';

type ImageWithPlaceholderPorps = {
  src: string;
  className?: string;
  alt: string;
};

const ImageWithPlaceholder = ({
  src,
  className,
  alt,
}: ImageWithPlaceholderPorps) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const placeholderSrc = 'images/imagePreloader.webp';

  return (
    <img
      onLoad={() => setImgLoaded(true)}
      className={className}
      src={imgLoaded ? src : placeholderSrc}
      alt={alt}
    />
  );
};

export default ImageWithPlaceholder;
