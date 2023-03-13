import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import authReducer from "./auth/auth-slice";

import { contactsReducer } from '../redux/sliceContact'
import { filterReducer } from '../redux/filterSlice'
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key: 'root',
    storage,
    whitelist: ['token']
}
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

 const rootReducer  = combineReducers({
  reducer: {
    auth:persistedAuthReducer,
    contacts: contactsReducer,
      filter: filterReducer,
  },
 
 });
    
export default rootReducer;