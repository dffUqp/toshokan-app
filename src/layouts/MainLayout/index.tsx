import Footer from '@layouts/MainLayout/partials/Footer';
import Header from '@layouts/MainLayout/partials/Header';
import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
