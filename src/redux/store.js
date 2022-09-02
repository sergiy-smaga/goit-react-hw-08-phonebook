import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice/itemsSlice';
import { combineReducers } from 'redux';
import { filterReducer } from './filterSlice/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const itemsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: persistReducer(itemsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
