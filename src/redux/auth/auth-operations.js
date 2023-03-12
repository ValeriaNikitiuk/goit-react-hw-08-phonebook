import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from './auth.js'

export const signup = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const {data: result} = await api.signup(data);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)