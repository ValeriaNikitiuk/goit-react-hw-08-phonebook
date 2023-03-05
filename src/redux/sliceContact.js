import { createSlice } from "@reduxjs/toolkit";
import {addContact,deleteContact,fetchContact} from '../redux/operations'


const onReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload
}
const contatsSlice = createSlice({
    name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
 
  extraReducers: {     
    [fetchContact.pending](state) {
      state.isLoading = true;
    },
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContact.rejected]: onReject,

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: onReject,

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
     [deleteContact.rejected]: onReject,

    },
})

export const  contactsReducer = contatsSlice.reducer;
