import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser : null,
    error : null,
    loading : false
};

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        signInStart : (state) => {
            state.loading = true
        },
        signInSuccess : (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null
        },
        signInFailure : (state,action) => {
            state.error = action.payload;
            state.loading = false
        },
    }
});

export const {signInFailure,signInStart,signInSuccess} = authSlice.actions;
export default authSlice.reducer