import {configureStore} from "@reduxjs/toolkit";
import { loginReducer, userReducer } from "./reducers/user";


const store = configureStore({
    reducer:{
        user:userReducer,
        login:loginReducer,
    },
});

export default store;