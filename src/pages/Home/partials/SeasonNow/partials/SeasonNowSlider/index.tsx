import { Dispatch } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from 'react-query';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import './Slider.scss';

import { IAnime } from '@ts/AnimeInterface';
import TitlesService from '@services/AnimeService';

import Slide from './partials/Slide';
import { Swiper as swiper } from 'swiper/types';
import SeasonNowSkeleton from './partials/Skeletons/SeasonNowSkeleton';
import { swiperSettings } from './plugins/swiperSettings';

type SliderProps = {
  setProgressBar: Dispatch<React.SetStateAction<number>>;
};

const limit: number = 15;

const Slider = ({ setProgressBar }: SliderProps): JSX.Element => {
  const { data, isLoading } = useQuery('upcoming titles', () =>
    TitlesService.getSeasonsNowTitles(limit)
  );

  const onSlideChange = (slider: swiper) => {
    let slideProgress = Math.ceil(slider.progress * 100);
    if (slideProgress >= 88) {
      slideProgress = 100;
    }
    if (slideProgress <= 9) {
      slideProgress = 0;
    }

    setProgressBar(slideProgress);
  };

  return (
    <Swiper
      {...swiperSettings}
      className="swiper"
      onSlideChange={onSlideChange}
    >
      {isLoading
        ? [...new Array(10)].map((_, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <SeasonNowSkeleton className="w-auto" />
            </SwiperSlide>
          ))
        : data?.data.map((item: IAnime) => (
            <SwiperSlide className="swiper-slide" key={item.mal_id}>
              <Slide slide={item} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default Slider;
