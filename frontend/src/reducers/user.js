import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading:true
}

export const userReducer = createReducer({initialState},{
    "GET_USER_REQUEST":(state)=>{
        state.loading=true;
        state.isAuthenticated = false;
    },
    "GET_USER_SUCCESS":(state,action)=>{
        state.loading=false;
        state.isAuthenticated = true;
        state.message = action.payload;
    },
    "GET_USER_FAILURE":(state,action)=>{
        state.isAuthenticated = false;
        state.loading=false;
        state.error = action.payload;
    },
});