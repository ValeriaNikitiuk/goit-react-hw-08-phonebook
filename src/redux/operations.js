import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

axios.defaults.baseURL = 'https://63ffc54463e89b0913a2a54c.mockapi.io';


export const fetchContact = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try{
      const response = await axios.get('/contacts');
    return response.data;}
  catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  } }
);


export const addContact  = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
       const response = await axios.post('/contacts', {name,number});
    return response.data; 
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  } }
    
  
)


export const deleteContact  = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
       const response = await axios.delete(`/contacts/${id}`);
    return response.data;
    }
    catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
  }
);



