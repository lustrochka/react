import { configureStore } from '@reduxjs/toolkit';
import Form1DataSlice from './slices/Form1Data';
import Form2DataSlice from './slices/Form2Data';

export const store = configureStore({
  reducer: {
    data: Form1DataSlice,
    data2: Form2DataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
