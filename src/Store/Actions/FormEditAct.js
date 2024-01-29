import axios from "axios"

const FormEditReq = (val) =>{
    return{
        type : 'FormEditReq',
        payload : val
    }
}

const FormEditSuccess = (val)=>{
    return{
        type :'FormEditSuccess',
        payload:val,
    }
}

const FormEditError = (val) =>{
    return {
        type :'FormEditError',
        payload:val
    }
}

export const FetchFormEditData = (formId,token)=>{
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}` , 
      };
    return(dispatch)=>{
        dispatch(FormEditReq())
        axios.get(`http://localhost:8080/VF/getConfigData?formId=${formId}`,{headers})
        .then((res)=>{
            dispatch(FormEditSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(FormEditError(err))
        })
    }
   
}