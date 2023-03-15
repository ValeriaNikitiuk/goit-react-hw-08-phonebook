import { createSlice } from '@reduxjs/toolkit';



const SliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: (_, { payload }) => {
      return payload;
    },
  }
});

export const { addFilter }  = SliceFilter.actions;
export const  filterReducer = SliceFilter.reducer;