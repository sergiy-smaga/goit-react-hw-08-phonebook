import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const itemsApi = createApi({
  reducerPath: 'items',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['item'],
  endpoints: builder => ({
    getItems: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: ['item'],
    }),
    addItem: builder.mutation({
      query: item => ({ url: '/contacts', method: 'POST', data: item }),
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
