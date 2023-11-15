import { configureStore } from '@reduxjs/toolkit';
import SearchStringSlice from './slices/SearchStringSlice';
import ItemsPerPageSlice from './slices/ItemsPerPageSlice';

export const store = configureStore({
  reducer: {
    search: SearchStringSlice,
    value: ItemsPerPageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
