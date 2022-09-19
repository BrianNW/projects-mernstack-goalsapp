import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// Grab JWT and save to local storage

// Get user from localStorage. LocalStorage can only have strings, so use .parse() to read from JSON string to object
// Item we want to retrieve is user
const user = JSON.parse(localStorage.getItem('user'))


// setup object
// Check if user is in localstorage and if there is use it. Else use null
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            
        }
    },
    extraReducers: () => {}
})