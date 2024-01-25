import axios from "axios"

const ImportGridReq = (val) =>{
    return{
        type : 'ImportGridReq',
        payload : val
    }
}

const ImportGridSuccess = (val)=>{
    return{
        type :'ImportGridSuccess',
        payload:val,
    }
}

const ImportGridError = (val) =>{
    return {
        type :'ImportGridError',
        payload:val
    }
}

export const FetchImportGridData = (formId,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(ImportGridReq())
        axios.get(`http://192.168.100.236:8443/VueFrame-ver2-0.0.1-SNAPSHOT/getByGrid?formId=${formId}`,{headers})
        .then((res)=>{
            dispatch(ImportGridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ImportGridError(err))
        })
    }
   
}