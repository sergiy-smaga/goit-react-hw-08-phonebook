import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6311e290f5cba498da877e7b.mockapi.io',
  }),
  tagTypes: ['item'],
  endpoints: builder => ({
    getItems: builder.query({
      query: () => '/contacts',
      providesTags: ['item'],
    }),
    addItem: builder.mutation({
      query: item => ({ url: '/contacts', method: 'POST', body: item }),
      invalidatesTags: ['item'],
    }),
    deleteItem: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['item'],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemMutation, useDeleteItemMutation } =
  itemsApi;

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const itemsSlice = createSlice({
//   name: 'items',
//   initialState,
//   reducers: {
//     addItem(state, { payload }) {
//       state.push({ ...payload, id: nanoid() });
//     },
//     deleteItem(state, { payload }) {
//       return state.filter(({ id }) => id !== payload);
//     },
//   },
// });

// export const itemsReducer = itemsSlice.reducer;
// export const { addItem, deleteItem } = itemsSlice.actions;
