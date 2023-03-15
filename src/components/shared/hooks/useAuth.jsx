import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefresh,
  selectLogin,
} from 'redux/auth/auth-selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLogin);
  const isRefreshing = useSelector(selectIsRefresh);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
