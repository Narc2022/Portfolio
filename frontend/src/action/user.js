import axios from "axios";

export const getUser = () => async(dispatch)=>{
    try {
        dispatch({
            type:"GET_USER_REQUEST",
        });
        const{data} = await axios.get("/api/v1/user");
        
        dispatch({
            type:"GET_USER_SUCCESS",
            payload:data.user,
        });
   
        
    } catch (error) {
        dispatch({
            type:"GET_USER_FAILURE",
            payload:error.response.data.message,
        });
    }
};