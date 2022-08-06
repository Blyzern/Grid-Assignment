import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData: () => {},
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getData, setData, setIsLoading } = homeSlice.actions;

export default homeSlice.reducer;
