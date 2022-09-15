import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';
import { Container } from './StyledAppBar';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Main Page</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts">Contact List</NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/register">Registration</NavLink>
              <NavLink to="/login">LogIn</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
