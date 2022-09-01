import PropTypes from 'prop-types';
import { ListElement } from '../ListElement/ListElement';
import useItemsSlice from 'redux/itemsSlice/itemsHook';

export const ContactList = ({ filter }) => {
  const { items } = useItemsSlice();

  return (
    <ul>
      {items
        .filter(item =>
          item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(contact => (
          <ListElement key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};
