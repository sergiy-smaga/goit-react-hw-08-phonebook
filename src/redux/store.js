import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice/itemsSlice';
import { combineReducers } from 'redux';

const contactsReducer = combineReducers({
  items: itemsReducer,
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
