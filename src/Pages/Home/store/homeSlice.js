import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData: () => {},
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getData, setLoading } = homeSlice.actions;

export default homeSlice.reducer;
