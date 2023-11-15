import { configureStore } from '@reduxjs/toolkit';
import SearchStringSlice from './slices/SearchStringSlice';

export const store = configureStore({
  reducer: {
    search: SearchStringSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
