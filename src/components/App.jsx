import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './modules/RestrictedRoute';
import { RoutePrivate } from '../components/modules/RoutePrivate';
import { refreshUser } from '../redux/auth/auth-operations';
import { useAuth } from '../components/shared/hooks/useAuth';
import { Layout } from '../components/modules/Layout';

const HomePage = lazy(() => import('../pages/HomePage/Home'));
const RegisterPage = lazy(() =>
  import('../pages/Registerage/RegisterForm/RegisterForm/RegisterPage')
);
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const ContactPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={<RoutePrivate redirectTo="/" component={<ContactPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
