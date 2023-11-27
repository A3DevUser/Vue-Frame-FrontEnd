// const { default: axios } = require("axios")
import axios from "axios"


const ImportColumnReq = (val) =>{
    return{
        type : 'ImportReq',
        payload : val
    }
}

const ImportColumnSuccess = (val)=>{
    return{
        type :'ImportSuccess',
        payload:val,
    }
}

const ImportColumnError = (val) =>{
    return {
        type :'ImportError',
        payload:val
    }
}

export const FetchImportColumnData = (formId,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(ImportColumnReq())
        axios.get(`http://localhost:8080/VF/getcol?formId=${formId}`,{headers})
        .then((res)=>{
            dispatch(ImportColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ImportColumnError(err))
        })
    }
   
}