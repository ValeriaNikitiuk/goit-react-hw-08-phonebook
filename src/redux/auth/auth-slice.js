
import { createSlice } from "@reduxjs/toolkit";
import { register, logOut, refreshUser, logIn} from "./auth-operations";




const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    //REGISTeR
    builder
      .addCase(register.fulfilled, (state, action) => {        
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
    
    //LOGIN
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
    
    //LOGOUT
    builder
      .addCase(logOut.fulfilled, (state) => {        
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
    
    //REFRESH USER!
      builder
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.token = null
      });
  },
});

export const authReducer = authSlice.reducer;




