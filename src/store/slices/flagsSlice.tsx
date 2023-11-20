import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
  isLoading: false,
};

export const flagsSlice = createSlice({
  name: 'flag',
  initialState,
  reducers: {
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsDetailLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoaded, setIsLoading, setIsDetailLoading } =
  flagsSlice.actions;
export default flagsSlice.reducer;
