import { ListElement } from '../ListElement/ListElement';
import useItemsSlice from 'redux/itemsSlice/itemsHook';
import { StyledList } from './StyledContactList';
// import { useAuth } from 'redux/auth/auth-selectors';

export const ContactList = () => {
  const { filteredItems, error, isLoading } = useItemsSlice();
  // const { isLoggedIn } = useAuth();

  return (
    <>
      {error && (
        <p>
          Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте еще
          раз.
        </p>
      )}
      {isLoading ? (
        <b>Загружаем материалы</b>
      ) : (
        <StyledList>
          {filteredItems.map(contact => (
            <ListElement key={contact.id} contact={contact} />
          ))}
        </StyledList>
      )}
    </>
  );
};
