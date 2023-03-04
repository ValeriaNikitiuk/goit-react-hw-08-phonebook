import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

const SliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (_, { payload }) => {
      return payload;
    },
  }
});

export const { addFilter }  = SliceFilter.actions;
export const  filterReducer = SliceFilter.reducer;