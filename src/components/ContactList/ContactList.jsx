import { ListElement } from '../ListElement/ListElement';
import useItemsSlice from 'redux/itemsSlice/itemsHook';
import { StyledList } from './StyledContactList';

export const ContactList = () => {
  const { filteredItems } = useItemsSlice();

  return (
    <StyledList>
      {filteredItems.map(contact => (
        <ListElement key={contact.id} contact={contact} />
      ))}
    </StyledList>
  );
};
