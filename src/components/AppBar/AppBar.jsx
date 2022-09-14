import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  return (
    <>
      <header>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/contacts">Contact List</NavLink>
        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/login">LogIn</NavLink>
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
