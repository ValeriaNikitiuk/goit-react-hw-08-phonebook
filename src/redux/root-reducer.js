import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";
import { contactsReducer } from './sliceContact'
import { filterReducer } from './filterSlice'


export const rootReducer  = combineReducers({
  reducer: {
    auth:authReducer,
    contacts: contactsReducer,
      filter: filterReducer,
  },
 
    });