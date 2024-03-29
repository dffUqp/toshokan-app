import NavBar from '@components/NavBar';
import MyInput from '@components/UI/Inputs/MainInput';
import { searchValue as headerSearchValue } from '@atoms/searchValueAtom';
import { useRecoilState } from 'recoil';
import styles from './Header.module.scss';
import SideBar from './partials/SideBar';
import Burger from './partials/Burger';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputBlock from './partials/InputBlock';
import { useTranslation } from 'react-i18next';
import { KeyboardEvent, useState } from 'react';
import MyButton from '@components/UI/Buttons/MainButton';

const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const locale = window.locale;
  const [searchValue, setSearchValue] =
    useRecoilState<string>(headerSearchValue);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);

    !isNavOpen ? window.disableScroll() : window.enableScroll();
  };

  const pushQuery = () => {
    if (!searchValue || searchValue.length < 3) return;

    navigate(`search?q=${searchValue}`);
  };

  const onHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && pushQuery();
  };

  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const inputBlockProps = {
    setSearchValue,
    setIsActive,
    pushQuery,
    onHandler,
    searchValue,
    isActive,
  };

  return (
    <>
      <div className="h-[80px]"></div>
      <header className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 xl:hidden xl:flex-col">
          <div className="relative">
            <Link to={`/${locale}`}>
              <img
                onClick={handlerScrollUp}
                className="w-main-logo select-none"
                src="images/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <NavBar
              classNameForUl={'flex items-center xl:flex-col'}
              classNameForLi={styles.item}
              className="flex items-center"
            />
            <InputBlock inputBlockProps={inputBlockProps} />

            <MyButton purple className={styles.btn}>
              {t('header.sign_up')}
            </MyButton>
            <MyButton purple className={styles.btn}>
              {t('header.sign_in')}
            </MyButton>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="container mx-auto flex items-center px-5 py-4">
            <Link to={`/${locale}`}>
              <img
                className="w-mobile-tablet-logo"
                src="images/mob-logo.png"
                alt="logo"
              />
            </Link>

            <div className="w-full mr-6 relative">
              <div
                onClick={() => pushQuery()}
                className={styles.searchIcon}
              ></div>

              <MyInput
                value={searchValue}
                onKeyDown={onHandler}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full mx-3 p-4 h-12 text-gray-light bg-dark rounded-md"
                placeholder="Search..."
                type="search"
              />
            </div>

            <SideBar toggleNav={toggleNav} isNavOpen={isNavOpen}>
              <NavBar
                classNameForUl={'flex items-center xl:flex-col'}
                classNameForLi={styles['item-mobile']}
                className="xl:flex xl:flex-col xl:items-center"
                setIsNavOpen={setIsNavOpen}
              />

              <MyButton purple className={styles.btn}>
                {t('header.sign_up')}
              </MyButton>
              <MyButton purple className={styles.btn}>
                {t('header.sign_in')}
              </MyButton>
            </SideBar>

            <Burger toggleNav={toggleNav} isNavOpen={isNavOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
