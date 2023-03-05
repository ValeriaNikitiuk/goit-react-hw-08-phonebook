import { createSlice } from "@reduxjs/toolkit";
import {addContact,deleteContact,fetchContact} from '../redux/operations'



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
      state.error = null;
    },
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;

    },

    [addContact.pending](state) {
      state.isLoading = true;
          state.error = null;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;

    },

    [deleteContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;

    }
}
})

export const  contactsReducer = contatsSlice.reducer;
