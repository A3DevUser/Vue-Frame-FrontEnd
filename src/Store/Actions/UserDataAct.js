import axios from "axios"
import swal from "sweetalert"



export const UserDataReq = (getUserDataData)=>{
    return{
        type:'UserDataReq',
        payload : getUserDataData
    }
}

export const UserDataSuccess = (getUserDataData)=>{
    return{
        type:'UserDataSuccess',
        payload : getUserDataData
    }
}

export const UserDataError = (getUserDataData)=>{
    return{
        type:'UserDataError',
        payload : getUserDataData
    }
}


export const FormUserDataInfo = (UserData)=>{  
    return function(dispatch){
        dispatch(UserDataReq())
        axios.post(`http://localhost:8080/auth/addNewUser`,UserData)
        .then((res)=>{
            dispatch(UserDataSuccess(res.data))
            return swal({
                title :'Alert',
                text : 'Data Save Successfully',
                icon: "success",
            })
        })
        .catch((err)=>{
            dispatch(UserDataError(err))
            let ErrorLog = JSON.stringify(`Error Occurred: ${err}`)
            return  swal({
                title :'Alert',
                text : ErrorLog,
                icon: "warning",
                dangerMode: true
            })
        })
    }

}