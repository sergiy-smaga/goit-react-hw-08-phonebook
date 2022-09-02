import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, { payload }) {
      state.push({ ...payload, id: nanoid() });
    },
    deleteItem(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { addItem, deleteItem } = itemsSlice.actions;
