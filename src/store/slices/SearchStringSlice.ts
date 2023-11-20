import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchString: localStorage.getItem('searchString') || '',
};

export const searchStringSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },
});

export const { setSearchString } = searchStringSlice.actions;
export default searchStringSlice.reducer;
