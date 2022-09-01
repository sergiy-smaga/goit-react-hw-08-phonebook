import PropTypes from 'prop-types';
import { StyledLi } from './StyledListElement';
import useItemsSlice from 'redux/itemsSlice/itemsHook';

export const ListElement = ({ contact }) => {
  const { name, number, id } = contact;
  const { deleteItem } = useItemsSlice();

  return (
    <StyledLi>
      <p>
        {name} : {number}
      </p>
      <button onClick={() => deleteItem(id)}>delete</button>
    </StyledLi>
  );
};

ListElement.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
