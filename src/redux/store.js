import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice/itemsSlice';
import { combineReducers } from 'redux';
import { filterReducer } from './filterSlice/filterSlice';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
