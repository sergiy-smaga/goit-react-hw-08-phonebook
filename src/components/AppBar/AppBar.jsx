import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <NavLink to="/">Main Page</NavLink>
        {isLoggedIn ? (
          <div>
            <NavLink to="/contacts">Contact List</NavLink>
            <UserMenu />
          </div>
        ) : (
          <div>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/login">LogIn</NavLink>
          </div>
        )}
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
