import axios from "axios"

const ImportGridReq = (val) =>{
    return{
        type : 'ImportReq',
        payload : val
    }
}

const ImportGridSuccess = (val)=>{
    return{
        type :'ImportSuccess',
        payload:val,
    }
}

const ImportGridError = (val) =>{
    return {
        type :'ImportError',
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