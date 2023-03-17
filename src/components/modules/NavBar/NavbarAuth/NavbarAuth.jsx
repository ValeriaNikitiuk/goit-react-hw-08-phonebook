import { NavLink } from 'react-router-dom';
import s from './NavbarAuth.module.css';

const getFullName = ({ isActive }) => {
  return isActive ? `${s.glassbtn_activ}  ${s.glassbtn}` : s.glassbtn;
};
const NavbarAuth = () => {
  return (
    <div className={s.container}>
      <NavLink to="/register" className={getFullName}>
        Register
      </NavLink>
      <NavLink to="/login" className={getFullName}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
