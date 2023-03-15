import { Outlet } from 'react-router-dom';
import { AppBar } from '../modules/AppBar';

import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
