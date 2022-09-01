import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
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
