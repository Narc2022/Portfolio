import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading:true
}

export const userReducer = createReducer(initialState,{
    "GET_USER_REQUEST":(state)=>{
        state.loading=true
    },
    "GET_USER_SUCCESS":(state,action)=>{ 
        state.loading=false;
        state.user = action.payload;
    },
    "GET_USER_FAILURE":(state,action)=>{
        state.loading=false;
        state.error = action.payload;
    },
    "CLEAR_ERROR":(state)=>{
        state.error=null;
    },
    
});

export const loginReducer = createReducer({initialState},{
    "LOGIN_REQUEST":(state)=>{
        state.loading=true;
        state.isAuthenticated = false;
    },
    "LOGIN_SUCCESS":(state,action)=>{
        state.loading=false;
        state.isAuthenticated = true;
        state.message = action.payload;
    },
    "LOGIN_FAILURE":(state,action)=>{
        state.loading=false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    "LOAD_USER_REQUEST":(state)=>{
        state.loading=true;
        state.isAuthenticated = false;
    },
    "LOAD_USER_SUCCESS":(state,action)=>{
        state.loading=false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    "LOAD_USER_FAILURE":(state,action)=>{
        state.loading=false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    "LOGOUT_REQUEST":(state)=>{
        state.loading=true;
    },
    "LOGOUT_SUCCESS":(state,action)=>{
        state.loading=false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    "LOGOUT_FAILURE":(state,action)=>{
        state.loading=false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    "CLEAR_ERROR":(state)=>{
        state.error=null;
    },
    "CLEAR_MESSAGE":(state)=>{
        state.message=null;
    },
});


