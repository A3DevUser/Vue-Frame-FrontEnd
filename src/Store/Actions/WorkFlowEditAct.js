import axios from "axios"

const WorkFlowEditReq = (val) =>{
    return{
        type : 'WorkFlowEditReq',
        payload : val
    }
}

const WorkFlowEditSuccess = (val)=>{
    return{
        type :'WorkFlowEditSuccess',
        payload:val,
    }
}

const WorkFlowEditError = (val) =>{
    return {
        type :'WorkFlowEditError',
        payload:val
    }
}

export const FetchWorkFlowEditData = (id,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(WorkFlowEditReq())
        axios.get(`http://localhost:8080/VF/getWfEditData?wfId=${id}`,{headers})
        .then((res)=>{
            dispatch(WorkFlowEditSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(WorkFlowEditError(err))
        })
    }
   
}