import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    name: '',
    age: '',
    email: '',
    password: '',
    gender: '',
  },
};

const Form2DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData2: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData2 } = Form2DataSlice.actions;
export default Form2DataSlice.reducer;
