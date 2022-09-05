import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// setup object
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}