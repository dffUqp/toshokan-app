import Slider from './partials/SeasonNowSlider';
import ProgressBar from '@ramonak/react-progress-bar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SeasonNow = (): JSX.Element => {
  const { t } = useTranslation();
  const [progressBar, setProgressBar] = useState<number>(0);

  return (
    <div className="mb-12 mx-auto">
      <ProgressBar
        completed={progressBar}
        isLabelVisible={false}
        height="4px"
        bgColor="#891cc2"
        baseBgColor="#a6a6b2"
        transitionDuration="0.5s"
        borderRadius="0px"
      />
      <div className="container">
        <h1 className="text-xxl mt-6 font-bold">{t('seasonNow.title')}</h1>
        <Slider setProgressBar={setProgressBar} />
      </div>
    </div>
  );
};

export default SeasonNow;
