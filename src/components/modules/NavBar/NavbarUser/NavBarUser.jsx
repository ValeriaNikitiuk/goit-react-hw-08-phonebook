import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../../../shared/hooks/useAuth';
import s from './NavBar.module.css';

const NavBarUser = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <h2> Hello dear {user.name}</h2>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default NavBarUser;
