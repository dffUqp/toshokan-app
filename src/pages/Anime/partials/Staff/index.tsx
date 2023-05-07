import StaffItem from '@components/StaffItem';
import { useAnime } from '@pages/Anime';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { IAnimeStaff } from '@ts/AnimeInterface';

const Staff = (): JSX.Element => {
  const { staffData } = useAnime();

  const [formattedStaff, setFormattedStaff] = useState<IAnimeStaff[]>([]);
  const { ref: observerRef, inView: myElemVisible } = useInView({
    rootMargin: '0px 0px 130px 0px',
  });

  useEffect(() => {
    if (staffData?.data && myElemVisible) {
      const { data } = staffData;

      setFormattedStaff((elem) =>
        data.length ?? 0 > 20 ? data.slice(0, elem.length + 20) : data
      );
    }
  }, [myElemVisible, staffData]);

  if (!staffData?.data || staffData?.data.length === 0) {
    return <div>Nothing Found</div>;
  }

  return (
    <div className="flex flex-col mx-auto max-w-[950px] w-full">
      <div className="grid grid-cols-2 gap-10 xl:grid-cols-none">
        {formattedStaff.map((item, index) => (
          <StaffItem staff={item} key={index} />
        ))}
      </div>
      {staffData?.data.length !== formattedStaff.length && (
        <div ref={observerRef} />
      )}
    </div>
  );
};

export default Staff;
