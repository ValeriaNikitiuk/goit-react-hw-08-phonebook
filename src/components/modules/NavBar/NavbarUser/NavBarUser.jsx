import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../../../shared/hooks/useAuth';
import s from './NavBar.module.css';

const NavBarUser = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={s.contact}>
      <h2 className={s.text}>
        {' '}
        Hello dear {user.name}
        <img
          className={s.svg}
           src="https://svgsilh.com/svg/24037-e91e63.svg"
          width="20px"
        />
      </h2>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </button>
    </div>
  );
};

export default NavBarUser;
