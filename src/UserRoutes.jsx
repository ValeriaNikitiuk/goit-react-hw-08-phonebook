import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterPage = lazy(() =>
  import('./pages/Registerage/RegisterForm/RegisterPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
