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
  refetchOnMountOrArgChange: true,
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
