import axios from "axios"


const ExportReq = (val) =>{
    return{
        type:'ExportReq',
        payload:val
    }
}
const ExportSuccess = (val) =>{
    return{
        type:'ExportSuccess',
        payload:val
    }
}

const ExportError = (val) =>{
    return{
        type:'ExportError',
        payload:val
    }
}

export const PostExportData = (data,token) =>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(ExportReq())
        axios.post(`http://localhost:8080/VF/callWorkflowProcedure`,data,{headers})
        .then((res)=>{
            dispatch(ExportSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(ExportError(err))
        })
    }
}