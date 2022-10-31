import { Link } from 'react-router-dom';

const AnimeNavigation = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-evenly mt-auto pt-2">
      <Link
        to=""
        className="text-base capitalize duration-200 notMobilehover:hover:text-purple md:text-md m-fold:text-sm"
      >
        Overview
      </Link>
      <Link
        to="staff"
        className="text-base capitalize duration-200 notMobilehover:hover:text-purple md:text-md m-fold:text-sm "
      >
        Staff
      </Link>
      <Link
        to="gallery"
        className="text-base capitalize duration-200 notMobilehover:hover:text-purple md:text-md m-fold:text-sm "
      >
        Gallery
      </Link>
      <Link
        to="characters"
        className="text-base capitalize duration-200 notMobilehover:hover:text-purple md:text-md m-fold:text-sm "
      >
        Characters
      </Link>
    </nav>
  );
};

export default AnimeNavigation;
