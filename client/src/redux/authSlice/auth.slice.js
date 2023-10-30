import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth : false,
    user : null,
    error : null,
    loading : false
};

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setAuthStart : (state) => {
            state.loading = true;
        },
        setAuthSuccess : (state,action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.loading = false,
            state.error = null
        },
        setAuthFailure : (state,action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const {setAuthFailure,setAuthSuccess,setAuthStart} = authSlice.actions;
export default authSlice.reducer;