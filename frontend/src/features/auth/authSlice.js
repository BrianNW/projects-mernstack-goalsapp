import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// Grab JWT and save to local storage

// Get user from localStorage. Use .parse to read from JSON string to object
const user = JSON.parse()


// setup object
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}