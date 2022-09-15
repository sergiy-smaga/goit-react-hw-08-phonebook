import { useSelector } from 'react-redux';

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  return { isLoggedIn, user, isRefreshingUser };
};
