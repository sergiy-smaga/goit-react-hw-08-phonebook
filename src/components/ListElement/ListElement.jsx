import PropTypes from 'prop-types';
import { StyledLi } from './StyledListElement';
import { useDeleteItemMutation } from 'redux/itemsSlice/itemsSlice';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ListElement = ({ contact }) => {
  const { name, number, id } = contact;

  const [deleteItem, { isLoading }] = useDeleteItemMutation();

  return (
    <StyledLi>
      <p>
        {name} : {number}
      </p>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        disabled={isLoading}
        onClick={() => deleteItem(id)}
        aria-label="delete"
      >
        {isLoading ? '...Deleting' : 'Delete'}
      </Button>
    </StyledLi>
  );
};

ListElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
