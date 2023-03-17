import { useAuth } from '../../shared/hooks/useAuth';
import { Link } from 'react-router-dom';
import s from '../allStyles.module.css';

export const Navigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={s.homeContainer}>
      {/* <Link className={s.home} to="/">
        Home
      </Link> */}
      {isLoggedIn && (
        <Link className={s.link} to="/contacts">
          Contacts
        </Link>
      )}
    </div>
  );
};
