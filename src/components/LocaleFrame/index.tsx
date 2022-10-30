import { i18nLanguages } from '@plugins/i18n';
import { useTranslation } from 'react-i18next';
import MyButton from '@components/UI/Buttons/MainButton';

const LocaleFrame = (): JSX.Element | null => {
  const { t, i18n } = useTranslation();

  if (localStorage.getItem('isOldUser') != null) {
    return null;
  } else {
    window.disableScroll();
  }

  const onChangeLng = (locale: string) => {
    i18n.changeLanguage(locale);
    localStorage.setItem('isOldUser', 'true');
    window.enableScroll();
  };

  return (
    <div className="flex justify-center items-center fixed w-full h-full bg-black z-10">
      <div className="container text-center">
        <h2 className="text-xxl font-bold mb-2">{t('locale.title')}</h2>
        <p className="mb-5">{t('locale.desc')}</p>
        {i18nLanguages.map((lng) => (
          <MyButton
            type="submit"
            key={lng.locale}
            onClick={() => onChangeLng(lng.locale)}
            className="px-4 py-2 border-gray rounded-md mx-2"
          >
            {t(lng.nativeName)}
          </MyButton>
        ))}
      </div>
    </div>
  );
};

export default LocaleFrame;
