import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '10',
};

export const itemsPerPageSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = itemsPerPageSlice.actions;
export default itemsPerPageSlice.reducer;
