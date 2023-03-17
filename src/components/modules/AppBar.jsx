import { Navigator } from 'components/modules/NavBar/Navigator';
import NavbarAuth from 'components/modules/NavBar/NavbarAuth/NavbarAuth';
import { useAuth } from '../shared/hooks/useAuth';
import NavBarUser from 'components/modules/NavBar/NavbarUser/NavBarUser';
import s from './allStyles.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={s.navbar}>
      <Navigator />
      {isLoggedIn ? <NavBarUser /> : <NavbarAuth />}
    </div>
  );
};
