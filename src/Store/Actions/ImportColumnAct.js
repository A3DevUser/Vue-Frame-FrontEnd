// const { default: axios } = require("axios")
import axios from "axios"


const ImportColumnReq = (val) =>{
    return{
        type : 'ImportColumnReq',
        payload : val
    }
}

const ImportColumnSuccess = (val)=>{
    return{
        type :'ImportColumnSuccess',
        payload:val,
    }
}

const ImportColumnError = (val) =>{
    return {
        type :'ImportColumnError',
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
        axios.get(`http://localhost:8080/VF/getcol?formId=${formId}&emd=add`,{headers})
        .then((res)=>{
            dispatch(ImportColumnSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ImportColumnError(err))
        })
    }
   
}