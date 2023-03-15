
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {contactsReducer} from './Contacts/sliceContact';
import {filterReducer} from './Contacts/filterSlice';
import {authReducer}  from '../redux/auth/auth-slice';
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistReduser = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
    auth: persistReduser,
    contacts: contactsReducer,
    filter: filterReducer,
  },
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);


