import { NavLink } from 'react-router-dom';
import NavbarAuth from '../NavBar/NavbarAuth/NavbarAuth';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <div>
      <NavLink className={s.link} to="/"></NavLink>
      <NavbarAuth />
    </div>
  );
};

export default NavBar;
