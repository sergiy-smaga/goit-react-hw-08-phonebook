import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './itemsSlice';
const getItems = state => state.contacts.items;

const useItemsSlice = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const handleAddItem = data => dispatch(addItem(data));
  const handleDeleteItem = id => dispatch(deleteItem(id));
  return { items, addItem: handleAddItem, deleteItem: handleDeleteItem };
};

export default useItemsSlice;
