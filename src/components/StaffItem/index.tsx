import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import { IAnimeStaff } from '@ts/AnimeInterface';

const StaffItem = ({ staff }: { staff: IAnimeStaff }) => {
  return (
    <a
      href={staff.person.url}
      target="_blank"
      rel="noreferrer"
      className="flex gap-x-2 bg-light-gray-opacity"
    >
      <div className="w-[60px]">
        <ImageWithPlaceholder
          src={staff.person.images.jpg.image_url}
          alt="staff"
          className="w-[60px] h-[90px] object-cover"
        />
      </div>
      <div className="flex flex-col p-[2px]">
        <span>{staff.person.name}</span>
        <span className="mt-auto text-md">{staff.positions[0]}</span>
      </div>
    </a>
  );
};

export default StaffItem;
