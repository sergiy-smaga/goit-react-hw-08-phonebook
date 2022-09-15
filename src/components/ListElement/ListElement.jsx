import PropTypes from 'prop-types';
import { StyledLi } from './StyledListElement';
import { useDeleteItemMutation } from 'redux/itemsSlice/itemsSlice';

export const ListElement = ({ contact }) => {
  const { name, number, id } = contact;

  const [deleteItem, { isLoading }] = useDeleteItemMutation();

  return (
    <StyledLi>
      <p>
        {name} : {number}
      </p>
      <button disabled={isLoading} onClick={() => deleteItem(id)}>
        {isLoading ? '...Удаляю' : 'Удалить'}
      </button>
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
