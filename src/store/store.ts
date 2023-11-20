import { configureStore } from '@reduxjs/toolkit';
import SearchStringSlice from './slices/SearchStringSlice';
import ItemsPerPageSlice from './slices/ItemsPerPageSlice';
import flagsSlice from './slices/flagsSlice';
import { beersApi } from '../modules/API/Api';

export const store = configureStore({
  reducer: {
    search: SearchStringSlice,
    value: ItemsPerPageSlice,
    flags: flagsSlice,
    [beersApi.reducerPath]: beersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
