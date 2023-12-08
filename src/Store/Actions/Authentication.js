import axios from "axios";
import { useNavigate } from "react-router";
import { LogInState } from "./GeneralStates";

const AuthReq = (val) => {
    return {
        type: "AuthReq",
        payload: val
    }
}
const AuthSucess = (val) => {
    return {
        type: "AuthSucess",
        payload: val
    }
}
const AuthError = (val) => {
    return {
        type: "AuthError",
        payload: val
    }
}

export const AuthToken = (user) => {
    return (dispatch) => {
        dispatch(AuthReq())
        // console.log('user',user)
        axios.post('http://localhost:8080/auth/generateToken',user)
            .then((response) => {
                sessionStorage.setItem('userData', response.data.replace('"',''))
                dispatch(AuthSucess(response.data))
                // console.log("userDataAuth ",response.data)
            dispatch(LogInState(true))
            }).catch((err) => {
                dispatch(AuthError(err))
                // console.log("error", err)
            })
    }
}

