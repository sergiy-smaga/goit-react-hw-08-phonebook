import { useAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn, isRefreshingUser } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshingUser;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
