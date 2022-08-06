import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData: () => {},
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getData, setData } = homeSlice.actions;

export default homeSlice.reducer;
