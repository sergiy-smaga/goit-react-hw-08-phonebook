import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './itemsSlice';

const getItems = state => state.contacts.items;
const getFilteredItems = ({ contacts }) => {
  const { items, filter } = contacts;
  return items.filter(item =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};
const useItemsSlice = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const filteredItems = useSelector(getFilteredItems);
  const handleAddItem = data => dispatch(addItem(data));
  const handleDeleteItem = id => dispatch(deleteItem(id));
  return {
    filteredItems,
    items,
    addItem: handleAddItem,
    deleteItem: handleDeleteItem,
  };
};

export default useItemsSlice;
