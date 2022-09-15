import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'redux/auth/auth-selectors';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}
