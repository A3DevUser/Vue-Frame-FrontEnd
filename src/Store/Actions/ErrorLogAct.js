import axios from "axios"

export const ErrorLogReq = (getErrorLogData)=>{
    return{
        type:'ErrorLogReq',
        payload : getErrorLogData
    }
}

export const ErrorLogSuccess = (getErrorLogData)=>{
    return{
        type:'ErrorLogSuccess',
        payload : getErrorLogData
    }
}

export const ErrorLogError = (getErrorLogData)=>{
    return{
        type:'ErrorLogError',
        payload : getErrorLogData
    }
}

export const FormErrorLogData = (FormErrorLogInfo,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return function(dispatch){
        dispatch(ErrorLogReq())
        axios.post(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getErrorLog?errorLog=${FormErrorLogInfo}`, {headers})
        .then((res)=>{
            dispatch(ErrorLogSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ErrorLogError(err))
        })
    }
}