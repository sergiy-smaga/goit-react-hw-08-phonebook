import { ListElement } from '../ListElement/ListElement';
import useItemsSlice from 'redux/itemsSlice/itemsHook';

export const ContactList = () => {
  const { filteredItems } = useItemsSlice();

  return (
    <ul>
      {filteredItems.map(contact => (
        <ListElement key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
