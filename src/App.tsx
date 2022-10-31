import Preloader from '@components/UI/Loaders/Preloader';
import React from 'react';
import AppRoutes from './router/AppRoutes';

const LocaleFrame = React.lazy(() => import('@components/LocaleFrame'));

function App() {
  return (
    <div className="wrapper">
      <AppRoutes />

      <React.Suspense fallback={<Preloader />}>
        <LocaleFrame />
      </React.Suspense>
    </div>
  );
}

export default App;
