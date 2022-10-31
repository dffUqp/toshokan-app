import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { lazy } from 'react';
import Preloader from '@components/UI/Loaders/Preloader';
import { Characters, Gallery, Overview, Staff } from '@pages/Anime/partials';

const Layout = lazy(() => import('@layouts/MainLayout'));
const Home = lazy(() => import('@pages/Home/index.'));
const Categories = lazy(() => import('@pages/Categories'));
const Random = lazy(() => import('@pages/Random'));
const Search = lazy(() => import('@pages/Search/Search'));
const Anime = lazy(() => import('@pages/Anime'));

declare global {
  interface Window {
    locale: string;
    disableScroll: () => void;
    enableScroll: () => void;
  }
}

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  window.locale = i18n.resolvedLanguage;

  const element = useRoutes([
    {
      path: `/${window.locale}`,
      element: (
        <React.Suspense fallback={<Preloader />}>
          <Layout />
        </React.Suspense>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: `category`,
          element: <Categories />,
        },
        {
          path: `random`,
          element: <Random />,
        },
        {
          path: `search`,
          element: <Search />,
        },
        {
          path: 'anime/:animeId/:animeName',
          element: <Anime />,
          children: [
            { index: true, element: <Overview /> },
            {
              path: 'gallery',
              element: <Gallery />,
            },
            {
              path: 'characters',
              element: <Characters />,
            },
            {
              path: 'staff',
              element: <Staff />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: (
        <Navigate to={`/${window.locale}`} state={{ from: location }} replace />
      ),
    },
  ]);

  return element;
};

export default AppRoutes;
