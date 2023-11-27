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
        axios.get(`http://localhost:8080/VF/getByGrid?formId=${formId}`,{headers})
        .then((res)=>{
            dispatch(ImportGridSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ImportGridError(err))
        })
    }
   
}