import StaffItem from '@components/StaffItem';
import { Link } from 'react-router-dom';
import { IAnimeStaff } from '@ts/AnimeInterface';

type StaffPreviewProps = {
  staff: IAnimeStaff[] | undefined;
};

const StaffPreview = ({ staff }: StaffPreviewProps): JSX.Element | null => {
  if (!staff || staff?.length === 0) {
    return null;
  }

  const formatedStaff = staff.slice(0, 6);

  return (
    <div className="flex flex-col gap-y-2">
      <Link to="staff" className="text-lg capitalize">
        Staff
      </Link>
      <div className="grid grid-cols-2 gap-5 xl:grid-cols-none">
        {formatedStaff.map((item, index) => (
          <StaffItem staff={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StaffPreview;
