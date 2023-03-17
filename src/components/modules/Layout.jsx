import { Outlet } from 'react-router-dom';
import { AppBar } from '../modules/AppBar';

import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import s from './allStyles.module.css';

export const Layout = () => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};
