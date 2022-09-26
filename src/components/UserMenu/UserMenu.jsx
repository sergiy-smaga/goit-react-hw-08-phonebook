import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'redux/auth/auth-selectors';

import { StyledDiv } from './StyledUserMenu';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <StyledDiv>
      <p>Welcome, {user.name}</p>
      <IconButton type="button" onClick={handleClick}>
        <ExitToAppIcon />
      </IconButton>
    </StyledDiv>
  );
}
