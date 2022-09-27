import { Outlet } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';
import { Container, StyledLink } from './StyledAppBar';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <header>
        <nav>
          {isLoggedIn ? (
            <>
              <StyledLink to="/" end>
                Main Page
              </StyledLink>
              <StyledLink to="/contacts">Contact List</StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink to="/" end>
                Main Page
              </StyledLink>
              <StyledLink to="/register">Registration</StyledLink>
              <StyledLink to="/login">LogIn</StyledLink>
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
