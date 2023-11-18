import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
};

export const flagsSlice = createSlice({
  name: 'flag',
  initialState,
  reducers: {
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setIsLoaded } = flagsSlice.actions;
export default flagsSlice.reducer;
