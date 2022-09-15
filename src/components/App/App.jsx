import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { useAuth } from 'redux/auth/auth-selectors';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

import AppBar from 'components/AppBar/AppBar';
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshingUser } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route
          index
          element={<PublicRoute component={<h1>Welcome to contact book</h1>} />}
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<RegisterView />}
            />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LoginView />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
